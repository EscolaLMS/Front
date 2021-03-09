import React from "react";
import { storiesOf } from "@storybook/react";

import { action } from "@storybook/addon-actions";
import Select from "../Select";

const options = [
  { value: "", label: "All categories" },
  {
    label: "Test Value 1",
    value: 1,
  },
  {
    label: "Test Value 2",
    value: 2,
    parent: 1,
  },
  {
    label: "Test Value 3",
    value: 3,
  },
  {
    label: "Test Value 4",
    value: 4,
  },
];

storiesOf("Select", module).add("standard", () => {
  return (
    <div style={{ backgroundColor: "#ffde17", padding: "20px" }}>
      <Select
        data={options}
        selected={options[0].value}
        onSelect={(option) => action(option)}
      />
    </div>
  );
});
