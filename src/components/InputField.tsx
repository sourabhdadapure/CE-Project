import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 300 + theme.spacing(5) * 2,
      },
    },
  })
);

interface InputFieldProperties {
  label: string;
  inputValue: string | number;
  onChange(val: any): void;
  inputType: string;
}

export const InputField: React.FC<InputFieldProperties> = ({
  label,
  inputType,
  inputValue,
  onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        type={inputType}
        onChange={(event) => onChange(event)}
        id="outlined-basic"
        label={label}
        value={inputValue}
        variant="outlined"
      />
    </div>
  );
};
