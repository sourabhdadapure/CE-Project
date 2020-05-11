import types from "./types";
import { Dispatch } from "redux";
import appAuth from "../../config/appAuth";
import firebase from "firebase";

// Update later
export const login = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.LOGIN_LOADING });
    const provider = new firebase.auth.GoogleAuthProvider();

    // TODO: update this to async await
    appAuth
      .auth()
      .signInWithRedirect(provider)
      .then((user) => dispatch({ type: types.LOGIN_SUCCESS, payload: user }))
      .catch((err) => dispatch({ type: types.LOGIN_ERROR, error: err }));
  };
};
