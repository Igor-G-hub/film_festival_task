import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { setupWorker } from "msw";
import { store } from "./redux/store";
import { Provider } from "react-redux";

if (process.env.REACT_APP_API_TYPE === "mockingApi") {
  const { handlers } = require("./mocks/handlers");
  const worker = setupWorker(...handlers);
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
