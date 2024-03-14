import { render } from "@testing-library/react";
import Spinner from "./Spinner";
import { expect, describe, it } from "@jest/globals";

describe("Spinner component", () => {
  it("Spinner: render correctly", () => {
    const { container } = render(<Spinner />);
    expect(container?.firstElementChild?.getAttribute('class')).toContain("spinner")
  });
});