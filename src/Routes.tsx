import * as React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import ConfigureStore from "../src/config/configStore";
import { Provider } from "react-redux";
import "./App.css";
import { HeaderBar } from "../src/components";
import Splash from "../src/views/Splash";
const store = ConfigureStore();
// import "./style.css";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <HeaderBar title="Budget Planner" />
            <Switch>
              <Route exact path="/" component={Splash} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}
