import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";
import useWindowSize from "../../hooks/useWindowSize";
import formatNumber from "../../utils/formatNumber";
import ReturnIndicator from "../ReturnIndicator/ReturnIndicator";
import styles from "./MarketItem.module.css";
interface CryptoProps {
  name: string;
  symbol: string;
  current_price?: number;
  price_change_percentage_24h?: number;
  high_24h?: number;
  low_24h?: number;
  image?: string;
  howManyDetails: number;
  index?: number;
  id?: string;
  allowNavigateToDetails?: boolean;
  boughtPrice?: string;
  amount?: string;
  assetValue?: string;
  profitLoss?: string;
}

export default function MarketItem({
  index,
  name,
  symbol,
  current_price,
  price_change_percentage_24h,
  high_24h,
  low_24h,
  amount,
  image,
  id = "",
  howManyDetails,
  allowNavigateToDetails = false,
  assetValue,
  profitLoss,
  boughtPrice,
}: CryptoProps) {
  const changeElement = price_change_percentage_24h ? (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        color:
          price_change_percentage_24h > 0
            ? "#039763"
            : price_change_percentage_24h === 0
            ? "grey"
            : "red",
      }}
    >
      {price_change_percentage_24h}%
      {price_change_percentage_24h >= 0 ? (
        <TrendingUp fill={price_change_percentage_24h > 0 ? "green" : "grey"} />
      ) : (
        <TrendingDown fill="red" />
      )}
    </div>
  ) : (
    <></>
  );
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width && size.width >= 1100) {
      setIsSmallScreen(false);
    } else {
      setIsSmallScreen(true);
    }
  }, [size.width]);
  const navigate = useNavigate();

  return (
    <div
      onClick={
        allowNavigateToDetails
          ? () => navigate(`/crypto/${id.toLocaleLowerCase()}`)
          : undefined
      }
      style={{
        width: "100%",
        display: "flex",
        cursor: allowNavigateToDetails ? "pointer" : "default",
      }}
    >
      <div
        className={styles.nameContainer}
        style={{ width: isSmallScreen ? "65%" : "40%" }}
      >
        {index && <div style={{ marginRight: 10 }}>{index}</div>}
        <div className={styles.nameWithIcon}>
          <img className={styles.icon} src={image} />
          {name}
        </div>
        <div className={styles.symbolCont}>{symbol.toUpperCase()}</div>
      </div>
      <div
        className={styles.container}
        style={{
          width: isSmallScreen ? "35%" : "60%",
          gridTemplateColumns: isSmallScreen
            ? "1fr"
            : `repeat(${howManyDetails - 1}, 1fr)`,
        }}
      >
        {current_price && (
          <div className={styles.hideElement}>${current_price}</div>
        )}
        {price_change_percentage_24h && (
          <div className={styles.hideElement}>{changeElement}</div>
        )}
        {current_price && price_change_percentage_24h && (
          <div className={styles.showElem}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              ${current_price} {changeElement}
            </div>
          </div>
        )}
        {high_24h && <div className={styles.high24}>{high_24h}</div>}
        {low_24h && <div className={styles.low24}>{low_24h}</div>}
        {boughtPrice && (
          <div className={styles.boughtPrice}>${boughtPrice}</div>
        )}
        {amount && (
          <div className={styles.amount}>{parseFloat(amount).toFixed(2)}</div>
        )}
        {assetValue && <div className={styles.assetValue}>${assetValue}</div>}
        {profitLoss && (
          <div
            className={styles.profitLoss}
            style={{ alignItems: isSmallScreen ? "center" : "flex-end" }}
          >
            <div
              style={{
                whiteSpace: "nowrap",
                color: parseFloat(profitLoss) > 0 ? "white" : "red",
              }}
            >
              {parseFloat(profitLoss) > 0 ? "+ " : "- "}$
              {formatNumber(profitLoss)}
            </div>

            <ReturnIndicator
              returnIndicator={(
                parseFloat(assetValue ?? "0") /
                (parseFloat(boughtPrice ?? "0") * parseFloat(amount ?? "0"))
              ).toFixed(2)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
