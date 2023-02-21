import React, { useEffect, useState } from "react";
import Apple from "../../assets/icons/Apple";
import EyeOff from "../../assets/icons/EyeOff";
import EyeOn from "../../assets/icons/EyeOn";
import Facebook from "../../assets/icons/Facebook";
import Google from "../../assets/icons/Google";
import Checkbox from "../../components/CheckBox/CheckBox";
import Input from "../../components/Input/Input";
import styles from "./RegisterPage.module.css";
import womanPng from "../../assets/images/womanPng.png";
import db, { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import errorHandlers from "../../utils/errorHandlersAuth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  loginFailure,
  loginSuccess,
  startLogin,
} from "../../redux/profileSlice";
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
export default function RegisterPage() {
  const profile = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (profile.userId) {
      navigate("/");
    }
  }, [profile.userId]);

  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isPrivacyAccepted: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleRegister = () => {
    if (loginData.password !== loginData.confirmPassword) {
      setError("Passwords are not the same");
      return;
    }
    if (!loginData.isPrivacyAccepted) {
      setError("You must accept privacy policy");
      return;
    }

    if (loginData.password.length < 3) {
      setError("Password is too short");
      return;
    }

    dispatch(startLogin());
    createUserWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then(async (userCredential) => {
        setError("");
        const user = userCredential.user;
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          uid: user.uid,
          display: user.email,
          photoUrl: user.photoURL,
          phoneNumber: user.phoneNumber,
          createdAt: user.metadata.creationTime,
          wallet: {
            totalBalanceDollars: 500000,
            transactionHistory: [
              ...Array.from({ length: 10 }, (_, i) => {
                return {
                  amount: 500000,
                  date: new Date().toISOString(),
                  type: "deposit",
                  status: "success",
                };
              }),
            ],
          },
          portfolio: [],
        });

        dispatch(loginSuccess(user.uid));
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = (
          errorHandlers[error.code] || errorHandlers.default
        )(error);
        setError(errorMessage);
        dispatch(loginFailure(error.message));
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backGroundCircle} />
      <div className={styles.backGroundContainer}>
        <div className={styles.backgroundContainerColor}>
          <div className={styles.registerPanelContainer}>
            <img className={styles.image} src={womanPng} />
            <div className={styles.label}>
              <span className={styles.paragraph}>Create an account</span>
              {error.length > 0 && (
                <span className={styles.error}> {error}</span>
              )}
            </div>
            <div className={styles.inputsContainer}>
              <Input
                className={styles.customInput}
                autoComplete="off"
                style={{ height: 40 }}
                placeholder="Enter Email"
                onChange={(e) =>
                  setLoginData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Input
                className={styles.customInput}
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                style={{ height: 40 }}
                placeholder="Password"
                icon={showPassword ? <EyeOn /> : <EyeOff />}
                onClick={() => setShowPassword(!showPassword)}
                onChange={(e) =>
                  setLoginData((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <Input
                className={styles.customInput}
                type={showPassword ? "text" : "password"}
                style={{ height: 40 }}
                placeholder="Confirm Password"
                icon={showPassword ? <EyeOn /> : <EyeOff />}
                onClick={() => setShowPassword(!showPassword)}
                onChange={(e) =>
                  setLoginData((prev) => ({
                    ...prev,
                    confirmPassword: e.target.value,
                  }))
                }
              />
            </div>
            <div className={styles.acceptPrivacyContainer}>
              <Checkbox
                style={{
                  minWidth: 16,
                  maxWidth: 16,
                  height: 16,
                }}
                onCheckboxChange={(isChecked) =>
                  setLoginData((prev) => ({
                    ...prev,
                    isPrivacyAccepted: isChecked,
                  }))
                }
              />
              <div className={styles.acceptText}>
                By Register I agree that I'm 18 years of age or older, ot the{" "}
                <span className={styles.rulesLink}>
                  User Agreements, Privacy Policy, Cookie Policy.
                </span>
              </div>
            </div>
            <div onClick={handleRegister} className={styles.buttonContainer}>
              Register
            </div>
            <div className={styles.redirectToLoginContainer}>
              Already have an account?
              <span
                onClick={() => navigate("/login")}
                className={styles.rulesLink}
              >
                {" "}
                Sign in
              </span>
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
    </div>
  );
}
