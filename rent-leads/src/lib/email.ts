import { Resend } from "resend";

export type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  budget: string;
  bedrooms: string;
  move_in_date: string;
  preferred_areas: string;
};

/**
 * Sends a single email to LEAD_NOTIFICATION_EMAIL with the lead details.
 * If RESEND_API_KEY or LEAD_NOTIFICATION_EMAIL is missing, returns without throwing.
 * Uses Resend's onboarding domain for testing; production should use a verified domain.
 */
export async function sendLeadNotificationEmail(payload: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_EMAIL;

  if (!apiKey || !to) {
    return;
  }

  const resend = new Resend(apiKey);
  const subject = `New lead: ${payload.name}`;
  const html = `
    <h2>New lead</h2>
    <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(payload.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
    <p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>
    <p><strong>Bedrooms:</strong> ${escapeHtml(payload.bedrooms)}</p>
    <p><strong>Move-in date:</strong> ${escapeHtml(payload.move_in_date)}</p>
    <p><strong>Preferred areas:</strong> ${escapeHtml(payload.preferred_areas)}</p>
  `.trim();

  await resend.emails.send({
    from: process.env.RESEND_FROM ?? "onboarding@resend.dev",
    to,
    subject,
    html,
  });
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
