import React, { ReactElement } from "react";

import { Link } from "react-router-dom";

import { ICourseProgressBox } from "../../../interfaces/course/progress";

import Icon from "../../Icon";
import Image from "../../Image";

import "./index.scss";

const CourseProgressBox: React.FC<ICourseProgressBox> = ({
  id,
  image,
  name,
  total,
  completed,
}): ReactElement => {
  const percentage = ((completed / total) * 100).toFixed(0);

  return (
    <div className="course-progress-box">
      <Link to={`/course/${id}/program`}>
        <picture>
          <Image src={image} alt={name} />
        </picture>

        <div className="course-progress-box__hoover">
          <div>
            <Icon name="play-bg" color="green" />
          </div>
          <small>Continue</small>
        </div>

        <div className="course-progress-box__content">
          <h4 className="course-progress-box__content__name">{name}</h4>
          <h5>
            Finished lessons <strong>{completed}</strong> / {total}
          </h5>
          <progress value={completed} max={total} />
          <span style={{ marginLeft: `calc(${percentage}% - 6px)` }}>
            {percentage}%
          </span>
        </div>
      </Link>
    </div>
  );
};

export default CourseProgressBox;
