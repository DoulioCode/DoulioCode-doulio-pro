import { PRICE_MONTHLY, PRICE_YEARLY } from "./pro";

/**
 * "PRO pays for itself" calculator. The visitor enters what she is paid for one visit; the
 * rest is arithmetic against the PRO prices. No rates are assumed: PAYOFF_DEFAULT_RATE is
 * only where the slider starts.
 */
export const PAYOFF_MIN_RATE = 50;
export const PAYOFF_MAX_RATE = 400;
export const PAYOFF_STEP = 10;
export const PAYOFF_DEFAULT_RATE = 150;

export function payoff(rate: number): {
  /** Months of the monthly plan one visit covers, e.g. "3.8", capped at "12+". */
  monthsLabel: string;
  /** Whole months covered, 0 to 12, for the twelve-month bar. */
  fullMonths: number;
  /** Visits that cover the yearly plan. */
  visitsForYear: number;
} {
  const covered = rate / PRICE_MONTHLY;
  return {
    monthsLabel: covered >= 12 ? "12+" : covered.toFixed(1),
    fullMonths: Math.min(12, Math.floor(covered)),
    visitsForYear: Math.ceil(PRICE_YEARLY / rate),
  };
}
