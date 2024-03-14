import { render } from "@testing-library/react";
import Step from "./Step";
import { expect, describe, it } from "@jest/globals";

describe("Step component", () => {
  it("Step: renders correctly", () => {
    const { getByText } = render(
      <Step active={true} text="Step Text" step={1} />
    );
    expect(getByText("Step Text")).toContain;
    expect(getByText("1")).toContain;
  });

  it("Step: renders with active class when active prop is true", () => {
    const { container } = render(
      <Step active={true} text="Step Text" step={1} />
    );
    expect(container?.firstElementChild?.getAttribute("class")).toContain("step--active");
  });

  it("Step: renders without active class when active prop is false", () => {
    const { container } = render(
      <Step active={false} text="Step Text" step={1} />
    );
    expect(container?.firstElementChild?.getAttribute("class")).not.toContain("step--active");
  });
});
