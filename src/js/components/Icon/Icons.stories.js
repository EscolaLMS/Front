import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, select } from "@storybook/addon-knobs";

import Icon from "./index.tsx";

storiesOf("Icon", module)
  .addDecorator(withKnobs)
  .add("index", () => {
    const iconColours = {
      defaultColor: "",
      white: "white",
      clearBlue: "clear-blue",
      coral: "coral",
      pinkishGrey: "pinkish-grey",
      greyishBrown: "greyish-brown",
    };
    const valueClasses = select(
      "Classes",
      iconColours,
      iconColours.defaultColor,
      "GROUP-ID1"
    );
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          backgroundColor: "#ffde17",
          width: "100%",
        }}
      >
        <div>
          <div className="small-text">
            <small>close</small>
          </div>
          <Icon color={valueClasses} name="close" />
        </div>
        <div>
          <div className="small-text">
            <small>google</small>
          </div>
          <Icon color={valueClasses} name="google" />
        </div>
        <div>
          <div className="small-text">
            <small>facebook</small>
          </div>
          <Icon color={valueClasses} name="facebook" />
        </div>
        <div>
          <div className="small-text">
            <small>checkmark-after</small>
          </div>
          <Icon color={valueClasses} name="checkmark-after" />
        </div>
        <div>
          <div className="small-text">
            <small>checkmark-before</small>
          </div>
          <Icon color={valueClasses} name="checkmark-before" />
        </div>
        <div>
          <div className="small-text">
            <small>user</small>
          </div>
          <Icon color={valueClasses} name="user" />
        </div>
        <div>
          <div className="small-text">
            <small>notify</small>
          </div>
          <Icon color={valueClasses} name="notify" />
        </div>

        <div>
          <div className="small-text">
            <small>task</small>
          </div>
          <Icon color={valueClasses} name="task" />
        </div>
        <div>
          <div className="small-text">
            <small>search</small>
          </div>
          <Icon color={valueClasses} name="search" />
        </div>
        <div>
          <div className="small-text">
            <small>arrow-dropdown</small>
          </div>
          <Icon color={valueClasses} name="arrow-dropdown" />
        </div>
        <div>
          <div className="small-text">
            <small>play</small>
          </div>
          <Icon color={valueClasses} name="play" />
        </div>
        <div>
          <div className="small-text">
            <small>play-bg</small>
          </div>
          <Icon color={valueClasses} name="play-bg" />
        </div>
        <div>
          <div className="small-text">
            <small>play-yt</small>
          </div>
          <Icon color={valueClasses} name="play-yt" />
        </div>
        <div>
          <div className="small-text">
            <small>circle</small>
          </div>
          <Icon color={valueClasses} name="circle" />
        </div>
        <div>
          <div className="small-text">
            <small>fb</small>
          </div>
          <Icon color={valueClasses} name="fb" />
        </div>
        <div>
          <div className="small-text">
            <small>twitter</small>
          </div>
          <Icon color={valueClasses} name="twitter" />
        </div>
        <div>
          <div className="small-text">
            <small>retry</small>
          </div>
          <Icon color={valueClasses} name="retry" />
        </div>
        <div>
          <div className="small-text">
            <small>checkmark-anim</small>
          </div>
          <Icon color={valueClasses} name="checkmark-anim" />
        </div>
        <div>
          <div className="small-text">
            <small>document-download</small>
          </div>
          <Icon color={valueClasses} name="document-download" />
        </div>

        <div>
          <div className="small-text">
            <small>dashboard</small>
          </div>
          <Icon color={valueClasses} name="dashboard" />
        </div>
        <div>
          <div className="small-text">
            <small>bell</small>
          </div>
          <Icon color={valueClasses} name="bell" />
        </div>
        <div>
          <div className="small-text">
            <small>clock</small>
          </div>
          <Icon color={valueClasses} name="clock" />
        </div>
        <div>
          <div className="small-text">
            <small>note</small>
          </div>
          <Icon color={valueClasses} name="note" />
        </div>

        <div>
          <div className="small-text">
            <small>marker</small>
          </div>
          <Icon color={valueClasses} name="marker" />
        </div>
        <div>
          <div className="small-text">
            <small>quoka</small>
          </div>
          <Icon color={valueClasses} name="quoka" />
        </div>
        <div>
          <div className="small-text">
            <small>cup</small>
          </div>
          <Icon color={valueClasses} name="cup" />
        </div>
        <div>
          <div className="small-text">
            <small>statistics</small>
          </div>
          <Icon color={valueClasses} name="statistics" />
        </div>

        <div>
          <div className="small-text">
            <small>profile</small>
          </div>
          <Icon color={valueClasses} name="profile" />
        </div>
        <div>
          <div className="small-text">
            <small>quoka-leafs</small>
          </div>
          <Icon color={valueClasses} name="quoka-leafs" />
        </div>
        <div>
          <div className="small-text">
            <small>fun-fact</small>
          </div>
          <Icon color={valueClasses} name="fun-fact" />
        </div>
        <div>
          <div className="small-text">
            <small>confetti</small>
          </div>
          <Icon color={valueClasses} name="confetti" />
        </div>
        <div>
          <div className="small-text">
            <small>arrowRound</small>
          </div>
          <Icon color={valueClasses} name="arrowRound" />
        </div>
      </div>
    );
  });
