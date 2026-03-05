import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Toronto Rent Leads",
  description: "Privacy policy for Toronto Rent Leads.",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-zinc-600">Last updated: {new Date().toLocaleDateString("en-CA")}</p>
      <div className="prose prose-zinc mt-10 max-w-none">
        <h2 className="text-xl font-semibold text-zinc-900">Information we collect</h2>
        <p className="mt-2 text-zinc-600">
          When you sign up for rental alerts or contact us, we collect your name, email address, and any other information you provide (such as phone number or preferred areas). We use this information to send you rental listings and to respond to your inquiries.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-zinc-900">How we use your information</h2>
        <p className="mt-2 text-zinc-600">
          We use your information to deliver rental alerts, improve our service, and communicate with you. We do not sell your personal information to third parties.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-zinc-900">Data security</h2>
        <p className="mt-2 text-zinc-600">
          We take reasonable steps to protect your personal information from unauthorized access, use, or disclosure.
        </p>
        <h2 className="mt-8 text-xl font-semibold text-zinc-900">Contact</h2>
        <p className="mt-2 text-zinc-600">
          If you have questions about this privacy policy, please contact us through our Contact page.
        </p>
      </div>
    </div>
  );
}
