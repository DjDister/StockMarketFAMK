import React, { useState } from "react";
import Email from "../../assets/icons/Email";
import Google2 from "../../assets/icons/Google2";
import Phone from "../../assets/icons/Phone";
import Button from "../Button/Button";
import Input from "../Input/Input";
import SwitchButton from "../SwitchButton.tsx/SwitchButton";
import styles from "./Security.module.css";

interface SecurityOptions {
  emailAuthentication: boolean;
  smsAuthentication: boolean;
  googleAuthentication: boolean;
}

interface SecurityOption {
  label: string;
  value: keyof SecurityOptions;
  text: string;
  icon: JSX.Element;
  color: string;
}

export default function Security() {
  const securityOptionsList: SecurityOption[] = [
    {
      label: "Email Authentication",
      value: "emailAuthentication",
      text: "Set email authentication",
      icon: <Email />,
      color: "#fca5a4",
    },
    {
      label: "SMS Authentication",
      value: "smsAuthentication",
      text: "Set sms authentication",
      icon: <Phone />,
      color: "#6de7b6",
    },
    {
      label: "Google Authentication",
      value: "googleAuthentication",
      text: "Set google authentication",
      icon: <Google2 />,
      color: "#56b2ff",
    },
  ];

  const [securityOptions, setSecurityOptions] = useState<SecurityOptions>({
    emailAuthentication: false,
    smsAuthentication: false,
    googleAuthentication: false,
  });
  return (
    <div className={styles.container}>
      <div className={styles.label}>Security</div>
      {securityOptionsList.map((option, index) => (
        <SwitchButton
          key={index}
          type="button"
          text={option.text}
          id={option.label}
          label={option.label}
          style={{ marginBottom: 15 }}
          iconLeft={option.icon}
          iconBgColor={option.color}
          buttonClass={
            securityOptions[option.value]
              ? styles.activeButton
              : styles.inactiveButton
          }
          isOn={securityOptions[option.value]}
          onClick={() =>
            setSecurityOptions({
              ...securityOptions,
              [option.value]: !securityOptions[option.value],
            })
          }
        />
      ))}
      <div className={styles.lineSeparator} />
      <div className={styles.passwordChangeContainer}>
        <div className={styles.labelPassword}>
          Password
          <span className={styles.passwordTip}>
            Set a unique password to protect your personal account
          </span>
        </div>
        <div className={styles.inputLabel}>Old password</div>
        <Input
          className={styles.inputStyles}
          placeholder="Old password"
          type="password"
          onChange={() => null}
        />
        <div className={styles.newPasswordsContainer}>
          <div className={styles.labelAndInputContainer}>
            <div className={styles.inputLabel}>New Password</div>
            <Input
              className={styles.inputStyles}
              type="password"
              placeholder="New password"
              onChange={() => null}
            />
          </div>
          <div className={styles.labelAndInputContainer}>
            <div className={styles.inputLabel}>Re-enter password</div>
            <Input
              className={styles.inputStyles}
              type="password"
              placeholder="Re-enter password"
              onChange={() => null}
            />
          </div>
        </div>
      </div>
      <div className={styles.confirmAndTipContainer}>
        <Button flex className={styles.savePasswordButton}>
          Save Password
        </Button>
        <div className={styles.passwordEnsure}>
          To ensure your account is secure, your password should contains 8 or
          more characters, including a number
        </div>
      </div>
    </div>
  );
}
