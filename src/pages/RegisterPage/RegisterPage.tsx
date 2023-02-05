import React from "react";
import Apple from "../../assets/icons/Apple";
import Facebook from "../../assets/icons/Facebook";
import Google from "../../assets/icons/Google";
import styles from "./RegisterPage.module.css";

export default function RegisterPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backGroundCircle} />
      <div className={styles.backGroundContainer}>
        <div className={styles.registerPanelContainer}>
          <div className={styles.label}>Create an account</div>
          <div className={styles.inputsContainer}>
            <div className={styles.input}>Input</div>
            <div className={styles.input}>Input</div>
            <div className={styles.input}>Input</div>
          </div>
          <div className={styles.acceptPrivacyContainer}>
            <div>C</div>
            <div className={styles.acceptText}>
              By Register I agree that I'm 18 years of age or older, ot the{" "}
              <span className={styles.rulesLink}>
                User Agreements, Privacy Policy, Cookie Policy.
              </span>
            </div>
          </div>
          <div className={styles.buttonContainer}>Register</div>
          <div className={styles.redirectToLoginContainer}>
            Already have an account?
            <span className={styles.rulesLink}> Sign in</span>
          </div>
          <div className={styles.line}>
            <div className={styles.lineTextOver}>or continue with</div>
          </div>
          <div className={styles.otherOptionsToLoginContainer}>
            <Google
              style={{ backgroundColor: "#080808", padding: 8 }}
              width="26"
              height="26"
            />
            <Apple
              style={{ backgroundColor: "#080808", padding: 8 }}
              width="26"
              height="26"
            />
            <Facebook
              style={{ backgroundColor: "#080808", padding: 8 }}
              width="26"
              height="26"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
