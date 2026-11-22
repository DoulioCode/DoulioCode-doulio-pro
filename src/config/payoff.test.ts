import { describe, expect, it } from "vitest";
import { payoff } from "./payoff";

describe("payoff", () => {
  it("shows how many months of PRO one visit covers", () => {
    expect(payoff(150)).toEqual({ monthsLabel: "3.8", fullMonths: 3, visitsForYear: 3 });
  });

  it("covers less than a month when a visit pays less than the monthly price", () => {
    expect(payoff(30)).toEqual({ monthsLabel: "0.8", fullMonths: 0, visitsForYear: 13 });
  });

  it("caps at a year", () => {
    expect(payoff(500)).toEqual({ monthsLabel: "12+", fullMonths: 12, visitsForYear: 1 });
  });
});
