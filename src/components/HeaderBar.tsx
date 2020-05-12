import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Buttons } from "./Buttons";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

interface HeaderProperties {
  title: string;
  isSignedIn: boolean;
  onSignOut(): void;
}

export const HeaderBar: React.FC<HeaderProperties> = ({
  title,
  isSignedIn,
  onSignOut,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ display: "flex", justifyContent: "center" }}
            variant="h6"
            className={classes.title}>
            {title}
          </Typography>
          {isSignedIn && (
            <Buttons.Contained onPress={onSignOut} title="Sign Out" />
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};
