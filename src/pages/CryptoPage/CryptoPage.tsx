import React from "react";
import styles from "./CryptoPage.module.css";
import axios from "axios";
import { useState, useEffect } from "react";
export default function CryptoPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin`
      );
      console.log(response);
    };
    fetchUserData();
  });

  return <div>CryptoPage</div>;
}
