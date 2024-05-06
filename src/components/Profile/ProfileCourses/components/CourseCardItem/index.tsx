import { API } from "@escolalms/sdk/lib";
import React from "react";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Link, useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import CourseImgPlaceholder from "@/components/Courses/CourseImgPlaceholder";
import { ResponsiveImage } from "@escolalms/components/lib/components/organisms/ResponsiveImage/ResponsiveImage";
import CourseCardWrapper from "@/components/Courses/CourseCardWrapper";
import CategoriesBreadCrumbs from "@/components/Categories/CategoriesBreadCrumbs";
import { CourseCardActions } from "../../CourseCardActions";
import { NewCourseCard } from "@escolalms/components/lib/index";
import { isPast } from "date-fns/esm";

type Props = {
  course: API.Course & {
    progress?: number;
    courseData?: API.CourseProgressItem;
  };
};

const CourseCardItem: React.FC<Props> = ({ course }) => {
  const history = useHistory();

  return (
    <CourseCardWrapper>
      <NewCourseCard
        mobile={isMobile}
        id={course.id}
        disabled={
          // @ts-ignore
          course?.courseData?.end_date && // @ts-ignore
          isPast(new Date(course?.courseData?.end_date))
        }
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
