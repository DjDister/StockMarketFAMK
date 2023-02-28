import React from "react";
import Lion from "../../assets/icons/Lion";
import Majster from "../../assets/icons/Majster";
import Turtle from "../../assets/icons/Turtle";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./Creators.module.css";

export default function Newsletter({ style }: { style?: React.CSSProperties }) {
  const CreatorsList = [
    { icon: <Turtle />, creator: "Krystian Kiejno" },
    { icon: <Lion />, creator: "Aleksy Lisowski" },
    { icon: <Majster />, creator: "Filip Porębski" },
  ];
  return (
    <div className={styles.creators} style={style}>
      <div className={styles.creatorsBar}>
        <div className={styles.line}></div>
        <div
          style={{ marginLeft: "10px", marginRight: "10px", color: "#5367fe" }}
        >
          Backed by Creators
        </div>
        <div className={styles.line}></div>
      </div>
      <div className={styles.creatorsList}>
        {CreatorsList.map((elem, index) => (
          <div key={index} style={{}}>
            <CustomLink
              leftIcon={elem.icon}
              text={elem.creator}
              style={{ color: "white" }}
            />
          </div>
        ))}
      </div>
      <div className={styles.aboutUs}>About us</div>
    </div>
  );
}
