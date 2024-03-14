import { render } from "@testing-library/react";
import Stepper from "./Stepper";
import { expect, describe, it } from "@jest/globals";

describe("Stepper component", () => {
  const mockSteps = [
    { path: "step1", text: "Step 1" },
    { path: "step2", text: "Step 2" },
    { path: "step3", text: "Step 3" }
  ];

  it("Stepper: renders correctly", () => {
    const { getByText } = render(
      <Stepper currentStep={1} steps={mockSteps} />
    );
    expect(getByText("Step 1")).toContain;
    expect(getByText("Step 2")).toContain;
    expect(getByText("Step 3")).toContain;
  });

  it("Stepper: renders correct number of steps", () => {
    const { container } = render(
      <Stepper currentStep={1} steps={mockSteps} />
    );
    const steps = container.querySelectorAll(".stepper .step");
    expect(steps.length).toBe(mockSteps.length);
  });

  it("Stepper: sets correct step as active", () => {
    const { container } = render(
      <Stepper currentStep={2} steps={mockSteps} />
    );
    const activeStep = container.querySelector(".step--active");
    expect(activeStep?.textContent).toContain("2");
  });
});
