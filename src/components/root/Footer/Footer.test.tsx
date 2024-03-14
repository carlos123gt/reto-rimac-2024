import { render } from "@testing-library/react";
import Footer from "./Footer";
import { expect, describe, it } from "@jest/globals";

describe("Footer component", () => {
  it("Footer: renders correctly", () => {
    const { getByAltText, getByText } = render(<Footer />);
    expect(getByAltText("Logo")).toContain
    expect(getByText("© 2023 RIMAC Seguros y Reaseguros.")).toContain
  });
});