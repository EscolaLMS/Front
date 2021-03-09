import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { Input, Checkbox } from "../../FormElements/Inputs";
import { action } from "@storybook/addon-actions";

storiesOf("Input", module)
  .addDecorator(withKnobs)
  .add("text", () => {
    return (
      <Input
        label="Name"
        className="input "
        id="first_name"
        name="first_name"
        type="text"
        onChange={action("change")}
        placeholder="Password"
      />
    );
  })
  .add("password", () => {
    return (
      <Input
        label="Password"
        className="input"
        id="first_name"
        name="first_name"
        type="text"
        onChange={action("change")}
        placeholder="Password"
      />
    );
  })
  .add("email", () => {
    return (
      <Input
        label="Email"
        className="input"
        id="first_name"
        name="first_name"
        type="email"
        onChange={action("change")}
        placeholder="Email"
      />
    );
  })
  .add("checkbox", () => {
    return (
      <Checkbox onChange={action("change")}>
        <span>
          Accept{" "}
          <a target="blank" href="/">
            Terms & Conditions
          </a>
        </span>
      </Checkbox>
    );
  })
  .add("error", () => {
    return (
      <Input
        label="Name"
        className="input"
        id="first_name"
        name="first_name"
        type="text"
        onChange={action("change")}
        error={"Required"}
        placeholder="Name"
        touched={true}
      />
    );
  })

  .add("with-margin", () => {
    const buttonClasses = {
      noMargin: "input",
      withMargin: "input margin-15",
    };
    const valueClasses = select(
      "Classes",
      buttonClasses,
      buttonClasses.noMargin
    );
    return (
      <>
        <Input
          className={valueClasses}
          label="Name"
          id="first_name"
          name="first_name"
          type="text"
          onChange={action("change")}
          placeholder="Name"
        />
        <Input
          label="Password"
          className={valueClasses}
          id="first_name"
          name="first_name"
          type="text"
          onChange={action("change")}
          placeholder="Password"
        />
      </>
    );
  });
