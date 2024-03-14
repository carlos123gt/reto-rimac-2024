import { render } from "@testing-library/react";
import Header from "./Header";
import { expect, describe, it } from "@jest/globals";

describe("Header component", () => {
  it("Header: renders correctly", () => {
    const { getByAltText, getByText } = render(<Header />);
    expect(getByAltText("Logo")).toContain
    expect(getByText(`¡Compra por este medio!`)).toContain
    expect(getByText("(01) 411 6001")).toContain
  });
});