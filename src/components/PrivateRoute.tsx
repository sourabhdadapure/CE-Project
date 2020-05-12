import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { ConnectedComponent } from "react-redux";
import ls, { get } from "local-storage";
import { StorageKeys } from "../constants";

export const PrivateRoute: React.FC<RouteProps & { comp: any }> = ({
  comp: Comp,
  ...props
}) => {
  return (
    <Route
      path={props.path}
      {...props}
      render={(props) => {
        console.log("user-name", StorageKeys.UserName);
        if (get(StorageKeys.UserName)) {
          return <Comp {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
