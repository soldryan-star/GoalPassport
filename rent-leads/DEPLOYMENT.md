# Deploying to Vercel

## Prerequisites

- A [Vercel](https://vercel.com) account
- A **PostgreSQL** database (Vercel Postgres, [Neon](https://neon.tech), [Supabase](https://supabase.com), or similar). SQLite does not work on Vercel serverless.

## 1. Database

1. Create a Postgres database and get the connection string (e.g. `postgresql://user:pass@host:5432/db?sslmode=require`).
2. For connection pooling (recommended on serverless), use the pooled URL if your provider offers one (e.g. Neon’s pooler, Vercel Postgres).

## 2. Vercel project

1. Import your repo in Vercel (GitHub/GitLab/Bitbucket).
2. **Build command:** set to `npm run vercel-build`.
   - This uses the Postgres schema (`prisma/schema.postgres.prisma`), runs `prisma generate`, runs `prisma migrate deploy`, then `next build`. Your local `schema.prisma` (SQLite) is not changed.
3. **Output directory:** default (Next.js).
4. **Install command:** `npm install` (default). `postinstall` runs `prisma generate` for the default SQLite schema (local dev). The `vercel-build` script uses the Postgres schema explicitly.

## 3. Environment variables

In **Project Settings → Environment Variables**, add:

| Variable | Required | Notes |
|----------|----------|--------|
| `DATABASE_URL` | Yes (production) | Postgres connection string. Set for Production (and Preview if you use a separate DB for previews). |
| `NEXT_PUBLIC_SITE_URL` | Recommended | Full site URL (e.g. `https://your-app.vercel.app`) for canonicals and Open Graph. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Optional | GA4 measurement ID for analytics. |
| `NEXT_PUBLIC_GA_ADS_ID` | Optional | Google Ads ID for conversion tracking. |
| `NEXT_PUBLIC_GA_ADS_CONVERSION_LABEL` | Optional | Conversion label from Google Ads. |
| `NEXT_PUBLIC_PHONE` | Optional | Phone number for Call/WhatsApp buttons. |
| `RESEND_API_KEY` | Optional | Resend API key (from [Resend](https://resend.com)). If set with `LEAD_NOTIFICATION_EMAIL`, new leads trigger an email to that address. If unset, leads are still saved; no email is sent. |
| `LEAD_NOTIFICATION_EMAIL` | Optional | Email address that receives new lead summaries (e.g. your inbox). Requires `RESEND_API_KEY`. |
| `RESEND_FROM` | Optional | "From" address for lead emails. Production should use a verified domain in Resend; for testing you can omit this to use Resend’s onboarding domain. |

## 3b. Production tracking (GA4 + Google Ads)

To track form submissions, phone clicks, WhatsApp clicks, and landing page visits—and to attribute Google Ads conversions—set these in Vercel (Production and Preview as needed):

| Variable | Where to get it |
|----------|-----------------|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4: Admin → Data Streams → your web stream → Measurement ID (e.g. `G-XXXXXXXXXX`). |
| `NEXT_PUBLIC_GA_ADS_ID` | Google Ads: Tools → Conversions → set up conversion → tag ID (e.g. `AW-XXXXXXXXX`). |
| `NEXT_PUBLIC_GA_ADS_CONVERSION_LABEL` | Same conversion: use the conversion label from the gtag snippet, or the full `send_to` value (e.g. `AW-XXX/YYY`). |

Without these, the site works normally but no analytics or conversion events are sent. After setting them, redeploy so the env is available at build/runtime.

## 4. First deploy

1. Set `DATABASE_URL` to your Postgres URL (Production and optionally Preview).
2. Deploy. The **vercel-build** script:
   - Runs `prisma generate --schema=prisma/schema.postgres.prisma` (Postgres client).
   - Runs `prisma migrate deploy --schema=prisma/schema.postgres.prisma` and applies the migration in `prisma/migrations/`.
3. If you did not run migrations before, ensure your Postgres DB is empty or that the initial migration is compatible. For a new DB, the first deploy will create the `leads` table.

## 5. Forms and API in production

- **Lead form:** Submits to `POST /api/leads`. The API uses `getPrisma()` and works with the Postgres `DATABASE_URL` set on Vercel.
- **API route:** `/api/leads` is serverless; it connects to Postgres using `DATABASE_URL` and does not use SQLite on Vercel.
- **Lead notification email:** If `RESEND_API_KEY` and `LEAD_NOTIFICATION_EMAIL` are set, each new lead triggers an email to that address. For production, use a **verified domain** in the [Resend dashboard](https://resend.com/domains) and set `RESEND_FROM` to an address on that domain (e.g. `leads@yourdomain.com`). For testing you can use Resend’s free onboarding domain (`onboarding@resend.dev`).

## 6. Preview deployments

To avoid running migrations from preview branches against production data, set a **separate** `DATABASE_URL` for the **Preview** environment in Vercel (e.g. a second Postgres database).

## 7. Images

If you add remote images, use the Next.js `Image` component. `next.config.ts` already allows `https` remote images. For a specific hostname, add a `remotePatterns` entry in `next.config.ts`.

## Troubleshooting

- **Build fails with Prisma:** Ensure `prisma` is in `dependencies` (not only `devDependencies`) so `prisma generate` runs in the Vercel build.
- **Migration errors:** Run `prisma migrate deploy` locally against your production Postgres URL (with care) to confirm migrations apply, or run the migration SQL manually in your DB client.
- **API 500 on lead submit:** Check Vercel function logs; confirm `DATABASE_URL` is set and the Postgres connection string is correct and reachable from Vercel.
