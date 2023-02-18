import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

import MarketPage from "./pages/MarketPage/MarketPage";
import ProtectedRoute from "./redux/ProtectedRoute";
import ProfilPage from "./pages/ProfilePage/ProfilPage";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/market" element={<MarketPage />} />
        <Route path="/watchlist" element={<App />} />
        <Route
          path="/portfolio"
          element={<ProtectedRoute component={PortfolioPage} />}
        />
        <Route
          path="/tradehistory"
          element={<ProtectedRoute component={App} />}
        />
        <Route path="/wallet" element={<ProtectedRoute component={App} />} />
        <Route
          path="/profile"
          element={<ProtectedRoute component={ProfilPage} />}
        />
        <Route path="/aboutus" element={<App />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </React.StrictMode>
);
