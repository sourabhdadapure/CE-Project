import * as React from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 300 + theme.spacing(5) * 2,
      },
    },
    paperStyle: {
      backgroundColor: "red",
      marginTop: theme.spacing(8),
      width: 300 + theme.spacing(5) * 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing(2)}px ${theme.spacing(1)}px ${theme.spacing(
        3
      )}px`,
    },
  })
);

export const PaperComponent: React.FC = (props) => {
  const classes = useStyles();
  return <Paper className={classes.paperStyle}>{props.children}</Paper>;
};
