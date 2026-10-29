/** Main marketing site. The PRO page lives at pro.doulio.org, so nav links are absolute. */
export const SITE_URL = "https://www.doulio.org";

export const BOOK_DEMO_URL = "https://scheduler.zoom.us/doulio-inc/book-a-demo";

/** Mirrors the doulio.org top nav. */
export const NAV_LINKS = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "About Us", href: `${SITE_URL}/aboutus` },
  { label: "Who We Serve", href: `${SITE_URL}/whoweserve` },
  { label: "Platform", href: `${SITE_URL}/platform` },
  { label: "Become a Doula", href: `${SITE_URL}/becomeadoula` },
  { label: "Trainings", href: `${SITE_URL}/trainings` },
  { label: "Find a Doula", href: `${SITE_URL}/directory` },
  { label: "Contact", href: `${SITE_URL}/contact` },
];

/**
 * Where "Book free business support" goes. Waiting on the booking link for PRO
 * business support sessions; until then it opens the contact form, tagged so the
 * team can tell these requests apart.
 */
export const BUSINESS_SUPPORT_URL =
  process.env.NEXT_PUBLIC_BUSINESS_SUPPORT_URL ||
  `${SITE_URL}/contact?interest=customer-support&source=pro-business-support`;

/** The client app ("Doulio: Doula Care"), as the API's public mobile-version endpoint returns them. */
export const APP_STORE_URL = "https://apps.apple.com/us/app/doulio-doula-care/id6819199825";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=org.doulio.app";
