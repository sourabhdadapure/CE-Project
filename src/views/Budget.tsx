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
              { label: "Your Salary:", value: "$" + budget.salary },
              { label: "Your Expense:", value: "$" + budget.expense },
              { label: "Your Savings:", value: "$" + budget.savings },
            ]}
          />
        </Paper>
      </div>
    );
  }
}
