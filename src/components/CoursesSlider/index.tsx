import React from "react";
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

import "swiper/css/bundle";
import "swiper/css/navigation";

type Props = {
  courses: API.Course[];
  sliderSettings?: Settings;
};

const Content = styled.div`
  .swiper {
    padding: 10px;
    margin: 0px -10px;
  }
`;

const CoursesSlider: React.FC<Props> = ({ courses }) => {
  const history = useHistory();

  return (
    <Content>
      {courses.length >= 5 || isMobile ? (
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
        </div>
      ) : (
        <Row
          style={{
            marginTop: "30px",
            rowGap: "60px",
          }}
        >
          {courses.map((item) => (
            <Col md={6} lg={3} key={item.id}>
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
