import posthog from "posthog-js";

export type AnalyticsEventName =
  | "pro_page_viewed"
  | "faq_opened"
  | "get_pro_clicked"
  | "book_demo_clicked";

type AnalyticsPayload = Record<string, unknown>;

let postHogInitialized = false;

function ensurePostHog(): boolean {
  if (postHogInitialized) return true;
  if (typeof window === "undefined") return false;

  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return false;

  posthog.init(key, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || "https://us.i.posthog.com",
    capture_pageview: false,
    autocapture: false,
    persistence: "memory",
  });
  postHogInitialized = true;
  return true;
}

/**
 * Thin analytics abstraction, matching doulio-readiness-assessment. Uses PostHog
 * when NEXT_PUBLIC_POSTHOG_KEY is set; otherwise logs to the console in dev.
 * This page collects no personal information, so payloads carry only which
 * plan, question or link was used.
 */
export function trackEvent(event: AnalyticsEventName, payload: AnalyticsPayload = {}): void {
  if (typeof window === "undefined") return;

  if (ensurePostHog()) {
    posthog.capture(event, payload);
    return;
  }

  if (process.env.NODE_ENV !== "production") {
    console.log(`[analytics:stub] ${event}`, payload);
  }
}
