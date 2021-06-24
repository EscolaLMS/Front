import React, { ReactElement, useState, useEffect, useMemo } from "react";

import { useHistory } from "react-router-dom";

import routes from "../../Routes/routes";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchCoursesProgress } from "../../../redux/courseProgress/actions";

import { IRootState } from "../../../interfaces/redux";
import { ICoursesState } from "../../../redux/courses/reducer";
import { IProgressState } from "../../../redux/courseProgress/reducer";

import Button from "../../FormElements/Button/Button";
import Icon from "../../Icon";
import Loader from "../../Loader";

import { getFormatedTime } from "../../../helpers";

import "./index.scss";
import { ICourseProgress } from "../../../interfaces/course/progress";

const Finished: React.FC<{ id: number }> = ({ id }): ReactElement => {
  const dispatch: Dispatch = useDispatch();
  const history = useHistory();

  const course: ICoursesState = useSelector<IRootState, ICoursesState>(
    (state): ICoursesState => state.Courses
  );

  const progressData: IProgressState = useSelector<IRootState, IProgressState>(
    (state): IProgressState => state.Progress
  );

  const courseProgress = useMemo(() => {
    if (progressData.list.length > 0 && id) {
      return progressData.list.find(
        (item: ICourseProgress) => item.course.id === id
      );
    }
  }, [progressData, id]);

  useEffect(() => {
    dispatch(fetchCoursesProgress());
  }, []);

  return (
    <div className="program-finished">
      {course.loading && <Loader width={100} height={100} />}
      <div className="program-finished__head">
        <h1>Congratulations</h1>
      </div>
      <h2>You’ve finished course!</h2>

      <ul className="program-finished__stats">
        <li>
          <h4>Spend time</h4>{" "}
          <h3>
            {courseProgress?.spent_time
              ? getFormatedTime(courseProgress?.spent_time)
              : "0m"}
          </h3>
        </li>
      </ul>
    </div>
  );
};

export default Finished;
