import { Wordmark } from "@/components/Wordmark";
import { BOOK_DEMO_URL, NAV_LINKS, SITE_URL } from "@/config/site";

const GET_IN_TOUCH = [
  { label: "Become a Doula", href: `${SITE_URL}/becomeadoula` },
  { label: "Verify a Doula", href: `${SITE_URL}/verifications` },
  { label: "Contact", href: `${SITE_URL}/contact` },
];

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white sm:mt-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)_minmax(0,1fr)]">
        <div className="sm:col-span-2 lg:col-span-1">
          <Wordmark className="h-7 w-auto" />
          <p className="mt-4 max-w-sm text-sm text-slate-600">
            Doulio helps doula organizations, healthcare partners, and community programs manage
            training, care delivery, documentation, and reporting in one connected platform.
          </p>
          <a
            href={BOOK_DEMO_URL}
            className="mt-6 inline-block rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2"
          >
            Book a Demo
          </a>
        </div>

        <FooterColumn title="Start Here" links={NAV_LINKS.slice(1, 6)} />
        <FooterColumn title="Get in touch" links={GET_IN_TOUCH} />
      </div>

      <div className="border-t border-slate-100 px-4 py-6 sm:px-6">
        <p className="mx-auto max-w-6xl text-xs text-slate-500">
          Making doula support work everywhere it’s needed. ·{" "}
          <a
            href={SITE_URL}
            className="underline decoration-slate-300 underline-offset-2 transition hover:text-teal-dark"
          >
            doulio.org
          </a>
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <nav aria-label={title}>
      <h2 className="font-display text-sm font-semibold uppercase tracking-wide text-slate-500">
        {title}
      </h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-slate-700 transition hover:text-teal-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-dark focus-visible:ring-offset-2"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
