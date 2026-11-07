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

const TITLE = "Doulio PRO | Get paid by families and by insurance";
const DESCRIPTION =
  "Doulio PRO helps independent doulas get paid by families and by insurance: bill insurance, take card payments, and manage clients, leads, DOCS and reviews in one workspace, with complimentary business support and the Doulio app for their clients. $39 a month or $390 a year.";

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
