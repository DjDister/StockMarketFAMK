import React, { useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import styles from "./CryptoItemPage.module.css";
import { useParams } from "react-router-dom";
export default function CryptoItemPage() {
  const { id } = useParams();
  console.log(id);
  //   useEffect(() => {
  //     const socket = new WebSocket("wss://ws.coinapi.io/v1/");
  //     socket.addEventListener("open", (event) => {
  //       console.log("WebSocket connection opened!");
  //       // Send an authentication message to the server after the connection is opened
  //       const authMessage = {
  //         type: "hello",
  //         apikey: "0C937E64-E825-4D2D-8E19-2B245D6A87B7",
  //         heartbeat: false,
  //         subscribe_data_type: ["trade"],
  //         subscribe_filter_symbol_id: ["BITSTAMP_SPOT_BTC_USD"],
  //       };
  //       socket.send(JSON.stringify(authMessage));
  //     });

  //     socket.addEventListener("message", (event) => {
  //       console.log(event.data);
  //       console.log(JSON.parse(event.data));
  //       // Handle incoming messages here
  //     });

  //     socket.addEventListener("error", (event) => {
  //       console.error("WebSocket error:", event);
  //     });

  //     socket.addEventListener("close", (event) => {
  //       console.log("WebSocket connection closed!");
  //     });

  //     return () => {
  //       socket.close();
  //     };
  //   }, []);
  return (
    <Layout>
      <div className={styles.pageContainer}>dassji</div>
    </Layout>
  );
}
