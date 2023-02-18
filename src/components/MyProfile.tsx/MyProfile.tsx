import React from "react";
import Edit2 from "../../assets/icons/Edit2";
import Email from "../../assets/icons/Email";
import Phone from "../../assets/icons/Phone";
import Button from "../Button/Button";
import Input from "../Input/Input";
import styles from "./MyProfile.module.css";
export default function MyProfile() {
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
                disabled
                className={styles.inputDisabled}
                placeholder="Filip"
                onChange={() => null}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Last Name</div>
              <Input
                className={styles.inputDisabled}
                disabled
                placeholder="Porębski"
                onChange={() => null}
              />
            </div>
          </div>
          <div className={styles.doubleContainer}>
            <div className={styles.inputContainer}>
              <div>Display Name</div>
              <Input
                className={styles.input}
                placeholder="Filip Porębski"
                onChange={() => null}
                icon={<Edit2 />}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>User Name</div>
              <Input
                className={styles.inputDisabled}
                disabled
                placeholder="Filip#007"
                onChange={() => null}
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
                placeholder="porebskifilip@wp.pl"
                onChange={() => null}
              />
            </div>
            <div className={styles.inputContainer}>
              <div>Phone Number</div>
              <Input
                className={styles.inputDisabled}
                placeholder="+48 123 456 789"
                icon={<Phone />}
                onChange={() => null}
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
          <Button flex className={styles.buttonSave}>
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
