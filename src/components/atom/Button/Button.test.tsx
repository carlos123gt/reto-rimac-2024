import { render } from "@testing-library/react";
import Button from "./Button";
import { expect, describe, it } from "@jest/globals";

describe("Button component", () => {
  it("Button: render children correctly", () => {
    const { getByText } = render(<Button>Button children</Button>);
    expect(getByText("Button children")).toContain;
  });

  it("Button: render with default type 'button' if not specified", () => {
    const { container } = render(<Button>Button children</Button>);
    expect(container?.firstElementChild?.getAttribute("type")).toContain("button");
  });

  it("Button: render with specified type", () => {
    const { container } = render(<Button type="submit">Button children</Button>);
    expect(container?.firstElementChild?.getAttribute("type")).toContain("submit");
  });

  it("Button: render with primary class if 'primary' prop is true", () => {
    const { container } = render(<Button primary>Button children</Button>);
    expect(container?.firstElementChild?.getAttribute("class")).toContain("button--primary");
  });

  it("Button: render with fullWidth class if 'fullWidth' prop is true", () => {
    const { container } = render(<Button fullWidth>Button children</Button>);
    expect(container?.firstElementChild?.getAttribute("class")).toContain("button--fullWidth");
  });
});