import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./Routes";
import ConfigureStore from "../src/config/configStore";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
const store = ConfigureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routes />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
