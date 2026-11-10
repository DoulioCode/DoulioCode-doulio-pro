# Doulio PRO

Public page for Doulio PRO at **pro.doulio.org**. Same stack and design as the trainer
calculator (Next.js + Tailwind, doulio.org fonts, colours, nav and footer). No backend and no
personal data: every "Get Doulio PRO" button links to the Doulio app, which creates the account,
takes payment through Stripe Checkout and opens My Practice.

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run typecheck
npm run test
npm run build
```

- Page: `app/page.tsx` → sections in `src/components/ProSections.tsx`
- Copy (features, steps, FAQ): `src/config/content.ts` — list only features that exist today
- Prices and links: `src/config/pro.ts` (`getProUrl`, `PLANS`); prices must match Stripe
- `NEXT_PUBLIC_DOULIO_APP_URL` overrides the app address (e.g. `https://stage.doulio.org` for a
  preview); default `https://app.doulio.org`
- Analytics: PostHog via `NEXT_PUBLIC_POSTHOG_KEY` (see `.env.example`)
- "Not a doula yet?" (hero link + section after Pricing, `src/components/BecomeADoula.tsx`) sends
  aspiring doulas to doulio.org: `becomeADoulaUrl` / `doulaTrainingContactUrl` in
  `src/config/site.ts`. The contact link's `interest=certification` preselects "Becoming a
  certified doula" on the doulio.org form. Clicks are `become_doula_clicked` (location, destination).
