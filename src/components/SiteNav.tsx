"use client";

import { useEffect, useRef, useState } from "react";
import { Wordmark } from "@/components/Wordmark";
import { GetProLink } from "@/components/GetProLink";
import { PRIMARY_BUTTON_SMALL } from "@/components/styles";
import { SIGN_IN_URL } from "@/config/pro";
import { BOOK_DEMO_URL, NAV_LINKS, SITE_URL, type NavChild } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

const FOCUS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep focus-visible:ring-offset-2";
const LINK = `whitespace-nowrap rounded-full text-sm text-ink-soft transition hover:text-teal-deep ${FOCUS}`;
const MOBILE_LINK =
  "block rounded-xl px-2 py-2.5 text-ink-soft transition hover:bg-mint/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-deep";
const DEMO_BUTTON = `whitespace-nowrap rounded-full bg-teal px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark ${FOCUS}`;

const ICON_TILES: Record<NavChild["icon"], string> = {
  platform: "bg-teal",
  pro: "bg-pro-pink",
  trainings: "bg-teal-dark",
  upcoming: "bg-accent",
};

function MenuIcon({ icon }: { icon: NavChild["icon"] }) {
  return (
    <span
      aria-hidden="true"
      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white ${ICON_TILES[icon]}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
      >
        {icon === "platform" && (
          <>
            <circle cx="12" cy="9" r="2.5" />
            <path d="M7.5 18a4.5 4.5 0 0 1 9 0" />
            <circle cx="5.5" cy="8" r="2" />
            <path d="M2.5 15.5a3.5 3.5 0 0 1 4-3" />
            <circle cx="18.5" cy="8" r="2" />
            <path d="M21.5 15.5a3.5 3.5 0 0 0-4-3" />
          </>
        )}
        {icon === "pro" && (
          <>
            <path d="M10 4l1.8 4.7L16.5 10.5l-4.7 1.8L10 17l-1.8-4.7L3.5 10.5l4.7-1.8z" />
            <path d="M18 3v4M16 5h4M18.5 15.5v3M17 17h3" />
          </>
        )}
        {icon === "trainings" && (
          <>
            <path d="M2.5 9.5L12 5l9.5 4.5L12 14z" />
            <path d="M6.5 11.5V16c1.5 1.4 3.4 2 5.5 2s4-.6 5.5-2v-4.5M21.5 9.5v5" />
          </>
        )}
        {icon === "upcoming" && (
          <>
            <rect x="3.5" y="5" width="17" height="15" rx="3" />
            <path d="M8 3v4M16 3v4M3.5 10h17M9.5 15l1.75 1.75L15 13" />
          </>
        )}
      </svg>
    </span>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 transition-transform motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
    >
      <path d="M5 7.5l5 5 5-5" />
    </svg>
  );
}

/**
 * Pill-shaped sticky nav with the doulio.org menu (its links go to the main site, with the
 * same Platform and Trainings dropdowns), Log in and Book a Demo, plus "Get Doulio PRO" so
 * the page's own action is always in reach.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  /** Label of the open desktop dropdown, if any. */
  const [menu, setMenu] = useState<string | null>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(null);
    };
    const onPointer = (e: PointerEvent) => {
      if (!listRef.current?.contains(e.target as Node)) setMenu(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [menu]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main"
        className="mx-auto max-w-7xl rounded-[2rem] border border-warm-line bg-white/95 py-2 pl-5 pr-2.5 shadow-[0_6px_24px_rgba(18,41,43,0.08)] backdrop-blur"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href={SITE_URL}
            className="shrink-0 rounded-full py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2"
          >
            <Wordmark className="h-7 w-auto" />
            <span className="sr-only">Doulio home</span>
          </a>

          <ul ref={listRef} className="hidden items-center gap-5 min-[1400px]:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setMenu(link.label)}
                  onMouseLeave={() => setMenu(null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMenu(null);
                  }}
                >
                  <button
                    type="button"
                    aria-expanded={menu === link.label}
                    aria-controls={`nav-${link.label}`}
                    // Hover has usually opened it already, so a click must not toggle it shut.
                    onClick={() => setMenu(link.label)}
                    className={`flex items-center gap-1 py-2 ${LINK} ${menu === link.label ? "text-teal-deep" : ""}`}
                  >
                    {link.label}
                    <Chevron open={menu === link.label} />
                  </button>
                  {menu === link.label && (
                    // pt-3 keeps the pointer inside the item on its way down to the panel.
                    <div id={`nav-${link.label}`} className="absolute -left-4 top-full w-[21rem] pt-3">
                      <ul className="rounded-3xl border border-warm-line bg-white p-2 shadow-[0_18px_44px_rgba(18,41,43,0.14)]">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <a
                              href={child.href}
                              aria-current={child.current ? "page" : undefined}
                              className={`flex items-start gap-3.5 rounded-2xl p-3 transition hover:bg-[#eef5f4] focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-teal-deep ${
                                child.current ? "bg-[#eef5f4]" : ""
                              }`}
                            >
                              <MenuIcon icon={child.icon} />
                              <span>
                                <span className="block font-medium text-ink">{child.label}</span>
                                <span className="block text-sm text-ink-body">{child.body}</span>
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ) : (
                <li key={link.label}>
                  <a href={link.href} className={LINK}>
                    {link.label}
                  </a>
                </li>
              ),
            )}
            <li>
              <a href={SIGN_IN_URL} className={LINK}>
                Log in
              </a>
            </li>
          </ul>

          <div className="flex items-center gap-1.5">
            <a
              href={BOOK_DEMO_URL}
              onClick={() => trackEvent("book_demo_clicked", { location: "nav" })}
              className={`hidden sm:inline-block ${DEMO_BUTTON}`}
            >
              Book a Demo
            </a>
            <GetProLink location="nav" className={PRIMARY_BUTTON_SMALL}>
              Get Doulio PRO
            </GetProLink>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className={`rounded-full p-3 text-ink-soft transition hover:bg-warm-sand min-[1400px]:hidden ${FOCUS}`}
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
          <ul
            id="mobile-nav"
            className="mt-2 max-h-[calc(100dvh-7rem)] space-y-1 overflow-y-auto border-t border-warm-line pb-2 pr-2.5 pt-3 min-[1400px]:hidden"
          >
            {NAV_LINKS.map((link) =>
              link.children ? (
                <li key={link.label}>
                  <p className="px-2 pb-1 pt-2.5 text-sm font-semibold text-ink-muted">{link.label}</p>
                  <ul className="space-y-1">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          aria-current={child.current ? "page" : undefined}
                          className={`flex items-center gap-3 ${MOBILE_LINK}`}
                        >
                          <MenuIcon icon={child.icon} />
                          <span>
                            <span className="block font-medium text-ink">{child.label}</span>
                            <span className="block text-sm text-ink-body">{child.body}</span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={link.label}>
                  <a href={link.href} className={MOBILE_LINK}>
                    {link.label}
                  </a>
                </li>
              ),
            )}
            <li>
              <a href={SIGN_IN_URL} className={MOBILE_LINK}>
                Log in
              </a>
            </li>
            <li className="pt-1 sm:hidden">
              <a
                href={BOOK_DEMO_URL}
                onClick={() => trackEvent("book_demo_clicked", { location: "nav" })}
                className={`block text-center ${DEMO_BUTTON}`}
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
