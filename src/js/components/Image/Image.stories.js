import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";
import Image from "../Image";

storiesOf("Image", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    return <Image src="https://picsum.photos/2000" alt="auth-background" />;
  })
  .add("withSize", () => {
    return (
      <Image
        width={200}
        height={200}
        src="https://picsum.photos/2000"
        alt="auth-background"
      />
    );
  })
  .add("contain", () => {
    return (
      <div style={{ width: "300px" }}>
        <Image contain src="https://picsum.photos/2000" alt="auth-background" />
      </div>
    );
  })
  .add("effect", () => {
    const buttonClasses = {
      blur: "blur",
      blackAndWhite: "black-and-white",
      opacity: "opacity",
    };
    const valueClasses = select("Classes", buttonClasses);
    return (
      <Image
        effect={valueClasses}
        width={500}
        height={500}
        src="https://picsum.photos/2000"
        alt="auth-background"
      />
    );
  });
