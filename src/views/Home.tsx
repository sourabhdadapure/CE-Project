import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons, FieldList } from "../components";

import { updateBudget } from "../modules/budget";
import { BudgetModel } from "../modules/budget/reducers";
import { connect } from "react-redux";
import { InputField, Paper, Slider } from "../components";
import { withRouter, RouteComponentProps } from "react-router-dom";

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
          <FieldList
            list={[
              { label: "Your Expense:", value: "$" + budget.expense },
              { label: "Your Savings:", value: "$" + budget.savings },
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
