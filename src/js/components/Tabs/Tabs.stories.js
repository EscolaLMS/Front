import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import { Tabs, Tab } from ".";

storiesOf("Tabs", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-24">
            <Tabs>
              <Tab title="Tab1">Tab 1 content</Tab>
              <Tab title="Tab2">Tab 2 content</Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  });
