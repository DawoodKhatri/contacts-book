import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "bootstrap/dist/js/bootstrap";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
