"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  CLIENT_APP_FEATURES,
  FAQS,
  MORE_FEATURES,
  PLAN_INCLUDES,
  STEPS,
  TESTIMONIALS,
} from "@/config/content";
import {
  PAYOFF_DEFAULT_RATE,
  PAYOFF_MAX_RATE,
  PAYOFF_MIN_RATE,
  PAYOFF_STEP,
  payoff,
} from "@/config/payoff";
import { PLANS, SIGN_IN_URL, YEARLY_PER_MONTH, type ProPlan } from "@/config/pro";
import { SITE_URL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { GetProLink } from "@/components/GetProLink";
import { BookSupportButton, BusinessSupport, StoreBadges } from "@/components/GrowthSections";
import {
  ClaimsShot,
  ClientAppPhone,
  ClientsShot,
  RecordDocsPhone,
  ReportsShot,
} from "@/components/ProductShowcase";
import { EYEBROW, HEADING, LEAD, PRIMARY_BUTTON } from "@/components/styles";

function Check({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-[3px] h-5 w-5 shrink-0 ${className}`}
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

const TILE_LABEL = "text-sm font-semibold uppercase tracking-wide";
const TILE_TITLE = "mt-2 font-display font-semibold leading-[1.12] tracking-tight text-ink";

function TileText({
  label,
  labelColor,
  title,
  body,
  large = false,
}: {
  label: string;
  labelColor: string;
  title: string;
  body: string;
  large?: boolean;
}) {
  return (
    <div className="max-w-xl">
      <p className={`${TILE_LABEL} ${labelColor}`}>{label}</p>
      <h3 className={`${TILE_TITLE} ${large ? "text-3xl sm:text-[2rem]" : "text-[1.75rem]"}`}>
        {title}
      </h3>
      <p className="mt-3 text-ink-soft">{body}</p>
    </div>
  );
}

/**
 * The product in tiles: each one is a real My Practice screen with one line about it, so a
 * visitor sees the whole app without clicking. Business support closes the section.
 */
export function FeatureTiles() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="scroll-mt-24 bg-warm-sand px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <p className={EYEBROW}>The product</p>
        <h2 id="features-heading" className={`mt-2.5 max-w-3xl ${HEADING}`}>
          Everything your practice runs on.
        </h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-6">
          <article
            id="insurance"
            className="flex scroll-mt-24 flex-col justify-between gap-7 overflow-hidden rounded-[2rem] bg-tile-mint px-6 pt-8 sm:px-9 sm:pt-9 lg:col-span-4"
          >
            <div>
              <TileText
                large
                label="Insurance"
                labelColor="text-[#0a5558]"
                title="Check eligibility. Submit claims. Get reimbursed."
                body="See a client's coverage in seconds, send claims to insurance from Doulio, and track every one until it's paid."
              />
              <p className="mt-2 text-sm text-ink-body">
                Available where your state covers doula care.
              </p>
            </div>
            <ClaimsShot />
          </article>

          <article
            id="docs"
            className="flex scroll-mt-24 flex-col justify-between gap-7 overflow-hidden rounded-[2rem] bg-pro-pink-soft px-6 py-8 sm:px-9 sm:py-9 lg:col-span-2"
          >
            <TileText
              label="DOCS"
              labelColor="text-pro-pink-deep"
              title="Record DOCS in a couple of taps."
              body="Build your own intake and visit forms, then record one for a client on your laptop or your phone."
            />
            <div className="mx-auto w-[62%] max-w-[13rem]">
              <RecordDocsPhone />
            </div>
          </article>

          <article
            id="clients"
            className="flex scroll-mt-24 flex-col justify-between gap-7 overflow-hidden rounded-[2rem] bg-pro-violet-soft pl-6 pt-8 sm:pl-9 sm:pt-9 lg:col-span-3"
          >
            <div className="pr-6 sm:pr-9">
              <TileText
                label="Clients"
                labelColor="text-[#5a2fc4]"
                title="Every client. Every detail."
                body="Due dates, services, notes and DOCS progress, together for each family, so you always know who needs you next."
              />
            </div>
            <div className="max-h-[21rem] overflow-hidden">
              <ClientsShot />
            </div>
          </article>

          <article
            id="reports"
            className="flex scroll-mt-24 flex-col justify-between gap-7 overflow-hidden rounded-[2rem] bg-tile-peach pl-6 pt-8 sm:pl-9 sm:pt-9 lg:col-span-3"
          >
            <div className="pr-6 sm:pr-9">
              <TileText
                label="Reports"
                labelColor="text-[#8a4526]"
                title="See the difference you make."
                body="Clients served, births and outcomes over any period, with a PDF summary ready to share."
              />
            </div>
            <div className="max-h-[21rem] overflow-hidden">
              <ReportsShot />
            </div>
          </article>

          <article
            id="client-app"
            className="grid scroll-mt-24 items-center gap-10 overflow-hidden rounded-[2rem] bg-pro-sky-soft px-6 py-8 sm:px-9 sm:py-10 lg:col-span-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
          >
            <div>
              <p className={`${TILE_LABEL} text-[#0b5c99]`}>Client app</p>
              <h3 className={`${TILE_TITLE} text-3xl sm:text-4xl`}>
                Your clients get the Doulio app. Free.
              </h3>
              <p className="mt-3 max-w-xl text-lg text-ink-soft">
                Add a client and they get an invitation to the Doulio app on iPhone and Android.
                Their care with you, in their pocket.
              </p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {CLIENT_APP_FEATURES.map((feature) => (
                  <li key={feature.title} className="rounded-2xl bg-white/80 p-4">
                    <p className="font-display text-lg font-semibold text-ink">{feature.title}</p>
                    <p className="mt-0.5 text-[15px] text-ink-body">{feature.body}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <StoreBadges location="client_app" />
              </div>
              <p className="mt-4 text-sm text-ink-body">
                &ldquo;Doulio: Doula Care&rdquo; · free for your clients · private and secure,
                with Face ID or fingerprint sign-in
              </p>
            </div>
            <div className="mx-auto w-full max-w-[15rem]">
              <ClientAppPhone />
            </div>
          </article>

          <div className="lg:col-span-6">
            <BusinessSupport />
          </div>
        </div>
      </div>
    </section>
  );
}

/** Every approved quote, side by side: the first one large, the rest beside it. */
export function Testimonials() {
  // Lead with the shortest quote; it reads at a glance.
  const ordered = [...TESTIMONIALS].sort((a, b) => a.quote.length - b.quote.length);
  return (
    <section
      id="stories"
      aria-labelledby="stories-heading"
      className="scroll-mt-24 px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="stories-heading" className={HEADING}>
          What doulas say about Doulio PRO.
        </h2>
        <div className="mt-9 grid gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {ordered.map((t, index) => (
            <figure
              key={t.name}
              className={`flex flex-col justify-between gap-7 rounded-[1.75rem] p-8 sm:p-10 ${
                index === 0 ? "bg-tile-mint" : "border border-warm-line bg-white"
              }`}
            >
              <blockquote
                className={
                  index === 0
                    ? "font-display text-2xl font-medium leading-snug tracking-tight text-ink sm:text-[1.75rem]"
                    : "text-lg text-ink-soft"
                }
              >
                &ldquo;{t.quote} <strong className="font-semibold text-ink">{t.highlight}</strong>
                &rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3.5">
                {t.photo ? (
                  <Image
                    src={t.photo}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-full object-cover"
                  />
                ) : (
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-ink font-display text-xl font-semibold text-white"
                  >
                    {t.name.charAt(0)}
                  </span>
                )}
                <span>
                  <span className="block font-semibold text-ink">{t.name}</span>
                  <span className="block text-[15px] text-ink-body">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MoreFeatures() {
  return (
    <section aria-labelledby="more-heading" className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 id="more-heading" className={`max-w-3xl ${HEADING}`}>
          And everything else you need.
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MORE_FEATURES.map((feature) => (
            <li key={feature.title} className="rounded-3xl border border-warm-line bg-white p-6">
              <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                {feature.title}
              </h3>
              <p className="mt-2 text-ink-body">{feature.body}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <GetProLink location="more_features" className={PRIMARY_BUTTON}>
            Get Doulio PRO
          </GetProLink>
          <a
            href="#pricing"
            className="font-semibold text-ink underline underline-offset-4 hover:text-teal-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep"
          >
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}

const MONTHS = Array.from({ length: 12 }, (_, i) => i);

/**
 * "PRO pays for itself": the visitor slides to what she is paid for one visit and sees how
 * many months of PRO that covers. Only her number and the PRO prices go into it.
 */
function PayoffCalculator({ children }: { children?: ReactNode }) {
  const [rate, setRate] = useState(PAYOFF_DEFAULT_RATE);
  const { monthsLabel, fullMonths, visitsForYear } = payoff(rate);
  const yearly = PLANS[1];
  const fill = ((rate - PAYOFF_MIN_RATE) / (PAYOFF_MAX_RATE - PAYOFF_MIN_RATE)) * 100;

  // Report the amount once the visitor settles on it, not on every step of the drag.
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);
  function change(next: number) {
    setRate(next);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(
      () => trackEvent("payoff_calculator_used", { rate: next }),
      800,
    );
  }

  return (
    <div className="rounded-3xl bg-pro-green-soft p-6 sm:p-7">
      <p className="font-display text-2xl font-semibold tracking-tight text-ink">
        PRO pays for itself.
      </p>
      <p className="mt-1.5 text-ink-soft">
        One reimbursed insurance visit can cover months of Doulio PRO. Try your own number.
      </p>
      <label htmlFor="payoff-rate" className="mt-6 block font-semibold text-ink">
        What you are paid for one visit
      </label>
      <p className="mt-1 font-display text-5xl font-semibold tracking-tight text-ink">${rate}</p>
      <input
        id="payoff-rate"
        type="range"
        min={PAYOFF_MIN_RATE}
        max={PAYOFF_MAX_RATE}
        step={PAYOFF_STEP}
        value={rate}
        onChange={(e) => change(Number(e.target.value))}
        aria-valuetext={`$${rate} for one visit`}
        className="range-field mt-3 block w-full"
        style={{ "--fill": `${fill}%` } as React.CSSProperties}
      />
      <div className="flex justify-between text-sm text-ink-body">
        <span>${PAYOFF_MIN_RATE}</span>
        <span>${PAYOFF_MAX_RATE}</span>
      </div>
      <div className="mt-5 rounded-2xl bg-ink p-5 text-white" aria-live="polite">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-soft">
          One visit covers
        </p>
        <p className="mt-1.5">
          <span className="font-display text-5xl font-semibold tracking-tight">{monthsLabel}</span>{" "}
          <span className="text-[#dcecea]">months of Doulio PRO</span>
        </p>
        <div aria-hidden="true" className="mt-4 flex gap-1.5">
          {MONTHS.map((month) => (
            <span
              key={month}
              className={`h-7 flex-1 rounded-md transition-colors motion-reduce:transition-none ${
                month < fullMonths ? "bg-green-soft" : "bg-[#1f5557]"
              }`}
            />
          ))}
        </div>
        <p className="mt-4 text-[#dcecea]">
          {visitsForYear === 1 ? "One visit covers" : `${visitsForYear} visits cover`} a full
          year on the yearly plan ({yearly.price}).
        </p>
      </div>
      <p className="mt-4 text-sm text-ink-body">
        An illustration from the amount you enter and the PRO price. Insurance billing is
        available where your state covers doula care.
      </p>
      {children}
    </div>
  );
}

export function Pricing() {
  const [period, setPeriod] = useState<ProPlan>("yearly");
  const [monthly, yearly] = PLANS;
  const plan = period === "yearly" ? yearly : monthly;

  function choose(next: ProPlan) {
    if (next === period) return;
    setPeriod(next);
    trackEvent("pricing_period_selected", { plan: next });
  }

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-warm-sand px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className={EYEBROW}>Pricing</p>
          <h2 id="pricing-heading" className={`mt-2.5 ${HEADING}`}>
            One plan. Everything included.
          </h2>
          <div className="mt-7">
            <PayoffCalculator />
          </div>
        </div>

        <div className="lg:sticky lg:top-28">
          <div className="rounded-[2rem] bg-white p-7 shadow-[0_24px_60px_rgba(18,41,43,0.10)] sm:p-10">
            <div
              role="group"
              aria-label="Billing period"
              className="inline-flex rounded-full bg-warm-sand p-1"
            >
              {PLANS.map((p) => (
                <button
                  key={p.plan}
                  type="button"
                  aria-pressed={p.plan === period}
                  onClick={() => choose(p.plan)}
                  className={`min-h-11 rounded-full px-5 text-[15px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep focus-visible:ring-offset-2 ${
                    p.plan === period ? "bg-ink text-white" : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {p.plan === "yearly" ? "Yearly · 2 months free" : p.name}
                </button>
              ))}
            </div>
            <p className="value-fade mt-7" key={plan.plan}>
              <span className="font-display text-7xl font-semibold leading-none tracking-tight text-ink">
                {plan.price}
              </span>{" "}
              <span className="text-lg text-ink-muted">{plan.period}</span>
            </p>
            <p className="mt-2.5 text-ink-body">
              {period === "yearly"
                ? `Works out to ${YEARLY_PER_MONTH} a month. Cancel anytime.`
                : "Cancel anytime."}
            </p>
            <GetProLink
              location="pricing"
              plan={plan.plan}
              className={`mt-7 w-full ${PRIMARY_BUTTON}`}
            >
              Get Doulio PRO
            </GetProLink>
            <ul className="mt-8 grid gap-x-5 gap-y-3 border-t border-warm-line pt-7 text-ink-soft sm:grid-cols-2">
              {PLAN_INCLUDES.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check className="text-teal-deep" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-ink-muted">
              Prices in US dollars; applicable tax is added at checkout. Already have a Doulio
              account?{" "}
              <a href={SIGN_IN_URL} className="font-medium text-teal-deep hover:underline">
                Sign in
              </a>{" "}
              and choose Doulio PRO.
            </p>
          </div>

          <div id="how-it-works" className="mt-8 scroll-mt-24 px-1">
            <h3 className="font-display text-[1.375rem] font-semibold text-ink">
              Up and running in minutes
            </h3>
            <ol className="mt-4 space-y-4">
              {STEPS.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-semibold text-white"
                  >
                    {index + 1}
                  </span>
                  <p>
                    <strong className="font-semibold text-ink">{step.title}.</strong>{" "}
                    <span className="text-ink-body">{step.body}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <p className="mt-7 px-1 text-ink-body">
            Working with a team, or running an agency?{" "}
            <a href="#find-your-fit" className="font-medium text-teal-deep hover:underline">
              Find the plan that fits
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-warm-sand px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.7fr)] lg:gap-14">
        <div>
          <h2 id="faq-heading" className={HEADING}>
            Questions? Answers.
          </h2>
          <p className={`mt-4 ${LEAD}`}>
            Something else on your mind?{" "}
            <a href={`${SITE_URL}/contact`} className="font-medium text-teal-deep hover:underline">
              Contact us
            </a>
            .
          </p>
        </div>
        <div className="divide-y divide-[#ddd3c6] border-y border-[#ddd3c6]">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group"
              onToggle={(e) => {
                if (e.currentTarget.open) trackEvent("faq_opened", { question: faq.question });
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-medium text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-deep [&::-webkit-details-marker]:hidden">
                {faq.question}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-teal-deep transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <p className="pb-6 pr-9 text-ink-body">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl rounded-[2.25rem] bg-ink px-6 py-16 text-center text-white sm:px-10 sm:py-20">
        <h2 className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          Ready when you are.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-pretty text-xl text-[#cfe3e1]">
          Less time on paperwork. More time with the families you support. And the Doulio team
          behind you as you grow.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <GetProLink location="closing" className={PRIMARY_BUTTON}>
            Get Doulio PRO
          </GetProLink>
          <BookSupportButton location="closing" />
        </div>
      </div>
    </section>
  );
}
