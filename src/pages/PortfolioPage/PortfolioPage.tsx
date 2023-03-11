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
import { PortfolioElementType, PortfolioType, UserData } from "../../types";
import axios from "axios";
import formattedDate from "../../utils/currentDateFormated";
import formatNumber from "../../utils/formatNumber";
import MarketList from "../../components/MarketList/MarketList";
import MarketItem from "../../components/Marketitem/Marketitem";
import Wallet2 from "../../assets/icons/wallet2";
import DownArrow from "../../assets/icons/DownArrow";
import Repeat from "../../assets/icons/Repeat";

type MergedCoins = {
  name: string;
  symbol: string;
  averagePrice: string;
  amount: string;
};

export default function PortfolioPage() {
  const profile = useAppSelector((state) => state.profile);

  const [userPortfolio, setUserPortfolio] = useState<UserData | undefined>(
    undefined
  );

  const [totalReturn, setTotalReturn] = useState<number | undefined>(undefined);
  const [coinsPrice, setCoinsPrice] = useState<
    { symbol: string; price: number; image: string }[]
  >([]);
  const [coinsToShow, setCoinsToShow] = useState<MergedCoins[]>([]);

  function mergeCoins(portfolio: PortfolioType): MergedCoins[] {
    const mergedCoins: { [symbol: string]: MergedCoins } = {};

    for (const coin of portfolio) {
      const { name, symbol, boughtPrice, amount } = coin;

      if (symbol in mergedCoins) {
        const mergedCoin = mergedCoins[symbol];
        const oldTotalValue =
          parseFloat(mergedCoin.averagePrice) * parseFloat(mergedCoin.amount);
        const newTotalValue =
          oldTotalValue + parseFloat(boughtPrice) * parseFloat(amount);
        const newTotalAmount =
          parseFloat(mergedCoin.amount) + parseFloat(amount);
        mergedCoin.averagePrice = (newTotalValue / newTotalAmount).toFixed(2);
        mergedCoin.amount = newTotalAmount.toFixed(2);
      } else {
        mergedCoins[symbol] = {
          name,
          symbol,
          averagePrice: parseFloat(boughtPrice).toFixed(2),
          amount: parseFloat(amount).toFixed(2),
        };
      }
    }

    return Object.values(mergedCoins);
  }
  const [coins, setCoins] = useState<PortfolioType>([]);
  useEffect(() => {
    const fetchUserData = async () => {
      const docRef = doc(db, "users", profile.userId).withConverter(
        converter<UserData>()
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const mergedCoinsToShow = mergeCoins(docSnap.data().portfolio);
        setCoinsToShow(mergedCoinsToShow);
        setCoins(docSnap.data().portfolio);
        setUserPortfolio(docSnap.data());
        const data = docSnap.data().portfolio;
        if (mergedCoinsToShow) {
          setSelectedCoin(mergedCoinsToShow[0]);
          const totalReturn = await (
            await Promise.all(
              data.map(async (curr) => {
                const lowerName = curr.name.toLowerCase();
                const response = await axios.get(
                  `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${lowerName}`
                );

                const data = response.data;

                setCoinsPrice((prev) => [
                  ...prev,
                  {
                    symbol: curr.symbol,
                    image: data[0].image,
                    price: data[0].current_price,
                  },
                ]);

                return parseFloat(curr.amount) * data[0].current_price;
              })
            )
          ).reduce((acc, curr) => acc + curr, 0);
          setTotalReturn(totalReturn);
        } else {
          setTotalReturn(0);
        }
      }
    };
    fetchUserData();
  }, []);

  const totalInvestment = userPortfolio?.portfolio.reduce((acc, curr) => {
    return acc + parseFloat(curr.boughtPrice) * parseFloat(curr.amount);
  }, 0);
  const profitAmount =
    totalReturn && totalInvestment
      ? (totalReturn - totalInvestment).toFixed(2)
      : 0;

  const TitleElement = (
    <div
      className={styles.titleContainer}
      style={{ marginTop: 10, marginBottom: 10 }}
    >
      <div className={styles.title}>Coin Allocation</div>
      <div>
        <MoreVertical />
      </div>
    </div>
  );

  const [isOpenDropDown, setIsOpenDropDown] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<MergedCoins | null>(null);
  const [isOpenDropDown2, setIsOpenDropDown2] = useState(false);
  const [selectedCoin2, setSelectedCoin2] = useState<{
    symbol: "USD";
    sign: "$";
  } | null>(null);
  const [amountToExchange, setAmountToExchange] = useState<number>(0);
  const calculatedAmount = isNaN(
    amountToExchange *
      (coinsPrice.find((coin) => coin.symbol === selectedCoin?.symbol)?.price ||
        0)
  )
    ? 0
    : amountToExchange *
      (coinsPrice.find((coin) => coin.symbol === selectedCoin?.symbol)?.price ||
        0);

  const handleExchange = async () => {
    const sortedCoins = userPortfolio?.portfolio.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else if (a.name > b.name) {
        return 1;
      } else {
        if (parseFloat(a.boughtPrice) < parseFloat(b.boughtPrice)) {
          return -1;
        } else if (parseFloat(a.boughtPrice) > parseFloat(b.boughtPrice)) {
          return 1;
        } else {
          return 0;
        }
      }
    });

    const btcAmountToSubtract = amountToExchange;

    const newPortfolio: PortfolioElementType[] = [];

    let btcElementsSubtracted = 0;
    if (sortedCoins) {
      for (let i = 0; i < sortedCoins.length; i++) {
        if (sortedCoins[i].symbol === selectedCoin?.symbol) {
          if (
            btcElementsSubtracted + parseFloat(sortedCoins[i].amount) <=
            btcAmountToSubtract
          ) {
            btcElementsSubtracted += parseFloat(sortedCoins[i].amount);
          } else {
            newPortfolio.push({
              ...sortedCoins[i],
              amount: (
                parseFloat(sortedCoins[i].amount) -
                (btcAmountToSubtract - btcElementsSubtracted)
              ).toString(),
            });
            btcElementsSubtracted = btcAmountToSubtract;
          }
        } else {
          newPortfolio.push(sortedCoins[i]);
        }
      }
      const newWallet = {
        ...userPortfolio?.wallet,
        totalBalanceDollars: (
          parseFloat(userPortfolio?.wallet.totalBalanceDollars || "0") +
          calculatedAmount
        ).toString(),
      };

      if (
        newWallet &&
        newPortfolio &&
        newWallet.totalBalanceDollars &&
        newWallet.transactionHistory &&
        userPortfolio
      ) {
        const newTransactionHistory = newWallet.transactionHistory || [];
        await updateDoc(doc(db, "users", profile.userId), {
          portfolio: newPortfolio,
          wallet: newWallet,
        }).then(() => {
          setAmountToExchange(0);
          setCoins(newPortfolio);

          setUserPortfolio({
            ...userPortfolio,
            portfolio: newPortfolio,
            wallet: {
              totalBalanceDollars: newWallet.totalBalanceDollars,
              transactionHistory: newTransactionHistory,
            },
          });
          const mergedCoinsToShow = mergeCoins(newPortfolio);
          setCoinsToShow(mergedCoinsToShow);
          setSelectedCoin(
            (prev) =>
              mergedCoinsToShow.find((coin) => coin.symbol === prev?.symbol) ||
              mergedCoinsToShow[0]
          );
          if (coinsPrice) {
            setTotalReturn(
              newPortfolio.reduce((acc, curr) => {
                const price = coinsPrice.find(
                  (coin) => coin.symbol === curr.symbol
                )?.price;

                return acc + parseFloat(curr.amount) * (price || 0);
              }, 0)
            );
          }
        });
      }
    }
  };
  return (
    <Layout>
      <div className={styles.container}>
        {userPortfolio && coinsPrice ? (
          <div className={styles.pageContainer}>
            <div className={styles.leftContainer}>
              <div
                style={{
                  width: "100%",
                  marginBottom: 20,
                }}
              >
                <div className={styles.portfolioSummaryContainer}>
                  <div className={styles.titleContainer}>
                    <div className={styles.labelCont}>
                      <div className={styles.title}>Portfolio</div>
                      <div className={styles.updateDate}>{formattedDate}</div>
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
                        <div className={styles.avamount}>
                          {formatNumber(
                            userPortfolio.wallet.totalBalanceDollars
                          )}
                        </div>
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
                          amount={`$${formatNumber(totalInvestment)}`}
                        />
                        <DetailsCard
                          labelIcon={<CardRight />}
                          labelText={"Total return"}
                          amount={`$${
                            totalReturn ? formatNumber(totalReturn) : 0
                          }`}
                          customStyle={{ width: "50%" }}
                        />
                      </div>
                      <DetailsCard
                        className={styles.thirdCard}
                        labelIcon={<CardRight />}
                        labelText={"Profit/Loss"}
                        amount={`$${formatNumber(profitAmount)}`}
                        returnIndicator={
                          profitAmount && totalInvestment
                            ? parseFloat(
                                (
                                  parseFloat(profitAmount) / totalInvestment
                                ).toFixed(2)
                              )
                            : "0"
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.allocationContainer}>
                <MarketList
                  howManyToShowPerPage={10}
                  className={styles.MarketList}
                  emptyElement={
                    <div className={styles.emptyCont}>
                      No coins found - go buy some
                    </div>
                  }
                  cryptoCoins={coins.map((curr) => {
                    const coin = coinsPrice.find(
                      (coin) => coin.symbol === curr.symbol
                    );

                    return {
                      ...curr,
                      image: coin ? coin.image : "",
                      boughtPrice: curr.boughtPrice,
                      holdingAssets: curr.amount,
                      profitLoss:
                        parseFloat(curr.amount) * (coin ? coin.price : 0) -
                        parseFloat(curr.boughtPrice) * parseFloat(curr.amount),
                      assetValue: (
                        parseFloat(curr.amount) * (coin ? coin.price : 0)
                      ).toFixed(2),
                    };
                  })}
                  howManyDetails={5}
                  ElementToRenderInList={MarketItem}
                  showPagination
                  columnsTitleElements={[
                    { name: "Coin Name" },
                    { name: "Avg Buy" },
                    { name: "Holdings Assets" },
                    { name: "Total Assets Value" },
                    { name: "Profit/Loss" },
                  ]}
                  titleElement={TitleElement}
                />
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.exchangeContainer}>
                <div className={styles.exchangeTitle}>Exchange Coin</div>
                <div className={styles.balancesContainer}>
                  <div className={styles.flexCenter}>
                    <Wallet2 fill="grey" height="28" width="28" />$
                    {formatNumber(userPortfolio.wallet.totalBalanceDollars)}
                  </div>
                  <div className={styles.flexCenter}>
                    <img
                      className={styles.coinImage}
                      src={`${
                        coinsPrice.find(
                          (coin) => coin.symbol === selectedCoin?.symbol
                        )?.image ||
                        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      }`}
                    />
                    {selectedCoin?.amount || 0} {selectedCoin?.symbol || "BTC"}
                  </div>
                </div>
                <div className={styles.selectorContainer}>
                  <div className={styles.selectorInfo}>
                    Coin
                    <input
                      type="number"
                      className={styles.input}
                      value={amountToExchange}
                      placeholder="Type Amount"
                      onChange={(e) =>
                        setAmountToExchange(
                          parseFloat(e.target.value) >
                            parseFloat(selectedCoin?.amount ?? "0")
                            ? parseFloat(selectedCoin?.amount ?? "0")
                            : parseFloat(e.target.value)
                        )
                      }
                    />
                  </div>
                  <div
                    className={styles.dropDownContainer}
                    onClick={() => setIsOpenDropDown(!isOpenDropDown)}
                  >
                    <img
                      className={styles.coinImage}
                      src={`${
                        coinsPrice.find(
                          (coin) => coin.symbol === selectedCoin?.symbol
                        )?.image ||
                        "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                      }`}
                    />
                    {selectedCoin?.symbol || "BTC"} <DownArrow />
                    {isOpenDropDown ? (
                      <div className={styles.itemsHolder}>
                        {coinsToShow.map((coin, index) => (
                          <div
                            key={index}
                            className={styles.dropDownElem}
                            onClick={() => setSelectedCoin(coin)}
                          >
                            <img
                              className={styles.coinImage}
                              src={`${
                                coinsPrice.find(
                                  (coinDetails) =>
                                    coinDetails.symbol === coin.symbol
                                )?.image
                              }`}
                            />
                            {coin.symbol}
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
                <Repeat style={{ marginTop: 10, marginBottom: 10 }} />
                <div className={styles.selectorContainer}>
                  <div className={styles.selectorInfo}>
                    Change
                    <div>{calculatedAmount.toFixed(2)}</div>
                  </div>
                  <div
                    className={styles.dropDownContainer}
                    onClick={() => setIsOpenDropDown2(!isOpenDropDown2)}
                  >
                    <div>{selectedCoin2?.sign || "$ USD"}</div>
                    {selectedCoin2?.symbol} <DownArrow />
                    {isOpenDropDown2 ? (
                      <div className={styles.itemsHolder}>
                        {[{ symbol: "USD", sign: "$" }].map((coin, index) => (
                          <div
                            key={index}
                            className={styles.dropDownElem}
                            onClick={() =>
                              setSelectedCoin2({ symbol: "USD", sign: "$" })
                            }
                          >
                            <div>{coin.sign}</div>
                            USD
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className={styles.feesContainer}>No extra fees</div>
                <div
                  onClick={handleExchange}
                  className={styles.exchangeBtnContainer}
                >
                  Exchange
                </div>
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
