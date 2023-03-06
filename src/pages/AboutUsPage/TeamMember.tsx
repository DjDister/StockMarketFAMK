import React from "react";
import styles from "./AboutUsPage.module.css";
import { useState } from "react";
interface Props {
  imie: string;
  opis: string;
  image: string;
  email: string;
}
const y = "mailto:";
const MyComponent: React.FC<Props> = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={styles.osoba}>
      <a href={y + props.email}>
        <div
          className={styles.imagecontainer}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src={props.image}
            alt="Image"
            style={{ width: "100%", aspectRatio: 1 / 1.4, borderRadius: "8px" }}
          />
          {isHovered && <div className={styles.email}>{props.email}</div>}
        </div>
      </a>
      <h1 className={styles.imie}>{props.imie}</h1>
      <br></br>
      <p style={{ textAlign: "center" }}>{props.opis}</p>
    </div>
  );
};

export default MyComponent;
