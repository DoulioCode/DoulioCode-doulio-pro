/**
 * Page copy. Every feature listed here exists in My Practice today (the same
 * list as the Doulio PRO page inside the app) — keep it that way: don't
 * advertise roadmap items until they ship.
 */

/** Trust points shown under the hero buttons. */
export const TRUST_POINTS: string[] = [
  "HIPAA compliant",
  "Your own public page",
  "Client app included",
  "No website needed",
];

/** The smaller features under the four showcases (clients, DOCS, insurance, reports). */
export const MORE_FEATURES: Array<{ title: string; body: string }> = [
  {
    title: "Your public page",
    body: "Families find you in the Doulio directory, with your reviews and a request button. No website needed.",
  },
  {
    title: "Leads that become clients",
    body: "Every directory inquiry lands in your own lead list, with follow-up reminders and consult forms. Turn a lead into a client in one step.",
  },
  {
    title: "Invoices and payments",
    body: "Bill private-pay clients and collect by card, straight to your own Stripe account.",
  },
  {
    title: "Verified reviews",
    body: "Collect reviews from real clients through private links. They stay yours, with or without PRO.",
  },
  {
    title: "Calendar",
    body: "Show your availability and keep track of due dates and what is coming up.",
  },
  {
    title: "A client app",
    body: "Your clients get the Doulio app to stay connected with you.",
  },
  {
    title: "Opportunities",
    body: "Connect with other organizations that are looking for doulas.",
  },
  {
    title: "Your resource library",
    body: "Keep your handouts, guides, files and links in one organized place.",
  },
  {
    title: "Your credentials go with you",
    body: "Your profile and credentials belong to you, in your practice and in any organization you work with.",
  },
];

export const STEPS: Array<{ title: string; body: string }> = [
  {
    title: "Create your account",
    body: "Sign up with your email and confirm it with a code. Already on Doulio? Sign in instead.",
  },
  {
    title: "Choose monthly or yearly",
    body: "Pay securely with Stripe. Doulio never sees your card details.",
  },
  {
    title: "Open My Practice",
    body: "Your private practice is ready as soon as payment goes through, and sits next to any organization you work with. Add your first client.",
  },
];

export const FAQS: Array<{ question: string; answer: string }> = [
  {
    question: "What is Doulio PRO?",
    answer:
      "Doulio PRO gives an independent doula her own workspace, My Practice, for running her practice: clients, DOCS, insurance claims, invoices and payments, leads, reviews, resources and reports.",
  },
  {
    question: "Is PRO a certification?",
    answer:
      "No. PRO describes how you run your practice, not your training or credential level. Your credentials are shown separately, exactly as they were issued.",
  },
  {
    question: "Do I need to be certified to get PRO?",
    answer: "No. Any doula can get PRO.",
  },
  {
    question: "I already work with an organization on Doulio. Can I still get PRO?",
    answer:
      "Yes. My Practice is separate from your organization and sits alongside it, and you switch between them from the top of the app. Your organization work stays with the organization, and your practice is private to you.",
  },
  {
    question: "Can my organization see my practice?",
    answer:
      "No. Your practice is private to you. Its clients, records and income are yours.",
  },
  {
    question: "Is Doulio PRO HIPAA compliant?",
    answer: "Yes. Client information is protected and kept private to your practice.",
  },
  {
    question: "Can I bill insurance?",
    answer:
      "Yes, where your state covers doula care. Check a client's eligibility, submit claims and get reimbursed, all from My Practice. We turn insurance billing on for your practice once your billing details (NPI, tax ID and payer enrollment) are in place.",
  },
  {
    question: "Can I take payments from clients?",
    answer:
      "Yes. Invoice private-pay clients and let them pay by card. The money goes straight to your own Stripe account; Doulio never holds it.",
  },
  {
    question: "Can I cancel?",
    answer:
      "Yes, anytime, from Manage billing in the app. If PRO ends, your practice becomes view-only: nothing is deleted, and it opens again when you renew.",
  },
  {
    question: "Is tax included?",
    answer: "Prices are in US dollars. Any applicable sales tax is added at checkout.",
  },
];
