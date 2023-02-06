import React from "react";
import RightArrow from "../assets/icons/RightArrow";
import UpArrow from "../assets/icons/UpArrow";
import { useState } from "react";
import "./DropDownMenu.css";

export default function DropDownMenu({
  leftIcon,
  text,
  text2,
  languageArray,
  onClick,
}: {
  leftIcon: JSX.Element;
  text: string;
  text2?: string;
  languageArray?: string[];
  onClick?: () => void;
}) {
  const [menuUp, setMenuUp] = useState(false);
  const [CurrencyUp, setCurrencyUp] = useState(false);
  const [LanguageUp, setLangugageUp] = useState(false);

  return (
    <div className="DropMenu">
      <div className="upperMenu">
        <div className="iconAndText">
          {leftIcon}{" "}
          <div
            className={LanguageUp === false ? "text" : "blueText"}
            onClick={() => {
              setLangugageUp(!LanguageUp);
              // setCurrencyUp(false);
              if (!(menuUp && CurrencyUp)) {
                setMenuUp(!menuUp);
              } else {
                setCurrencyUp(false);
              }
            }}
          >
            {text}
          </div>
          <div className="lineCurr"></div>
          <div
            className={CurrencyUp === false ? "text" : "blueText"}
            onClick={() => {
              setCurrencyUp(!CurrencyUp);

              // setLangugageUp(false);
              // setMenuUp(!menuUp);
              if (!(menuUp && LanguageUp)) {
                setMenuUp(!menuUp);
              } else {
                setLangugageUp(false);
              }
            }}
          >
            {text2}
          </div>
        </div>
        <div>
          {menuUp === false ? (
            <RightArrow width="30" height="30" />
          ) : (
            <UpArrow width="30" height="30" />
          )}
        </div>
      </div>

      {menuUp === true ? (
        <div className="langCurrBox">
          {/* {languageArray.map(item,index)} */}
        </div>
      ) : null}
    </div>
  );
}
