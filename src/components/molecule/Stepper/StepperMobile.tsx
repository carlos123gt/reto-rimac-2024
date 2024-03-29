import { FC } from "react";
import "./styles.scss";

interface Props {
  steps: number;
  currentStep: number;
}

const StepperMobile: FC<Props> = ({ currentStep, steps }) => {
  const percentageProgress = Math.floor((currentStep * 100) / steps);

  return (
    <div className="stepper-mobile">
      <p className="stepper-mobile__text">
        PASO {currentStep} DE {steps}
      </p>
      <div className="content-progress">
        <div className="content-progress__background" />
        <div
          className="content-progress__progress"
          style={{
            width: `${percentageProgress}%`,
          }}
          data-testid="progress-bar"
        />
      </div>
    </div>
  );
};

export default StepperMobile;
