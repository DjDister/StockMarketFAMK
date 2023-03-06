import React from "react";
import EasyCard from "../EasyCard/EasyCard";
import styles from "./TradeAnywhere.module.css";
import phone1 from "../../assets/images/phone1.png";
import Windows from "../../assets/icons/Windows";
import AppStore from "../../assets/icons/AppStore";
import MacOs from "../../assets/icons/MacOs";
import GooglePlay from "../../assets/icons/GooglePlay";

export default function TradeAnywhere({
  leftIcon,
  style,
}: {
  leftIcon?: JSX.Element;
  style?: React.CSSProperties;
}) {
  const appsArray = [
    {
      icon: <Windows fill="white" width="50px" height="50px" />,
      boldText: "Windows",
      text: "Download PC-Client",
    },
    {
      icon: <AppStore width="50px" height="50px" />,
      boldText: "App Store",
      text: "Download on the",
    },
    {
      icon: <MacOs fill="white" width="50px" height="50px" />,
      boldText: "Mac OS",
      text: "Download on the",
    },
    {
      icon: <GooglePlay fill="white" width="50px" height="50px" />,
      boldText: "Google Play",
      text: "Download on the",
    },
  ];
  return (
    <div className={styles.BigTrade}>
      <img src={phone1} className={styles.img2} />
      <div className={styles.BigTrade2} style={style}>
        <div className={styles.download}>Download the app</div>
        <div className={styles.anyText}>Trade Anywhere, Anytime</div>
        <div className={styles.anySmallText}>
          Whether you're a seasoned trader or just starting out, our stock
          market app is the perfect tool to help you reach your investment
          goals. Download now!
        </div>
        <img src={phone1} className={styles.img11} />
        <div className={styles.cards}>
          {appsArray.map((elem, index) => (
            <div key={index} className={styles.card}>
              <EasyCard
                icon={elem.icon}
                text={elem.text}
                boldText={elem.boldText}
                style={{
                  flexDirection: "column",
                  backgroundColor: "#121318",
                  minHeight: "140px",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
