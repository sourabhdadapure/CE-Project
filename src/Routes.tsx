import * as React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import "./App.css";
import { HeaderBar } from "../src/components";
import Splash from "../src/views/Splash";
import { connect } from "react-redux";
import { UserModel } from "./modules/user";
import Home from "./views/Home";

interface Props {
  user: UserModel;
}

@(connect((state: UserModel) => state) as any)
export default class App extends React.Component<Props, {}> {
  render() {
    return (
      <Router>
        <div>
          <HeaderBar title="Budget Planner" />
          <Switch>
            {/* TODO: add authenticated route later */}
            {this.props.user.user ? (
              <React.Fragment>
                <Redirect to="/home" />
                <Route exact component={Home} />
              </React.Fragment>
            ) : (
              <Route exact path="/" component={Splash} />
            )}
          </Switch>
        </div>
      </Router>
    );
  }
}
