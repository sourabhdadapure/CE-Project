import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons, FieldList, Labels } from "../components";

import { updateBudget } from "../modules/budget";
import { BudgetModel } from "../modules/budget/reducers";
import { Provider, connect } from "react-redux";
import { InputField, Paper, Slider } from "../components";
import { UserModel } from "../modules/user/reducers";
import ls, { get } from "local-storage";
import { StorageKeys } from "../constants";
import Utils from "../utils";

interface Props {
  updateBudget(budget: BudgetModel): void;
  budget: BudgetModel;
  user: UserModel;
}
@(connect((state: BudgetModel | UserModel) => state, {
  updateBudget,
}) as any)
export default class Budget extends React.Component<Props, {}> {
  render() {
    const { budget, user } = this.props;
    const userName = get(StorageKeys.UserName);
    const salary = Utils.moneyFormatter(budget.salary);
    const expense = Utils.moneyFormatter(budget.expense);
    const savings = Utils.moneyFormatter(budget.savings);
    return (
      <div>
        <Paper>
          {userName && <Labels.H6 text={`Thank you ${userName}`} />}
          <Labels.Body text="Here's your monthly budget" />
          <FieldList
            list={[
              {
                label: "Your Election:",
                value: budget.expensePercentage + "%",
              },
              { label: "Your Salary:", value: "$" + salary },
              { label: "Your Expense:", value: "$" + expense },
              { label: "Your Savings:", value: "$" + savings },
            ]}
          />
        </Paper>
      </div>
    );
  }
}
