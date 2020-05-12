import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { HeaderBar } from "../src/components";
import Splash from "../src/views/Splash";
import { connect } from "react-redux";
import { UserModel } from "./modules/user/reducers";
import Home from "./views/Home";
import Budget from "./views/Budget";
import { PrivateRoute } from "./components/PrivateRoute";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
interface Props {
  user: UserModel;
}
export default class App extends React.Component<Props, {}> {
  render() {
    return (
      <Router history={history}>
        <HeaderBar title="Budget Planner" />

        <Switch>
          <Route exact path="/" component={Splash} />
          <PrivateRoute exact path="/home" comp={Home} />
          <PrivateRoute exact path="/budget" comp={Budget} />
        </Switch>
      </Router>
    );
  }
}
