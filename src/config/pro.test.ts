import { describe, expect, it } from "vitest";
import { getProUrl, PLANS } from "./pro";

describe("getProUrl", () => {
  it("sends Get Doulio PRO to the app's sign-up", () => {
    expect(getProUrl()).toBe("https://app.doulio.org/pro/start");
  });

  it("preselects the plan", () => {
    expect(getProUrl("yearly")).toBe("https://app.doulio.org/pro/start?plan=yearly");
    expect(getProUrl("monthly")).toBe("https://app.doulio.org/pro/start?plan=monthly");
  });
});

describe("PLANS", () => {
  it("offers monthly and yearly", () => {
    expect(PLANS.map((p) => p.plan)).toEqual(["monthly", "yearly"]);
  });
});
