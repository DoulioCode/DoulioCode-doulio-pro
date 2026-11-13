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
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${rethinkSans.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
