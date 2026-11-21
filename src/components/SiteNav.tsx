"use client";

import { useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { GetProLink } from "@/components/GetProLink";
import { PRIMARY_BUTTON_SMALL } from "@/components/styles";
import { BOOK_DEMO_URL, PAGE_LINKS, SITE_URL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const LINK =
  "whitespace-nowrap rounded-full text-[15px] text-ink-soft transition hover:text-teal-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep focus-visible:ring-offset-2";

/**
 * Pill-shaped sticky nav. Its links stay on this page and "Get Doulio PRO" is always in
 * reach; the wordmark goes back to doulio.org, whose own links are in the footer.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto max-w-6xl rounded-[2rem] border border-warm-line bg-white/95 py-2 pl-5 pr-2.5 shadow-[0_6px_24px_rgba(18,41,43,0.08)] backdrop-blur"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href={SITE_URL}
            className="shrink-0 rounded-full py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            <Wordmark className="h-7 w-auto" />
            <span className="sr-only">Doulio home</span>
          </a>

          <ul className="hidden items-center gap-7 lg:flex">
            {PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={LINK}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BOOK_DEMO_URL}
                onClick={() => trackEvent("book_demo_clicked", { location: "nav" })}
                className={LINK}
              >
                Book a demo
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-1.5">
            <GetProLink location="nav" className={PRIMARY_BUTTON_SMALL}>
              Get Doulio PRO
            </GetProLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-full p-3 text-ink-soft transition hover:bg-warm-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep focus-visible:ring-offset-2 lg:hidden"
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                className="h-5 w-5"
              >
                {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul id="mobile-nav" className="mt-2 space-y-1 border-t border-warm-line pb-2 pr-2.5 pt-3 lg:hidden">
            {PAGE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-2 py-2.5 text-ink-soft transition hover:bg-mint/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={BOOK_DEMO_URL}
                onClick={() => trackEvent("book_demo_clicked", { location: "nav" })}
                className="block rounded-xl px-2 py-2.5 text-ink-soft transition hover:bg-mint/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep"
              >
                Book a demo
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
