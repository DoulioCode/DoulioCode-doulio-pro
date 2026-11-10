import { describe, expect, it } from "vitest";
import { becomeADoulaUrl, doulaTrainingContactUrl } from "./site";

describe("aspiring doula links", () => {
  it("send Become a Doula to doulio.org with where it was clicked", () => {
    expect(becomeADoulaUrl("hero")).toBe(
      "https://www.doulio.org/becomeadoula?source=pro-hero"
    );
  });

  it("preselect 'Becoming a certified doula' on the doulio.org contact form", () => {
    expect(doulaTrainingContactUrl("become-a-doula")).toBe(
      "https://www.doulio.org/contact?interest=certification&source=pro-become-a-doula"
    );
  });
});
