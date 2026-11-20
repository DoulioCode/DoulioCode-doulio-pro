import { describe, expect, it } from "vitest";
import { formatUsd, MAX_TEAM_SIZE, PRODUCTS, recommend, teamMonthlyTotal, WORK_STYLES } from "./products";

describe("recommend", () => {
  it("sends independent doulas to PRO, including those who also work with an organization", () => {
    expect(recommend("solo")).toEqual({ kind: "product", product: "pro" });
    expect(recommend("org_member")).toEqual({ kind: "product", product: "pro" });
  });

  it("sends teams of up to 5 to PRO + Seats", () => {
    expect(recommend("team", 2)).toEqual({ kind: "product", product: "team", teamSize: 2 });
    expect(recommend("team", MAX_TEAM_SIZE)).toEqual({
      kind: "product",
      product: "team",
      teamSize: MAX_TEAM_SIZE,
    });
  });

  it("sends bigger groups and organizations to Doulio OS", () => {
    expect(recommend("team", MAX_TEAM_SIZE + 1)).toEqual({ kind: "product", product: "os" });
    expect(recommend("organization")).toEqual({ kind: "product", product: "os" });
  });

  it("sends organizations that train doulas to Doulio OS + LMS", () => {
    expect(recommend("organization", 2, true)).toEqual({ kind: "product", product: "os_lms" });
    expect(recommend("organization", 2, false)).toEqual({ kind: "product", product: "os" });
  });

  it("sends multisite organizations to Enterprise", () => {
    expect(recommend("multisite")).toEqual({ kind: "product", product: "enterprise" });
  });

  it("points people who aren't doulas yet to training", () => {
    expect(recommend("not_a_doula")).toEqual({ kind: "become_a_doula" });
  });

  it("has an answer for every option", () => {
    for (const style of WORK_STYLES) expect(recommend(style.id)).toBeTruthy();
  });
});

describe("teamMonthlyTotal", () => {
  it("adds $9.99 for each doula after you", () => {
    expect(teamMonthlyTotal(1)).toBe(39);
    expect(teamMonthlyTotal(3)).toBe(58.98);
    expect(teamMonthlyTotal(5)).toBe(78.96);
  });

  it("formats dollars", () => {
    expect(formatUsd(39)).toBe("$39");
    expect(formatUsd(58.98)).toBe("$58.98");
  });
});

describe("PRODUCTS", () => {
  it("buys PRO in the app and starts OS and Enterprise with a demo", () => {
    expect(PRODUCTS.pro.action).toBe("get_pro");
    expect(PRODUCTS.team.action).toBe("get_pro");
    expect(PRODUCTS.os.action).toBe("book_demo");
    expect(PRODUCTS.os_lms.action).toBe("book_demo");
    expect(PRODUCTS.enterprise.action).toBe("book_demo");
  });
});
