import React from "react";
import Error from "../../assets/icons/Error";
import Warning from "../../assets/icons/Warning";
import styles from "./Input.module.css";
export default function Input({
  icon,
  placeholder,
  onChange,
  onClick,
  style,
  error,

  warning,
  onKeyDown,
  customContainerStyle,
}: {
  icon?: JSX.Element;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  onClick?: () => void;
  error?: string;
  warning?: string;

  customContainerStyle?: React.CSSProperties;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={styles.container} style={customContainerStyle}>
      <div className={styles.inputContainer} style={style}>
        <input
          onChange={(e) => onChange(e)}
          className={styles.input}
          placeholder={placeholder}
          onKeyDown={onKeyDown}
          style={icon ? { width: "90%" } : { width: "100%" }}
        />
        {icon ? (
          <div onClick={onClick} className={styles.iconContainer}>
            {icon}
          </div>
        ) : null}
      </div>
      {error && (
        <div className={styles.errorContainer}>
          <Error height="80%" />
          <div className={styles.errorText}>{error}</div>
        </div>
      )}
      {warning && (
        <div className={styles.errorContainer}>
          <Warning height="80%" />
          <div className={styles.errorText}>{warning}</div>
        </div>
      )}
    </div>
  );
}
