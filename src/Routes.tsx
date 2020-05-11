import * as React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ConfigureStore from "../src/config/configStore";
import { Provider } from "react-redux";
const store = ConfigureStore();
// import "./style.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div></div>
        </Router>
      </Provider>
    );
  }
}
