import React from "react";
import "./style.scss";

interface Props {
  checked?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: any) => void;
}

const CheckBox = React.forwardRef<HTMLInputElement, Props>(
  ({ checked, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        onClick={onChange}
        checked={checked}
        className="checkbox"
        type="checkbox"
        {...props}
      />
    );
  }
);

export default CheckBox;
