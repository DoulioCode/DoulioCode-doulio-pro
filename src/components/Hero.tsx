import Image from "next/image";
import { GetProLink } from "@/components/GetProLink";
import { BecomeADoulaLink } from "@/components/BecomeADoula";
import { HeroVisual } from "@/components/ProductShowcase";
import { HERO_POINTS, TESTIMONIALS, TRUST_POINTS } from "@/config/content";
import { PLANS } from "@/config/pro";
import { GRADIENT_TEXT, PRIMARY_BUTTON, SECONDARY_BUTTON } from "@/components/styles";

function CheckDot() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6 shrink-0">
      <circle cx="12" cy="12" r="12" className="fill-mint" />
      <path
        d="M7 12.5l3.2 3.2L17 8.8"
        className="stroke-teal-deep"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const [MONTHLY, YEARLY] = PLANS;

/** The quote beside the hero button: the shortest approved line, with both faces. */
const HERO_QUOTE = TESTIMONIALS.find((t) => t.name === "Latoya Rawls") ?? TESTIMONIALS[0];

/**
 * Hero: what PRO is, three reasons, the price and a real quote next to the button, with the
 * product visible beside it on a laptop and above the fold.
 */
export function Hero() {
  return (
    <section className="px-4 pb-12 pt-10 sm:px-6 sm:pb-14 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)] lg:gap-14">
        <div>
          <p className="inline-flex rounded-full bg-pro-pink-soft px-3.5 py-1.5 text-sm font-semibold text-pro-pink-deep">
            Doulio PRO · for independent doulas
          </p>
          <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl xl:text-7xl">
            Doula work, <span className={GRADIENT_TEXT}>made easy.</span>
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-xl text-ink-body">
            Your clients, paperwork and payments, including insurance, in one simple place.
            Less time on admin, more time with families.
          </p>
          <ul className="mt-6 space-y-3 text-ink-soft">
            {HERO_POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckDot />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <GetProLink location="hero" className={PRIMARY_BUTTON}>
              Get Doulio PRO
            </GetProLink>
            <a href="#see-it" className={SECONDARY_BUTTON}>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-teal-deep">
                <path d="M7 5v14l12-7z" />
              </svg>
              Watch the tour
            </a>
          </div>
          <p className="mt-3.5 text-[15px] text-ink-muted">
            <a href="#pricing" className="underline-offset-4 hover:underline">
              {MONTHLY.price} a month, or {YEARLY.price} a year (two months free)
            </a>
            . Cancel anytime.
          </p>
          <figure className="mt-7 flex max-w-xl items-center gap-4 border-t border-warm-line pt-6">
            <div className="flex shrink-0">
              {TESTIMONIALS.filter((t) => t.photo).map((t, index) => (
                <Image
                  key={t.name}
                  src={t.photo as string}
                  alt=""
                  width={48}
                  height={48}
                  className={`h-12 w-12 rounded-full border-[3px] border-warm object-cover ${index ? "-ml-3.5" : ""}`}
                />
              ))}
            </div>
            <div>
              <blockquote className="text-ink-soft">&ldquo;{HERO_QUOTE.highlight}&rdquo;</blockquote>
              <figcaption className="text-sm text-ink-muted">
                {HERO_QUOTE.name}, {HERO_QUOTE.role.replace(/^Owner, /, "")}
              </figcaption>
            </div>
          </figure>
          <p className="mt-5 text-[15px] text-ink-muted">
            Not a doula yet?{" "}
            <BecomeADoulaLink
              location="hero"
              destination="become_a_doula"
              className="font-medium text-teal-deep hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep"
            >
              Learn how to become one ›
            </BecomeADoulaLink>
          </p>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}

const TRUST_DOTS = ["bg-pro-green", "bg-pro-violet", "bg-pro-pink", "bg-pro-sky", "bg-pro-orange"];

/** What is included, in one line under the hero. */
export function TrustStrip() {
  return (
    <section aria-label="Included with Doulio PRO" className="px-4 pb-16 sm:px-6 sm:pb-20">
      <ul className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-4 gap-y-3 rounded-3xl border border-warm-line bg-white px-5 py-5 text-[15px] font-medium text-ink-soft lg:justify-between">
        {TRUST_POINTS.map((point, index) => (
          <li key={point} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`h-2 w-2 rounded-full ${TRUST_DOTS[index % TRUST_DOTS.length]}`}
            />
            {point}
          </li>
        ))}
      </ul>
    </section>
  );
}
