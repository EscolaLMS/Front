import React, { ReactElement } from "react";
import "./index.scss";

interface IProps {
  width?: number;
  height?: number;
  position?: string;
}

const Loader: React.FC<IProps> = ({
  width = 30,
  height = 30,
  position = "center",
}): ReactElement => {
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className={["loader", position].join(" ")}
    />
  );
};

export default Loader;
