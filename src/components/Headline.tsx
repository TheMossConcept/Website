import {makeStyles} from "@material-ui/core";
import React, { FC } from "react";

type Props = { text: string };

const useStyles = makeStyles({
  headlineStyle: {
    textAlign: "center",
    fontSize: 40,
    font: "Gotham A, Gotham B",
    color: "rgba(10, 10, 10, 0.6)",
  }
})

const Headline: FC<Props> = ({ text }) => {
   const { headlineStyle } = useStyles();
  return (
    <div className={headlineStyle}>{text}</div>
  );
};

export default Headline;
