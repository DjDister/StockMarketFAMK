import React from "react";
import styles from "./Footer.module.css";
import Windows from "../../assets/icons/Windows";
import MacOs from "../../assets/icons/MacOs";
import AppStore from "../../assets/icons/AppStore";
import GooglePlay from "../../assets/icons/GooglePlay";
import Paypal from "../../assets/icons/PayPal";
import Mastercard from "../../assets/icons/Mastercard";
import Bitcoin from "../../assets/icons/Bitcoin";
import Card from "../../assets/icons/Card";
import Input from "../Input/Input";
import Instagram from "../../assets/icons/Instagram";
import Facebook from "../../assets/icons/Facebook";
import Twitter from "../../assets/icons/Twitter";
import Youtube from "../../assets/icons/Youtube";
import Linked from "../../assets/icons/Linked";

export default function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Navbar}>
        <div className={styles.tytul}>
          <h2 className={styles.tytultekst}> StockFAMK</h2>
        </div>
        <div className={styles.Przyciski}>
          <div className={styles.icon}>
            <GooglePlay fill="white" />

            <div className={styles.tekst}>
              <span className={styles.tekst2}>Download for the GooglePlay</span>
            </div>
          </div>

          <div className={styles.icon}>
            <MacOs fill="white" />

            <div className={styles.tekst}>
              <span className={styles.tekst2}>Download for the MacOs</span>
            </div>
          </div>

          <div className={styles.icon}>
            <AppStore height="32px" width="32px" />

            <div className={styles.tekst}>
              <span className={styles.tekst2}>Download for the AppStore</span>
            </div>
          </div>
          <div className={styles.icon}>
            <Windows fill="white" />

            <div className={styles.tekst}>
              <span className={styles.tekst2}>Download for the Windows</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listy}>
        <div className={styles.lista1}>
          <h3 className={styles.listhead}>Exhange</h3>

          <span>Excange Home</span>
          <br></br>
          <span>Margin Trading</span>
          <br></br>
          <span>Derivatives Trading</span>
          <br></br>
          <span>SuperCharger</span>
        </div>
        <div className={styles.lista2}>
          <h3 className={styles.listhead}>Support</h3>

          <span>Request From</span>
          <br></br>
          <span>Contact Support </span>
          <br></br>
          <span>FAQ</span>
          <br></br>
          <span>Security</span>
        </div>
        <div className={styles.lista3}>
          <h3 className={styles.listhead}>Company</h3>

          <span>About us</span>
          <br></br>
          <span>Carrers</span>
          <br></br>
          <span>News</span>
          <br></br>
          <span>Security</span>
          <br></br>
          <span>Community</span>
          <br></br>
          <span>Announcement</span>
        </div>
        <div className={styles.lista4}>
          <h3 className={styles.listhead}>Resourses</h3>

          <span>Dowland</span>
          <br></br>
          <span>Desktop Application</span>
          <br></br>
          <span>Buy Crypto</span>
          <br></br>
          <span>Refferal</span>
          <br></br>
          <span>Listing Trading</span>
        </div>

        <div className={styles.newsletterdiv}>
          <h3>Newsletter</h3>
          <div className={styles.inputbutton}>
            <Input
              className={styles.input}
              style={{ height: "100%" }}
              placeholder="Enter your email"
              onChange={() => null}
            />

            <button className={styles.button}>Send</button>
          </div>
          <p>We accept the following payment system</p>
          <div className={styles.icons2}>
            <div className={styles.icon3}>
              <Paypal fill="white" />
            </div>
            <div className={styles.icon3}>
              <Mastercard fill="white" />
            </div>
            <div className={styles.icon3}>
              <Bitcoin fill="white" />
            </div>
            <div className={styles.icon3}>
              <Card fill="white" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.stopka}>
        <p className={styles.paragraf}>© 2023 FAMK. All right reserved</p>

        <div className={styles.podstopka}>
          <div className={styles.podstopka1}>Privacy</div>
          <div className={styles.podstopka1}>Terms</div>
          <div className={styles.podstopka1}>Sitemap</div>
        </div>
        <div className={styles.icons4}>
          <div className={styles.ikona}>
            <Facebook height="32px" width="32px" fill="white" />
          </div>
          <div className={styles.ikona}>
            <Youtube fill="white" />
          </div>
          <div className={styles.ikona}>
            <Twitter fill="white" />
          </div>
          <div className={styles.ikona}>
            <Linked fill="white" />
          </div>
          <div className={styles.ikona}>
            <Instagram fill="#FFFFFF" />
          </div>
        </div>
      </div>
    </div>
  );
}
