import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

interface ButtonProperties {
  title: string;
  onPress(): void;
  style?: any;
}

function OutlinedButton(props: ButtonProperties) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        style={props.style}
        onClick={props.onPress}
        variant="outlined"
        color="primary">
        {props.title}
      </Button>
    </div>
  );
}

function ContainedButton(props: ButtonProperties) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        style={props.style}
        onClick={props.onPress}
        variant="contained"
        color="primary">
        {props.title}
      </Button>
    </div>
  );
}

export const Buttons = {
  Outlined: (props: ButtonProperties) => (
    <OutlinedButton
      {...props}
      style={props.style}
      title={props.title}
      onPress={props.onPress}
    />
  ),

  Contained: (props: ButtonProperties) => (
    <ContainedButton
      {...props}
      style={props.style}
      title={props.title}
      onPress={props.onPress}
    />
  ),
};
