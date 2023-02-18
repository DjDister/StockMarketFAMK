import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import { async } from "@firebase/util";

export default function Stock() {
  const [data, setData] = useState([]);

  interface Todo {
    id: string;
  }

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      setData(response.data);
    }
    console.log(data);
    fetchData();
  }, []);
  return <div></div>;
}
