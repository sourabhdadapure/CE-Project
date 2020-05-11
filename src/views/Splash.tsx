import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Paper, Buttons } from "../components";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Typography>Splash</Typography>
        <Buttons.Contained title="Login With Google" onPress={() => {}} />
      </div>
    );
  }
}
