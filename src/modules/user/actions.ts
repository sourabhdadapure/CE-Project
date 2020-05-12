import types from "./types";
import { Dispatch } from "redux";
import appAuth from "../../config/appAuth";
import firebase from "firebase";
import ls, { get, set } from "local-storage";
import { StorageKeys } from "../../constants";

export const login = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: types.LOGIN_LOADING });
      const provider = new firebase.auth.GoogleAuthProvider();

      await appAuth.auth().signInWithPopup(provider);
      await appAuth.auth().onAuthStateChanged((user) => {
        if (user && user.displayName) {
          set<string>(StorageKeys.UserName, user.displayName);
        }
        dispatch({ type: types.LOGIN_SUCCESS, payload: true });
      });
    } catch (err) {
      dispatch({ type: types.LOGIN_ERROR, error: err });
    }
  };
};

export const onAuthUpdated = () => {
  return async (dispatch: Dispatch) => {
    try {
      appAuth.auth().onAuthStateChanged((user) => console.log("blah", user));
    } catch (err) {
      dispatch({ type: types.LOGIN_ERROR, error: err });
    }
  };
};
