import React, { useEffect, useState } from "react";
import Apple from "../../assets/icons/Apple";
import EyeOff from "../../assets/icons/EyeOff";
import EyeOn from "../../assets/icons/EyeOn";
import Facebook from "../../assets/icons/Facebook";
import Google from "../../assets/icons/Google";
import Input from "../../components/Input/Input";
import styles from "../RegisterPage/RegisterPage.module.css";
import womanPng from "../../assets/images/womanPng.png";
import { auth } from "../../../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import errorHandlers from "../../utils/errorHandlersAuth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import {
  loginFailure,
  loginSuccess,
  startLogin,
} from "../../redux/profileSlice";

export default function LoginPage() {
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
    isPrivacyAccepted: false,
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleLogin = () => {
    dispatch(startLogin());
    signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      .then((userCredential) => {
        setError("");
        const user = userCredential.user;
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
              <span className={styles.paragraph}>Sign in</span>
              {error.length > 0 && (
                <span className={`${styles.paragraph} ${styles.error}`}>
                  {" "}
                  {error}
                </span>
              )}
            </div>
            <div className={styles.inputsContainer}>
              <Input
                className={styles.customInput}
                autoComplete="off"
                style={{ height: 50 }}
                placeholder="Enter Email"
                onChange={(e) =>
                  setLoginData((prev) => ({ ...prev, email: e.target.value }))
                }
              />
              <Input
                className={styles.customInput}
                autoComplete="off"
                type={showPassword ? "text" : "password"}
                style={{ height: 50 }}
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
            </div>
            <div className={styles.forgotPassowrdContainer}>
              <span
                style={{ float: "right", marginTop: 20, marginBottom: 20 }}
                className={styles.rulesLink}
              >
                Forgot password?
              </span>
            </div>

            <div onClick={handleLogin} className={styles.buttonContainer}>
              Login
            </div>
            <div className={styles.redirectToLoginContainer}>
              If you don't have an account, you can
              <span
                onClick={() => navigate("/register")}
                className={styles.rulesLink}
              >
                {" "}
                Register Here!
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
