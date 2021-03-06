import * as React from "react";
import { Paper, makeStyles, Theme, createStyles } from "@material-ui/core";
import UI from "../ui";
const Palette = UI.Colors;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 300 + theme.spacing(3) * 2.5,
      },
    },
    paperStyle: {
      backgroundColor: Palette.Background.Primary,
      marginTop: theme.spacing(8),
      width: 300 + theme.spacing(3) * 2.5,
      height: 300 + theme.spacing(5) * 3,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
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
