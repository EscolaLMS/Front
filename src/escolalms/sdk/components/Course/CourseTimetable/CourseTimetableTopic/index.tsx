import React from 'react';
import "./index.scss";
import {Link} from "react-router-dom";
import MetaTag from "@/components/Common/MetaTag";

const CourseTimetableTopic: React.FC<{
    className?: string
    meta?: string
    to: string // TODO: change to optional
    title: string
}> = ({
    className= '',
    meta,
    to,
    title,
}) => {

    // TODO: change tag `Link` to dynamic tag
    // https://stackoverflow.com/questions/55969769/typing-a-dynamic-tag-in-react-with-typescript
    return (
    <Link
        className={`course-timetable-topic ${className}`}
        to={to}
    >
        <i className="course-timetable-topic__title-icon bx bx-check" />
      <span className="course-timetable-topic__title">{title}</span>

        {meta && (<MetaTag className="course-timetable-topic__meta">{meta}</MetaTag>)}
    </Link>
  );
};

export default CourseTimetableTopic;
