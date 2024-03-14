import { render, fireEvent } from "@testing-library/react";
import CheckBox from "./Checkbox";
import { expect, describe, it } from "@jest/globals";

describe("CheckBox component", () => {
  it("CheckBox: render correctly", () => {
    const { container } = render(<CheckBox/>);
    expect(container.firstElementChild?.getAttribute("class")).toContain("checkbox");
  });

  it("CheckBox: render with checked attribute if 'checked' prop is true", () => {
    const onChangeMock = jest.fn();
    const { container } = render(<CheckBox defaultChecked onChange={onChangeMock} />);
    expect(container.firstElementChild?.getAttribute("checked")).toContain("");
  });

  it("CheckBox: call onChange handler when clicked", () => {
    const onChangeMock = jest.fn();
    const { container } = render(<CheckBox onChange={onChangeMock} />);
    const checkbox = container.firstChild;
    if (checkbox instanceof Element) {
      fireEvent.click(checkbox);
      expect(onChangeMock).toHaveBeenCalled();
    } else {
      throw new Error("checkbox component is not an Element");
    }

  });
});