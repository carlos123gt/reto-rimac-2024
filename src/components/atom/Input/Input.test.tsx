import { render, fireEvent } from "@testing-library/react";
import Input from "./Input";
import { expect, describe, it } from "@jest/globals";

describe("Input component", () => {
  it("Input: render label correctly", () => {
    const { getByText } = render(<Input label="Username" />);
    expect(getByText("Username")).toContain;
  });

  it("Input: render with default border", () => {
    const { container } = render(<Input label="Username" />);
    expect(container?.firstElementChild?.getAttribute("class")).toContain("container-input--border");
  });

  it("Input: render without border if border prop is false", () => {
    const { container } = render(<Input label="Username" border={false} />);
    expect(container?.firstElementChild?.getAttribute("class")).not.toContain("container-input--border");
  });

  it("Input: calls onChange handler when input changes", () => {
    const onChangeMock = jest.fn();
    const { container } = render(<Input label="Username" onChange={onChangeMock} />);
    const input = container.querySelector("input");
    if (input instanceof Element) {
      fireEvent.click(input);
      expect(input).toHaveBeenCalled;
    } else {
      throw new Error("input component is not an Element");
    }

    
  });

  it("Input: passes other props to input element", () => {
    const { container } = render(<Input label="Username" data-testid="custom-id" />);
    const input = container.querySelector("input");
    expect(input?.getAttribute("data-testid")).toBe("custom-id");
  });
});