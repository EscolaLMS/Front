//@ts-nocheck - TODO: remove when Tag type will be fixed in sdk
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Badge } from "@escolalms/components/lib/components/atoms/Badge/Badge";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { BreadCrumbs } from "@escolalms/components/lib/components/atoms/BreadCrumbs/BreadCrumbs";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import { Settings } from "react-slick";
import { t } from "i18next";
import { LessonsIcon } from "../../icons";
import CourseImgPlaceholder from "../CourseImgPlaceholder";

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
    padding-bottom: 20px;
  }
  .slick-dots {
    top: -65px;
  }
`;

const CoursesSlider: React.FC<Props> = ({ courses, sliderSettings }) => {
  const [dots] = useState(true);
  const history = useHistory();
  const theme = useTheme();
  return (
    <SliderWrapper>
      <Slider settings={{ ...sliderSettings, dots }} dotsPosition="top right">
        {courses &&
          courses.map((item) => (
            <div key={item.id} className="single-slide">
              <CourseCard
                mobile={isMobile}
                id={item.id}
                image={
                  <Link to={`/courses/${item.id}`}>
                    {item.image_url ? (
                      <img src={item.image_url} alt={item.title} />
                    ) : (
                      <CourseImgPlaceholder />
                    )}
                  </Link>
                }
                tags={
                  <>
                    {item.tags?.map((item, index) => (
                      <Badge key={index} color={theme.primaryColor}>
                        <Link
                          style={{ color: theme.white }}
                          to={`/courses/?tag=${item.title}`}
                        >
                          {item.title}
                        </Link>
                      </Badge>
                    ))}
                  </>
                }
                subtitle={
                  item.subtitle ? (
                    <Text size="12">
                      <Link
                        style={{ color: theme.primaryColor }}
                        to={`/courses/${item.id}`}
                      >
                        <strong>{item.subtitle}</strong>
                      </Link>
                    </Text>
                  ) : undefined
                }
                title={<Link to={`/courses/${item.id}`}>{item.title}</Link>}
                categories={
                  <BreadCrumbs
                    hyphen="/"
                    items={item.categories?.map((category) => (
                      <Link
                        key={category.id}
                        to={`/courses/?ids[]=${category.id}`}
                      >
                        {category.name}
                      </Link>
                    ))}
                  />
                }
                actions={
                  <>
                    <Button
                      mode="secondary"
                      onClick={() => history.push(`/courses/${item.id}`)}
                    >
                      {t<string>("Start now")}
                    </Button>
                  </>
                }
                footer={
                  <>
                    {item.users_count && item.users_count > 0 ? (
                      <IconText
                        icon={<LessonsIcon />}
                        text={`${item.users_count} ${t<string>("Students")}`}
                      />
                    ) : (
                      ""
                    )}{" "}
                    {item.lessons_count && item.lessons_count > 0 ? (
                      <IconText
                        icon={<LessonsIcon />}
                        text={`${item.lessons_count} ${t<string>("Lessons")}`}
                      />
                    ) : (
                      ""
                    )}
                  </>
                }
              />
            </div>
          ))}
      </Slider>
    </SliderWrapper>
  );
};

export default CoursesSlider;
