import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

import StoreProvider from "./store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StoreProvider>
          <App />
        </StoreProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
