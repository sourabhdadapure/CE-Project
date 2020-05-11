import types from "./types";

export type BudgetModel = {
  salary: number;
  expensePercentage: number;
  expense: number;
  savings: number;
  loading: boolean;
  error: any;
};

export const initialState: BudgetModel = {
  loading: false,
  salary: 0,
  expensePercentage: 0,
  expense: 0,
  savings: 0,
  error: undefined,
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case types.BUDGET_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }

    case types.BUDGET_SUCCESS: {
      return {
        ...state,
        loading: false,
        salary: action.payload.salary,
        expensePercentage: action.payload.expensePercentage,
        expense: action.payload.expense,
        savings: action.payload.savings,
        error: undefined,
      };
    }
    case types.BUDGET_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    default:
      return state;
  }
}
