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
import { useTranslation } from "react-i18next";
import { LessonsIcon, UserIcon } from "../../icons";
import CourseImgPlaceholder from "../CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "../CourseCardWrapper";

type Props = {
  courses: API.Course[];
  sliderSettings: Settings;
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
  .row {
    margin-top: 30px;
    row-gap: 60px;
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
const CoursesSlider: React.FC<Props> = ({ courses, sliderSettings }) => {
  const [dots] = useState(true);
  const history = useHistory();
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Content>
      {courses.length >= 5 || isMobile ? (
        <div>
          <Slider
            settings={{ ...sliderSettings, dots }}
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
                            to={`/courses/?category_id[]=${category.id}`}
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
        <div className="row">
          {courses.map((item) => (
            <div className="col-lg-3 col-md-6">
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
                          to={`/courses/?category_id[]=${category.id}`}
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
            </div>
          ))}
        </div>
      )}
    </Content>
  );
};

export default CoursesSlider;
