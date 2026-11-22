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

- Page: `app/page.tsx` → hero in `src/components/Hero.tsx`, sections in
  `src/components/ProSections.tsx` and `GrowthSections.tsx`. Order: hero, trust strip, video,
  product tiles (insurance, DOCS, clients, reports, client app, business support), testimonials,
  growth steps, more features, pricing, plan finder, "Not a doula yet?", FAQ, closing.
- Look: warm grounds (`warm`, `warm-sand`), deep-teal text (`ink`) and pastel tiles, in
  `tailwind.config.ts`; shared type and button styles in `src/components/styles.ts`. The nav
  mirrors the doulio.org menu (`NAV_LINKS` in `src/config/site.ts`, plus Log in and
  Book a Demo) and adds "Get Doulio PRO".
- Pricing: one card with a monthly/yearly switch (`pricing_period_selected`), and the
  "PRO pays for itself" calculator beside it. The calculator (`src/config/payoff.ts`) only
  divides the amount the visitor enters by the PRO prices; `PAYOFF_DEFAULT_RATE` is where the
  slider starts, not a claim about what doulas are paid. It reports `payoff_calculator_used`
  (rate) once the visitor settles on a value.
- Copy (features, steps, FAQ): `src/config/content.ts` — list only features that exist today
- Prices and links: `src/config/pro.ts` (`getProUrl`, `PLANS`); prices must match Stripe
- `NEXT_PUBLIC_DOULIO_APP_URL` overrides the app address (e.g. `https://stage.doulio.org` for a
  preview); default `https://app.doulio.org`
- Analytics: PostHog via `NEXT_PUBLIC_POSTHOG_KEY` (see `.env.example`)
- "Not a doula yet?" (hero link + section after Pricing, `src/components/BecomeADoula.tsx`) sends
  aspiring doulas to doulio.org: `becomeADoulaUrl` / `doulaTrainingContactUrl` in
  `src/config/site.ts`. The contact link's `interest=certification` preselects "Becoming a
  certified doula" on the doulio.org form. Clicks are `become_doula_clicked` (location, destination).
- "Is PRO right for you?" finder (`src/components/FitFinder.tsx`, section `#find-your-fit` before
  Pricing): one question, plus team size for teams, that recommends PRO, PRO + Seats, Doulio OS,
  Enterprise or doula training. Plans, prices and the `recommend()` rules are in
  `src/config/products.ts` (from the Doulio Platform Overview; keep them in step with it).
  PRO results link to the app sign-up; OS and Enterprise to the demo scheduler. Answers are
  `fit_finder_answered` (style, team_size, result).
