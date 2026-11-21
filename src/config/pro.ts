/**
 * Doulio PRO — prices and where "Get Doulio PRO" goes.
 *
 * The sign-up itself lives in the Doulio app (it creates the account, verifies
 * the email, takes payment through Stripe Checkout and opens My Practice), so
 * every call to action links there. `plan` preselects monthly or yearly.
 */
export const APP_URL = process.env.NEXT_PUBLIC_DOULIO_APP_URL || "https://app.doulio.org";

export type ProPlan = "monthly" | "yearly";

export function getProUrl(plan?: ProPlan): string {
  const url = new URL("/pro/start", APP_URL);
  if (plan) url.searchParams.set("plan", plan);
  return url.toString();
}

/** Existing Doulio accounts sign in and buy from the app's PRO page. */
export const SIGN_IN_URL = new URL("/", APP_URL).toString();

/** Must match the Stripe prices (doulio-api STRIPE_PRICE_MONTHLY / STRIPE_PRICE_YEARLY). */
export const PRICE_MONTHLY = 39;
export const PRICE_YEARLY = 390;

/** What the yearly plan works out to per month, e.g. "$32.50". */
export const YEARLY_PER_MONTH = `$${(PRICE_YEARLY / 12).toFixed(2)}`;

export const PLANS: Array<{
  plan: ProPlan;
  name: string;
  price: string;
  period: string;
  note: string;
}> = [
  { plan: "monthly", name: "Monthly", price: `$${PRICE_MONTHLY}`, period: "per month", note: "Cancel anytime" },
  {
    plan: "yearly",
    name: "Yearly",
    price: `$${PRICE_YEARLY}`,
    period: "per year",
    note: "Two months free compared with monthly",
  },
];
