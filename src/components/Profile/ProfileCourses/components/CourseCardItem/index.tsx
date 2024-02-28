import { API } from "@escolalms/sdk/lib";
import React from "react";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { LessonsIcon, UserIcon } from "../../../../../icons";
import CourseImgPlaceholder from "@/components/Courses/CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "@/components/Courses/CourseCardWrapper";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import { useTheme } from "styled-components";
import { useTranslation } from "react-i18next";
import { CourseCardActions } from "../../CourseCardActions";

type Props = {
  course: API.Course & {
    progress?: number;
    courseData?: API.CourseProgressItem;
  };
};

const CourseCardItem: React.FC<Props> = ({ course }) => {
  const theme = useTheme();
  const history = useHistory();
  const { t } = useTranslation();
  return (
    <CourseCardWrapper>
      <CourseCard
        mobile={isMobile}
        id={course.id}
        image={
          <Link to={`/course/${course.id}`}>
            {course.image_path ? (
              <ResponsiveImage
                path={course.image_path}
                alt={course.title}
                srcSizes={[300, 600, 900]}
              />
            ) : (
              <CourseImgPlaceholder />
            )}
          </Link>
        }
        subtitle={
          course.subtitle ? (
            <Text>
              <Link
                style={{ color: theme.primaryColor }}
                to={`/course/${course.id}`}
              >
                {course.subtitle}
              </Link>
            </Text>
          ) : undefined
        }
        title={
          <Link to={`/courses/${course.id}`} className="title">
            <Title level={4} as="h2">
              {course.title}
            </Title>
          </Link>
        }
        categories={
          <CategoriesBreadCrumbs
            categories={
              course.categories as EscolaLms.Categories.Models.Category[]
            }
            onCategoryClick={(id) => {
              history.push(`/courses/?categories[]=${id}`);
            }}
          />
        }
        actions={
          course.courseData && (
            <CourseCardActions
              courseData={course.courseData}
              courseProgress={course.progress || 0}
            />
          )
        }
        footer={
          <>
            {course.users_count && course.users_count > 0 && (
              <IconText
                icon={<UserIcon />}
                text={`${course.users_count} ${t<string>("Students")}`}
              />
            )}{" "}
            {course.lessons_count && course.lessons_count > 0 && (
              <IconText
                icon={<LessonsIcon />}
                text={`${course.lessons_count} ${t<string>("Lessons")}`}
              />
            )}
          </>
        }
        progress={
          course.progress && course.progress !== 100 && !isNaN(course.progress)
            ? {
                currentProgress: course.progress,
                maxProgress: 100,
              }
            : undefined
        }
      />
    </CourseCardWrapper>
  );
};

export default CourseCardItem;
