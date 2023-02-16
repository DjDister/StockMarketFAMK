import React from "react";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: "#080808",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <NavBar />

      {children}
      <div
        style={{
          width: "100%",
          backgroundColor: "#121318",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
