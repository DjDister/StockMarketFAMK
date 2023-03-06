import React from "react";
import styles from "./AboutUsPage.module.css";
import MyComponent from "./TeamMember";
import zdjecie from "./images/zdjecie.jpg";
import filip from "./images/filip.jpg";
import krystian from "./images/krystian.jpg";
import aleksy from "./images/aleksy.jpg";
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
              opis="Niestety nie wszystkim studentom udało się uzyskać wymagane zaliczenia w letniej sesji. 
          Niektórzy sami sobie zawinili, a innym zabrakło trochę szczęścia . Teraz muszą to nadrobić. 
          Podpowiadamy jak poradzić sobie z drugim podejściem do egzaminu.
          
          We wrześniu wciąż jeszcze nie ma zajęć na uczelniach.
          Jednak często musimy przypomnieć sobie gdzie leżą ich książki i notatki.
          Powodem jest sesja poprawkowa. Różne są powody oblania egzaminu lub co gorsze egzaminów. 
          Jedni musieli się przygotować tylko do dwóch, a inni nawet do pięciu.
          Czasami wystarczy mniej więcej orientować się w zagadnieniach, 
          gdy innym razem obkucie się ze wszystkich zagadnień może nie dać pozytywnej oceny."
              email="studentdebil1@gmail.com"
            />
            <MyComponent
              image={aleksy}
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
