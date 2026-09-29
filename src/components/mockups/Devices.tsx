import type { ReactNode } from "react";

/**
 * Device frames for product mockups. The screens inside are drawn in code
 * (not screenshots), so they stay sharp at every size. Decorative: the
 * frame carries the accessible label, the screen contents are hidden.
 */
export function Laptop({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure role="img" aria-label={label} className="mx-auto w-full max-w-5xl">
      <div className="rounded-t-[1.25rem] bg-slate-900 p-[1.2%] shadow-2xl shadow-slate-900/20 ring-1 ring-slate-900/10">
        <div
          aria-hidden="true"
          className="aspect-[16/10] overflow-hidden rounded-[0.6rem] bg-white text-left"
        >
          {children}
        </div>
      </div>
      <div aria-hidden="true" className="relative mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-2xl bg-gradient-to-b from-slate-300 to-slate-400 sm:h-4">
        <div className="absolute left-1/2 top-0 h-1.5 w-1/6 -translate-x-1/2 rounded-b-lg bg-slate-400/80" />
      </div>
    </figure>
  );
}

export function Phone({ label, children }: { label: string; children: ReactNode }) {
  return (
    <figure role="img" aria-label={label} className="mx-auto w-full max-w-[18rem]">
      <div className="rounded-[2.6rem] bg-slate-900 p-2.5 shadow-2xl shadow-slate-900/25 ring-1 ring-slate-900/10">
        <div
          aria-hidden="true"
          className="relative aspect-[9/19.5] overflow-hidden rounded-[2.1rem] bg-white text-left"
        >
          <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-slate-900" />
          {children}
        </div>
      </div>
    </figure>
  );
}
