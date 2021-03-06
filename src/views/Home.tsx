import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons, FieldList } from "../components";

import { updateBudget } from "../modules/budget";
import { BudgetModel } from "../modules/budget/reducers";
import { connect } from "react-redux";
import { InputField, Paper, Slider } from "../components";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Utils from "../utils";

interface IProps {
  updateBudget(budget: BudgetModel): void;
  budget: BudgetModel;
}

type Props = IProps & RouteComponentProps;
@(connect((state: BudgetModel) => state, {
  updateBudget,
}) as any)
class Home extends React.Component<Props, {}> {
  render() {
    const { budget, updateBudget } = this.props;

    const budgetExpense = Utils.moneyFormatter(budget.expense);
    const budgetSavings = Utils.moneyFormatter(budget.savings);

    return (
      <div>
        <Paper>
          <Slider
            min={0}
            max={30}
            title="Expense Slider"
            inputValue={budget.expensePercentage}
            onChange={(val) => {
              const expensePercentage = val;
              updateBudget({ ...budget, expensePercentage });
            }}
          />
          <InputField
            label="Enter Your Salary"
            inputType="number"
            inputValue={budget.salary !== 0 ? budget.salary : ""}
            onChange={(event) => {
              const salary = event.target.value;
              updateBudget({ ...budget, salary });
            }}
          />
          <FieldList
            list={[
              { label: "Your Expense:", value: "$" + budgetExpense },
              { label: "Your Savings:", value: "$" + budgetSavings },
            ]}
          />
          <Buttons.Contained
            title="Done"
            onPress={() => {
              this.props.history.push("/budget");
            }}
          />
        </Paper>
      </div>
    );
  }
}

export default withRouter(Home as any);
