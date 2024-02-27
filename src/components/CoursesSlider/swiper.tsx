import React, { useRef } from "react";
import styled from "styled-components";
import { Swiper } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css/bundle";
import "swiper/css/navigation";
import { ArrowRight } from "@/icons/index";

const SwiperButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  @media (max-width: 768px) {
    display: none;
  }
  button {
    all: unset;
    width: 24px;
    height: 24px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.primaryColor};
    margin-left: 3px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    :first-of-type {
      background-color: ${({ theme }) => theme.gray3};
      svg {
        transform: rotate(180deg);
      }
    }
  }
`;

type Props = {
  children?: React.ReactNode;
  slidesPerView?: number;
};

const SwiperSlider: React.FC<Props> = ({ children, slidesPerView }) => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={18}
        slidesOffsetAfter={18}
        breakpoints={{
          0: {
            slidesPerView: 1.3,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1201: {
            slidesPerView: slidesPerView,
          },
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {children}
      </Swiper>
      <SwiperButtons>
        <button onClick={() => swiperRef.current?.slidePrev()} title="pev">
          <ArrowRight />
        </button>
        <button onClick={() => swiperRef.current?.slideNext()} title="next">
          <ArrowRight />
        </button>
      </SwiperButtons>
    </div>
  );
};

export default SwiperSlider;
