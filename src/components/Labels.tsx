import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UI from "../ui";
import { Typography } from "@material-ui/core";

const Palette = UI.Colors.Labels;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    typoStyle: {
      color: Palette.White,
    },
  })
);

interface LabelProperties {
  text: string;
  fontSize?: "h4" | "h5" | "h6";
  style?: any;
}

function Font(props: LabelProperties) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography
        className={classes.typoStyle}
        style={props.style}
        variant={props.fontSize}>
        {props.text}
      </Typography>
    </div>
  );
}

export const Labels = {
  H4: (props: LabelProperties) => (
    <Font {...props} style={props.style} text={props.text} fontSize="h4" />
  ),
  H5: (props: LabelProperties) => (
    <Font {...props} style={props.style} text={props.text} fontSize="h5" />
  ),
  H6: (props: LabelProperties) => (
    <Font {...props} style={props.style} text={props.text} fontSize="h6" />
  ),
};
