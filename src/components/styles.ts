/** Teal-to-violet-to-pink, the same headline gradient as the Doulio PRO page in the app. */
export const GRADIENT_TEXT =
  "bg-gradient-to-r from-teal-dark via-pro-violet to-pro-pink bg-clip-text text-transparent";

/** Shared type styles for the page's sections. */
export const HEADING =
  "text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl";
export const EYEBROW = "font-display text-[17px] font-semibold text-pro-pink-deep";
export const LEAD = "text-pretty text-lg text-ink-body sm:text-xl";

const FOCUS =
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-pro-pink-btn focus-visible:ring-offset-2";

/** The PRO call to action: pink to violet, dark enough for white text. */
export const PRIMARY_BUTTON = `inline-flex min-h-14 items-center justify-center rounded-full bg-gradient-to-r from-pro-pink-btn to-pro-violet-btn px-8 text-center text-lg font-semibold text-white shadow-lg shadow-pro-pink-btn/25 transition hover:opacity-90 ${FOCUS}`;
export const PRIMARY_BUTTON_SMALL = `inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full bg-gradient-to-r from-pro-pink-btn to-pro-violet-btn px-5 text-[15px] font-semibold text-white transition hover:opacity-90 ${FOCUS}`;
export const SECONDARY_BUTTON = `inline-flex min-h-14 items-center justify-center gap-2.5 rounded-full border border-[#cfd9d8] bg-white px-7 text-center text-lg font-semibold text-ink transition hover:border-ink ${FOCUS}`;
