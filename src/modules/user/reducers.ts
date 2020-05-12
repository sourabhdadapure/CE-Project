import types from "./types";

export type UserModel = {
  loading: boolean;
  isAuthenticated: boolean;
  error: any;
};

export const initialState: UserModel = {
  loading: false,
  isAuthenticated: false,
  error: undefined,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.LOGIN_LOADING: {
      return {
        ...state,
        loading: true,
        isAuthenticated: undefined,
        error: undefined,
      };
    }

    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        loading: false,
        isAuthenticated: action.payload,
        error: undefined,
      };
    }
    case types.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        isAuthenticated: undefined,
        error: action.error,
      };
    }

    case types.LOGIN_ERROR: {
      return {
        ...state,
        error: action.error,
      };
    }

    case types.LOGOUT_SUCCESS: {
      return state;
    }
    default:
      return state;
  }
}
