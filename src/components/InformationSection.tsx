import {makeStyles, Theme} from "@material-ui/core";
import React, { FC } from "react";

type Props = { backgroundImage: string };

const useStyles = makeStyles<Theme, { backgroundImage: string }>({
  container: {
    backgroundImage: props => `url('${props.backgroundImage}')`,
    backgroundPosition: "center center",
    height: "100vh",
    width: "100vw",
  }
})

const InformationSection: FC<Props> = ({ backgroundImage, children }) => {
  const { container } = useStyles({ backgroundImage });

  return (
    <div className={container}>{children}</div>
  );
};

export default InformationSection;
