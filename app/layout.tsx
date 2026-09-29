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

const TITLE = "Doulio PRO | Run your doula practice in one place";
const DESCRIPTION =
  "Doulio PRO gives independent doulas their own workspace for clients, DOCS, resources and reports. $39 a month or $390 a year.";

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
