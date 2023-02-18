import { doc, updateDoc } from "@firebase/firestore";
import React from "react";
import db from "../../../firebaseConfig";
import CardRight from "../../assets/icons/CardRight";
import EyeOff from "../../assets/icons/EyeOff";
import MoreVertical from "../../assets/icons/MoreVertical";
import Wallet from "../../assets/icons/Wallet";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../hooks/reduxHooks";
import styles from "./PortfolioPage.module.css";

export default function PortfolioPage() {
  const profile = useAppSelector((state) => state.profile);

  const addTestCryptos = async () => {
    const testCryptos = [
      {
        name: "Bitcoin",
        symbol: "BTC",
        boughtPrice: 10000,
        amount: 1.2,
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        boughtPrice: 1000,
        amount: 2.2,
      },
    ];
    await updateDoc(doc(db, "users", profile.userId), {
      portofolio: testCryptos,
    });
  };
  return (
    <Layout>
      <div
        onClick={() => addTestCryptos()}
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 40,
          height: 40,
          backgroundColor: "red",
          zIndex: 100,
        }}
      />
      <div className={styles.container}>
        <div className={styles.portfolioSummaryContainer}>
          <div className={styles.titleContainer}>
            <div className={styles.labelCont}>
              <div className={styles.title}>Portfolio</div>
              <div className={styles.updateDate}>
                Update 16/02/2022 at 2:30PM
              </div>
            </div>
            <div>
              <MoreVertical fill={"grey"} />
            </div>
          </div>
          <div className={styles.detailsContainer}>
            <div className={styles.availableCont}>
              <div className={styles.availableTitle}>
                <Wallet />
                <div className={styles.avtitle}>Available Balance</div>
              </div>
              <div className={styles.avmoneyCont}>
                <div className={styles.avamount}>32,444$</div>
                <div className={styles.eyeIcon}>
                  <EyeOff fill="grey" />
                </div>
              </div>
            </div>
            <div className={styles.potrfolioCardsCont}>
              <div className={styles.twoCardsCont}>
                <DetailsCard
                  labelIcon={<CardRight />}
                  labelText={"Total Investment"}
                  customStyle={{ width: "50%" }}
                  amount={"$32,444"}
                />
                <DetailsCard
                  labelIcon={<CardRight />}
                  labelText={"Total return"}
                  amount={"$32,444"}
                  customStyle={{ width: "50%" }}
                />
              </div>
              <DetailsCard
                className={styles.thirdCard}
                labelIcon={<CardRight />}
                labelText={"Total Investment"}
                amount={"$32,444"}
                returnIndicator={-2}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
