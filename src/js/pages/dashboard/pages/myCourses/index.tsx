import React, { ReactElement, useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { fetchCoursesProgress } from "../../../../redux/courseProgress/actions";

import { IRootState } from "../../../../interfaces/redux";
import { ICoursesState } from "../../../../redux/courses/reducer";
import { IProgressState } from "../../../../redux/courseProgress/reducer";
import {
  ICourseProgress,
  IProgressElement,
} from "../../../../interfaces/course/progress";

import { Tabs, Tab } from "../../../../components/Tabs";
import CourseGridItem from "../../../../components/CourseComponents/CourseGridItem";
import routes from "../../../../components/Routes/routes";
import CourseProgressBox from "../../../../components/CourseComponents/CourseInProgress";
import CourseFinishedBox from "../../../../components/CourseComponents/CourseFinished";
import Button from "../../../../components/FormElements/Button/Button";
import BoxWrapper from "../../../../components/DashboardComponenets/BoxWrapper";
import Loader from "../../../../components/Loader";

import UserLayout from "../../../../layouts/UserLayout";

import { courseIncomplete, courseComplete } from "../../../../constants";

import "./index.scss";

const MyCoursesPage: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [limit, setLimit] = useState(12);

  const data: ICoursesState = useSelector<IRootState, ICoursesState>(
    (state): ICoursesState => state.Courses
  );

  const progressData: IProgressState = useSelector<IRootState, IProgressState>(
    (state): IProgressState => state.Progress
  );

  const { loading } = progressData;

  const coursesInProgress = useMemo(() => {
    if (progressData?.list?.length > 0) {
      return progressData.list.filter((el: ICourseProgress) => {
        return el?.progress?.find((progress: IProgressElement) => {
          return progress.status === courseIncomplete;
        });
      });
    }
    return [];
  }, [progressData]);

  const coursesFinished = useMemo(() => {
    if (progressData?.list?.length > 0) {
      return progressData.list.filter((el: ICourseProgress) => {
        return el?.progress?.every((progress: IProgressElement) => {
          return progress.status === courseComplete;
        });
      });
    }
    return [];
  }, [progressData]);

  useEffect(() => {
    dispatch(fetchCoursesProgress());
  }, []);

  return (
    <UserLayout title="My Courses">
      <div className="my-coursess-list">
        <Tabs>
          <Tab title={`Courses in progress (${coursesInProgress.length})`}>
            {loading ? (
              <Loader width={50} height={50} />
            ) : coursesInProgress.length > 0 ? (
              <div className="row">
                {coursesInProgress
                  .filter((prog: ICourseProgress) => prog.course.id)
                  .map((el: ICourseProgress) => (
                    <div
                      key={el.course.id}
                      className="col-lg-8 col-md-12 col-24"
                    >
                      <CourseProgressBox
                        id={Number(el.course.id)}
                        image={String(el.course.image_url)}
                        name={String(el.course.title)}
                        total={el.progress?.length}
                        completed={
                          el?.progress?.filter(
                            (progress: IProgressElement) =>
                              progress?.status === courseComplete
                          ).length
                        }
                      />
                    </div>
                  ))}
              </div>
            ) : (
              <p>You currently have no courses in progress.</p>
            )}
          </Tab>
          <Tab title={`Finished courses (${coursesFinished?.length || 0})`}>
            {loading ? (
              <Loader />
            ) : coursesFinished.length > 0 ? (
              <div className="row">
                {coursesFinished.map((el: ICourseProgress) => (
                  <div key={el.course.id} className="col-24">
                    <CourseFinishedBox
                      id={Number(el.course.id)}
                      image={String(el.course.image_url)}
                      name={String(el.course.title)}
                      description={String(el.course.summary)}
                      price={String(el.course.base_price)}
                      time={el?.spent_time}
                      date={el?.finish_date}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p>You currently have no finished courses.</p>
            )}
          </Tab>
        </Tabs>
      </div>
    </UserLayout>
  );
};

export default MyCoursesPage;
