import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Rethink_Sans } from "next/font/google";
import "./globals.css";

/** Same typefaces as doulio.org: Rethink Sans for headings, Inter for body copy. */
const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const TITLE = "Doulio PRO | Doula work, made easy";
const DESCRIPTION =
  "Doulio PRO makes doula work easy: clients, paperwork and payments, including insurance billing, in one simple place, with complimentary business support and an app for your clients. $39 a month or $390 a year.";

/** The picture shown when the link is shared (iMessage, Facebook, LinkedIn, X). 1200 x 630. */
const OG_IMAGE = "/og/doulio-pro.png";
const OG_IMAGE_ALT =
  "Doulio PRO: Doula work, made easy. Clients, paperwork and payments, including insurance billing, in one simple place.";

export const metadata: Metadata = {
  metadataBase: new URL("https://pro.doulio.org"),
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    type: "website",
    siteName: "Doulio",
    url: "https://pro.doulio.org",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_IMAGE_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: OG_IMAGE, alt: OG_IMAGE_ALT }],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
