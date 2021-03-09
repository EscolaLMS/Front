import React from "react";
import { storiesOf } from "@storybook/react";

import Loader from "../Loader";

storiesOf("Loader", module)
  .add("standard", () => {
    return <Loader position="left" />;
  })
  .add("diffrentSize", () => {
    return <Loader width={100} height={100} position="left" />;
  })

  .add("right", () => {
    return <Loader width={100} height={100} position="right" />;
  })

  .add("center", () => {
    return <Loader width={100} height={100} position="center" />;
  });
