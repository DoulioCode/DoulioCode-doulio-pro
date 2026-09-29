"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { BOOK_DEMO_URL, NAV_LINKS, SITE_URL } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

/** Hides the bar while scrolling down and brings it back on scroll up. */
function useHideOnScrollDown() {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    let frame = 0;

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const y = window.scrollY;
        const delta = y - lastY.current;
        // Ignore small jitter, and always show the bar near the top of the page.
        if (Math.abs(delta) > 8) {
          setHidden(y > 120 && delta > 0);
          lastY.current = y;
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return hidden;
}

/** Pill-shaped sticky nav matching doulio.org. Links point back to the main site. */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const scrolledPastNav = useHideOnScrollDown();
  // Keep the bar in place whenever the mobile menu is open.
  const hidden = scrolledPastNav && !open;

  return (
    <header
      className={`sticky top-0 z-50 px-4 pt-4 transition-transform duration-300 motion-reduce:transition-none sm:px-6 ${
        hidden ? "-translate-y-[130%]" : "translate-y-0"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto max-w-6xl rounded-[40px] bg-white/95 px-4 py-2 shadow-[0_7px_29px_rgba(0,0,0,0.12)] backdrop-blur sm:px-4"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href={SITE_URL}
            className="shrink-0 rounded-full px-1 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            <Wordmark className="h-7 w-auto" />
            <span className="sr-only">Doulio home</span>
          </a>

          <ul className="hidden items-center gap-4 xl:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-full text-sm text-slate-700 transition hover:text-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={BOOK_DEMO_URL}
              onClick={() => trackEvent("book_demo_clicked", { location: "nav" })}
              className="hidden whitespace-nowrap rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2 sm:inline-block"
            >
              Book a Demo
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="rounded-full p-3 text-slate-700 transition hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2 xl:hidden"
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
                {open ? (
                  <path d="M5 5l10 10M15 5L5 15" />
                ) : (
                  <path d="M3 6h14M3 10h14M3 14h14" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <ul id="mobile-nav" className="mt-2 space-y-1 border-t border-slate-100 pt-3 xl:hidden">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block rounded-xl px-2 py-2.5 text-slate-700 transition hover:bg-mint/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-1 sm:hidden">
              <a
                href={BOOK_DEMO_URL}
                className="block rounded-full bg-teal px-6 py-3 text-center font-semibold text-white transition hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2"
              >
                Book a Demo
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
