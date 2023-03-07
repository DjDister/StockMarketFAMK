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
              My first big project, I was responsible for making Footer, this AboutUsPage, cryptoItemPage and whole Market including all functionality nad styling     "
              email="aleksylisowski@gmail.com"
            />
            <MyComponent
              image={krystian}
              imie="Krystian Kiejno"
              opis="Niestety nie wszystkim studentom udało się uzyskać wymagane zaliczenia w letniej sesji. 
          Niektórzy sami sobie zawinili, a innym zabrakło trochę szczęścia . Teraz muszą to nadrobić. 
          Podpowiadamy jak poradzić sobie z drugim podejściem do egzaminu.
          
          We wrześniu wciąż jeszcze nie ma zajęć na uczelniach.
          Jednak często musimy przypomnieć sobie gdzie leżą ich książki i notatki.
          Powodem jest sesja poprawkowa. Różne są powody oblania egzaminu lub co gorsze egzaminów. 
          Jedni musieli się przygotować tylko do dwóch, a inni nawet do pięciu.
          Czasami wystarczy mniej więcej orientować się w zagadnieniach, 
          gdy innym razem obkucie się ze wszystkich zagadnień może nie dać pozytywnej oceny."
              email="studentdebil3@gmail.com"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
