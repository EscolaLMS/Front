import React, { ReactElement, useMemo } from "react";

import { Link } from "react-router-dom";

import { ICourseFinishedBox } from "../../../interfaces/course";

import Image from "../../Image";

import routes from "../../Routes/routes";

import parseISO from "date-fns/parseISO";
import format from "date-fns/format";

import { getFormatedTime } from "../../../helpers";

import "./index.scss";

const CourseFinishedBox: React.FC<ICourseFinishedBox> = ({
  id,
  image,
  name,
  description,
  price,
  time,
  date,
}): ReactElement => {
  const formatedTime = useMemo(() => {
    return getFormatedTime(time);
  }, [time]);

  const finishedDate = useMemo(() => {
    if (date) {
      return format(parseISO(date), "dd-MM-yyyy");
    }
  }, [date]);

  return (
    <div className="course-finished-box">
      <div className="row">
        <div className="col-8">
          <Link to={`course/${id}/program`}>
            <picture>
              <Image src={image} alt={name} />
            </picture>
          </Link>
        </div>
        <div className="col-16">
          <div className="course-finished-box__content">
            <div className="row">
              <div className="col-24">
                <Link className="black" to={`course/${id}/program`}>
                  <h5>{name}</h5>
                </Link>
                <div dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
            <div className="row">
              <div className="col-5">
                <small>Course price</small>
                <span>£{price}</span>
              </div>
              <div className="col-5">
                <small>Spent time</small>
                <span>{formatedTime}</span>
              </div>
              <div className="col-5">
                <small>Finish date</small>
                <span>{finishedDate || "-"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFinishedBox;
