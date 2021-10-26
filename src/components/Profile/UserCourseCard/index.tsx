import React from 'react';
import { API } from '@escolalms/sdk/lib';
import LmsBox from '@/components/Common/LmsBox';
import CourseCardHeader from '@/components/CourseCard/CourseCardHeader';
import LmsProgressBar from '@/components/Common/LmsProgressBar';
import { Link } from 'react-router-dom';

const UserCourseCard: React.FC<{ course: API.Course; progress?: number }> = ({
  course,
  progress = 0,
}) => {
  return (
    <LmsBox className="user-course-card">
      <CourseCardHeader
        className="user-course-card__header"
        course={course}
        imgSizes={[300, 600, 900]}
        badge={`${progress} %`}
      />

      <LmsProgressBar className="user-course-card__progress" progress={progress} />

      <LmsBox.Content className="user-course-card__content">
        <LmsBox.Title className="user-course-card__title">
          <Link to={`/course/${course.id}`}>{course.title}</Link>
        </LmsBox.Title>

        <LmsBox.SubTitle className="user-course-card__subtitle">{course.subtitle}</LmsBox.SubTitle>
      </LmsBox.Content>
    </LmsBox>
  );
};

export default UserCourseCard;
