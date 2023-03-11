import React from "react";
import TrendingDown from "../../assets/icons/TrendingDown";
import TrendingUp from "../../assets/icons/TrendingUp";

export default function ReturnIndicator({
  returnIndicator,
}: {
  returnIndicator: number | string;
}) {
  return (
    <div
      style={{
        display: "flex",

        color:
          returnIndicator > 0 ? "green" : returnIndicator == 0 ? "grey" : "red",
      }}
    >
      {returnIndicator}%
      {returnIndicator >= 0 ? (
        <TrendingUp fill={returnIndicator > 0 ? "green" : "grey"} />
      ) : (
        <TrendingDown fill="red" />
      )}
    </div>
  );
}
