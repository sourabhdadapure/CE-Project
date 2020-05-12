import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import UI from "../ui";

const Palette = UI.Colors;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 300 + theme.spacing(5) * 2,
        "& label.Mui-focused": {
          color: Palette.Background.Secondary,
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: Palette.Labels.White,
          },
          "&:hover fieldset": {
            borderColor: Palette.Labels.Gray,
          },
          "&.Mui-focused fieldset": {
            borderColor: Palette.Background.Secondary,
          },
        },
      },
    },
    inputStyle: {
      color: Palette.Labels.White,
    },
    focused: {
      color: Palette.Background.Primary,
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
        inputProps={{ className: classes.inputStyle }}
        InputLabelProps={{
          className: classes.inputStyle,
        }}
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
