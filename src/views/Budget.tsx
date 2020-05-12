import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons, FieldList } from "../components";

import { updateBudget } from "../modules/budget";
import { BudgetModel } from "../modules/budget/reducers";
import { Provider, connect } from "react-redux";
import { InputField, Paper, Slider } from "../components";

interface Props {
  updateBudget(budget: BudgetModel): void;
  budget: BudgetModel;
}
@(connect((state: BudgetModel) => state, {
  updateBudget,
}) as any)
export default class Budget extends React.Component<Props, {}> {
  render() {
    const { budget } = this.props;

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}>
        <Paper>
          <FieldList
            list={[
              { label: "Your Election:", value: budget.expensePercentage },
              { label: "Your Salary:", value: budget.salary },
              { label: "Your Expense:", value: budget.expense },
              { label: "Your Savings:", value: budget.savings },
            ]}
          />
        </Paper>
      </div>
    );
  }
}
