import { render, fireEvent } from "@testing-library/react";
import PlanCard from "./PlanCard";
import { expect, describe, it } from "@jest/globals";
import { TYPES_OPTIONS } from "../../../utils/constants";

describe("PlanCard component", () => {
  const mockPlan = {
    name: "Test Plan",
    price: 100,
    description: ["Description 1", "Description 2"],
    age: 2000
  };

  const mockOnClick = jest.fn();

  it("renders correctly", () => {
    const { getByText } = render(
      <PlanCard plan={mockPlan} onClick={mockOnClick} typeOption={TYPES_OPTIONS.FOR_ME} />
    );
    expect(getByText("Test Plan")).toContain
    expect(getByText("$100 al mes")).toContain
    expect(getByText("Description 1")).toContain
    expect(getByText("Description 2")).toContain
  });

  it("calls onClick handler when select button is clicked", () => {
    const { getByText } = render(
      <PlanCard plan={mockPlan} onClick={mockOnClick} typeOption={TYPES_OPTIONS.FOR_ME} />
    );
    const selectButton = getByText("Seleccionar Plan");
    fireEvent.click(selectButton);
    expect(mockOnClick).toHaveBeenCalledWith({ ...mockPlan, price: 100 });
  });
});
