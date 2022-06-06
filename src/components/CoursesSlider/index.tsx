import React, { useState } from "react";
import styled from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import { Settings } from "react-slick";
import { t } from "i18next";

type Props = {
  courses: API.Course[];
  sliderSettings: Settings;
};

const SliderWrapper = styled.div`
  a {
    text-decoration: none !important;
  }
  @media (max-width: 575px) {
    margin-left: -50px;
    .image-section,
    img {
      max-height: 180px;
    }
  }
  .slick-slider {
    @media (max-width: 575px) {
      width: calc(100% + 15px);
    }
  }
  .single-slide {
    max-width: calc(100% - 20px);
  }
  .slick-dots {
    top: -65px;
  }
`;

const CoursesSlider: React.FC<Props> = ({ courses, sliderSettings }) => {
  const [dots] = useState(true);
  const history = useHistory();

  return (
    <SliderWrapper>
      <Slider settings={{ ...sliderSettings, dots }} dotsPosition="top right">
        {courses &&
          courses.map((item) => (
            <div key={item.id} className="single-slide">
              <CourseCard
                mobile={isMobile}
                id={item.id}
                title={item.title}
                categories={{
                  categoryElements: item.categories || [],
                  onCategoryClick: (id) =>
                    history.push(`/courses/?category_id=${id}`),
                }}
                onImageClick={() => history.push(`/courses/${item.id}`)}
                onTagClick={(title) => history.push(`/courses/?tag=${title}`)}
                onButtonClick={() => history.push(`/courses/${item.id}`)}
                buttonText={t("CourseCard.BtnText")}
                hideImage={false}
                lessonCount={item?.lessons?.length}
                subtitle={
                  item.subtitle ? (
                    <Text>
                      <strong style={{ fontSize: 14 }}>
                        {item.subtitle?.substring(0, 30)}
                      </strong>
                    </Text>
                  ) : null
                }
                image={{
                  url: item.image_url,
                  alt: "",
                }}
                tags={item.tags as API.Tag[]}
              />
            </div>
          ))}
      </Slider>
    </SliderWrapper>
  );
};

export default CoursesSlider;
