import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import Accordion from "../Accordion";

storiesOf("Accordion", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    return (
      <div style={{ backgroundColor: "#ffde17", padding: "20px" }}>
        <Accordion defaultActive={false} title={"Test title"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, magni
          impedit quaerat placeat deserunt quos, quas magnam inventore iure
          cumque ipsam at ratione. Quis, molestiae. Fugiat magnam, accusantium
          dolorem in quis eligendi tenetur dolore, vitae at molestiae dolorum!
          Sapiente nam, iste tempore quisquam molestiae optio magnam? Voluptatum
          minus aut rem doloribus blanditiis, aspernatur expedita porro dolor
          recusandae rerum veniam quos in dolore soluta voluptatem repudiandae
          repellendus explicabo ex, dolorem animi necessitatibus ut! Sit quos
          nam, deleniti eum fugit enim totam cum eligendi pariatur consequuntur
          incidunt nesciunt. Unde alias recusandae error dolores facere tempora
          provident iusto iste expedita magnam, inventore nesciunt!{" "}
        </Accordion>
      </div>
    );
  });
