import React, { useRef } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import { Settings } from "react-slick";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import { Col, Row } from "react-grid-system";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import { NewCourseCard } from "@escolalms/components/lib/components/molecules/NewCourseCard/index";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { Swiper as SwiperType } from "swiper/types";

import "swiper/css/bundle";
import "swiper/css/navigation";
import { ArrowRight } from "@/icons/index";

type Props = {
  courses: API.Course[];
  sliderSettings?: Settings;
  isSlider?: boolean;
};

const Content = styled.div`
  .swiper {
    padding: 7px 10px;
    margin: 0px -15px;
  }
`;

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

const CoursesSlider: React.FC<Props> = ({ courses, isSlider = true }) => {
  const history = useHistory();
  const swiperRef = useRef<SwiperType>();
  return (
    <Content>
      {(courses?.length >= 5 || isMobile) && isSlider ? (
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
                slidesPerView: 4,
              },
            }}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
          >
            {courses &&
              courses.map((item) => (
                <SwiperSlide key={item.id}>
                  <NewCourseCard
                    mobile={isMobile}
                    id={item.id}
                    image={
                      <>
                        {item.image_path ? (
                          <ResponsiveImage
                            path={item.image_path}
                            alt={item.title}
                            srcSizes={[300, 600, 900]}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </>
                    }
                    title={item.title}
                    categories={
                      <CategoriesBreadCrumbs
                        categories={item.categories}
                        onCategoryClick={(id) => {
                          history.push(`/courses/?categories[]=${id}`);
                        }}
                      />
                    }
                  />
                </SwiperSlide>
              ))}
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
      ) : (
        <Row
          style={{
            marginTop: "30px",
            rowGap: "60px",
          }}
        >
          {courses.map((item) => (
            <Col md={4} lg={3} key={item.id}>
              <NewCourseCard
                mobile={isMobile}
                id={item.id}
                key={item.id}
                image={
                  <>
                    {item.image_path ? (
                      <ResponsiveImage
                        path={item.image_path}
                        alt={item.title}
                        srcSizes={[300, 600, 900]}
                      />
                    ) : (
                      <CourseImgPlaceholder />
                    )}
                  </>
                }
                title={item.title}
                categories={
                  <CategoriesBreadCrumbs
                    categories={item.categories}
                    onCategoryClick={(id) => {
                      history.push(`/courses/?categories[]=${id}`);
                    }}
                  />
                }
              />
            </Col>
          ))}
        </Row>
      )}
    </Content>
  );
};

export default CoursesSlider;
