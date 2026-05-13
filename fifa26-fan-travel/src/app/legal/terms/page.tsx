import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of use for GoalPassport — FIFA 2026™ fan travel and editorial content.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
      <h1 className="font-display text-4xl text-zinc-900 dark:text-white">Terms of Service</h1>
      <p className="mt-2 text-xs text-zinc-500">Last updated: May 2026</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of GoalPassport (the &quot;Site&quot;),
          an independent fan publication. By using the Site, you agree to these Terms. If you do not agree, do not use the
          Site.
        </p>

        <h2 className="pt-6 font-display text-2xl text-zinc-900 dark:text-white">1. The service</h2>
        <p>
          GoalPassport provides editorial travel guides, matchday information, and related content about FIFA World Cup
          2026™ and host destinations. The Site is for general information and entertainment. We are not affiliated with
          FIFA. We do not sell match tickets, hotel rooms, or travel packages; bookings occur on third-party sites when you
          leave the Site.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">2. Affiliate and partner links</h2>
        <p>
          Some pages include links to hotels, booking platforms, or other partners. We may earn a commission when you use
          those links, as described in our{" "}
          <Link className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/legal/affiliate-disclosure">
            affiliate disclosure
          </Link>
          . Partner sites have their own terms, pricing, and cancellation policies.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">3. Acceptable use</h2>
        <p>You agree not to:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Use the Site in any way that violates applicable law or infringes others&apos; rights.</li>
          <li>Attempt to gain unauthorized access to our systems, scrape the Site in a way that harms performance, or deploy malware.</li>
          <li>Misrepresent your identity or affiliation when contacting us or submitting information.</li>
        </ul>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">4. Intellectual property</h2>
        <p>
          Text, graphics, logos, and layout on the Site are owned by GoalPassport or our licensors unless otherwise noted.
          FIFA World Cup 2026™ and related marks are trademarks of FIFA; our use is nominative and we are not endorsed by
          FIFA. You may not copy, modify, or redistribute Site content for commercial use without our prior written consent,
          except as allowed by law (e.g. fair use).
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">5. User content</h2>
        <p>
          If we enable comments, uploads, or other user submissions in the future, you grant us a non-exclusive license to
          host and display that content in connection with the Site. You represent that you have the rights to submit it and
          that it does not violate these Terms.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">6. Disclaimers</h2>
        <p>
          The Site and its content are provided &quot;as is&quot; and &quot;as available.&quot; We do not warrant that
          information is complete, current, or error-free. Travel involves risk; venue schedules, prices, and regulations
          change. You are responsible for verifying critical details (visas, tickets, safety) before you travel. Nothing on
          the Site is legal, financial, medical, or betting advice.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">7. Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, GoalPassport and its operators will not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits, data, or goodwill, arising from your
          use of the Site or reliance on its content. Our total liability for any claim relating to the Site will not exceed
          the greater of (a) the amount you paid us to use the Site in the twelve months before the claim or (b) one hundred
          U.S. dollars (USD $100), if you paid nothing.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">8. Indemnity</h2>
        <p>
          You agree to defend and indemnify GoalPassport and its operators against any claims, damages, or expenses (including
          reasonable attorneys&apos; fees) arising from your misuse of the Site or violation of these Terms.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">9. Third-party services</h2>
        <p>
          The Site may link to or embed third-party tools (analytics, maps, booking engines). Their use is subject to those
          parties&apos; terms and privacy policies. See our{" "}
          <Link className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/legal/privacy">
            Privacy Policy
          </Link>{" "}
          for how we handle personal data on the Site.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">10. Changes</h2>
        <p>
          We may update these Terms from time to time. We will post the revised Terms on this page and update the
          &quot;Last updated&quot; date. Continued use of the Site after changes constitutes acceptance of the updated Terms.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">11. Governing law</h2>
        <p>
          These Terms are governed by the laws of the jurisdiction in which GoalPassport operates, without regard to
          conflict-of-law rules. Courts in that jurisdiction will have exclusive venue for disputes, unless applicable
          consumer law gives you a non-waivable right to sue elsewhere.
        </p>

        <h2 className="pt-4 font-display text-2xl text-zinc-900 dark:text-white">12. Contact</h2>
        <p>
          Questions about these Terms:{" "}
          <a className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="mailto:hello@goalpassport.com">
            hello@goalpassport.com
          </a>{" "}
          or our{" "}
          <Link className="font-medium text-emerald-600 underline hover:no-underline dark:text-emerald-400" href="/contact">
            contact page
          </Link>
          .
        </p>

        <p className="pt-6 text-xs text-zinc-500">
          This page is a practical template for publishers and affiliate programs. It is not a substitute for legal advice;
          have qualified counsel review these Terms for your entity, audience, and markets.
        </p>
      </div>
    </div>
  );
}
