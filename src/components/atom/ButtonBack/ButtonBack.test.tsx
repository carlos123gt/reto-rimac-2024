import { render, fireEvent } from "@testing-library/react";
import ButtonBack from "./ButtonBack";
import { expect, describe, it } from "@jest/globals";

describe("ButtonBack component", () => {
  it("ButtonBack: render correctly", () => {
    const { getByText } = render(<ButtonBack />);
    expect(getByText("Volver")).toContain;
  });

  it("ButtonBack: call onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { container } = render(<ButtonBack onClick={onClickMock} />);
    const buttonBack = container.firstChild;
    if (buttonBack instanceof Element) {
      fireEvent.click(buttonBack);
      expect(onClickMock).toHaveBeenCalled();
    } else {
      throw new Error("ButtonBack component is not an Element");
    }
  });
});