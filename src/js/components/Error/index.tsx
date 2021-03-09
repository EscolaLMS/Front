import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import "./index.scss";

const Error: React.FC<{
  desc: string;
}> = ({ desc }): ReactElement => {
  return (
    <div className="error-view">
      <h1>{desc}</h1>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default Error;
