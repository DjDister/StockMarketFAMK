import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/market",
    element: <App />,
  },
  {
    path: "/watchlist",
    element: <App />,
  },
  {
    path: "/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/tradehistory",
    element: <App />,
  },
  {
    path: "/wallet",
    element: <App />,
  },
  {
    path: "/learn",
    element: <App />,
  },
  {
    path: "/aboutus",
    element: <App />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
