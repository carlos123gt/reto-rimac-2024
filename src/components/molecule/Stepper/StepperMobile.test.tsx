import { render } from "@testing-library/react";
import StepperMobile from "./StepperMobile";
import { expect, describe, it } from "@jest/globals";

describe("StepperMobile component", () => {
  it("StepperMobile: renders correctly", () => {
    const { getByText } = render(
      <StepperMobile currentStep={2} steps={5} />
    );
    expect(getByText("PASO 2 DE 5")).toContain
  });

  it("StepperMobile: sets correct width for progress bar", () => {
    const { getByTestId } = render(
      <StepperMobile currentStep={2} steps={5} />
    );
    const progressBar = getByTestId("progress-bar");
    expect(progressBar?.getAttribute("style")).toContain
  });
});
