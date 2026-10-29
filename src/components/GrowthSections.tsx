"use client";

import { CLIENT_APP_FEATURES, GROWTH_STEPS, SUPPORT_TOPICS } from "@/config/content";
import { APP_STORE_URL, BUSINESS_SUPPORT_URL, GOOGLE_PLAY_URL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";
import { ClientAppPhone } from "@/components/ProductShowcase";
import { GRADIENT_TEXT } from "@/components/styles";

const HEADING =
  "text-balance font-display text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl";
const EYEBROW = "font-display text-lg font-semibold text-pro-pink";
const LEAD = "text-balance text-xl text-slate-500 sm:text-2xl";

/**
 * "Book free business support": a dark pill inside a slowly turning PRO-colored
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
      className={`group relative inline-flex rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink focus-visible:ring-offset-4 ${className}`}
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
              Book free business support
            </span>
            <span className="text-xs text-slate-300 sm:text-sm">
              Included with PRO<span className="hidden sm:inline"> · with the Doulio team</span>
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

const TOPIC_COLORS = ["text-pro-pink", "text-pro-violet", "text-pro-sky", "text-pro-orange"];

/** The highlighted free business support section, dark so it stands out from the page. */
export function BusinessSupport() {
  return (
    <section
      id="business-support"
      aria-labelledby="support-heading"
      className="scroll-mt-24 bg-white px-4 py-12 sm:px-6 sm:py-16"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-14 text-white sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_320px_at_0%_0%,rgba(235,45,147,0.35),transparent_70%),radial-gradient(600px_360px_at_100%_100%,rgba(130,77,255,0.35),transparent_70%)]"
        />
        <div className="relative grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-pink-200">
              <span aria-hidden="true" className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pro-pink opacity-75 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-pro-pink" />
              </span>
              Free with every PRO plan
            </p>
            <h2
              id="support-heading"
              className="mt-6 text-balance font-display text-4xl font-semibold tracking-tight sm:text-6xl"
            >
              You don&apos;t have to build it{" "}
              <span className="bg-gradient-to-r from-pink-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
                alone.
              </span>
            </h2>
            <p className="mt-5 text-balance text-xl text-slate-300 sm:text-2xl">
              Every PRO doula gets free business support from the Doulio team. Book a
              session and get help with the parts of a doula business that are hardest to
              figure out on your own.
            </p>
            <BookSupportButton location="support_section" className="mt-10" />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {SUPPORT_TOPICS.map((topic, index) => (
              <li
                key={topic.title}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur"
              >
                <span
                  className={`font-display text-sm font-semibold uppercase tracking-wide ${TOPIC_COLORS[index % TOPIC_COLORS.length]}`}
                >
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight sm:text-2xl">
                  {topic.title}
                </h3>
                <p className="mt-2 text-slate-300">{topic.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

const STEP_STYLES = [
  { tint: "bg-pro-pink-soft", number: "from-pro-pink to-pro-violet" },
  { tint: "bg-pro-violet-soft", number: "from-pro-violet to-pro-sky" },
  { tint: "bg-pro-sky-soft", number: "from-pro-sky to-pro-green" },
  { tint: "bg-pro-green-soft", number: "from-pro-green to-pro-sky" },
  { tint: "bg-pro-orange-soft", number: "from-pro-orange to-pro-pink" },
  { tint: "bg-pro-pink-soft", number: "from-pro-pink to-pro-orange" },
];

/** From first inquiry to review: the business PRO helps a doula build. */
export function GrowthJourney() {
  return (
    <section
      id="grow"
      aria-labelledby="grow-heading"
      className="scroll-mt-24 bg-white px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className={EYEBROW}>Grow your business</p>
          <h2 id="grow-heading" className={`mt-3 ${HEADING}`}>
            Built for a <span className={GRADIENT_TEXT}>thriving</span> practice.
          </h2>
          <p className={`mt-5 ${LEAD}`}>
            Everything a doula business runs on, from the first inquiry to the five-star
            review. In one place, from day one.
          </p>
        </div>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROWTH_STEPS.map((step, index) => {
            const style = STEP_STYLES[index % STEP_STYLES.length];
            return (
              <li key={step.title} className={`rounded-3xl p-8 ${style.tint}`}>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br font-display text-xl font-semibold text-white shadow-md ${style.number}`}
                >
                  {index + 1}
                </span>
                <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-lg text-slate-600">{step.body}</p>
              </li>
            );
          })}
        </ol>
        <p className="mx-auto mt-12 max-w-2xl text-center text-lg text-slate-500">
          Want a hand along the way?{" "}
          <a
            href="#business-support"
            className="font-semibold text-pro-pink hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink"
          >
            Free business support is included ›
          </a>
        </p>
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
    <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
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

const APP_FEATURE_DOTS = ["bg-pro-pink", "bg-pro-violet", "bg-pro-sky", "bg-pro-orange"];

/** The Doulio client app, with the real App Store and Google Play links. */
export function ClientApp() {
  return (
    <section
      id="client-app"
      aria-labelledby="client-app-heading"
      className="scroll-mt-24 bg-[radial-gradient(700px_420px_at_85%_30%,theme(colors.pro.sky-soft),transparent_70%),radial-gradient(700px_420px_at_10%_90%,theme(colors.pro.pink-soft),transparent_70%)] bg-[#f5f7f7] px-4 py-24 sm:px-6 sm:py-32"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <p className={EYEBROW}>Client app</p>
          <h2 id="client-app-heading" className={`mt-3 ${HEADING}`}>
            Your clients get the Doulio app. <span className={GRADIENT_TEXT}>Free.</span>
          </h2>
          <p className={`mt-5 ${LEAD}`}>
            Add a client and they get an invitation to the Doulio app on iPhone and
            Android. Their care with you, in their pocket.
          </p>
          <ul className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {CLIENT_APP_FEATURES.map((feature, index) => (
              <li key={feature.title} className="rounded-2xl bg-white p-5 shadow-sm">
                <p className="flex items-center gap-2 font-display text-lg font-semibold text-slate-900">
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full ${APP_FEATURE_DOTS[index % APP_FEATURE_DOTS.length]}`}
                  />
                  {feature.title}
                </p>
                <p className="mt-1 text-slate-500">{feature.body}</p>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <StoreBadges location="client_app" />
          </div>
          <p className="mt-4 text-sm text-slate-500">
            &ldquo;Doulio: Doula Care&rdquo; · free for your clients · private and secure,
            with Face ID or fingerprint sign-in
          </p>
        </div>
        <div className="mx-auto w-full max-w-xs">
          <ClientAppPhone />
        </div>
      </div>
    </section>
  );
}
