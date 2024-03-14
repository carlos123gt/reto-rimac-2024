import { render } from "@testing-library/react";
import Badge from "./Badge";
import { expect, describe, it } from "@jest/globals";

describe("Badge component", () => {

  it("Badge: render children", () => {
    const { getByText } = render(<Badge>Badge text</Badge>);
    expect(getByText("Badge text")).toContain;
  });

  it("Badge: render with default type if not specified", () => {
    const { container } = render(<Badge>Badge text</Badge>);
    expect(container?.firstElementChild?.getAttribute("class")).toContain("badge");
  });

  it("Badge: render with specified type", () => {
    const { container } = render(<Badge type="plan">Badge text</Badge>);
    expect(container?.firstElementChild?.getAttribute("class")).toContain("badge");
  });
});