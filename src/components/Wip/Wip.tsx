import React from "react";
import Settings2 from "../../assets/icons/Settings2";
import styles from "./Wip.module.css";
export default function Wip() {
  return (
    <div className={styles.container}>
      <div className={styles.bubble}>
        <Settings2 fill="white" />
        WIP
      </div>
    </div>
  );
}
