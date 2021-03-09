import React from "react";
import { MemoryRouter } from "react-router-dom";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import ImageBox from "./index";

storiesOf("ImageBox", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    return (
      <MemoryRouter>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <ImageBox />
            </div>
          </div>
        </div>
      </MemoryRouter>
    );
  });
