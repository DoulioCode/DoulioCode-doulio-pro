"use client";

import { GROWTH_STEPS, SUPPORT_TOPICS } from "@/config/content";
import { APP_STORE_URL, BUSINESS_SUPPORT_URL, GOOGLE_PLAY_URL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { EYEBROW, GRADIENT_TEXT, HEADING, LEAD } from "@/components/styles";

/**
 * "Book complimentary business support": a dark pill inside a slowly turning PRO-colored
 * ring, with a soft glow. The ring and glow stop under reduced motion.
 */
export function BookSupportButton({
  location,
  className = "",
}: {
  location: string;
  className?: string;
}) {
  return (
    <a
      href={BUSINESS_SUPPORT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("business_support_clicked", { location })}
      className={`group relative inline-flex rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink-btn focus-visible:ring-offset-4 ${className}`}
    >
      <span
        aria-hidden="true"
        className="support-ring absolute -inset-1 rounded-full opacity-50 blur-lg transition-opacity duration-300 group-hover:opacity-90"
      />
      <span className="support-ring relative inline-flex rounded-full p-[2px]">
        <span className="inline-flex items-center gap-3 rounded-full bg-slate-950 py-2 pl-2 pr-3 text-left text-white sm:gap-4 sm:pr-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-pro-pink to-pro-violet sm:h-12 sm:w-12">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <rect x="3.5" y="5" width="17" height="15" rx="3" />
              <path d="M8 3v4M16 3v4M3.5 10h17" />
              <path d="M9.5 15l1.75 1.75L15 13" />
            </svg>
          </span>
          <span className="flex flex-col pr-1">
            <span className="whitespace-nowrap font-display text-[15px] font-semibold leading-tight sm:text-lg">
              Book <span className="hidden sm:inline">complimentary </span>business support
            </span>
            <span className="text-xs text-slate-300 sm:text-sm">
              <span className="sm:hidden">Complimentary with PRO</span>
              <span className="hidden sm:inline">Included with PRO · with the Doulio team</span>
            </span>
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </span>
        </span>
      </span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

/** Complimentary business support: the dark panel that closes the product tiles. */
export function BusinessSupport() {
  return (
    <div
      id="business-support"
      aria-labelledby="support-heading"
      role="region"
      className="grid scroll-mt-24 items-center gap-10 rounded-[2rem] bg-ink px-6 py-10 text-white sm:px-11 sm:py-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]"
    >
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-green-soft">
          Complimentary with every PRO plan
        </p>
        <h3
          id="support-heading"
          className="mt-2.5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight"
        >
          You don&apos;t have to build it alone.
        </h3>
        <p className="mt-3.5 text-pretty text-lg text-[#cfe3e1]">
          Every PRO doula gets complimentary business support from the Doulio team. Book a
          session and get help with the parts of a doula business that are hardest to figure
          out on your own.
        </p>
        <BookSupportButton location="support_section" className="mt-8" />
      </div>
      <ul className="grid gap-3.5 sm:grid-cols-2">
        {SUPPORT_TOPICS.map((topic) => (
          <li key={topic.title} className="rounded-[1.25rem] bg-ink-panel p-5">
            <h4 className="font-display text-lg font-semibold">{topic.title}</h4>
            <p className="mt-1.5 text-[15px] text-[#cfe3e1]">{topic.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const STEP_CHIPS = [
  "bg-pro-pink-soft text-pro-pink-deep",
  "bg-pro-violet-soft text-[#5a2fc4]",
  "bg-pro-sky-soft text-[#0b5c99]",
  "bg-pro-green-soft text-[#17663f]",
  "bg-pro-orange-soft text-[#9a4208]",
  "bg-pro-pink-soft text-pro-pink-deep",
];

/** From first inquiry to review: the business PRO helps a doula build. */
export function GrowthJourney() {
  return (
    <section
      id="grow"
      aria-labelledby="grow-heading"
      className="scroll-mt-24 bg-warm-sand px-4 py-20 sm:px-6 sm:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-end gap-5 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-12">
          <div>
            <p className={EYEBROW}>Grow your business</p>
            <h2 id="grow-heading" className={`mt-2.5 ${HEADING}`}>
              From first inquiry to <span className={GRADIENT_TEXT}>getting paid.</span>
            </h2>
          </div>
          <p className={LEAD}>
            Everything a doula business runs on, from the first inquiry to the five-star
            review. In one place, from day one.
          </p>
        </div>
        <ol className="mt-10 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {GROWTH_STEPS.map((step, index) => (
            <li key={step.title} className="rounded-3xl bg-white p-6">
              <span
                aria-hidden="true"
                className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${STEP_CHIPS[index % STEP_CHIPS.length]}`}
              >
                {index + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="mt-1.5 text-ink-body">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function AppleLogo({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701" />
    </svg>
  );
}

function PlayLogo({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className}>
      <path d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.7-.6-1.2V3c0-.5.2-1 .6-1.2z" fill="#00d7fe" />
      <path d="M16.8 8.6 13.4 12 3.6 1.8c.3-.2.8-.2 1.2 0l12 6.8z" fill="#00f076" />
      <path d="m16.8 15.4-12 6.8c-.4.2-.9.2-1.2 0L13.4 12l3.4 3.4z" fill="#ff3a44" />
      <path d="m20.4 13.4-3.6 2L13.4 12l3.4-3.4 3.6 2c1 .6 1 2.2 0 2.8z" fill="#ffd400" />
    </svg>
  );
}

const BADGE =
  "inline-flex items-center gap-3 rounded-2xl bg-slate-950 px-5 py-2.5 text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink focus-visible:ring-offset-2 motion-reduce:transition-none motion-reduce:hover:translate-y-0";

export function StoreBadges({ location }: { location: string }) {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("app_store_clicked", { location, store: "app_store" })}
        className={BADGE}
      >
        <AppleLogo className="h-7 w-7" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px]">Download on the</span>
          <span className="font-display text-xl font-semibold">App Store</span>
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackEvent("app_store_clicked", { location, store: "google_play" })}
        className={BADGE}
      >
        <PlayLogo className="h-7 w-7" />
        <span className="flex flex-col text-left leading-tight">
          <span className="text-[11px] uppercase">Get it on</span>
          <span className="font-display text-xl font-semibold">Google Play</span>
        </span>
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
}
