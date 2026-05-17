"use client";

import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

const DURATION  = 7000; // ms per flight
const PAUSE     = 2000; // ms between loops
const MAX_TRAIL = 120;  // history points kept

// Normalised bezier control points (x: 0–1 of container width, y: 0–1 of height)
// Dramatic S-curve so the path feels like a real multi-city flight arc
const P0 = { x: 0.00, y: 0.82 };
const P1 = { x: 0.20, y: 0.04 };
const P2 = { x: 0.80, y: 0.96 };
const P3 = { x: 1.02, y: 0.18 };

function bez(t: number, a: number, b: number, c: number, d: number) {
  const u = 1 - t;
  return u*u*u*a + 3*u*u*t*b + 3*u*t*t*c + t*t*t*d;
}

function bezDeriv(t: number, a: number, b: number, c: number, d: number) {
  const u = 1 - t;
  return 3*u*u*(b - a) + 6*u*t*(c - b) + 3*t*t*(d - c);
}

// Easing: smooth cubic in-out
function ease(raw: number) {
  return raw < 0.5
    ? 4 * raw * raw * raw
    : 1 - Math.pow(-2 * raw + 2, 3) / 2;
}

type Pt = { x: number; y: number };

export function PlaneRouteAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const trail        = useRef<Pt[]>([]);

  const planeX     = useMotionValue(0);
  const planeY     = useMotionValue(0);
  const planeAngle = useMotionValue(0);

  const startTime  = useRef<number | null>(null);
  const phase      = useRef<"flying" | "pausing">("flying");
  const pauseStart = useRef<number>(0);

  // Draw the trail from stored pixel positions — older = more transparent
  function drawTrail(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const pts = trail.current;
    if (pts.length < 2) return;

    for (let i = 1; i < pts.length; i++) {
      const alpha = i / pts.length; // 0 = oldest (invisible), 1 = newest (opaque)

      ctx.beginPath();
      ctx.moveTo(pts[i - 1].x, pts[i - 1].y);
      ctx.lineTo(pts[i].x, pts[i].y);
      ctx.strokeStyle = `rgba(255,255,255,${(alpha * 0.75).toFixed(3)})`;
      ctx.lineWidth   = 0.8 + alpha * 1.2; // thins toward the tail
      ctx.lineCap     = "round";
      ctx.shadowBlur  = 5;
      ctx.shadowColor = `rgba(255,255,255,${(alpha * 0.5).toFixed(3)})`;
      ctx.stroke();
    }

    // Extra bright glow at the very tip (nearest the plane)
    const n = pts.length;
    if (n >= 2) {
      ctx.beginPath();
      ctx.moveTo(pts[n - 2].x, pts[n - 2].y);
      ctx.lineTo(pts[n - 1].x, pts[n - 1].y);
      ctx.strokeStyle = "rgba(255,255,255,0.95)";
      ctx.lineWidth   = 2;
      ctx.shadowBlur  = 14;
      ctx.shadowColor = "rgba(255,255,255,0.85)";
      ctx.stroke();
    }

    ctx.shadowBlur = 0;
  }

  useAnimationFrame((time) => {
    const container = containerRef.current;
    const canvas    = canvasRef.current;
    if (!container || !canvas) return;

    const W = container.offsetWidth;
    const H = container.offsetHeight;

    // Keep canvas pixel-perfect with container
    if (canvas.width !== W || canvas.height !== H) {
      canvas.width  = W;
      canvas.height = H;
    }

    // ── Pausing phase ──────────────────────────────────────────
    if (phase.current === "pausing") {
      drawTrail(canvas); // keep drawing frozen trail
      if (time - pauseStart.current >= PAUSE) {
        phase.current   = "flying";
        startTime.current = time;
        trail.current   = [];
      }
      return;
    }

    // ── Flying phase ───────────────────────────────────────────
    if (startTime.current === null) startTime.current = time;

    const raw = Math.min((time - startTime.current) / DURATION, 1);
    const t   = ease(raw);

    // Plane position in pixels
    const px = bez(t, P0.x, P1.x, P2.x, P3.x) * W;
    const py = bez(t, P0.y, P1.y, P2.y, P3.y) * H;

    // Tangent in pixel space (accounts for non-square aspect ratio)
    const dxN  = bezDeriv(t, P0.x, P1.x, P2.x, P3.x);
    const dyN  = bezDeriv(t, P0.y, P1.y, P2.y, P3.y);
    const angle = (Math.atan2(dyN * H, dxN * W) * 180) / Math.PI + 90;

    planeX.set(px);
    planeY.set(py);
    planeAngle.set(angle);

    // Record position for trail
    trail.current.push({ x: px, y: py });
    if (trail.current.length > MAX_TRAIL) trail.current.shift();

    drawTrail(canvas);

    if (raw >= 1) {
      phase.current    = "pausing";
      pauseStart.current = time;
    }
  });

  const HALF = 18; // half of 36px plane icon
  const translateX = useTransform(planeX, (v) => v - HALF);
  const translateY = useTransform(planeY, (v) => v - HALF);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Canvas draws the fading trail */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Plane icon — always at front tip of the trail */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          x: translateX,
          y: translateY,
          rotate: planeAngle,
          width: 36,
          height: 36,
          opacity: 0.9,
        }}
      >
        <svg viewBox="0 0 48 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
          {/* Fuselage */}
          <path
            d="M24 3 C26.5 3 28 5 28 7 L28 38 C28 41 26.5 43 24 44 C21.5 43 20 41 20 38 L20 7 C20 5 21.5 3 24 3 Z"
            fill="white"
          />
          {/* Nose */}
          <ellipse cx="24" cy="5" rx="4" ry="3" fill="white" />
          {/* Left main wing — swept */}
          <path d="M22 14 L2 28 L4 32 L22 22 Z" fill="white" opacity="0.92" />
          {/* Right main wing */}
          <path d="M26 14 L46 28 L44 32 L26 22 Z" fill="white" opacity="0.92" />
          {/* Winglets */}
          <path d="M2 28 L1 26 L4 32 Z"   fill="white" opacity="0.65" />
          <path d="M46 28 L47 26 L44 32 Z" fill="white" opacity="0.65" />
          {/* Horizontal stabilisers */}
          <path d="M21 36 L10 42 L11 44 L21 39 Z" fill="white" opacity="0.85" />
          <path d="M27 36 L38 42 L37 44 L27 39 Z" fill="white" opacity="0.85" />
          {/* Engines */}
          <rect x="9"  y="22" width="7" height="3" rx="1.5" fill="white" opacity="0.55" />
          <rect x="32" y="22" width="7" height="3" rx="1.5" fill="white" opacity="0.55" />
        </svg>
      </motion.div>
    </div>
  );
}

export { PlaneRouteAnimation as MessiAnimation };
