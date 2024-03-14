import { render, fireEvent } from "@testing-library/react";
import OptionCard from "./OptionCard";
import { expect, describe, it } from "@jest/globals";

describe("OptionCard component", () => {
  it("OptionCard: render correctly", () => {
    const { container } = render(
      <OptionCard
        title="Title"
        subTitle="Subtitle"
        imageUrl="image-url"
      />
    );
    expect(container?.firstElementChild?.getAttribute("class")).toContain("option-card");
  });

  it("OptionCard: calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { container } = render(
      <OptionCard
        title="Title"
        subTitle="Subtitle"
        imageUrl="image-url"
        onClick={onClickMock}
      />
    );
    const option = container.firstChild;
    if (option instanceof Element) {
      fireEvent.click(option);
      expect(onClickMock).toHaveBeenCalled();
    } else {
      throw new Error("input component is not an Element");
    }
    
  });

  it("OptionCard: renders with selected class if 'selected' prop is true", () => {
    const { container } = render(
      <OptionCard
        title="Title"
        subTitle="Subtitle"
        imageUrl="image-url"
        selected={true}
      />
    );
    expect(container?.firstElementChild?.getAttribute("class")).toContain("option-card--selected");
  });

  it("OptionCard: renders with check icon if 'selected' prop is true", () => {
    const { container } = render(
      <OptionCard
        title="Title"
        subTitle="Subtitle"
        imageUrl="image-url"
        selected={true}
      />
    );
    expect(container?.querySelector("img[alt='Icon check']")).toContain
  });
});
