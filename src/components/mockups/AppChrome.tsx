import type { ReactNode } from "react";

/** The My Practice app shell (sidebar and header), as in the real app. */
const NAV = ["Dashboard", "Clients", "DOCS", "Claims", "Resources", "Reports", "Settings"];

export function AppShell({ active, children }: { active: string; children: ReactNode }) {
  return (
    <div className="flex h-full w-full bg-[#f6f9f9] text-[#2a3b3c]">
      <aside className="flex w-56 shrink-0 flex-col border-r border-[#dce6e6] bg-white px-4 py-5">
        <div className="mb-6 flex items-center gap-2 px-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#178488] text-sm font-bold text-white">
            JD
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">My Practice</p>
            <p className="text-xs text-[#6b8283]">Jane Doe Doula Care</p>
          </div>
        </div>
        <nav className="space-y-1">
          {NAV.map((item) => (
            <div
              key={item}
              className={`rounded-lg px-3 py-2 text-sm ${
                item === active ? "bg-[#e6f2f2] font-semibold text-[#178488]" : "text-[#4a5f60]"
              }`}
            >
              {item}
            </div>
          ))}
        </nav>
        <div className="mt-auto rounded-xl bg-gradient-to-br from-[#178488] to-[#1fa3a8] p-3 text-xs text-white">
          <p className="font-semibold">Doulio PRO</p>
          <p className="opacity-80">Active</p>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-[#dce6e6] bg-white px-8">
          <p className="text-sm text-[#6b8283]">{active}</p>
          <div className="flex items-center gap-3">
            <span className="h-8 w-8 rounded-full bg-[#e6f2f2]" />
            <span className="h-8 w-8 rounded-full bg-[#f0c2ad]" />
          </div>
        </header>
        <main className="flex-1 overflow-hidden p-8">{children}</main>
      </div>
    </div>
  );
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-[#dce6e6] bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}
