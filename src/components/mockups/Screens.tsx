import { AppShell, Card } from "./AppChrome";

/**
 * My Practice screens for the product mockups, drawn at 1280×800 (laptop) or
 * 390×845 (phone). Sample data only — names are illustrative.
 */

const CLIENTS = [
  { name: "Maya Robinson", due: "Oct 14", service: "Birth", docs: "3 of 4", status: "Active" },
  { name: "Aaliyah Turner", due: "Oct 29", service: "Birth + Postpartum", docs: "4 of 4", status: "Active" },
  { name: "Sofia Hernández", due: "Nov 8", service: "Postpartum", docs: "2 of 4", status: "Active" },
  { name: "Grace Kim", due: "Nov 21", service: "Birth", docs: "1 of 4", status: "New" },
  { name: "Imani Brooks", due: "Dec 3", service: "Birth", docs: "0 of 4", status: "New" },
  { name: "Olivia Martin", due: "Sep 30", service: "Birth", docs: "4 of 4", status: "Delivered" },
];

function StatusPill({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Active: "bg-[#e6f2f2] text-[#178488]",
    New: "bg-[#fdf1e6] text-[#b86a1f]",
    Delivered: "bg-[#eef0f4] text-[#4b5563]",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[status]}`}>
      {status}
    </span>
  );
}

export function DashboardScreen() {
  return (
    <AppShell active="Dashboard">
      <h1 className="text-2xl font-semibold">Good morning, Jane</h1>
      <p className="mt-1 text-sm text-[#6b8283]">Here&apos;s what needs you this week.</p>
      <div className="mt-6 grid grid-cols-4 gap-4">
        {[
          ["Active clients", "12"],
          ["Due in 30 days", "3"],
          ["DOCS this month", "18"],
          ["Babies born this year", "27"],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-xs font-medium uppercase tracking-wide text-[#6b8283]">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-[#178488]">{value}</p>
          </Card>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-5 gap-4">
        <Card className="col-span-3">
          <p className="font-semibold">Upcoming due dates</p>
          <div className="mt-3 divide-y divide-[#edf2f2]">
            {CLIENTS.slice(0, 4).map((c) => (
              <div key={c.name} className="flex items-center justify-between py-2.5 text-sm">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f2f2] text-xs font-semibold text-[#178488]">
                    {c.name.split(" ").map((p) => p[0]).join("")}
                  </span>
                  <span className="font-medium">{c.name}</span>
                </div>
                <span className="text-[#6b8283]">{c.due}</span>
              </div>
            ))}
          </div>
        </Card>
        <Card className="col-span-2">
          <p className="font-semibold">Recent DOCS</p>
          <div className="mt-3 space-y-3 text-sm">
            {[
              ["Prenatal visit 2", "Maya Robinson"],
              ["Birth plan", "Aaliyah Turner"],
              ["Intake", "Grace Kim"],
            ].map(([form, client]) => (
              <div key={form} className="rounded-xl bg-[#f6f9f9] p-3">
                <p className="font-medium">{form}</p>
                <p className="text-xs text-[#6b8283]">Recorded for {client}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </AppShell>
  );
}

export function ClientsScreen() {
  return (
    <AppShell active="Clients">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Clients</h1>
          <p className="mt-1 text-sm text-[#6b8283]">12 active · 3 due in the next 30 days</p>
        </div>
        <span className="rounded-full bg-[#178488] px-4 py-2 text-sm font-semibold text-white">
          + Add Client
        </span>
      </div>
      <Card className="mt-6 p-0">
        <div className="grid grid-cols-[2fr_1fr_1.4fr_1fr_1fr_0.6fr] gap-4 border-b border-[#edf2f2] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-[#6b8283]">
          <span>Client</span>
          <span>Due date</span>
          <span>Services</span>
          <span>DOCS</span>
          <span>Status</span>
          <span />
        </div>
        {CLIENTS.map((c) => (
          <div
            key={c.name}
            className="grid grid-cols-[2fr_1fr_1.4fr_1fr_1fr_0.6fr] items-center gap-4 border-b border-[#edf2f2] px-5 py-3.5 text-sm last:border-0"
          >
            <span className="flex items-center gap-3 font-medium">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f2f2] text-xs font-semibold text-[#178488]">
                {c.name.split(" ").map((p) => p[0]).join("")}
              </span>
              {c.name}
            </span>
            <span className="text-[#4a5f60]">{c.due}</span>
            <span className="text-[#4a5f60]">{c.service}</span>
            <span className="text-[#4a5f60]">{c.docs}</span>
            <span>
              <StatusPill status={c.status} />
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#dce6e6] text-[#178488]">
              +
            </span>
          </div>
        ))}
      </Card>
    </AppShell>
  );
}

const MONTHS = [
  ["Apr", 3],
  ["May", 5],
  ["Jun", 4],
  ["Jul", 7],
  ["Aug", 6],
  ["Sep", 9],
] as const;

export function ReportsScreen() {
  const max = 10;
  return (
    <AppShell active="Reports">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Reports</h1>
          <p className="mt-1 text-sm text-[#6b8283]">Totals and rates for your practice.</p>
        </div>
        <span className="rounded-full border border-[#dce6e6] bg-white px-4 py-2 text-sm font-semibold text-[#178488]">
          Download PDF
        </span>
      </div>
      <div className="mt-6 grid grid-cols-3 gap-4">
        {[
          ["Clients served", "34"],
          ["Babies born", "27"],
          ["Intake completed", "94%"],
        ].map(([label, value]) => (
          <Card key={label}>
            <p className="text-xs font-medium uppercase tracking-wide text-[#6b8283]">{label}</p>
            <p className="mt-2 text-3xl font-semibold text-[#178488]">{value}</p>
          </Card>
        ))}
      </div>
      <Card className="mt-4">
        <p className="font-semibold">New clients by month</p>
        <div className="mt-6 flex h-64 items-end gap-6 px-4">
          {MONTHS.map(([month, value]) => (
            <div key={month} className="flex flex-1 flex-col items-center gap-2">
              <span className="text-xs font-semibold text-[#4a5f60]">{value}</span>
              <div
                className="w-full rounded-t-lg bg-gradient-to-t from-[#178488] to-[#4cb2a6]"
                style={{ height: `${(value / max) * 200}px` }}
              />
              <span className="text-xs text-[#6b8283]">{month}</span>
            </div>
          ))}
        </div>
      </Card>
    </AppShell>
  );
}

/** Phone: recording a client's DOCS from the Clients list */
export function RecordDocsPhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f6f9f9] px-5 pb-6 pt-14 text-[#2a3b3c]">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#178488]">My Practice</p>
      <h1 className="mt-1 text-2xl font-semibold">DOCS for Maya</h1>
      <p className="mt-1 text-sm text-[#6b8283]">Record a new entry, or continue a draft.</p>
      <div className="mt-5 space-y-3">
        {[
          ["Intake", "Recorded Sep 2", "View"],
          ["Birth plan", "Draft saved yesterday", "Continue"],
          ["Prenatal visit", "2 records", "+ Record"],
          ["Postpartum check-in", "Not recorded yet", "+ Record"],
        ].map(([form, detail, action]) => (
          <div
            key={form}
            className="flex items-center justify-between rounded-2xl border border-[#dce6e6] bg-white p-4 shadow-sm"
          >
            <div>
              <p className="font-semibold">{form}</p>
              <p className="text-xs text-[#6b8283]">{detail}</p>
            </div>
            <span
              className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                action === "+ Record"
                  ? "bg-[#178488] text-white"
                  : "border border-[#dce6e6] text-[#178488]"
              }`}
            >
              {action}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-2xl bg-white p-4 text-center text-sm shadow-sm">
        <span className="font-semibold text-[#178488]">Recorded</span>
        <span className="text-[#6b8283]"> · Prenatal visit, just now</span>
      </div>
    </div>
  );
}

/** Phone: the dashboard on a small screen */
export function DashboardPhoneScreen() {
  return (
    <div className="flex h-full w-full flex-col bg-[#f6f9f9] px-5 pb-6 pt-14 text-[#2a3b3c]">
      <p className="text-xs font-semibold uppercase tracking-wide text-[#178488]">My Practice</p>
      <h1 className="mt-1 text-2xl font-semibold">Good morning, Jane</h1>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          ["Active clients", "12"],
          ["Due soon", "3"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-[#dce6e6] bg-white p-4 shadow-sm">
            <p className="text-[11px] font-medium uppercase tracking-wide text-[#6b8283]">
              {label}
            </p>
            <p className="mt-1 text-3xl font-semibold text-[#178488]">{value}</p>
          </div>
        ))}
      </div>
      <p className="mt-6 font-semibold">Upcoming due dates</p>
      <div className="mt-3 space-y-2">
        {CLIENTS.slice(0, 4).map((c) => (
          <div
            key={c.name}
            className="flex items-center justify-between rounded-2xl bg-white p-3.5 text-sm shadow-sm"
          >
            <span className="font-medium">{c.name}</span>
            <span className="text-[#6b8283]">{c.due}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 font-semibold">Recent DOCS</p>
      <div className="mt-3 space-y-2">
        {[
          ["Prenatal visit 2", "Maya Robinson"],
          ["Birth plan", "Aaliyah Turner"],
          ["Intake", "Grace Kim"],
        ].map(([form, client]) => (
          <div key={form} className="rounded-2xl bg-white p-3.5 text-sm shadow-sm">
            <p className="font-medium">{form}</p>
            <p className="text-xs text-[#6b8283]">Recorded for {client}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
