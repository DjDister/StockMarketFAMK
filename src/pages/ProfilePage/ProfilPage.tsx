import React, { useEffect, useState } from "react";
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
import ArrowLeft from "../../assets/icons/ArrowLeft";
import Edit2 from "../../assets/icons/Edit2";
import Security from "../../components/Security/Security";
import useWindowSize from "../../hooks/useWindowSize";
import MyProfile from "../../components/MyProfile.tsx/MyProfile";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import db from "../../../firebaseConfig";
import { UserData } from "../../types";
import { doc, getDoc } from "firebase/firestore";
import { useAppSelector } from "../../hooks/reduxHooks";

export default function ProfilPage() {
  const [userData, setUserData] = useState<UserData>();

  const profileSettings = [
    {
      label: "My Profile",
      icon: <Person />,
      element: userData ? <MyProfile userData={userData} /> : <div></div>,
    },
    {
      label: "Security",
      icon: <Lock />,
      element: userData ? <Security userData={userData} /> : <div></div>,
    },
    {
      label: "Notifications Preferences",
      icon: <Notification />,
      element: userData ? (
        <NotificationPreferences userData={userData} />
      ) : (
        <div></div>
      ),
    },
    { label: "Currency Preferences", icon: <Dollar />, element: <></> },
    { label: "KYC Verification", icon: <File />, element: <></> },
    { label: "Payment Option", icon: <Wallet />, element: <></> },
    { label: "Api Managment", icon: <Clipboard />, element: <></> },
  ];
  const size = useWindowSize();
  const [activeSettings, setActiveSettings] = useState<{
    label: string;
    icon: JSX.Element;
    element: JSX.Element;
  } | null>(null);

  const profile = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (window.innerWidth > 992) {
      setActiveSettings(profileSettings[0]);
    }

    async function dataBaseInfo() {
      const docRef = doc(db, "users", profile.userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserData(docSnap.data() as UserData);
      } else {
        console.log("NO SUCH DATA");
      }
    }

    dataBaseInfo();
  }, []);

  console.log("Document data : ", userData);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerContainer}>
        {activeSettings && size.width && size.width < 992 ? (
          <>
            <div
              className={styles.navigateBack}
              onClick={() => setActiveSettings(null)}
            >
              <ArrowLeft fill="white" style={{ marginLeft: 8 }} />
            </div>
            <div className={styles.header}>{activeSettings?.label}</div>
            <Edit2 fill="white" style={{ marginRight: 8 }} />
          </>
        ) : (
          <NavBar />
        )}
      </div>
      <div className={styles.menuAndSettingContainer}>
        <div
          className={styles.profileContainer}
          style={
            size.width && size.width < 992 && activeSettings
              ? { display: "none" }
              : {}
          }
        >
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
                    height: `65px`,
                    color: item === activeSettings ? "#4556d3" : "",
                  }}
                  disabled={item.element.type === React.Fragment}
                  showWip={item.element.type === React.Fragment}
                  key={index}
                  iconLeftToChild={React.cloneElement(
                    item.icon,
                    item === activeSettings
                      ? {
                          fill: "#4556d3",
                        }
                      : {}
                  )}
                  rightIcon={<RightArrow />}
                  rightIconColor={item === activeSettings ? "#4556d3" : ""}
                  className={styles.button}
                  onClick={() => setActiveSettings(item)}
                >
                  {item.label}
                </Button>
              );
            })}
          </div>
        </div>
        <div className={styles.activeSettingsContainer}>
          <div className={styles.activeSettingsPadding}>
            {activeSettings ? activeSettings.element : null}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
