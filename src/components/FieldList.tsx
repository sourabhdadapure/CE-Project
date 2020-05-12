import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Labels } from "./Labels";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: 300 + theme.spacing(5) * 2,
      },
    },
    fieldStyle: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
  })
);

interface FieldProperties {
  label: string;
  value: string | number;
}

interface FieldListProperties {
  list: FieldProperties[];
}

export const FieldList: React.FC<FieldListProperties> = ({ list }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {list.map((item, idx) => (
        <div key={idx} className={classes.fieldStyle}>
          <Labels.Body text={item.label} />
          <Labels.Body text={item.value.toString()} />
        </div>
      ))}
    </div>
  );
};
