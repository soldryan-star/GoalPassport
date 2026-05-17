import { ImageResponse } from "next/og";
import { SITE } from "@/data/cities";

export const alt = `${SITE.name} | FIFA 2026™ Fan Travel`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #042f2e 0%, #0f172a 45%, #082f49 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <p
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#34d399",
            margin: 0,
          }}
        >
          FIFA World Cup 2026™
        </p>
        <h1
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 0.95,
            marginTop: 24,
            marginBottom: 0,
            maxWidth: 900,
          }}
        >
          {SITE.name}
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            marginTop: 28,
            maxWidth: 820,
            lineHeight: 1.35,
          }}
        >
          {SITE.tagline}
        </p>
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 48,
          }}
        >
          {["16 host cities", "Hotels", "Match guides"].map((label) => (
            <span
              key={label}
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "#ecfdf5",
                background: "rgba(16, 185, 129, 0.2)",
                border: "1px solid rgba(52, 211, 153, 0.4)",
                borderRadius: 12,
                padding: "12px 24px",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}
