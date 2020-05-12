import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons, Paper } from "../components";
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
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper>
          <Typography style={{ color: Palette.Labels.White }}>
            Start planning your budget
          </Typography>
          <Buttons.Contained
            title="Login With Google"
            onPress={() => login()}
          />
        </Paper>
      </div>
    );
  }
}
