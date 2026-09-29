"use client";

import type { ReactNode } from "react";
import { getProUrl, type ProPlan } from "@/config/pro";
import { trackEvent } from "@/lib/analytics";

/** "Get Doulio PRO" link into the app's sign-up; reports where and which plan. */
export function GetProLink({
  location,
  plan,
  className,
  children,
}: {
  location: string;
  plan?: ProPlan;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={getProUrl(plan)}
      className={className}
      onClick={() => trackEvent("get_pro_clicked", { location, plan: plan ?? null })}
    >
      {children}
    </a>
  );
}
