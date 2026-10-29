/**
 * Page copy. Every feature listed here exists in My Practice today (the same
 * list as the Doulio PRO page inside the app) — keep it that way: don't
 * advertise roadmap items until they ship.
 */

/** Trust points shown under the hero buttons. */
export const TRUST_POINTS: string[] = [
  "Free business support",
  "HIPAA compliant",
  "Client app for iPhone and Android",
  "Your own public page",
  "No website needed",
];

/**
 * Free business support for PRO doulas. A service from the Doulio team, not a
 * feature of the app: keep the topics tied to what PRO actually does.
 */
export const SUPPORT_TOPICS: Array<{ title: string; body: string }> = [
  {
    title: "Set up your practice",
    body: "Your services, DOCS forms and public page, ready for your first client.",
  },
  {
    title: "Get paid for your work",
    body: "Get ready to bill insurance (NPI, tax ID, payer enrollment) and set up invoices for private-pay clients.",
  },
  {
    title: "Get found by families",
    body: "Make the most of your directory profile, consult forms and verified reviews.",
  },
  {
    title: "Grow with a plan",
    body: "Use your reports to see what is working, and talk through your next step.",
  },
];

/** "Built to grow with you": the path from first inquiry to review, all inside PRO. */
export const GROWTH_STEPS: Array<{ title: string; body: string }> = [
  {
    title: "Get found",
    body: "Families find your public page in the Doulio directory and ask for a consult.",
  },
  {
    title: "Win the consult",
    body: "Every inquiry is a lead with follow-up reminders and your own consult form.",
  },
  {
    title: "Welcome the client",
    body: "Turn a lead into a client in one step. They get an invitation to the Doulio app.",
  },
  {
    title: "Do your best work",
    body: "Record DOCS, keep notes and share resources, from your laptop or your phone.",
  },
  {
    title: "Get paid",
    body: "Bill insurance where your state covers doula care, or invoice and collect by card.",
  },
  {
    title: "Earn the next client",
    body: "Ask for a verified review, and watch your reports grow with your practice.",
  },
];

/** What a client can do in the Doulio app (from its App Store listing). */
export const CLIENT_APP_FEATURES: Array<{ title: string; body: string }> = [
  { title: "Messages", body: "Chat securely with you and share photos and files." },
  { title: "Visits", body: "See the next meeting and get reminders." },
  { title: "Forms", body: "Fill in the intake and care forms you assign, and finish later." },
  { title: "Documents", body: "Open what you share and browse your resources." },
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
    title: "Works on any device",
    body: "My Practice runs in your browser on a laptop, tablet or phone. Nothing to install.",
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
      "Doulio PRO gives an independent doula her own workspace, My Practice, for running and growing her practice: clients, DOCS, insurance claims, invoices and payments, leads, reviews, resources and reports, plus free business support from the Doulio team and the Doulio app for her clients.",
  },
  {
    question: "What is the free business support?",
    answer:
      "Every PRO doula can book time with the Doulio team for help growing her business: setting up her practice, getting ready to bill insurance, invoicing, getting found in the directory and using her reports. It is included with PRO at no extra cost.",
  },
  {
    question: "Do my clients pay for the Doulio app?",
    answer:
      "No. The Doulio app is free on the App Store and Google Play. When you add a client, they get an invitation to sign in, and then they can message you, see visits, fill in the forms you assign and open what you share.",
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
