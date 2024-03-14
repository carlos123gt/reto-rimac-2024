import { FC, forwardRef } from "react";
import "./style.scss";

interface Props {
  checked?: boolean;
  defaultChecked?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (e: any) => void;
}

const CheckBox: FC<Props> = forwardRef<HTMLInputElement, Props>(
  ({ defaultChecked, checked, onChange, ...props }, ref) => {
    return (
      <input
        ref={ref}
        onClick={onChange}
        checked={checked}
        className="checkbox"
        type="checkbox"
        defaultChecked={defaultChecked}
        {...props}
      />
    );
  }
);

export default CheckBox;
