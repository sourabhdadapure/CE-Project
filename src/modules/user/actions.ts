import types from "./types";
import { Dispatch } from "redux";

// Update later
export const login = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.LOGIN_LOADING });
    dispatch({ type: types.LOGIN_SUCCESS, payload: {} });
  };
};
