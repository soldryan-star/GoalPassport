import { NextRequest, NextResponse } from "next/server";
import { getPrisma } from "@/lib/db";
import { sendLeadNotificationEmail } from "@/lib/email";

const PHONE_REGEX = /^[\d\s\-\(\)\+]{10,20}$/;

function validatePhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && PHONE_REGEX.test(phone);
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type ValidationErrors = Record<string, string>;

function validateBody(body: unknown): { data: Record<string, string> | null; errors: ValidationErrors } {
  const errors: ValidationErrors = {};
  if (body === null || typeof body !== "object" || Array.isArray(body)) {
    return { data: null, errors: { form: "Invalid request body." } };
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const phone = typeof raw.phone === "string" ? raw.phone.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const budget = typeof raw.budget === "string" ? raw.budget.trim() : "";
  const bedrooms = typeof raw.bedrooms === "string" ? raw.bedrooms.trim() : "";
  const moveIn = typeof raw.moveIn === "string" ? raw.moveIn.trim() : "";
  const areasRaw = raw.areas;
  const areas = Array.isArray(areasRaw)
    ? areasRaw.filter((a): a is string => typeof a === "string")
    : typeof areasRaw === "string"
      ? [areasRaw]
      : [];

  if (!name || name.length < 2) errors.name = "Full name is required (at least 2 characters).";
  if (!phone) errors.phone = "Phone is required.";
  else if (!validatePhone(phone)) errors.phone = "Enter a valid phone number (at least 10 digits).";
  if (!email) errors.email = "Email is required.";
  else if (!validateEmail(email)) errors.email = "Enter a valid email address.";
  if (!budget) errors.budget = "Budget range is required.";
  if (!bedrooms) errors.bedrooms = "Bedrooms is required.";
  if (!moveIn) errors.moveIn = "Move-in date is required.";
  else {
    const date = new Date(moveIn);
    if (Number.isNaN(date.getTime()) || date < new Date(new Date().toISOString().slice(0, 10))) {
      errors.moveIn = "Move-in date must be today or a future date.";
    }
  }
  if (areas.length === 0) errors.areas = "Select at least one preferred area.";

  if (Object.keys(errors).length > 0) {
    return { data: null, errors };
  }

  return {
    data: {
      name,
      phone,
      email,
      budget,
      bedrooms,
      move_in_date: moveIn,
      preferred_areas: areas.join(", "),
    },
    errors: {},
  };
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let body: unknown;
    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      const formData = await request.formData();
      body = {
        name: formData.get("name") ?? "",
        phone: formData.get("phone") ?? "",
        email: formData.get("email") ?? "",
        budget: formData.get("budget") ?? "",
        bedrooms: formData.get("bedrooms") ?? "",
        moveIn: formData.get("moveIn") ?? "",
        areas: formData.getAll("areas"),
      };
    }

    const { data, errors } = validateBody(body);

    if (data === null) {
      return NextResponse.json(
        { success: false, errors },
        { status: 400 }
      );
    }

    const prisma = await getPrisma();
    await prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        budget: data.budget,
        bedrooms: data.bedrooms,
        move_in_date: data.move_in_date,
        preferred_areas: data.preferred_areas,
      },
    });

    try {
      await sendLeadNotificationEmail(data);
    } catch (emailErr) {
      console.error("Lead notification email failed:", emailErr);
    }

    return NextResponse.json(
      { success: true, message: "Lead saved successfully." },
      { status: 201 }
    );
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json(
      { success: false, errors: { form: "Failed to save lead. Please try again." } },
      { status: 500 }
    );
  }
}
