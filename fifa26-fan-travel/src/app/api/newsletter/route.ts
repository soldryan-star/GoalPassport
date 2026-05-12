import { NextResponse } from "next/server";
import { createSupabaseAdmin } from "@/lib/supabase/server";

export async function POST(req: Request) {
  let email = "";
  try {
    const body = (await req.json()) as { email?: string };
    email = (body.email ?? "").trim().toLowerCase();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const supabase = createSupabaseAdmin();
  if (supabase) {
    const { error } = await supabase.from("newsletter_signups").insert({ email, source: "site" });
    if (error) {
      console.warn("[newsletter]", error.message);
      // still return 200 to avoid leaking schema state to bots
    }
  }

  return NextResponse.json({ ok: true });
}
