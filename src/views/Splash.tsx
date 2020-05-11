import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Buttons } from "../components";

export default class Splash extends React.Component {
  render() {
    return (
      <div>
        <Typography>Splash</Typography>
        <Buttons.Contained title="Login With Google" onPress={() => {}} />
      </div>
    );
  }
}
