import React from "react";
import {
  withStyles,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";
import { Labels } from "./Labels";
import UI from "../ui";

const Palette = UI.Colors.Background;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(2),
      width: 300 + theme.spacing(3) * 2.5,
    },
    margin: {
      height: theme.spacing(5),
    },
    SliderContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    TitleStyle: {
      display: "flex",
      justifyContent: "center",
    },
  })
);

const PrettoSlider = withStyles({
  root: {
    color: Palette.Secondary,
    height: 8,
    marginRight: 20,
    marginLeft: 20,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

interface SliderCompProperties {
  min: number;
  max: number;
  title: string;
  inputValue: number;
  onChange(val: any): void;
}

export const SliderComp: React.FC<SliderCompProperties> = ({
  min,
  max,
  title,
  onChange,
  inputValue,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Labels.Body text={title} />

      <div className={classes.SliderContainer}>
        <Labels.Body text={min + "%"} />
        <PrettoSlider
          onChange={(event, value) => onChange(value)}
          valueLabelDisplay="auto"
          aria-label="pretto slider"
          defaultValue={0}
          value={inputValue}
          min={min}
          max={max}
        />
        <Labels.Body text={max + "%"} />
      </div>
    </div>
  );
};
