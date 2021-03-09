import React from "react";
import { MemoryRouter } from "react-router-dom";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { Provider } from "react-redux";
import { store } from "../../../redux/store";

import SidebarMenu from "./index";

storiesOf("Menu", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    return (
      <Provider store={store}>
        <MemoryRouter>
          <div className="container">
            <div className="row">
              <div className="col-6">
                <SidebarMenu />
              </div>
            </div>
          </div>
        </MemoryRouter>
      </Provider>
    );
  });
