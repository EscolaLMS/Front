import { FC } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { isMobile } from "react-device-detect";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";

import { Tutor } from "@escolalms/components/lib/components/molecules/Tutor/Tutor";

import { API } from "@escolalms/sdk/lib";
import { APP_CONFIG } from "@/config/app";

interface CourseAuthorProps {
  courseData: API.Course;
}
const API_URL =
  window.REACT_APP_API_URL ||
  (process && process.env && process.env.REACT_APP_PUBLIC_API_URL);

export const CourseAuthor: FC<CourseAuthorProps> = ({ courseData }) => {
  const { t } = useTranslation();

  return (
    <section className="course-tutor with-border padding-right">
      <Link to={`/tutors/${courseData.author_id}`}>
        <Tutor
          mobile={isMobile}
          avatar={{
            alt: `${courseData.author.first_name} ${courseData.author.last_name}`,
            src: courseData.author.path_avatar
              ? `${API_URL}/api/images/img?path=${courseData.author.path_avatar}`
              : APP_CONFIG.tutorPlaceholderPath,
          }}
          rating={{
            ratingValue: 4.1,
          }}
          title={
            <Title as="h3" level={4} className="title">
              {t<string>("CoursePage.Teacher")}
            </Title>
          }
          fullName={`${courseData.author.first_name} ${courseData.author.last_name}`}
          coursesInfo={"8 Curses"}
          description={courseData.author.bio}
        />
      </Link>
    </section>
  );
};
