import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Slider as SliderLMS } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { Settings } from "react-slick";

const Content = styled.div`
  @media (max-width: 575px) {
    margin-left: -59px;
  }
  .slick-slider {
    @media (max-width: 575px) {
      width: calc(100% + 15px);
    }
  }
  .slick-dots {
    top: -65px;
    @media (max-width: 575px) {
      top: -30px !important;
      right: unset !important;
      left: 60px !important;
    }
  }
  .slick-track {
    display: flex;
    gap: 0 20px;
    @media (max-width: 991px) {
      padding-bottom: 20px;
    }
  }

  .slick-slide {
    height: inherit;

    > div {
      display: flex;
      height: 100%;
    }
  }
`;

const defaultSliderSettings = {
  arrows: false,
  infinite: true,
  speed: 500,
  draggable: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        draggable: true,
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
      },
    },
  ],
};

type Props = {
  nodes: ReactNode | ReactNode[];
  sliderSettings?: Settings;
};

const Slider: React.FC<Props> = ({
  nodes,
  sliderSettings = defaultSliderSettings,
}) => {
  const [dots] = useState(true);

  return (
    <Content>
      <div>
        <SliderLMS
          settings={{
            ...sliderSettings,
            dots,
            onSwipe: () => {
              const allHiddenSlides = document.querySelectorAll(
                '.slick-slide[aria-hidden="true"]'
              );
              const allVisibleSlides = document.querySelectorAll(
                '.slick-slide[aria-hidden="false"]'
              );
              allVisibleSlides.forEach((visibleSlide) =>
                visibleSlide.removeAttribute("aria-modal")
              );
              allHiddenSlides.forEach((hiddenSlide) =>
                hiddenSlide.setAttribute("aria-modal", "true")
              );
            },
            onInit: () => {
              const allHiddenSlides = document.querySelectorAll(
                '.slick-slide[aria-hidden="true"]'
              );
              allHiddenSlides.forEach((hiddenSlide) =>
                hiddenSlide.setAttribute("aria-modal", "true")
              );
            },
          }}
          dotsPosition="top right"
        >
          {nodes}
        </SliderLMS>
      </div>
    </Content>
  );
};

export default Slider;
