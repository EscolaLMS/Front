import React, { useState } from "react";
import styled from "styled-components";
import { Slider } from "@escolalms/components/lib/components/atoms/Slider/Slider";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { API } from "@escolalms/sdk/lib";
import { Settings } from "react-slick";
import { useTranslation } from "react-i18next";
import { LessonsIcon, UserIcon } from "../../icons";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "../CourseCardWrapper";
import { Col, Row } from "react-grid-system";
import { Title } from "@escolalms/components";
import Tags from "@/components/Tags";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import { getSubtitleComponent } from "@/components/Subtitle";

type Props = {
  courses: API.Course[];
  sliderSettings?: Settings;
};

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

const CoursesSlider: React.FC<Props> = ({
  courses,
  sliderSettings = defaultSliderSettings,
}) => {
  const [dots] = useState(true);
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <Content>
      {courses.length >= 5 || isMobile ? (
        <div>
          <Slider
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
            {courses &&
              courses.map((item) => (
                <CourseCardWrapper key={item.id}>
                  <CourseCard
                    mobile={isMobile}
                    id={item.id}
                    image={
                      <Link to={`/courses/${item.id}`}>
                        {item.image_path ? (
                          <ResponsiveImage
                            path={item.image_path}
                            alt={item.title}
                            srcSizes={[300, 600, 900]}
                          />
                        ) : (
                          <CourseImgPlaceholder />
                        )}
                      </Link>
                    }
                    tags={
                      <Tags
                        tags={item.tags}
                        onTagClick={(tagName) =>
                          history.push(`/courses/?tag=${tagName}`)
                        }
                      />
                    }
                    subtitle={getSubtitleComponent({
                      subtitle: item.subtitle,
                      linkTo: `/courses/${item.id}`,
                    })}
                    title={
                      <Link to={`/courses/${item.id}`} className="title">
                        <Title level={4} as="h2">
                          {item.title}
                        </Title>
                      </Link>
                    }
                    categories={
                      <CategoriesBreadCrumbs
                        categories={item.categories}
                        onCategoryClick={(id) => {
                          history.push(`/courses/?categories[]=${id}`);
                        }}
                      />
                    }
                    actions={
                      <>
                        <Button
                          mode="secondary"
                          onClick={() => history.push(`/courses/${item.id}`)}
                        >
                          {t("StartNow")}
                        </Button>
                      </>
                    }
                    footer={
                      <>
                        {item.users_count && item.users_count > 0 ? (
                          <IconText
                            icon={<UserIcon />}
                            text={`${item.users_count} ${t<string>(
                              "Students"
                            )}`}
                          />
                        ) : (
                          ""
                        )}{" "}
                        {item.lessons_count && item.lessons_count > 0 ? (
                          <IconText
                            icon={<LessonsIcon />}
                            text={`${item.lessons_count} ${t<string>(
                              "Lessons"
                            )}`}
                          />
                        ) : (
                          ""
                        )}
                      </>
                    }
                  />
                </CourseCardWrapper>
              ))}
          </Slider>
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
              <CourseCardWrapper key={item.id}>
                <CourseCard
                  mobile={isMobile}
                  id={item.id}
                  image={
                    <Link to={`/courses/${item.id}`}>
                      {item.image_path ? (
                        <ResponsiveImage
                          path={item.image_path}
                          alt={item.title}
                          srcSizes={[300, 600, 900]}
                        />
                      ) : (
                        <CourseImgPlaceholder />
                      )}
                    </Link>
                  }
                  tags={
                    <Tags
                      tags={item.tags}
                      onTagClick={(tagName) =>
                        history.push(`/courses/?tag=${tagName}`)
                      }
                    />
                  }
                  subtitle={getSubtitleComponent({
                    subtitle: item.subtitle,
                    linkTo: `/courses/${item.id}`,
                  })}
                  title={<Link to={`/courses/${item.id}`}>{item.title}</Link>}
                  categories={
                    <CategoriesBreadCrumbs
                      categories={item.categories}
                      onCategoryClick={(id) => {
                        history.push(`/courses/?categories[]=${id}`);
                      }}
                    />
                  }
                  actions={
                    <>
                      <Button
                        mode="secondary"
                        onClick={() => history.push(`/courses/${item.id}`)}
                      >
                        {t("StartNow")}
                      </Button>
                    </>
                  }
                  footer={
                    <>
                      {item.users_count && item.users_count > 0 ? (
                        <IconText
                          icon={<UserIcon />}
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
              </CourseCardWrapper>
            </Col>
          ))}
        </Row>
      )}
    </Content>
  );
};

export default CoursesSlider;
