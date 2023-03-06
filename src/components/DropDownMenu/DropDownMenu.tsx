import RightArrow from "../../assets/icons/RightArrow";
import UpArrow from "../../assets/icons/UpArrow";
import { useState } from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu({
  leftIcon,
  leftIcon2,
  rightIcon,
  rightIcon2,
  upperHeight,
  upperWidth,
  middleWidth,
  textSize,
  text,
  text2,
  text3,
  text4,
  Array1,
  Array2,
  fontSizes,
  onClick,
}: {
  leftIcon?: JSX.Element;
  leftIcon2?: JSX.Element;
  rightIcon?: JSX.Element;
  rightIcon2?: JSX.Element;
  upperHeight?: string;
  upperWidth?: string;
  middleWidth?: string;
  textSize?: string;
  text: string;
  text2?: string;
  text3?: string;
  text4?: string;
  Array1?: string[];
  Array2?: string[];
  fontSizes?: string;
  onClick?: () => void;
}) {
  const [menuUp, setMenuUp] = useState(false);
  const [CurrencyUp, setCurrencyUp] = useState(false);
  const [LanguageUp, setLanguageUp] = useState(true);
  const [langSelected, setLangSelected] = useState(0);
  const [currSelected, setCurrSelected] = useState(0);

  return (
    <>
      {menuUp === true ? (
        <div
          className={styles.absoluteExitMenu}
          onClick={() => {
            setMenuUp(false);
          }}
        ></div>
      ) : null}

      <div className={styles.DropMenu}>
        <div
          className={`${
            menuUp === false ? styles.upperMenu : styles.upperMenu
          }`}
          style={{
            height: upperHeight,
            width: upperWidth,
            cursor: "pointer",
          }}
          onClick={() => {
            setMenuUp(!menuUp);
          }}
        >
          <div className={styles.iconAndText}>
            <>
              {menuUp === false ? leftIcon : leftIcon2}
              <div
                className={`${
                  menuUp === false ? styles.text : styles.blueText
                }`}
                style={{ fontSize: textSize }}
                onClick={() => {
                  setMenuUp(!menuUp);
                }}
              >
                {Array1 ? Array1[langSelected] : "error"}
              </div>
              <div
                className={`${
                  menuUp === false
                    ? styles.lineCurr
                    : `${styles.lineCurr} ${styles.blueLineCurr}`
                }`}
              ></div>
              <div
                className={`${
                  menuUp === false ? styles.text : styles.blueText
                }`}
                style={{ fontSize: textSize }}
                onClick={() => {
                  setMenuUp(!menuUp);
                }}
              >
                {Array2 ? Array2[currSelected] : "error"}
              </div>
            </>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            {menuUp === false ? rightIcon : rightIcon2}
          </div>
        </div>

        {menuUp === true ? (
          <div className={styles.desktopFix} style={{ width: middleWidth }}>
            <div
              className={styles.insideCont}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                color: "grey",
                alignItems: "end",
                paddingTop: "15px",
                paddingBottom: "15px",
                fontSize: "1.2rem",
                borderTopLeftRadius: "5px",
                borderTopRightRadius: "5px",
              }}
            >
              <div
                style={{
                  marginLeft: "15px",
                  marginRight: "15px",
                  paddingBottom: "5px",
                }}
                className={`${
                  LanguageUp === false ? styles.blackBorder : styles.blueText2
                }`}
                onClick={() => {
                  LanguageUp === true ? null : setLanguageUp(!LanguageUp),
                    setCurrencyUp(false);
                }}
              >
                {text3}
              </div>
              <div
                style={{
                  paddingBottom: "5px",
                }}
                className={`${
                  CurrencyUp === false ? styles.blackBorder : styles.blueText2
                }`}
                onClick={() => {
                  CurrencyUp === true ? null : setCurrencyUp(!CurrencyUp),
                    setLanguageUp(false);
                }}
              >
                {text4}
              </div>
            </div>

            <div
              className={styles.langCurrBox}
              style={{
                borderBottomLeftRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            >
              {LanguageUp === false
                ? null
                : Array1?.map((lang, index) => (
                    <div
                      key={index}
                      style={
                        langSelected === index
                          ? {
                              marginLeft: "15px",
                              fontSize: fontSizes || "1.5rem",
                              color: "#ffffff",
                              borderRadius: "10px",
                              width: "90%",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }
                          : {
                              marginLeft: "15px",
                              fontSize: fontSizes || "1.5rem",
                              color: "grey",
                              borderRadius: "10px",
                              width: "90%",
                            }
                      }
                      className={`${
                        langSelected === index ? styles.langSelected : " "
                      }`}
                      onClick={() => {
                        setLangSelected(index);
                      }}
                    >
                      <div style={{ marginLeft: "10px" }}>{lang}</div>
                      {langSelected === index ? (
                        <div
                          style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "5rem",
                            backgroundColor: "white",
                            marginRight: "20px",
                            color: "#5367fe",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          &#10003;
                        </div>
                      ) : null}
                    </div>
                  ))}

              {CurrencyUp === false
                ? null
                : Array2?.map((curr, index) => (
                    <div
                      key={index}
                      style={
                        currSelected === index
                          ? {
                              marginLeft: "15px",
                              fontSize: fontSizes || "1.5rem",
                              color: "#ffffff",
                              borderRadius: "10px",
                              width: "90%",
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                            }
                          : {
                              marginLeft: "15px",
                              fontSize: fontSizes || "1.5rem",
                              color: "grey",
                              borderRadius: "10px",
                              width: "90%",
                            }
                      }
                      className={`${
                        currSelected === index
                          ? styles.langSelected
                          : styles.desktopFont
                      }`}
                      onClick={() => {
                        setCurrSelected(index);
                      }}
                    >
                      <div style={{ marginLeft: "10px" }}> {curr}</div>
                      {currSelected === index ? (
                        <div
                          style={{
                            width: "25px",
                            height: "25px",
                            borderRadius: "5rem",
                            backgroundColor: "white",
                            marginRight: "20px",
                            color: "#5367fe",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          &#10003;
                        </div>
                      ) : null}
                    </div>
                  ))}
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
