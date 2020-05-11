import types from "./types";
import { Dispatch } from "redux";
import appAuth from "../../config/appAuth";
import firebase from "firebase";
import { BudgetModel } from "./reducers";

// Update later
export const updateSavingsAndExpense = (budget: BudgetModel) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: types.BUDGET_LOADING });
    const { expensePercentage, salary } = budget;
    const expense = Math.round((salary / 12) * (expensePercentage / 100));
    const savings = Math.round(
      (salary / 12) * ((100 - expensePercentage) / 100)
    );
    dispatch({
      type: types.BUDGET_SUCCESS,
      payload: { expense, savings, expensePercentage, salary },
    });
  };
};
