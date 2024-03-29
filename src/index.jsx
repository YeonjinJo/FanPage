import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import store from "./redux/config/configStore";
import GlobalStyle from "./styles/GlobalStyle";
import GlobalFont from "./styles/GlobalFont";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <GlobalFont />
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>
);
