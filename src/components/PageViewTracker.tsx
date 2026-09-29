"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

// Module scope, so React's development double-effect cannot send it twice.
let sent = false;

/** Fires one page-view event per visit. */
export function PageViewTracker() {
  useEffect(() => {
    if (sent) return;
    sent = true;
    trackEvent("pro_page_viewed");
  }, []);

  return null;
}
