import React from "react";
import "./NavBar.css";
import { useState } from "react";
import SearchTool from "../assets/icons/SearchTool";
import MenuOpen from "../assets/icons/MenuOpen";
import MenuClose from "../assets/icons/MenuClose";
import MarketIcon from "../assets/icons/MarketIcon";
import CustomLink from "./CustomLink";
import RightArrow from "../assets/icons/RightArrow";

const navElements = ["Market", "Watchlist", "Portfolio", "Learn"];
export default function NavBar() {
  const [hamburger, setHamburger] = useState(false);

  console.log(hamburger);

  return (
    <div className="navBar">
      <div className="leftNavMobile">
        <div className="FAMK">FAMK</div>
        <div className="line"></div>
      </div>

      <div
        className={
          hamburger === true ? "rightNavMobileWithX" : "rightNavMobile"
        }
      >
        {hamburger === true ? null : <SearchTool width="30" height="30" />}

        <div className="MenuOpen" onClick={() => setHamburger(!hamburger)}>
          {hamburger === true ? (
            <MenuClose width="30" height="30" />
          ) : (
            <MenuOpen width="30" height="30" />
          )}
        </div>
      </div>

      {hamburger === true ? (
        <div className="hamburgerMenuBar">
          <div className="userSmallInfo">
            <div className="circleIcon"></div>
            <div className="name&Email">
              <div className="name">Krystian Kiejno</div>
              <div className="Email">kkiejno@gmail.com</div>
            </div>
          </div>

          <div className="hamLine"></div>

          <CustomLink
            leftIcon={<MarketIcon />}
            text={"Market"}
            rightIcon={<RightArrow />}
          />
        </div>
      ) : null}
    </div>
  );
}
