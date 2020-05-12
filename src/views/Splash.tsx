import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons, Paper, Labels } from "../components";
import { connect } from "react-redux";
import { login } from "../modules/user";
import UI from "../ui";

interface Props {
  login(): void;
}

@(connect(null, {
  login,
}) as any)
export default class Splash extends React.Component<Props, {}> {
  render() {
    const { login } = this.props;
    const Palette = UI.Colors;
    return (
      <div>
        <Paper>
          <Labels.H6 text="Start planning your budget" />

          <Buttons.Contained
            title="Login With Google"
            onPress={() => login()}
          />
        </Paper>
      </div>
    );
  }
}
