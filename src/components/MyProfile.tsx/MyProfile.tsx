import React, { useEffect, useState } from "react";
import Edit2 from "../../assets/icons/Edit2";
import Email from "../../assets/icons/Email";
import Phone from "../../assets/icons/Phone";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./MyProfile.module.css";
import { UserData } from "../../types";
import { doc, updateDoc } from "firebase/firestore";
import db, { auth } from "../../../firebaseConfig";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { updateDisplayName } from "../../redux/profileSlice";
import { updateProfile } from "firebase/auth";

export default function MyProfile({ userData }: { userData?: UserData }) {
  useEffect(() => {}, [userData]);

  const phoneNumberRegex = /^\+\d{2}\s\d{3}\s\d{3}\s\d{3}$/;
  const userNameRegex = /^\w+#\d{3}$/;

  const [inputUserData, setInputUserData] = useState({
    displayName: userData?.displayName,
    phoneNumber: userData?.phoneNumber,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    userName: userData?.userName,
  });

  const [userDataErrors, setUserDataErrors] = useState({
    displayName: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    userName: "",
  });

  const [shouldShowError, setShouldShowError] = useState(false);
  const handleInputChange = (e: any) => {
    setShouldShowError(false);
    const { name, value } = e.target;

    setInputUserData((prevInputUserData) => ({
      ...prevInputUserData,
      [name]: value,
    }));

    if (name === "lastName") {
      if (!value) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          lastName: "Nazwisko jest wymagane",
        }));
      } else if (value.length <= 2 || value.length >= 15) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          lastName: "Niepoprawna długość",
        }));
      } else {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          lastName: "",
        }));
      }
    } else if (name === "firstName") {
      if (value.length < 3 && value.length != null) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          firstName: "Imię jest zbyt krótkie",
        }));
      } else if (value.length > 15) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          firstName: "Imię jest zbyt długie",
        }));
      } else {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          firstName: "",
        }));
      }
    } else if (name === "phoneNumber") {
      if (!value) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          phoneNumber: "Numer telefonu jest wymagany",
        }));
      } else if (phoneNumberRegex.test(value)) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          phoneNumber: "",
        }));
      } else {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          phoneNumber: "Niepoprawny format",
        }));
      }
    } else if (name === "displayName") {
      if (!value) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          displayName: "Puste pole",
        }));
      } else if (value.length <= 2 || value.length >= 15) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          displayName: "Niepoprawna długość",
        }));
      } else {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          displayName: "",
        }));
      }
    } else if (name === "userName") {
      if (!value) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          userName: "Puste pole",
        }));
      } else if (userNameRegex.test(value)) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          userName: "",
        }));
      } else {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          userName: "Niepoprawny format",
        }));
      }
    }
  };
  const dispatch = useAppDispatch();
  const handleSubmit = async () => {
    // Sprawdź, czy są jakieś błędy w danych użytkownika
    const hasErrors =
      Object.values(userDataErrors).filter((error) => error !== "").length > 0;

    if (hasErrors) {
      setShouldShowError(true);
      return;
    }
    if (userData) {
      const docRef = doc(db, "users", userData.uid);
      await updateDoc(docRef, { ...inputUserData }).then(() => {
        dispatch(updateDisplayName(inputUserData.displayName || ""));
      });
      auth.currentUser &&
        updateProfile(auth.currentUser, {
          displayName: inputUserData.displayName,
        });
      setUserDataErrors((prevUserDataErrors) => {
        return {
          ...prevUserDataErrors,
        };
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.label}>
        My profile
        <div className={styles.labelIcon}>
          <Edit2 fill={"#7c7e8d"} />
          Edit
        </div>
      </div>
      <div className={styles.informationContainer}>
        <div className={styles.informationLabel}>Personal Information</div>
        <div className={styles.inputsContainer}>
          <div className={styles.doubleContainer}>
            <div className={styles.inputContainer}>
              <div className={styles.inputLabel}>First Name</div>
              <Input
                className={styles.inputDisabled}
                placeholder={userData?.firstName || "Jan"}
                name={"firstName"}
                onChange={(e) => handleInputChange(e)}
                error={shouldShowError ? userDataErrors.firstName : undefined}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Last Name</div>
              <Input
                className={styles.inputDisabled}
                placeholder={userData?.lastName || "Kowalski"}
                name={"lastName"}
                onChange={(e) => handleInputChange(e)}
                error={shouldShowError ? userDataErrors.lastName : undefined}
              />
            </div>
          </div>
          <div className={styles.doubleContainer}>
            <div className={styles.inputContainer}>
              <div>Display Name</div>
              <Input
                className={styles.input}
                placeholder={userData?.displayName || "Jan Kowalski"}
                icon={<Edit2 />}
                name={"displayName"}
                onChange={(e) => handleInputChange(e)}
                error={shouldShowError ? userDataErrors.displayName : undefined}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>User Name</div>
              <Input
                className={styles.inputDisabled}
                placeholder={userData?.userName || "user#999"}
                name={"userName"}
                onChange={(e) => handleInputChange(e)}
                error={shouldShowError ? userDataErrors.userName : undefined}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lineSeparator} />
      <div className={styles.informationContainer}>
        <div className={styles.informationLabel}>Contact Information</div>
        <div className={styles.inputsContainer}>
          <div className={styles.doubleContainer}>
            <div className={styles.inputContainer}>
              <div>Email</div>
              <Input
                disabled
                className={styles.inputDisabled}
                icon={<Email />}
                placeholder={userData?.email || "user@gmail.com"}
                name={"email"}
                onChange={(e) => {}}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Phone Number</div>
              <Input
                className={styles.inputDisabled}
                placeholder={userData?.phoneNumber || "+48 123 456 789"}
                icon={<Phone />}
                name={"phoneNumber"}
                onChange={(e) => {
                  handleInputChange(e);
                }}
                error={shouldShowError ? userDataErrors.phoneNumber : undefined}
              />
            </div>
          </div>
          <div className={styles.doubleContainer}>
            <div className={styles.inputContainer}>
              <div>Location</div>
              <Input
                disabled
                className={styles.input}
                placeholder="Poland"
                onChange={() => null}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Currency</div>
              <Input
                className={styles.inputDisabled}
                disabled
                placeholder="PLN"
                onChange={() => null}
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.confirmContainer}>
        <div className={styles.createdAtLabel}>
          This account was created on January 10,2022,2:12PM
        </div>
        <div className={styles.buttonsContainer}>
          <Button flex className={styles.buttonCancel}>
            Cancel
          </Button>
          <Button
            flex
            className={styles.buttonSave}
            onClick={() => {
              handleSubmit();
            }}
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
