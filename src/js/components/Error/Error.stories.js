import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Error from "./index";

storiesOf("Error", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    return <Error desc="Im error msg" />;
  });
