import React, { useEffect, useState } from "react";
import CardRight from "../../assets/icons/CardRight";
import Download from "../../assets/icons/Download";
import EyeOff from "../../assets/icons/EyeOff";
import MoreVertical from "../../assets/icons/MoreVertical";
import Upload from "../../assets/icons/Upload";
import Wallet from "../../assets/icons/Wallet";
import Button from "../../components/Button/Button";
import Layout from "../../components/Layout/Layout";
import styles from "./WalletPage.module.css";
export default function WalletPage() {
  const [userWallet, setUserWallet] = useState([]);
  useEffect(() => {}, []);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.walletContainer}>
              <div className={styles.walletTitleCont}>
                <div className={styles.title}>
                  Wallet
                  <div className={styles.updateDate}>
                    Update 16/02/2022 at 3:20 PM
                  </div>
                </div>
                <MoreVertical fill="grey" />
              </div>
              <div className={styles.summaryContainer}>
                <div className={styles.walletBalance}>
                  <div className={styles.walletText}>
                    <Wallet style={{ marginRight: 8 }} />
                    Wallet Balance
                  </div>
                  <div className={styles.flexCenter}>
                    <div className={styles.avalibeAmount}>$32,455.12</div>
                    <EyeOff
                      fill={"grey"}
                      style={{ backgroundColor: "#080808", padding: 1 }}
                    />
                  </div>
                </div>
                <div className={styles.walletTotals}>
                  <div className={styles.totalCont}>
                    <div
                      style={{ color: "#8C8C8C" }}
                      className={styles.flexCenter}
                    >
                      <CardRight fill="grey" />
                      Total Deposited
                    </div>
                    <div className={styles.totalAmount}>
                      <Download fill={"#039763"} />
                      $32,455.12
                    </div>
                  </div>
                  <div className={styles.totalCont}>
                    <div
                      className={styles.flexCenter}
                      style={{ color: "#8C8C8C" }}
                    >
                      <CardRight fill="grey" />
                      Total Withdrawals
                    </div>
                    <div className={styles.totalAmount}>
                      <Upload fill="red" />
                      $2,455.12
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.transactionsContainer}>
              <div className={styles.transactionsTitle}>
                Transaction History
                <MoreVertical fill="grey" />
              </div>
              <div className={styles.walletButtonCont}>
                <Button showWip disabled>
                  Wallet History
                </Button>
                <Button showWip disabled>
                  Coin Wallet
                </Button>
              </div>
              <div className={styles.depositContainer}>
                {Array.from({ length: 10 }, (_, i) => (
                  <div key={i} className={styles.depositItem}>
                    <div className={styles.activityCont}>
                      <CardRight
                        fill="green"
                        style={{ alignSelf: "flex-start", marginTop: 3 }}
                      />
                      <div>
                        Deposited
                        <div className={styles.depositDate}>Feb 03, 2022</div>
                      </div>
                    </div>
                    <div>$50,000.00</div>
                    <div style={{ color: "#039763" }}> Successful</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
