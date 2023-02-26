import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./CryptoItemPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import Plot from "react-plotly.js";

export default function CryptoItemPage() {
  const { id } = useParams();
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);

  useEffect(() => {
    const fetchHistoricData = async () => {
      const { data } = await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`
      );

      setHistoricData(data.prices);
    };
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        <>
          {historicData ? (
            <Plot
              data={[
                {
                  x: historicData.map((item: any) => {
                    const date = new Date(item[0]);
                    return date;
                  }),
                  y: historicData.map((item: any) => {
                    return item[1];
                  }),
                  type: "scatter",
                  mode: "lines+markers",
                  marker: { color: "red" },
                },
              ]}
              layout={{ width: 1000, height: 1000, title: "A Fancy Plot" }}
            />
          ) : null}
        </>
      </div>
    </div>
  );
}
