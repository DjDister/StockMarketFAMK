import React from "react";
import Layout from "./components/Layout/Layout";
import styles from "./App.module.css";
import landing3 from "./assets/images/landing3.png";
import EasyCard from "./components/EasyCard/EasyCard";
import MarketIcon from "./assets/icons/MarketIcon";
import UpArrow from "./assets/icons/UpArrow";
import RightArrow from "./assets/icons/RightArrow";
import VerifyAccount from "./assets/icons/VerifyAccount";
import Guy from "./assets/icons/Guy";
import Wallet2 from "./assets/icons/wallet2";
import Stonks from "./assets/icons/Stonks";
import TradingArrow from "./components/TradingArrow/TradingArrow";
import EasyCard2 from "./components/EasyCard2/EasyCard2";
import Deposit from "./assets/icons/Deposit";
import SafetyFirst from "./assets/icons/SafetyFirst";
import FastTimer from "./assets/icons/FastTimer";
import Bonus from "./assets/icons/Bonus";
import Support from "./assets/icons/Support";
import Verification from "./assets/icons/Verification";
import LowCharges from "./assets/icons/LowCharges";
import Encryption from "./assets/icons/Encryption";
import Newsletter from "./components/Newsletter/Newsletter";
import Creators from "./components/Creators/Creators";
import TradeAnywhere from "./components/TradeAnywhere/TradeAnywhere";
function App() {
  const startStepsArray = [
    {
      icon: <VerifyAccount />,
      boldText: "Verify Bank Account",
      text: "Verify Your Bank Account in Easy Way",
    },
    {
      icon: <Guy />,
      boldText: "Create an Account",
      text: "Sign up with email and mobile in just 5 minutes",
    },
    {
      icon: <Wallet2 />,
      boldText: "Add Funds to Wallet",
      text: "Quickly add money to your investment wallet",
    },
    {
      icon: <Stonks />,
      boldText: "Start Trading Instantly",
      text: "Buy & Sell a variety of top coins at the best prices",
    },
  ];

  const services = [
    {
      icon: <SafetyFirst />,
      boldText: "Safety Comes First",
      text: "Safeguard your investments with our trusted stock market service.",
    },
    {
      icon: <FastTimer />,
      boldText: "Fast Transactions",
      text: "Quickly invest with our speedy stock market service.",
    },
    {
      icon: <Encryption />,
      boldText: "Deep Encryption",
      text: "Keep your investments safe with our advanced encryption methods.",
    },
    {
      icon: <Deposit />,
      boldText: "Easy Deposit & Withdrawls",
      text: "Easily deposit and withdraw funds with our stock market platform.",
    },
    {
      icon: <Verification />,
      boldText: "Fast KYC",
      text: "Instantly verify your account with our fast KYC service.",
    },
    {
      icon: <LowCharges />,
      boldText: "Low Charges",
      text: "Keep more of your money with our low-cost stock market platform.",
    },
    {
      icon: <Bonus />,
      boldText: "Bonus & Refferal",
      text: "Increase your profits with our bonus and referral system.",
    },
    {
      icon: <Support />,
      boldText: "24/7 Support",
      text: "Always-on support to help you succeed in the stock market.",
    },
  ];

  return (
    <Layout>
      <div
        style={{ width: "100%", height: "100%" }}
        className={styles.wholeLanding}
      >
        <div className={styles.Landing1}>
          {/* <div className={styles.img1Cont}> */}
          <img src={landing3} className={styles.img1} />
          {/* </div> */}

          <div className={styles.leftDesktopLanding1}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100%", marginLeft: "10px" }}>
                <div className={styles.whiteBoldText}>Buy & Sell</div>
                <div className={styles.blueBoldText}>Stock Instant</div>
              </div>
              <div style={{ marginLeft: "10px" }}>
                <div>Join our trusted Exchange !</div>

                <div>Trade in crypto currencies and many stocks.</div>
              </div>
              <div className={styles.tradingButton}>Start Trading</div>
            </div>
          </div>
        </div>

        {/* {"INC"} */}
        {/* <div>
          <div className={styles.TOP}>Top Market</div>
          <div className={styles.whiteBoldText2}>Get Various Crypto Coin</div>
        </div> */}

        <div className={styles.createProfile}>
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ color: "#5367fe", fontSize: "1.2rem" }}>
                Create Profile
              </div>
              <div className={styles.whiteBoldText2}>
                Easy Way to get Started
              </div>
              <div className={styles.fewSteps}>
                Your are just few step away from becoming a real stock market
                trader !
              </div>
            </div>
            {startStepsArray.map((step, index) => (
              <EasyCard
                key={index}
                icon={step.icon}
                boldText={step.boldText}
                text={step.text}
              />
            ))}
            <TradingArrow text="Start Trading" />
          </>
        </div>

        <div className={styles.createProfileDesktop}>
          <div
            style={{
              width: "40%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                width: "80%",
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                gap: "30px",
              }}
            >
              <div
                style={{
                  color: "#5367fe",
                  fontSize: "1.2rem",
                }}
              >
                Create Profile
              </div>
              <div
                className={styles.whiteBoldText2}
                style={{ fontSize: "2.5rem" }}
              >
                Easy Way to get Started
              </div>
              <div className={styles.fewSteps}>
                Your are just few step away from becoming a real stock market
                trader !
              </div>
              <TradingArrow text="Start Trading" />
            </div>
          </div>

          <div className={styles.cards} style={{ width: "60%" }}>
            <div
              style={{
                display: "flex",

                flexDirection: "row-reverse",
                justifyContent: "left",
                width: "100%",
                height: "50%",

                gap: "50px",
              }}
            >
              {startStepsArray
                .filter(
                  (step) =>
                    step.boldText === "Verify Bank Account" ||
                    step.boldText === "Create an Account"
                )
                .map((elem) => (
                  <EasyCard
                    key={elem.text}
                    icon={elem.icon}
                    text={elem.text}
                    boldText={elem.boldText}
                  />
                ))}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "left",
                width: "100%",
                height: "50%",
              }}
            >
              <div
                style={{
                  width: "94%",
                  display: "flex",
                  justifyContent: "right",
                  gap: "50px",
                }}
              >
                {startStepsArray
                  .filter(
                    (step) =>
                      step.boldText === "Add Funds to Wallet" ||
                      step.boldText === "Start Trading Instantly"
                  )
                  .map((elem) => (
                    <EasyCard
                      key={elem.text}
                      icon={elem.icon}
                      text={elem.text}
                      boldText={elem.boldText}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>

        <TradeAnywhere />

        <div className={styles.TOP}>Benefits</div>
        <div className={styles.whiteBoldText2}>Our best Services</div>
        <div className={styles.fewSteps}>
          Start your successful investment journey with our secure, fast, and
          easy stock market services
        </div>
        <div className={styles.servicesMobile}>
          {services.map((step, index) => (
            <div
              key={index}
              style={{
                width: "100%",

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <EasyCard2
                icon={step.icon}
                boldText={step.boldText}
                text={step.text}
              />
            </div>
          ))}
        </div>
        <Creators />
        <Newsletter />
      </div>
    </Layout>
  );
}

export default App;
