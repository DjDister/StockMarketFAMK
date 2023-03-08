import React from "react";
import styles from "./AboutUsPage.module.css";
import MyComponent from "./TeamMember";
import filip from "../../assets/images/filip.jpg";
import Aleksy from "../../assets/images/Aleksy.jpg";
import krystian from "../../assets/images/krystian.jpg";
import Layout from "../../components/Layout/Layout";
export default function AboutUsPage() {
  return (
    <Layout>
      <div className={styles.MainContener}>
        <div className={styles.container}>
          <div className={styles.header}>About the creators</div>

          <div className={styles.Osoby}>
            <MyComponent
              image={filip}
              imie="Filip Porębski"
              opis="
              I led a team of two friends in creating a
               stock market project. I focused on keeping
                everyone on track while I developed key pages
                 like Profile, Market, Portfolio, Wallet, Register,
                  and Login. I also implemented a complex app logic
                   to make everything function smoothly, 
                   like integrating APIs
                    for real-time crypto market data, setup redux for whole app
                     and secure user authentication processes. With our platform,
                      users can view and edit their personal information,
                       search and view crypto market data,
                        track their investments, manage their
                         account balances, and securely
                          log in to the platform.
                           Overall, I'm proud of my work and my team's dedication in making this project a success.
              "
              email="porebskifilip@wp.pl"
            />
            <MyComponent
              image={Aleksy}
              imie="Aleksy Lisowski"
              opis="
              My first big project, I was responsible for making Footer, this AboutUsPage,
               cryptoItemPage and Market including setting and integrating API, created pagination,
               linked a user's long and short positions to a database,
               sorting functions, general styling and all necessary steps to make this website work. 
               As the team we were in touch 24/7, develop and discussed new solutions together.
                Personally I learnt a lot about TypeScript,
                 improved the quality of my code and discovered many possibilities offered by the frontend,
                  which will certainly be useful to me in the future. "
              email="aleksylisowski@gmail.com"
            />
            <MyComponent
              image={krystian}
              imie="Krystian Kiejno"
              opis="It was my first group project with such complexity. I was responsible for making a whole navBar, landing page and functionalities of few pages, both for desktop and mobile
              sized devices. It gave me a lot of experience and many sleepless nights."
              email="kkiejno@gmail.com"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
