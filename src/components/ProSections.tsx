"use client";

import type { ReactNode } from "react";
import { FAQS, MORE_FEATURES, STEPS } from "@/config/content";
import { PLANS, SIGN_IN_URL } from "@/config/pro";
import { trackEvent } from "@/lib/analytics";
import { GetProLink } from "@/components/GetProLink";

export const PRIMARY_BUTTON =
  "inline-block rounded-full bg-gradient-to-r from-pro-pink to-pro-violet px-8 py-3.5 text-center text-lg font-semibold text-white shadow-lg shadow-pro-pink/25 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink focus-visible:ring-offset-2";
export const SECONDARY_BUTTON =
  "inline-block rounded-full border border-pro-pink px-8 py-3.5 text-center text-lg font-medium text-pro-pink transition hover:bg-pro-pink-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink focus-visible:ring-offset-2";

/** Teal-to-violet-to-pink, the same headline gradient as the Doulio PRO page in the app. */
export const GRADIENT_TEXT =
  "bg-gradient-to-r from-teal-dark via-pro-violet to-pro-pink bg-clip-text text-transparent";

const HEADING =
  "text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl";
const EYEBROW = "font-display text-lg font-semibold text-pro-pink";
const LEAD = "text-balance text-xl text-slate-500 sm:text-2xl";

/** One idea per section, Apple-style: big headline, one line of copy, one product visual. */
export function Showcase({
  id,
  eyebrow,
  title,
  body,
  tone,
  layout = "stacked",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  tone: "white" | "gray";
  layout?: "stacked" | "split";
  children: ReactNode;
}) {
  const text = (
    <>
      <p className={EYEBROW}>{eyebrow}</p>
      <h2 id={`${id}-heading`} className={`mt-3 ${HEADING}`}>
        {title}
      </h2>
      <p className={`mt-5 ${LEAD}`}>{body}</p>
    </>
  );
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`scroll-mt-24 px-4 py-24 sm:px-6 sm:py-32 ${tone === "gray" ? "bg-[#f5f7f7]" : "bg-white"}`}
    >
      {layout === "split" ? (
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div className="text-center lg:text-left">{text}</div>
          <div className="mx-auto w-full max-w-xs">{children}</div>
        </div>
      ) : (
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">{text}</div>
          <div className="mt-14 sm:mt-20">{children}</div>
        </div>
      )}
    </section>
  );
}

/** Five tints so that, in a three-column grid, neighbours rarely match. */
const FEATURE_TINTS = [
  "bg-pro-pink-soft",
  "bg-pro-violet-soft",
  "bg-pro-sky-soft",
  "bg-pro-orange-soft",
  "bg-pro-green-soft",
];

export function MoreFeatures() {
  return (
    <section
      aria-labelledby="more-heading"
      className="bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="more-heading"
          className={`mx-auto max-w-3xl text-center ${HEADING}`}
        >
          And everything else you need.
        </h2>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {MORE_FEATURES.map((feature, index) => (
            <li
              key={feature.title}
              className={`rounded-3xl p-8 ${FEATURE_TINTS[index % FEATURE_TINTS.length]}`}
            >
              <h3 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-3 text-lg text-slate-500">{feature.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const STEP_COLORS = ["text-pro-pink", "text-pro-violet", "text-pro-sky"];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-labelledby="how-heading"
      className="scroll-mt-24 bg-[#f5f7f7] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="how-heading"
          className={`mx-auto max-w-3xl text-center ${HEADING}`}
        >
          Up and running in minutes.
        </h2>
        <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, index) => (
            <li key={step.title} className="text-center md:text-left">
              <span
                className={`font-display text-5xl font-semibold ${STEP_COLORS[index % STEP_COLORS.length]}`}
              >
                {index + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-lg text-slate-500">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <h2 id="pricing-heading" className={HEADING}>
            One plan. Everything included.
          </h2>
          <p className={`mt-5 ${LEAD}`}>Pay monthly, or save with a year.</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.plan}
              className={`flex flex-col rounded-3xl p-8 sm:p-10 ${
                plan.plan === "yearly"
                  ? "bg-slate-900 text-white"
                  : "bg-[#f5f7f7] text-slate-900"
              }`}
            >
              <p
                className={`font-display text-lg font-semibold ${
                  plan.plan === "yearly" ? "text-pink-300" : "text-pro-pink"
                }`}
              >
                {plan.name}
              </p>
              <p className="mt-4">
                <span className="font-display text-6xl font-semibold tracking-tight">
                  {plan.price}
                </span>{" "}
                <span
                  className={
                    plan.plan === "yearly" ? "text-slate-300" : "text-slate-500"
                  }
                >
                  {plan.period}
                </span>
              </p>
              <p
                className={`mt-3 ${plan.plan === "yearly" ? "text-slate-300" : "text-slate-500"}`}
              >
                {plan.note}
              </p>
              <GetProLink
                location="pricing"
                plan={plan.plan}
                className={`mt-8 ${
                  plan.plan === "yearly"
                    ? "inline-block rounded-full bg-gradient-to-r from-pro-pink to-pro-violet px-8 py-3.5 text-center text-lg font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    : PRIMARY_BUTTON
                }`}
              >
                Choose {plan.name.toLowerCase()}
              </GetProLink>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-slate-500">
          Prices in US dollars; applicable tax is added at checkout. Already
          have a Doulio account?{" "}
          <a
            href={SIGN_IN_URL}
            className="font-medium text-pro-pink hover:underline"
          >
            Sign in
          </a>{" "}
          and choose Doulio PRO.
        </p>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-[#f5f7f7] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className={`text-center ${HEADING}`}>
          Questions? Answers.
        </h2>
        <div className="mt-14 divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((faq) => (
            <details
              key={faq.question}
              className="group"
              onToggle={(e) => {
                if (e.currentTarget.open)
                  trackEvent("faq_opened", { question: faq.question });
              }}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-lg font-medium text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-pro-pink sm:text-xl">
                {faq.question}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  className="h-5 w-5 shrink-0 text-pro-pink transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  <path d="M10 4v12M4 10h12" />
                </svg>
              </summary>
              <p className="pb-6 text-lg text-slate-500">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className="bg-white px-4 py-24 text-center sm:px-6 sm:py-32">
      <h2 className={`mx-auto max-w-4xl ${HEADING} sm:text-7xl`}>
        Ready when <span className={GRADIENT_TEXT}>you</span> are.
      </h2>
      <p className={`mx-auto mt-5 max-w-2xl ${LEAD}`}>
        Less time on paperwork. More time with the families you support.
      </p>
      <GetProLink location="closing" className={`mt-10 ${PRIMARY_BUTTON}`}>
        Get Doulio PRO
      </GetProLink>
    </section>
  );
}
