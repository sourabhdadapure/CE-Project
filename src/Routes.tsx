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
import { UserModel } from "./modules/user/reducers";
import Home from "./views/Home";
import Budget from "./views/Budget";

interface Props {
  user: UserModel;
}

@(connect((state: UserModel) => state) as any)
export default class App extends React.Component<Props, {}> {
  render() {
    const { user } = this.props;
    return (
      <Router>
        <div>
          <HeaderBar title="Budget Planner" />

          <Switch>
            {/* TODO: add authenticated route later */}
            {/* <Route exact path="/" component={Home} /> */}
            {user.isAuthenticated ? (
              <React.Fragment>
                <Redirect to="/home" />
                <Route exact component={Home} />
              </React.Fragment>
            ) : (
              <Route exact path="/" component={Splash} />
            )}
            <Route exact path="/budget" component={Budget} />
          </Switch>
        </div>
      </Router>
    );
  }
}
