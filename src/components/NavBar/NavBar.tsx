import React from "react";
import styles from "./NavBar.module.css";
import { useState } from "react";
import SearchTool from "../../assets/icons/SearchTool";
import MenuOpen from "../../assets/icons/MenuOpen";
import MenuClose from "../../assets/icons/MenuClose";
import MarketIcon from "../../assets/icons/MarketIcon";
import CustomLink from "../CustomLink/CustomLink";
import RightArrow from "../../assets/icons/RightArrow";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Watchlist from "../../assets/icons/WatchList";
import Portfolio from "../../assets/icons/Portfolio";
import Learn from "../../assets/icons/Learn";
import Wallet from "../../assets/icons/Wallet";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import Globe from "../../assets/icons/Globe";
import UpArrow from "../../assets/icons/UpArrow";
import AboutUs from "../../assets/icons/AboutUs";
import { useAppSelector } from "../../hooks/reduxHooks";
import Wallet2 from "../../assets/icons/wallet2";
import Logout from "../../assets/icons/Logout";
import { logOut } from "../../redux/profileSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import Button from "../Button/Button";

export default function NavBar() {
  const user = useAppSelector((state) => state.profile);
  const [hamburger, setHamburger] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(user.userId ? true : false);
  const locationData = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const languageArray = [
    "Polish",
    "English",
    "German",
    "French",
    "Spanish",
    "Bulgarian",
    "Portugese",
    "Czech",
  ];

  const currencyArray = [
    "PLN",
    "USD",
    "EUR",
    "AUD",
    "GBP",
    "SEK",
    "CAD",
    "JPY",
    "CHF",
    "CZK",
  ];

  const midElements = [
    {
      text: "Market",
      url: "market",
      leftIcon: <MarketIcon />,
    },
    {
      text: "Watchlist",
      url: "watchlist",
      leftIcon: <Watchlist />,
    },
    {
      text: "Portfolio",
      url: "portfolio",
      leftIcon: <Portfolio />,
    },
    {
      text: "Trade History",
      url: "tradehistory",
      leftIcon: <MarketIcon />,
    },
    {
      text: "Wallet",
      url: "wallet",
      leftIcon: <Wallet2 width="30px" height="30px" />,
    },

    {
      text: "About us",
      url: "aboutus",
      leftIcon: <AboutUs />,
    },
  ];

  return (
    <>
      {hamburger === true ? (
        <>
          <div className={styles.opacityDiv}></div>
          <div
            className={styles.hamburgerKillerAbsolute}
            onClick={() => {
              setHamburger(false);
            }}
          ></div>
        </>
      ) : null}
      <div className={styles.navBar}>
        <div className={styles.leftNavMobile}>
          <Link
            className={styles.FAMK}
            style={{ textDecoration: "none" }}
            onClick={() => {}}
            to={"/"}
          >
            FAMK
          </Link>
          <div className={styles.line}></div>
        </div>

        <div className={styles.desktopNavBar}>
          <div
            className={styles.centerElements}
            style={isLoggedIn === true ? { justifyContent: "left" } : {}}
          >
            {midElements
              .filter(
                (elem) =>
                  elem.text !== "Wallet" && elem.text !== "Trade History"
              )
              .map((elem, index) => (
                <div
                  key={index}
                  className={`${
                    locationData.pathname === "/" + elem.url
                      ? `${styles.blueUnderlineCenter} ${styles.elemCenter}`
                      : `${styles.blackUnderlineCenter} ${styles.elemCenter}`
                  }`}
                >
                  <Link
                    style={{
                      cursor: "pointer",
                      textDecoration: "none",
                      whiteSpace: "nowrap",
                    }}
                    className={`${
                      locationData.pathname === "/" + elem.url
                        ? styles.blueTextCenter
                        : styles.whiteTextCenter
                    }`}
                    onClick={() => {}}
                    to={"/" + elem.url}
                  >
                    {elem.text}
                  </Link>
                </div>
              ))}
          </div>
          <div
            className={styles.rightElements}
            style={isLoggedIn === true ? { gap: "40px" } : {}}
          >
            <div className={styles.dropMenuContainer}>
              <DropDownMenu
                upperHeight="12vh"
                upperWidth="120px"
                middleWidth="220px"
                textSize="0.9rem"
                text={"Polish"}
                text2={"PLN"}
                text3={"Langugage"}
                text4={"Currency"}
                Array1={languageArray}
                Array2={currencyArray}
                fontSizes="1.2rem"
                rightIcon={<RightArrow height="25px" width="25px" />}
                rightIcon2={
                  <UpArrow height="25px" width="25px" fill="#5367fe" />
                }
              />
            </div>
            {isLoggedIn === false ? (
              <div className={styles.logRegButtonsDesktop}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                  className={styles.loginButtonDesktop}
                >
                  Sign in
                </Link>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none" }}
                  className={styles.registerButtonDesktop}
                >
                  Register
                </Link>
              </div>
            ) : (
              <>
                <div style={{ display: "flex", gap: "10px" }}>
                  <div>
                    <Button
                      disabled
                      style={{ textDecoration: "none", height: "auto" }}
                    >
                      <CustomLink
                        leftIcon={<MarketIcon width="20px" height="20px" />}
                        text="Trade History"
                        fill={
                          locationData.pathname === "/tradehistory"
                            ? "#5367fe"
                            : "#808080"
                        }
                        style={{
                          fontSize: "1rem",

                          width: "auto",
                          alignItems: "center",
                          margin: "0px",
                          backgroundColor: "#080808",
                          padding: "6px",
                          borderRadius: "7px",
                          whiteSpace: "nowrap",
                          color: "#808080",
                        }}
                      />
                    </Button>
                  </div>
                  <Link to={"/wallet"} style={{ textDecoration: "none" }}>
                    <CustomLink
                      leftIcon={<Wallet width="20px" height="20px" />}
                      text="Wallet"
                      fill={
                        locationData.pathname === "/wallet"
                          ? "#5367fe"
                          : "#808080"
                      }
                      style={
                        locationData.pathname === "/wallet"
                          ? {
                              fontSize: "1rem",
                              width: "auto",
                              alignItems: "center",
                              margin: "0px",
                              backgroundColor: "#080808",
                              padding: "6px",
                              borderRadius: "7px",
                              whiteSpace: "nowrap",
                              color: "#5367fe",
                            }
                          : {
                              fontSize: "1rem",
                              width: "auto",
                              alignItems: "center",
                              margin: "0px",
                              backgroundColor: "#080808",
                              padding: "6px",
                              borderRadius: "7px",
                              whiteSpace: "nowrap",
                              color: "#808080",
                            }
                      }
                    />
                  </Link>
                </div>
                <Link
                  to={"/profile"}
                  style={{ textDecoration: "none" }}
                  className={styles.userSmallInfoDesktop}
                >
                  <div className={styles.circleIcon}></div>
                  <div className={styles.nameAndEmail}>
                    <div
                      className={styles.name}
                      style={{ fontWeight: "initial" }}
                    >
                      {user.displayName || ""}
                    </div>
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>

        <div
          className={`${
            hamburger === true
              ? styles.rightNavMobileWithX
              : styles.rightNavMobile
          }`}
        >
          <div>
            {hamburger === true ? null : <SearchTool width="30" height="30" />}
          </div>

          <div
            className={styles.MenuOpen}
            onClick={() => setHamburger(!hamburger)}
          >
            {hamburger === true ? (
              <MenuClose width="30" height="30" />
            ) : (
              <MenuOpen width="30" height="30" />
            )}
          </div>
        </div>

        {hamburger === true ? (
          <div className={styles.hamburgerMenuBar}>
            {isLoggedIn === false ? (
              <div className={styles.logRegButtons}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={"/login"}
                  className={styles.loginButton}
                >
                  Sign in
                </Link>
                <Link
                  to={"/register"}
                  style={{ textDecoration: "none" }}
                  className={styles.registerButton}
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                to={"/profile"}
                style={{ textDecoration: "none" }}
                className={styles.userSmallInfo}
              >
                <div className={styles.circleIcon}></div>
                <div>
                  <div className={styles.name}>{user.displayName}</div>
                  <div className={styles.Email}>
                    {user.displayName === user.email ? null : user.email}
                  </div>
                </div>
              </Link>
            )}

            <div className={styles.hamLine1}></div>

            {/* {lista dla wersji mobilnej} */}
            <div className={styles.linksContainer}>
              {midElements.map((elem, index) => (
                <Link
                  key={index}
                  to={"/" + elem.url}
                  style={{ textDecoration: "none" }}
                >
                  <CustomLink
                    fill={
                      locationData.pathname === "/" + elem.url
                        ? "#5367fe"
                        : "#808080"
                    }
                    style={
                      locationData.pathname === "/" + elem.url
                        ? { color: "#5367fe" }
                        : { color: "#808080" }
                    }
                    leftIcon={elem.leftIcon}
                    text={elem.text}
                    rightIcon={<RightArrow />}
                  />
                </Link>
              ))}
            </div>

            <div className={styles.hamLine}></div>

            <DropDownMenu
              leftIcon={<Globe />}
              leftIcon2={<Globe fill="#5367fe" />}
              rightIcon={<RightArrow width="30" height="30" />}
              rightIcon2={<UpArrow width="30" height="30" fill="#5367fe" />}
              text={"Polish"}
              text2={"PLN"}
              text3={"Langugage"}
              text4={"Currency"}
              Array1={languageArray}
              Array2={currencyArray}
            />

            <div className={styles.hamLine1}></div>
            {isLoggedIn === true ? (
              <div className={styles.logoutButton}>
                <CustomLink
                  leftIcon={<Logout />}
                  text="Logout"
                  style={{
                    color: "#f04444",
                    width: "auto",
                    marginRight: "7%",
                  }}
                  onClick={() => {
                    dispatch(logOut());
                    setIsLoggedIn(!isLoggedIn);
                    navigate("/");
                  }}
                />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </>
  );
}
