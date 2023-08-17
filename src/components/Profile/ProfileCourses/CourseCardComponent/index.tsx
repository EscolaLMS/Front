import { FC } from "react";
import { API } from "@escolalms/sdk/lib";
import { CourseCard } from "@escolalms/components/lib/components/molecules/CourseCard/CourseCard";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { IconText } from "@escolalms/components/lib/components/atoms/IconText/IconText";
import { useTheme } from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { LessonsIcon, UserIcon } from "../../../../icons";
import CourseImgPlaceholder from "@/components/CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "@/components/CourseCardWrapper";
import CategoriesBreadCrumbs from "@/components/CategoriesBreadCrumbs";
import { CourseCardActions } from "../CourseCardActions";

interface CourseCardComponentProps {
  courseData: API.CourseProgressItem;
  progress: number;
}

export const CourseCardComponent: FC<CourseCardComponentProps> = ({
  courseData,
  progress,
}) => {
  const history = useHistory();
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <CourseCardWrapper>
      <CourseCard
        mobile={isMobile}
        id={courseData.course.id}
        image={
          <Link to={`/course/${courseData.course.id}`}>
            {courseData.course.image_path ? (
              <ResponsiveImage
                path={courseData.course.image_path}
                alt={courseData.course.title}
                srcSizes={[300, 600, 900]}
              />
            ) : (
              <CourseImgPlaceholder />
            )}
          </Link>
        }
        subtitle={
          courseData.course.subtitle ? (
            <Text>
              <Link
                style={{ color: theme.primaryColor }}
                to={`/course/${courseData.course.id}`}
              >
                {courseData.course.subtitle}
              </Link>
            </Text>
          ) : undefined
        }
        title={
          <Link to={`/courses/${courseData.course.id}`} className="title">
            <Title level={4} as="h2">
              {courseData.course.title}
            </Title>
          </Link>
        }
        categories={
          <CategoriesBreadCrumbs
            categories={
              courseData.categories as EscolaLms.Categories.Models.Category[]
            }
            onCategoryClick={(id) => {
              history.push(`/courses/?categories[]=${id}`);
            }}
          />
        }
        actions={
          <CourseCardActions
            courseData={courseData}
            courseProgress={progress}
          />
        }
        footer={
          <>
            {courseData.course.users_count &&
              courseData.course.users_count > 0 && (
                <IconText
                  icon={<UserIcon />}
                  text={`${courseData.course.users_count} ${t<string>(
                    "Students"
                  )}`}
                />
              )}{" "}
            {courseData.course.lessons_count &&
              courseData.course.lessons_count > 0 && (
                <IconText
                  icon={<LessonsIcon />}
                  text={`${courseData.course.lessons_count} ${t<string>(
                    "Lessons"
                  )}`}
                />
              )}
          </>
        }
        progress={
          progress !== 100 && !isNaN(progress)
            ? {
                currentProgress: progress,
                maxProgress: 100,
              }
            : undefined
        }
      />
    </CourseCardWrapper>
  );
};
