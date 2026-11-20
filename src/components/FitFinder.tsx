"use client";

import { useRef, useState } from "react";
import {
  formatUsd,
  MAX_TEAM_SIZE,
  PRODUCT_ORDER,
  PRODUCTS,
  recommend,
  SEAT_PRICE_MONTHLY,
  teamMonthlyTotal,
  WORK_STYLES,
  type ProductId,
  type WorkStyle,
} from "@/config/products";
import { BOOK_DEMO_URL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { GetProLink } from "@/components/GetProLink";
import { BecomeADoulaLink } from "@/components/BecomeADoula";
import { GRADIENT_TEXT } from "@/components/styles";

const HEADING =
  "text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl";
const BUTTON =
  "inline-block rounded-full bg-gradient-to-r from-pro-pink to-pro-violet px-8 py-3.5 text-center text-lg font-semibold text-white shadow-lg shadow-pro-pink/25 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink focus-visible:ring-offset-2";
const LOCATION = "fit-finder";
/** The stepper's top value stands for "6 or more", which is past a PRO team. */
const STEPPER_MAX = MAX_TEAM_SIZE + 1;

function Check({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mt-1 h-5 w-5 shrink-0 ${className}`}
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

/**
 * "Which Doulio is right for you?": one question (plus team size for teams) that points a
 * visitor to PRO, PRO + Seats, Doulio OS, Enterprise or doula training. PRO is bought in the
 * app; OS and Enterprise go to the demo scheduler.
 */
export function FitFinder() {
  const [style, setStyle] = useState<WorkStyle | null>(null);
  const [teamSize, setTeamSize] = useState(3);
  const [trainsDoulas, setTrainsDoulas] = useState(false);
  /** Set when the visitor taps another plan to compare; cleared by a new answer. */
  const [viewing, setViewing] = useState<ProductId | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const recommendation = style ? recommend(style, teamSize, trainsDoulas) : null;
  const recommended = recommendation?.kind === "product" ? recommendation.product : null;
  const shown = viewing ?? recommended;

  function choose(next: WorkStyle) {
    setStyle(next);
    setViewing(null);
    const result = recommend(next, teamSize, trainsDoulas);
    trackEvent("fit_finder_answered", {
      style: next,
      result: result.kind === "product" ? result.product : result.kind,
    });
    // On a phone the answer sits below the options: bring it into view.
    const el = resultRef.current;
    if (el && el.getBoundingClientRect().top > window.innerHeight * 0.6) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  }

  function changeTeamSize(next: number) {
    setTeamSize(next);
    setViewing(null);
    const result = recommend("team", next);
    trackEvent("fit_finder_answered", {
      style: "team",
      team_size: next,
      result: result.kind === "product" ? result.product : result.kind,
    });
  }

  function changeTrainsDoulas(next: boolean) {
    setTrainsDoulas(next);
    setViewing(null);
    trackEvent("fit_finder_answered", {
      style: "organization",
      trains_doulas: next,
      result: next ? "os_lms" : "os",
    });
  }

  return (
    <section
      id="find-your-fit"
      aria-labelledby="fit-heading"
      className="scroll-mt-24 bg-[#f5f7f7] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-lg font-semibold text-pro-pink">Find your fit</p>
          <h2 id="fit-heading" className={`mt-3 ${HEADING}`}>
            Is PRO <span className={GRADIENT_TEXT}>right for you?</span>
          </h2>
          <p className="mt-5 text-balance text-xl text-slate-500 sm:text-2xl">
            Doulio works at every size, from one doula to many sites. Tell us how you work and
            we’ll point you to the right plan.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
          <fieldset>
            <legend className="font-display text-xl font-semibold text-slate-900">
              Which sounds most like you?
            </legend>
            <div className="mt-5 grid gap-3">
              {WORK_STYLES.map((option) => {
                const selected = style === option.id;
                return (
                  <label
                    key={option.id}
                    className={`flex cursor-pointer items-start gap-4 rounded-2xl border bg-white p-5 transition focus-within:ring-2 focus-within:ring-pro-pink ${
                      selected
                        ? "border-pro-pink shadow-md shadow-pro-pink/10"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="fit-style"
                      value={option.id}
                      checked={selected}
                      onChange={() => choose(option.id)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 ${
                        selected ? "border-pro-pink" : "border-slate-300"
                      }`}
                    >
                      {selected && <span className="h-2.5 w-2.5 rounded-full bg-pro-pink" />}
                    </span>
                    <span>
                      <span className="block text-lg font-medium text-slate-900">
                        {option.label}
                      </span>
                      <span className="mt-1 block text-slate-500">{option.detail}</span>
                    </span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div ref={resultRef} className="scroll-mt-24 lg:sticky lg:top-28" aria-live="polite">
            {!recommendation && <Overview />}

            {recommendation?.kind === "become_a_doula" && <BecomeADoulaResult />}

            {shown && (
              <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
                {style === "team" && (
                  <TeamSizeStepper value={teamSize} onChange={changeTeamSize} />
                )}
                {style === "organization" && (
                  <TrainingQuestion value={trainsDoulas} onChange={changeTrainsDoulas} />
                )}

                <ProductResult
                  id={shown}
                  isMatch={shown === recommended}
                  teamSize={shown === "team" ? Math.min(teamSize, MAX_TEAM_SIZE) : undefined}
                  orgMember={style === "org_member" && shown === "pro"}
                  tooBigForTeam={style === "team" && teamSize > MAX_TEAM_SIZE && shown === "os"}
                />

                <div className="mt-8 border-t border-slate-100 pt-6">
                  <p className="text-sm font-medium text-slate-500">Compare plans</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {PRODUCT_ORDER.map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setViewing(id === recommended ? null : id)}
                        aria-pressed={shown === id}
                        className={`rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink ${
                          shown === id
                            ? "bg-slate-900 text-white"
                            : "bg-[#f5f7f7] text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        {PRODUCTS[id].name}
                        {id === recommended && shown !== id ? " · your match" : ""}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Before an answer: the four plans at a glance. */
function Overview() {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
      <p className="font-display text-xl font-semibold text-slate-900">Doulio at every size</p>
      <p className="mt-2 text-slate-500">
        Start solo and grow. Your clients, records and credentials come with you.
      </p>
      <ul className="mt-6 divide-y divide-slate-100">
        {PRODUCT_ORDER.map((id, index) => {
          const product = PRODUCTS[id];
          return (
            <li key={id} className="flex items-center justify-between gap-4 py-4">
              <span className="flex items-center gap-3">
                <SizeBars level={index + 1} />
                <span>
                  <span className="block font-semibold text-slate-900">{product.name}</span>
                  <span className="block text-sm text-slate-500">{product.audience}</span>
                </span>
              </span>
              <span className="text-right">
                <span className="block font-display font-semibold text-slate-900">
                  {product.price}
                </span>
                {product.period && (
                  <span className="block text-sm text-slate-500">{product.period.slice(1)}</span>
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Rising bars, filled up to `level`, as on the Platform Overview. */
function SizeBars({ level }: { level: number }) {
  return (
    <span aria-hidden="true" className="flex h-5 items-end gap-0.5">
      {PRODUCT_ORDER.map((_, i) => i + 1).map((bar) => (
        <span
          key={bar}
          className={`w-1.5 rounded-sm ${bar <= level ? "bg-teal-dark" : "bg-slate-200"}`}
          style={{ height: `${20 + bar * 16}%` }}
        />
      ))}
    </span>
  );
}

function TeamSizeStepper({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const label = value >= STEPPER_MAX ? `${STEPPER_MAX} or more doulas` : `${value} doulas`;
  const stepButton =
    "flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-xl text-slate-700 transition hover:bg-slate-50 disabled:opacity-40 focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink";
  return (
    <div className="mb-8 rounded-2xl bg-[#f5f7f7] p-5">
      <p id="team-size-label" className="font-medium text-slate-900">
        How many doulas, including you?
      </p>
      <div className="mt-3 flex items-center justify-between gap-4">
        <button
          type="button"
          className={stepButton}
          onClick={() => onChange(value - 1)}
          disabled={value <= 2}
          aria-label="One fewer doula"
        >
          −
        </button>
        <output
          aria-labelledby="team-size-label"
          className="font-display text-2xl font-semibold text-slate-900"
        >
          {label}
        </output>
        <button
          type="button"
          className={stepButton}
          onClick={() => onChange(value + 1)}
          disabled={value >= STEPPER_MAX}
          aria-label="One more doula"
        >
          +
        </button>
      </div>
    </div>
  );
}

/** For organizations: training or certifying doulas calls for Doulio OS + LMS. */
function TrainingQuestion({ value, onChange }: { value: boolean; onChange: (v: boolean) => void }) {
  const option = (selected: boolean) =>
    `flex-1 rounded-full px-4 py-2.5 text-center font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink ${
      selected ? "bg-slate-900 text-white" : "bg-white text-slate-700 hover:bg-slate-100"
    }`;
  return (
    <div className="mb-8 rounded-2xl bg-[#f5f7f7] p-5">
      <p id="trains-label" className="font-medium text-slate-900">
        Do you train or certify doulas?
      </p>
      <div role="group" aria-labelledby="trains-label" className="mt-3 flex gap-2">
        <button type="button" className={option(value)} aria-pressed={value} onClick={() => onChange(true)}>
          Yes
        </button>
        <button type="button" className={option(!value)} aria-pressed={!value} onClick={() => onChange(false)}>
          No
        </button>
      </div>
    </div>
  );
}

function ProductResult({
  id,
  isMatch,
  teamSize,
  orgMember,
  tooBigForTeam,
}: {
  id: ProductId;
  isMatch: boolean;
  teamSize?: number;
  orgMember: boolean;
  tooBigForTeam: boolean;
}) {
  const product = PRODUCTS[id];
  return (
    <div>
      <p className="font-display text-lg font-semibold text-pro-pink">
        {isMatch ? `Your match: ${product.name}` : product.name}
      </p>
      <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {product.audience}
      </h3>

      {tooBigForTeam && (
        <p className="mt-3 text-slate-600">
          A PRO team is up to {MAX_TEAM_SIZE} doulas. For a bigger group, Doulio OS adds
          contractor agreements, shift scheduling and reporting.
        </p>
      )}

      <ul className="mt-6 space-y-3 text-lg text-slate-700">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <Check className="text-pro-pink" />
            {feature}
          </li>
        ))}
      </ul>

      {orgMember && (
        <p className="mt-6 rounded-2xl bg-pro-violet-soft p-4 text-slate-700">
          My Practice sits next to your organization and is private to you. Your organization
          account stays exactly as it is, and you switch between the two from the workspace menu.
        </p>
      )}

      <div className="mt-8">
        {teamSize ? (
          <>
            <p className="font-display text-4xl font-semibold tracking-tight text-slate-900">
              {formatUsd(teamMonthlyTotal(teamSize))}{" "}
              <span className="text-lg font-normal text-slate-500">per month</span>
            </p>
            <p className="mt-1 text-slate-500">
              $39 + {teamSize - 1} {teamSize - 1 === 1 ? "doula" : "doulas"} ×{" "}
              {formatUsd(SEAT_PRICE_MONTHLY)}. Choose your team size when you check out.
            </p>
          </>
        ) : (
          <>
            <p className="font-display text-4xl font-semibold tracking-tight text-slate-900">
              {product.price}{" "}
              {product.period && (
                <span className="text-lg font-normal text-slate-500">{product.period}</span>
              )}
            </p>
            <p className="mt-1 text-slate-500">{product.priceNote}</p>
          </>
        )}
      </div>

      <div className="mt-8">
        {product.action === "get_pro" ? (
          <GetProLink location={`${LOCATION}-${id}`} className={BUTTON}>
            Get Doulio PRO
          </GetProLink>
        ) : (
          <a
            href={BOOK_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("book_demo_clicked", { location: LOCATION, product: id })}
            className={BUTTON}
          >
            Book a demo
          </a>
        )}
      </div>
    </div>
  );
}

function BecomeADoulaResult() {
  return (
    <div className="rounded-3xl bg-[radial-gradient(500px_260px_at_0%_0%,theme(colors.mint),transparent_70%),radial-gradient(500px_260px_at_100%_100%,theme(colors.pro.violet-soft),transparent_70%)] bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-10">
      <p className="font-display text-lg font-semibold text-teal-dark">Start with training</p>
      <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        Become a doula with Doulio
      </h3>
      <p className="mt-4 text-lg text-slate-600">
        Doulio offers birth and postpartum doula trainings led by practicing doulas. Come back to
        PRO when you’re ready to take clients.
      </p>
      <div className="mt-8">
        <BecomeADoulaLink
          location={LOCATION}
          destination="become_a_doula"
          className="inline-block rounded-full bg-teal-dark px-8 py-3.5 text-center text-lg font-semibold text-white shadow-lg shadow-teal-dark/25 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2"
        >
          Explore becoming a doula
        </BecomeADoulaLink>
      </div>
    </div>
  );
}
