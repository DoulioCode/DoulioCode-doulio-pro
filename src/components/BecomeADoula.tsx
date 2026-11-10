"use client";

import type { ReactNode } from "react";
import { becomeADoulaUrl, doulaTrainingContactUrl } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

type Destination = "become_a_doula" | "contact";

/** A tracked link to the doulio.org pages for people who want to become a doula. */
export function BecomeADoulaLink({
  location,
  destination,
  className,
  children,
}: {
  location: string;
  destination: Destination;
  className?: string;
  children: ReactNode;
}) {
  const href =
    destination === "contact" ? doulaTrainingContactUrl(location) : becomeADoulaUrl(location);
  return (
    <a
      href={href}
      className={className}
      onClick={() => trackEvent("become_doula_clicked", { location, destination })}
    >
      {children}
    </a>
  );
}

/**
 * "Not a doula yet?": PRO is for practicing doulas, but some visitors arrive wanting to become
 * one (they click "Become a Doula" in the nav). Point them to the doulio.org page, or straight
 * to the contact form with "Becoming a certified doula" chosen.
 */
export function BecomeADoula() {
  return (
    <section
      id="become-a-doula"
      aria-labelledby="become-a-doula-heading"
      className="scroll-mt-24 bg-white px-4 pb-24 sm:px-6 sm:pb-32"
    >
      <div className="mx-auto max-w-4xl rounded-3xl bg-[radial-gradient(600px_300px_at_0%_0%,theme(colors.mint),transparent_70%),radial-gradient(600px_300px_at_100%_100%,theme(colors.pro.violet-soft),transparent_70%)] px-6 py-12 text-center sm:px-12 sm:py-16">
        <p className="font-display text-lg font-semibold text-teal-dark">Not a doula yet?</p>
        <h2
          id="become-a-doula-heading"
          className="mx-auto mt-3 max-w-2xl text-balance font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-5xl"
        >
          Looking to become a doula?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-balance text-lg text-slate-600 sm:text-xl">
          Doulio PRO is for practicing doulas. If you’re hoping to become one, Doulio offers birth
          and postpartum doula trainings led by practicing doulas. Start there, and come back to
          PRO when you’re ready to take clients.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <BecomeADoulaLink
            location="become-a-doula"
            destination="become_a_doula"
            className="inline-block rounded-full bg-teal-dark px-8 py-3.5 text-center text-lg font-semibold text-white shadow-lg shadow-teal-dark/25 transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2"
          >
            Explore becoming a doula
          </BecomeADoulaLink>
          <BecomeADoulaLink
            location="become-a-doula"
            destination="contact"
            className="inline-block rounded-full border border-teal-dark bg-white/70 px-8 py-3.5 text-center text-lg font-medium text-teal-dark transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2"
          >
            Ask us about doula training
          </BecomeADoulaLink>
        </div>
      </div>
    </section>
  );
}
