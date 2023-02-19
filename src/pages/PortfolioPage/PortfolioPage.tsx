import { doc, getDoc, updateDoc } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import db from "../../../firebaseConfig";
import CardRight from "../../assets/icons/CardRight";
import EyeOff from "../../assets/icons/EyeOff";
import MoreVertical from "../../assets/icons/MoreVertical";
import Wallet from "../../assets/icons/Wallet";
import DetailsCard from "../../components/DetailsCard/DetailsCard";
import Layout from "../../components/Layout/Layout";
import { useAppSelector } from "../../hooks/reduxHooks";
import converter from "../../utils/converter";
import styles from "./PortfolioPage.module.css";
import { PortfolioType, UserData } from "../../types";
import axios from "axios";

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
      portfolio: testCryptos,
    });
  };

  const [userPortfolio, setUserPortfolio] = useState<PortfolioType | undefined>(
    undefined
  );

  const [totalReturn, setTotalReturn] = useState<number | undefined>(undefined);

  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", profile.userId).withConverter(
        converter<UserData>()
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserPortfolio(docSnap.data().portfolio);
        const data = docSnap.data().portfolio;
        const totalReturn = await (
          await Promise.all(
            data.map(async (curr) => {
              const response = await axios.request({
                method: "GET",
                baseURL: "https://rest.coinapi.io/v1",
                url: `/exchangerate/${curr.symbol}/USD`,
                headers: {
                  "X-CoinAPI-Key": "976C4BA7-395F-4529-86B7-888A9F92493C",
                },
              });

              const data = await response.data;
              const currentPrice = data.rate;

              return parseInt(curr.amount) * currentPrice;
            })
          )
        ).reduce((acc, curr) => acc + curr, 0);
        setTotalReturn(totalReturn);
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    async function fetchCryptocurrencies() {
      const response = await axios.request({
        method: "GET",
        baseURL: "rest.coinapi.io",
        url: `/v1/symbols`,
        headers: {
          "X-CoinAPI-Key": "0C937E64-E825-4D2D-8E19-2B245D6A87B7",
        },
      });

      console.log(response);
    }

    fetchCryptocurrencies();
  }, []);

  const totalInvestment = userPortfolio?.reduce(
    (acc, curr) => acc + parseInt(curr.boughtPrice) * parseInt(curr.amount),
    0
  );
  const profitAmount =
    totalReturn && totalInvestment
      ? (totalReturn - totalInvestment).toFixed(2)
      : 0;
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
        {userPortfolio ? (
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
                    amount={`$${totalInvestment}`}
                  />
                  <DetailsCard
                    labelIcon={<CardRight />}
                    labelText={"Total return"}
                    amount={`$${totalReturn ? totalReturn.toFixed(2) : 0}`}
                    customStyle={{ width: "50%" }}
                  />
                </div>
                <DetailsCard
                  className={styles.thirdCard}
                  labelIcon={<CardRight />}
                  labelText={"Profit/Loss"}
                  amount={`$${profitAmount}`}
                  returnIndicator={
                    profitAmount && totalInvestment
                      ? (parseInt(profitAmount) / totalInvestment).toFixed(2)
                      : 0
                  }
                />
              </div>
            </div>
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Layout>
  );
}
