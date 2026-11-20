/**
 * The Doulio product line, for the "Which Doulio is right for you?" finder.
 * Prices and features come from the Doulio Platform Overview; keep them in step with it
 * (and PRO's with Stripe, see `PLANS` in ./pro).
 */

export type ProductId = "pro" | "team" | "os" | "enterprise";

export type Product = {
  id: ProductId;
  /** Eyebrow, e.g. "Doulio PRO + Seats". */
  name: string;
  /** Who it is for, used as the result headline. */
  audience: string;
  price: string;
  period: string;
  priceNote: string;
  features: string[];
  /** PRO and PRO + Seats are bought in the app; OS and Enterprise start with a demo. */
  action: "get_pro" | "book_demo";
};

/** PRO + Seats: each added doula, monthly. Must match Stripe. */
export const SEAT_PRICE_MONTHLY = 9.99;
export const PRO_PRICE_MONTHLY = 39;
/** A PRO team is you plus up to 4 doulas. */
export const MAX_TEAM_SIZE = 5;

export const PRODUCTS: Record<ProductId, Product> = {
  pro: {
    id: "pro",
    name: "Doulio PRO",
    audience: "Independent doulas",
    price: "$39",
    period: "/month",
    priceNote: "or $390/year, two months free",
    features: [
      "Your own private practice: clients, DOCS and income",
      "Public page in the Doulio directory",
      "Insurance billing, invoices and card payments",
      "Complimentary business support",
    ],
    action: "get_pro",
  },
  team: {
    id: "team",
    name: "Doulio PRO + Seats",
    audience: "Small teams",
    price: "+$9.99",
    period: "/doula/month",
    priceNote: "or $99.90 per doula/year, on top of PRO",
    features: [
      "Add up to 4 doulas, a team of 5 in all",
      "Teammates work in every client's record",
      "One lead list, calendar and template set",
      "Backup coverage with other PRO doulas",
    ],
    action: "get_pro",
  },
  os: {
    id: "os",
    name: "Doulio OS",
    audience: "Agencies and organizations",
    price: "From $3,000",
    period: "/year",
    priceNote: "billed yearly or monthly",
    features: [
      "Lead stages, website inquiry forms and proposals",
      "Contractor agreements your doulas sign in Doulio",
      "Shift scheduling, claims and reporting",
      "Training and certification programs",
    ],
    action: "book_demo",
  },
  enterprise: {
    id: "enterprise",
    name: "Doulio Enterprise",
    audience: "Enterprises with sites",
    price: "Custom",
    period: "",
    priceNote: "book a demo for a quote",
    features: [
      "One enterprise, many sites, each with its own admin",
      "Assign locked courses, programs and resources to every site",
      "Credentials issued under the enterprise's name",
      "Combined reports across sites, with CSV export",
    ],
    action: "book_demo",
  },
};

export const PRODUCT_ORDER: ProductId[] = ["pro", "team", "os", "enterprise"];

/** The finder's first question: "Which sounds most like you?" */
export type WorkStyle =
  | "solo"
  | "org_member"
  | "team"
  | "organization"
  | "multisite"
  | "not_a_doula";

export const WORK_STYLES: Array<{ id: WorkStyle; label: string; detail: string }> = [
  {
    id: "solo",
    label: "I'm an independent doula",
    detail: "I run my own practice, or I'm getting it started.",
  },
  {
    id: "org_member",
    label: "I work with an organization, and want my own practice too",
    detail: "My organization uses Doulio, and I take private clients on the side.",
  },
  {
    id: "team",
    label: "I work with a few partner doulas",
    detail: "We share clients, cover for each other and run one practice together.",
  },
  {
    id: "organization",
    label: "I run an agency, program or organization",
    detail: "Doulas on staff or contract, scheduling, claims, training.",
  },
  {
    id: "multisite",
    label: "We have several sites or locations",
    detail: "One organization with an admin at each site.",
  },
  {
    id: "not_a_doula",
    label: "I'm not a doula yet",
    detail: "I'd like to become one.",
  },
];

export type Recommendation =
  | { kind: "product"; product: ProductId; teamSize?: number }
  | { kind: "become_a_doula" };

/**
 * Picks a plan. `teamSize` (doulas including you) only matters for "team": up to
 * MAX_TEAM_SIZE fits PRO + Seats; a bigger group needs Doulio OS.
 */
export function recommend(style: WorkStyle, teamSize = 2): Recommendation {
  switch (style) {
    case "solo":
    case "org_member":
      return { kind: "product", product: "pro" };
    case "team":
      return teamSize <= MAX_TEAM_SIZE
        ? { kind: "product", product: "team", teamSize }
        : { kind: "product", product: "os" };
    case "organization":
      return { kind: "product", product: "os" };
    case "multisite":
      return { kind: "product", product: "enterprise" };
    case "not_a_doula":
      return { kind: "become_a_doula" };
  }
}

/** Monthly price of a PRO team: PRO plus a seat for each doula after you. */
export function teamMonthlyTotal(teamSize: number): number {
  const seats = Math.max(0, Math.min(teamSize, MAX_TEAM_SIZE) - 1);
  return Math.round((PRO_PRICE_MONTHLY + seats * SEAT_PRICE_MONTHLY) * 100) / 100;
}

export function formatUsd(amount: number): string {
  return `$${amount.toFixed(2).replace(/\.00$/, "")}`;
}
