import React, { FC } from "react";
import "./styles.scss";
import { classNames } from "../../../utils/util";

interface Props {
  label: string;
  border?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  typeInput?: string;
  maxProp?: number;
  minProp?: number;
}

const Input: FC<Props> = React.forwardRef<HTMLInputElement, Props>(
  ({ typeInput, maxProp, minProp, label, onChange, border = true, ...props }, ref) => {
    return (
      <div
        className={classNames(
          "container-input",
          border ? "container-input--border" : ""
        )}
      >
        <label className="container-input__label">{label}</label>
        <input
          ref={ref}
          className="container-input__input"
          onChange={onChange}
          type={typeInput}
          maxLength={maxProp}
          minLength={minProp}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
