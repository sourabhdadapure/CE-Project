import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons } from "../components";

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
export default class Home extends React.Component<Props, {}> {
  // componentDidUpdate = (prevProps: any) => {
  //   const { budget, updateBudget } = this.props;
  //   if (
  //     budget.salary !== prevProps.salary ||
  //     budget.expensePercentage !== prevProps.expensePercentage
  //   ) {
  //     updateBudget({ ...budget });
  //   }
  // };
  render() {
    const { budget, updateBudget } = this.props;

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper>
          <Slider
            min={0}
            max={30}
            title="Expense Slider"
            onChange={(val) => {
              const expensePercentage = val;
              updateBudget({ ...budget, expensePercentage });
              // this.setState({ expenseInPercentage: val });
            }}
          />
          <InputField
            label="Your Salary"
            inputType="number"
            inputValue={budget.salary}
            onChange={(event) => {
              const salary = event.target.value;
              updateBudget({ ...budget, salary });
            }}
          />
          <InputField
            label="Your Expense"
            inputType="number"
            inputValue={budget.expense}
            onChange={() => {}}
          />
          <InputField
            label="Your Savings"
            inputType="number"
            inputValue={budget.savings}
            onChange={() => {}}
          />
        </Paper>
      </div>
    );
  }
}
