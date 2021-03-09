import React from "react";
import { Provider } from "react-redux";
import { store } from "../../../redux/store";
import { MemoryRouter } from "react-router-dom";

import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import SliderSection from "./index";
import CourseGridItem from "../../CourseComponents/CourseGridItem";
import { articles } from "./mock";

const themeType = { white: "white", yellow: "yellow" };

const contentType = { slick: "slick", static: "static" };

storiesOf("Slider", module)
  .addDecorator(withKnobs)
  .add("standard", () => {
    const theme = select("theme", themeType, themeType.white, "GROUP-ID1");
    const content = select(
      "Content type",
      contentType,
      contentType.slick,
      "GROUP-ID1"
    );
    return (
      <Provider store={store}>
        <MemoryRouter>
          <div className="container">
            <div className="row">
              <div className="col-18">
                <SliderSection
                  slidesToShow={3}
                  title="Start learn today"
                  textLink="Discover courses"
                  linkTo="#"
                  theme={theme}
                >
                  {content === "slick" ? (
                    articles.map((item) => (
                      <CourseGridItem
                        key={item.id}
                        id={item.id}
                        image={item.image}
                        title={item.title}
                        tags={item.tags}
                        price={item.price}
                      />
                    ))
                  ) : (
                    <div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer imperdiet neque odio, id interdum ante gravida
                        at. Integer et ipsum mollis nulla aliquam volutpat
                        convallis non neque. Duis tristique tincidunt lacinia.
                        Donec aliquam molestie libero, ut ornare nisi sodales
                        tristique. Fusce pretium ornare nulla in mollis. Fusce
                        scelerisque sit amet ex sit amet efficitur. Quisque
                        vulputate tincidunt pellentesque. Quisque et arcu in mi
                        semper molestie. Suspendisse placerat vitae eros cursus
                        vehicula. Nulla viverra iaculis libero egestas maximus.
                        Pellentesque blandit nisi et ante ultrices iaculis. Duis
                        ut nunc laoreet, tristique velit id, facilisis enim.
                        Integer et arcu maximus leo pulvinar vehicula a eget
                        quam. Ut porta vulputate arcu, eget laoreet sapien
                        tempus vitae. Aenean ac lacus dolor.
                      </p>
                    </div>
                  )}
                </SliderSection>
              </div>
            </div>
          </div>
        </MemoryRouter>
      </Provider>
    );
  });
