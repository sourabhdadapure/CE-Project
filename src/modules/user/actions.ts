import types from "./types";
import { Dispatch } from "redux";
import appAuth from "../../config/appAuth";
import firebase from "firebase";

// Update later
export const login = () => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: types.LOGIN_LOADING });
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      const login = await appAuth.auth().signInWithPopup(provider);
      // console.log("redirected", login);
      // const authorized = await appAuth.auth().getRedirectResult();
      // console.log("redirected", authorized.credential);
      if (login.credential) {
        console.log("Login success");
        dispatch({ type: types.LOGIN_SUCCESS, payload: true });
      }
    } catch (err) {
      console.log("Login Failed", err);
      dispatch({ type: types.LOGIN_ERROR, error: err });
    }

    // .auth()
    // .signInWithPopup(provider)
    // appAuth
    //   .auth()
    //   .signInWithPopup(provider)
    //   .then((user) => dispatch({ type: types.LOGIN_SUCCESS, payload: user }))
    //   .catch((err) => dispatch({ type: types.LOGIN_ERROR, error: err }));
  };
};
