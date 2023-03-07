import React, { useEffect, useState } from "react";
import Edit2 from "../../assets/icons/Edit2";
import Email from "../../assets/icons/Email";
import Phone from "../../assets/icons/Phone";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./MyProfile.module.css";
import { UserData } from "../../types";

export default function MyProfile({ userData }: { userData?: UserData }) {
  useEffect(() => {}, [userData]);

  // const [inputUserData, setInputUserData] = useState({
  //   email: userData?.email,
  //   displayName: userData?.displayName,
  //   phoneNumber: userData?.phoneNumber,
  //   firstName: userData?.firstName,
  //   lastName: userData?.lastName,
  //   userName: userData?.userName,
  // });

  // const [userDataError, setUserDataError] = useState({
  //   email: "",
  //   displayName: "",
  //   phoneNumber: "",
  //   firstName: "",
  //   lastName: "",
  //   userName: "",
  // });

  // console.log("dasdasdasdasads", userData);
  // console.log("URWAA = ", inputUserData.email);
  // let firstNameError = "";
  // let lastNameError = "";
  // let userNameError = "";
  // let displayNameError = "";
  // let emailError = "";
  // let phoneNumberError = "";

  // function handleClick() {
  //   if (
  //     inputUserData.firstName &&
  //     (inputUserData.firstName?.length <= 3 ||
  //       inputUserData.firstName?.length >= 15)
  //   ) {
  //     console.log("KLIKNYM");

  //     // setUserDataError((prevUserDataError) => ({
  //     //   ...prevUserDataError,
  //     //   firstName: "chujowy",
  //     // }));
  //     firstNameError = "chujowy";
  //   }
  //   console.log("errrrrrrrr : ", firstNameError);

  //   if (
  //     userDataError.email.length === 0 &&
  //     userDataError.firstName.length === 0 &&
  //     userDataError.lastName.length === 0 &&
  //     userDataError.displayName.length === 0 &&
  //     userDataError.userName.length === 0 &&
  //     userDataError.phoneNumber.length === 0
  //   ) {
  //     console.log("NIE MA BŁĘDU !");
  //   } else {
  //     console.log("JEST BŁĘDUUUUUUUU !");
  //   }
  // }

  // console.log("errrrrrrrrrrorrrryyyyyyyyyy : ", userDataError);

  // const [firstNameError, setFirstNameError] = useState(userDataError.firstName);

  // function handleClick() {
  //   if (
  //     inputUserData.firstName &&
  //     (inputUserData.firstName?.length <= 3 ||
  //       inputUserData.firstName?.length >= 15)
  //   ) {
  //     console.log("KLIKNYM");
  //     setFirstNameError("chujowy");
  //   } else {
  //     setFirstNameError("");
  //   }
  //   console.log("errrrrrrrr : ", firstNameError);

  //   if (
  //     userDataError.email.length === 0 &&
  //     firstNameError.length === 0 &&
  //     userDataError.lastName.length === 0 &&
  //     userDataError.displayName.length === 0 &&
  //     userDataError.userName.length === 0 &&
  //     userDataError.phoneNumber.length === 0
  //   ) {
  //     console.log("NIE MA BŁĘDU !");
  //   } else {
  //     console.log("JEST BŁĘDUUUUUUUU !");
  //   }
  // }

  const [inputUserData, setInputUserData] = useState({
    email: userData?.email,
    displayName: userData?.displayName,
    phoneNumber: userData?.phoneNumber,
    firstName: userData?.firstName,
    lastName: userData?.lastName,
    userName: userData?.userName,
  });

  const [userDataErrors, setUserDataErrors] = useState({
    email: "",
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

    if (name === "email") {
      if (!value) {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          email: "Email jest wymagany",
        }));
      } else {
        setUserDataErrors((prevUserDataErrors) => ({
          ...prevUserDataErrors,
          email: "",
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
    }
    // Sprawdź i ustaw błędy dla pozostałych pól analogicznie...
  };

  const handleSubmit = () => {
    // Sprawdź, czy są jakieś błędy w danych użytkownika
    const hasErrors =
      Object.values(userDataErrors).filter((error) => error !== "").length > 0;

    if (hasErrors) {
      console.log("Nieprawidłowe dane użytkownika");
      setShouldShowError(true);
      return;
    }

    console.log("Wszystko w porządku, dane użytkownika: ", inputUserData);
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
                // disabled
                className={styles.inputDisabled}
                placeholder={userData?.firstName || "Filip"}
                name={"firstName"}
                onChange={(e) => handleInputChange(e)}
                error={shouldShowError ? userDataErrors.firstName : undefined}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Last Name</div>
              <Input
                className={styles.inputDisabled}
                disabled
                placeholder={userData?.lastName || "Porębski"}
                // onChange={(e) => {
                //   setInputUserData((prevInputUserData) => ({
                //     ...prevInputUserData,
                //     lastName: e.target.value,
                //   }));
                // }}
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
                placeholder={userData?.displayName || "Filip Porębski"}
                onChange={(e) => {
                  setInputUserData((prevInputUserData) => ({
                    ...prevInputUserData,
                    displayName: e.target.value,
                  }));
                }}
                icon={<Edit2 />}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>User Name</div>
              <Input
                className={styles.inputDisabled}
                disabled
                placeholder={userData?.userName || "Filip#007"}
                onChange={(e) => {
                  setInputUserData((prevInputUserData) => ({
                    ...prevInputUserData,
                    userName: e.target.value,
                  }));
                }}
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
                // disabled
                className={styles.inputDisabled}
                icon={<Email />}
                placeholder={userData?.email || "user@gmail.com"}
                // onChange={(e) => {
                //   setInputUserData((prevInputUserData) => ({
                //     ...prevInputUserData,
                //     email: e.target.value,
                //   }));
                // }}
                name={"email"}
                onChange={(e) => handleInputChange(e)}
                error={shouldShowError ? userDataErrors.email : undefined}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Phone Number</div>
              <Input
                className={styles.inputDisabled}
                placeholder={userData?.phoneNumber || "+48 123 456 789"}
                icon={<Phone />}
                onChange={(e) => {
                  setInputUserData((prevInputUserData) => ({
                    ...prevInputUserData,
                    phoneNumber: e.target.value,
                  }));
                }}
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
