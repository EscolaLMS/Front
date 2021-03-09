import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import BoxWrapper from "./index";

storiesOf("BoxWrapper", module)
  .addDecorator(withKnobs)
  .add("yellow", () => {
    return (
      <MemoryRouter>
        <div className="container">
          <div className="row">
            <div className="col-24">
              <BoxWrapper title={"Some title"}>children</BoxWrapper>
            </div>
          </div>
        </div>
      </MemoryRouter>
    );
  })
  .add("green", () => {
    return (
      <MemoryRouter>
        <div className="container">
          <div className="row">
            <div className="col-24">
              <BoxWrapper title={"Some title"} color={"green"}>
                children
              </BoxWrapper>
            </div>
          </div>
        </div>
      </MemoryRouter>
    );
  })
  .add("withSubTitle", () => {
    return (
      <MemoryRouter>
        <div className="container">
          <div className="row">
            <div className="col-24">
              <BoxWrapper
                title={"Some title"}
                color={"yellow"}
                subTitle={
                  <h4>
                    Basis of your <Link to={"/"}>categories</Link>
                  </h4>
                }
              >
                children
              </BoxWrapper>
            </div>
          </div>
        </div>
      </MemoryRouter>
    );
  });
