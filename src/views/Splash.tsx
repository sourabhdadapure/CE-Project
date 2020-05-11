import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons } from "../components";
import { connect } from "react-redux";
import { login } from "../modules/user";

interface Props {
  login(): void;
}

@(connect(null, {
  login,
}) as any)
export default class Splash extends React.Component<Props, {}> {
  render() {
    const { login } = this.props;
    return (
      <div>
        <Typography>Splash</Typography>
        <Buttons.Contained title="Login With Google" onPress={() => login()} />
      </div>
    );
  }
}
