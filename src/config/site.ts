/** Main marketing site. The PRO page lives at pro.doulio.org, so nav links are absolute. */
export const SITE_URL = "https://www.doulio.org";

export const BOOK_DEMO_URL = "https://scheduler.zoom.us/doulio-inc/book-a-demo";

/** Mirrors the doulio.org top nav (the PRO page adds Log in and Book a Demo beside it). */
export type NavChild = {
  label: string;
  body: string;
  href: string;
  icon: "platform" | "pro" | "trainings" | "upcoming";
  /** The page the visitor is on. */
  current?: boolean;
};

export type NavLink = { label: string; href: string; children?: NavChild[] };

/** This page, as the doulio.org menu links to it. */
export const PRO_URL = "https://pro.doulio.org";

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "About Us", href: `${SITE_URL}/aboutus` },
  { label: "Who We Serve", href: `${SITE_URL}/whoweserve` },
  {
    label: "Platform",
    href: `${SITE_URL}/platform`,
    children: [
      {
        label: "Doulio Platform",
        body: "Software for doula organizations and programs",
        href: `${SITE_URL}/platform`,
        icon: "platform",
      },
      {
        label: "Doulio PRO",
        body: "Your own practice workspace for independent doulas",
        href: PRO_URL,
        icon: "pro",
        current: true,
      },
    ],
  },
  { label: "Become a Doula", href: `${SITE_URL}/becomeadoula` },
  {
    label: "Trainings",
    href: `${SITE_URL}/trainings`,
    children: [
      {
        label: "All Trainings",
        body: "Birth, postpartum and full-spectrum doula trainings",
        href: `${SITE_URL}/trainings`,
        icon: "trainings",
      },
      {
        label: "Upcoming Trainings",
        body: "Dates and locations open for registration",
        href: `${SITE_URL}/trainings#find-training`,
        icon: "upcoming",
      },
    ],
  },
  { label: "Find a Doula", href: `${SITE_URL}/directory` },
  { label: "Contact", href: `${SITE_URL}/contact` },
];

/** "Book complimentary business support": the Zoom Scheduler page for PRO doula business support sessions. */
export const BUSINESS_SUPPORT_URL =
  "https://scheduler.zoom.us/doulio-inc/doulio-pro-doula-business-support";

/** The client app ("Doulio: Doula Care"), as the API's public mobile-version endpoint returns them. */
export const APP_STORE_URL = "https://apps.apple.com/us/app/doulio-doula-care/id6819199825";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=org.doulio.app";

/** Aspiring doulas: where the PRO page sends someone who isn't a doula yet. */
export const BECOME_A_DOULA_PATH = "/becomeadoula";

/**
 * Links for visitors who want to become a doula. `source` says where on this page the link was
 * (it reaches the doulio.org analytics and the contact form's hidden source field).
 * The contact link's `interest=certification` makes the doulio.org form (InquiryPrefill
 * override in Framer) preselect "Becoming a certified doula"; the visitor can still change it.
 */
export function becomeADoulaUrl(source: string): string {
  const url = new URL(BECOME_A_DOULA_PATH, SITE_URL);
  url.searchParams.set("source", `pro-${source}`);
  return url.toString();
}

export function doulaTrainingContactUrl(source: string): string {
  const url = new URL("/contact", SITE_URL);
  url.searchParams.set("interest", "certification");
  url.searchParams.set("source", `pro-${source}`);
  return url.toString();
}
