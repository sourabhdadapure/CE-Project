import * as React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ConfigureStore from "../src/config/configStore";
import { Provider } from "react-redux";
import "./App.css";
import { HeaderBar } from "../src/components";
const store = ConfigureStore();
// import "./style.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <HeaderBar title="Budget Planner" />
          <div className="App">
            <header className="App-header">
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer">
                Learn React
              </a>
            </header>
          </div>
        </Router>
      </Provider>
    );
  }
}
