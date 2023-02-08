import React, { useState } from "react";
import styles from "./ProfilePage.module.css";
import womanPng from "../../../src/assets/images/womanPng.png";
import Button from "../../components/Button/Button";
import RightArrow from "../../assets/icons/RightArrow";
import Person from "../../assets/icons/Person";
import Lock from "../../assets/icons/Lock";
import Notification from "../../assets/icons/Notification";
import Dollar from "../../assets/icons/Dollar";
import File from "../../assets/icons/File";
import Wallet from "../../assets/icons/Wallet";
import Clipboard from "../../assets/icons/Clipboard";
import NotificationPreferences from "../../components/NotificationPreferences/NotificationPreferences";

const profileSettings = [
  { label: "My Profile", icon: <Person />, element: <></> },
  { label: "Security", icon: <Lock />, element: <></> },
  {
    label: "Notifications Preferences",
    icon: <Notification />,
    element: <NotificationPreferences />,
  },
  { label: "Currency Preferences", icon: <Dollar />, element: <></> },
  { label: "KYC Verification", icon: <File />, element: <></> },
  { label: "Payment Option", icon: <Wallet />, element: <></> },
  { label: "Api Managment", icon: <Clipboard />, element: <></> },
];

export default function ProfilPage() {
  const [activeSettings, setActiveSettings] = useState<JSX.Element | null>(
    null
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.profileContainer}>
        {activeSettings ? (
          activeSettings
        ) : (
          <>
            <div className={styles.userImgAndNameContainer}>
              <img src={womanPng} className={styles.profileImage} />
              <div className={styles.userName}>Filip Porebski</div>
              <div className={styles.userTag}>FilipPorebski#0000</div>
            </div>
            <div className={styles.buttonsContainer}>
              {profileSettings.map((item, index) => {
                return (
                  <Button
                    style={{
                      marginTop: 2,
                      height: `${100 / profileSettings.length}%`,
                    }}
                    key={index}
                    iconLeftToChild={item.icon}
                    rightIcon={<RightArrow />}
                    className={styles.button}
                    onClick={() => setActiveSettings(item.element)}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
