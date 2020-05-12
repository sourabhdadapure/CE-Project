import * as React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import { HeaderBar } from "../src/components";
import { Splash, Budget, Home } from "../src/views/";
import { connect } from "react-redux";
import { UserModel } from "./modules/user/reducers";
import { signOut } from "../src/modules/user";
import { PrivateRoute } from "./components/PrivateRoute";
import { createBrowserHistory } from "history";
import { get } from "local-storage";
import { StorageKeys } from "./constants";
export const history = createBrowserHistory();
interface Props {
  user: UserModel;
  signOut(): void;
}

@(connect((state: UserModel) => state, { signOut }) as any)
export default class App extends React.Component<Props, {}> {
  render() {
    const { user, signOut } = this.props;
    const isAuthenticated = get(StorageKeys.UserName);
    return (
      <Router history={history}>
        <HeaderBar
          isSignedIn={!!isAuthenticated}
          onSignOut={() => signOut()}
          title="Budget Planner"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Switch>
            <Route exact path="/" component={Splash} />
            <PrivateRoute exact path="/home" comp={Home} />
            <PrivateRoute exact path="/budget" comp={Budget} />
          </Switch>
        </div>
      </Router>
    );
  }
}
