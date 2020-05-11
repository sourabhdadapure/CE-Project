import types from "./types";

export type UserModel = {
  loading: boolean;
  user: any;
  error: any;
};

export const initialState: UserModel = {
  loading: false,
  user: undefined,
  error: undefined,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        user: undefined,
        error: undefined,
      };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: undefined,
      };
    }
    case types.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        user: undefined,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
