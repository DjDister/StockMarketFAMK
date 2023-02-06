import React, { useState, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  notCheckedColor?: string;
  checkedColor?: string;
  onCheckboxChange?: (checked: boolean) => void;
  iconSize?: string;
  borderRadius?: string;
}

const Checkbox: React.FC<Props> = ({
  checkedColor,
  notCheckedColor,
  style,
  onCheckboxChange,
  iconSize,
  borderRadius,
  ...rest
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <label
      style={{
        display: "inline-block",
        position: "relative",
        width: "20px",
        height: "20px",
        backgroundColor: checked
          ? checkedColor || "#5367fe"
          : notCheckedColor || "white",
        border: `${borderRadius || "1px"} solid #5367fe`,
        borderRadius: "4px",
        cursor: "pointer",
        ...style,
      }}
    >
      <input
        type="checkbox"
        style={{
          position: "absolute",
          opacity: 0,
          cursor: "pointer",
        }}
        {...rest}
        onChange={() => {
          onCheckboxChange && onCheckboxChange(!checked);
          setChecked(!checked);
        }}
      />
      {checked ? (
        <span
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: iconSize || "14px",
            color: "white",
          }}
        >
          &#10003;
        </span>
      ) : null}
    </label>
  );
};
export default Checkbox;
