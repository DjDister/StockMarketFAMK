import React from "react";
import "./NavBar.css";
import { useState } from "react";
import SearchTool from "../assets/icons/SearchTool";
import MenuOpen from "../assets/icons/MenuOpen";
import MenuClose from "../assets/icons/MenuClose";
import MarketIcon from "../assets/icons/MarketIcon";
import CustomLink from "./CustomLink";
import RightArrow from "../assets/icons/RightArrow";
import { useLocation } from "react-router-dom";
import Watchlist from "../assets/icons/WatchList";
import Portfolio from "../assets/icons/Portfolio";
import Learn from "../assets/icons/Learn";
import Wallet from "../assets/icons/Wallet";
import DropDownMenu from "./DropDownMenu";
import Globe from "../assets/icons/Globe";

const navElements = ["Market", "Watchlist", "Portfolio", "Learn"];

export default function NavBar() {
  const [hamburger, setHamburger] = useState(false);
  const [currency, setCurrency] = useState(false);
  const currencies = ["PLN", "USD", "ARS", "AUD", "BGN"];
  const languages = ["Polish", "English", "German", "French", "Spanish"];

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
        <div>
          {hamburger === true ? null : <SearchTool width="30" height="30" />}
        </div>

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

          <div className="hamLine1"></div>

          <div className="linksContainer">
            <CustomLink
              leftIcon={<MarketIcon width="30" height="30" />}
              text={"Market"}
              rightIcon={<RightArrow width="30" height="30" />}
            />

            <CustomLink
              leftIcon={<Watchlist width="30" height="30" />}
              text={"Watchlist"}
              rightIcon={<RightArrow width="30" height="30" />}
            />

            <CustomLink
              leftIcon={<Portfolio width="30" height="30" />}
              text={"Portfolio"}
              rightIcon={<RightArrow width="30" height="30" />}
            />

            <CustomLink
              leftIcon={<MarketIcon width="30" height="30" />}
              text={"Trade History"}
              rightIcon={<RightArrow width="30" height="30" />}
            />

            <CustomLink
              leftIcon={<Wallet width="30" height="30" />}
              text={"Wallet"}
              rightIcon={<RightArrow width="30" height="30" />}
            />

            <CustomLink
              leftIcon={<Learn width="30" height="30" />}
              text={"Learn"}
              rightIcon={<RightArrow width="30" height="30" />}
            />
          </div>

          <div className="hamLine"></div>

          {/* <div>language/currency (INC)</div> */}
          <DropDownMenu leftIcon={<Globe />} text={"English"} text2={"USD"} />

          <div className="hamLine1"></div>
          <div className="logRegButtons">
            <div className="loginButton">Sign in</div>
            <div className="registerButton">Register</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
