import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Toronto Rent Leads",
  description: "Get in touch with Toronto Rent Leads.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Contact us
      </h1>
      <p className="mt-4 text-lg text-zinc-600">
        Have a question? Reach out and we’ll get back to you soon.
      </p>
      <div className="mt-10 max-w-xl">
        <form action="#" method="post" className="space-y-4">
          <div>
            <label htmlFor="contact-name" className="block text-sm font-medium text-zinc-900">
              Name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>
          <div>
            <label htmlFor="contact-email" className="block text-sm font-medium text-zinc-900">
              Email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-zinc-900">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 px-4 py-3 text-zinc-900 focus:border-zinc-900 focus:outline-none focus:ring-1 focus:ring-zinc-900"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-lg bg-zinc-900 px-4 py-3 font-semibold text-white transition hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 sm:w-auto sm:px-6"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
}
