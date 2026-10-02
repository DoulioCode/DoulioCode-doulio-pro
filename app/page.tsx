import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { PageViewTracker } from "@/components/PageViewTracker";
import { GetProLink } from "@/components/GetProLink";
import {
  ClaimsLaptop,
  ClientsLaptop,
  HeroDevices,
  RecordDocsPhone,
  ReportsLaptop,
} from "@/components/ProductShowcase";
import {
  ClosingCta,
  GRADIENT_TEXT,
  Faq,
  HowItWorks,
  MoreFeatures,
  Pricing,
  PRIMARY_BUTTON,
  Showcase,
} from "@/components/ProSections";

export default function DoulioProPage() {
  return (
    <>
      <PageViewTracker />
      <SiteNav />
      <main className="overflow-hidden bg-white">
        {/* Hero */}
        <section className="bg-[radial-gradient(900px_420px_at_10%_0%,theme(colors.pro.pink-soft),transparent_70%),radial-gradient(900px_460px_at_92%_8%,theme(colors.pro.sky-soft),transparent_70%),radial-gradient(800px_400px_at_50%_60%,theme(colors.pro.violet-soft),transparent_75%)] px-4 pb-24 pt-14 text-center sm:px-6 sm:pb-32 sm:pt-24">
          <p className="font-display text-lg font-semibold text-pro-pink sm:text-xl">
            Doulio PRO
          </p>
          <h1 className="mx-auto mt-4 max-w-5xl text-balance font-display text-5xl font-semibold leading-[1.02] tracking-tight text-slate-900 sm:text-7xl lg:text-8xl">
            Your practice.
            <br />
            <span className={GRADIENT_TEXT}>All in one place.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-xl text-slate-500 sm:text-2xl">
            Clients, DOCS, insurance claims and reports, in a workspace made for
            independent doulas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
            <GetProLink location="hero" className={PRIMARY_BUTTON}>
              Get Doulio PRO
            </GetProLink>
            <a
              href="#pricing"
              className="text-lg font-medium text-pro-pink hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink"
            >
              From $32.50/mo billed yearly ›
            </a>
          </div>
          <div className="mt-16 sm:mt-20">
            <HeroDevices />
          </div>
        </section>

        <Showcase
          id="clients"
          eyebrow="Clients"
          title="Every client. Every detail."
          body="Due dates, services, notes and DOCS progress, together for each family, so you always know who needs you next."
          tone="gray"
        >
          <ClientsLaptop />
        </Showcase>

        <Showcase
          id="docs"
          eyebrow="DOCS"
          title="Record DOCS in a couple of taps."
          body="Build your own intake and visit forms. Then record one for a client straight from your Clients list, on your laptop or your phone."
          tone="white"
          layout="split"
        >
          <RecordDocsPhone />
        </Showcase>

        <Showcase
          id="insurance"
          eyebrow="Insurance"
          title="Check eligibility. Submit claims. Get reimbursed."
          body="See a client's coverage in seconds, send claims to insurance from Doulio, and track every one until it's paid."
          tone="gray"
        >
          <ClaimsLaptop />
        </Showcase>

        <Showcase
          id="reports"
          eyebrow="Reports"
          title="See the difference you make."
          body="Clients served, births and outcomes over any period, with a PDF summary ready to share."
          tone="white"
        >
          <ReportsLaptop />
        </Showcase>

        <MoreFeatures />
        <HowItWorks />
        <Pricing />
        <Faq />
        <ClosingCta />
      </main>
      <SiteFooter />
    </>
  );
}
