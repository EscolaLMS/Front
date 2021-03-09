import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./Button.tsx";
import someMarkdownText from "./Button.stories.md";
import Icon from "../../Icon";

storiesOf("Button", module)
  .addDecorator(withKnobs)
  .add(
    "standard",
    () => {
      const buttonClasses = {
        primary: "primary",
        secondary: "secondary",
        grey: "grey",
        red: "red",
        blue: "blue",
        loading: "loading",
      };
      const valueClasses = select(
        "Classes",
        buttonClasses,
        buttonClasses.primary
      );
      return (
        <Button className={valueClasses} onClick={action("button-click")}>
          Hello Button
        </Button>
      );
    },
    {
      notes: { markdown: someMarkdownText },
    }
  )

  .add(
    "social",
    () => {
      const buttonClasses = {
        facebook: "button blue social",
        google: "button red social",
      };
      const valueClasses = select(
        "Classes",
        buttonClasses,
        buttonClasses.facebook
      );
      return (
        <a className={valueClasses} href="#">
          <Icon name={valueClasses.includes("blue") ? "facebook" : "google"} />{" "}
          Hello Button
        </a>
      );
    },
    {
      notes: { markdown: someMarkdownText },
    }
  );
