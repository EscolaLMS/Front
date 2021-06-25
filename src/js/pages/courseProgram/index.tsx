import React, { ReactElement, useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { fetchProgram } from "../../redux/courseProgram/actions";
import { fetchCourseProgress } from "../../redux/courseProgress/actions";
import { fetchCourse } from "../../redux/courses/actions";

import { useParams, useHistory } from "react-router-dom";

import { courseIncomplete } from "../../constants";

import { IProgramState } from "../../redux/courseProgram/reducer";
import { ICoursesState } from "../../redux/courses/reducer";
import { ICourseState } from "../../interfaces/course";
import { IRootState } from "../../interfaces/redux";
import { IProgressState } from "../../redux/courseProgress/reducer";
import { IProgressElement } from "../../interfaces/course/progress";
import { ILesson } from "../../interfaces/course";

import Header from "../../components/CourseProgramComponents/Header";
import Menu from "../../components/CourseProgramComponents/Menu";
import Error from "../../components/Error";
import ProgramElement from "../../components/CourseProgramComponents/ProgramElement";
import NextButton from "../../components/CourseProgramComponents/NextButton";
import Loader from "../../components/Loader";
import Finished from "../../components/CourseProgramComponents/Finished";
import MainLayout from "../../layouts/MainLayout";

import "./index.scss";

const CourseProgram: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [allCompletedTopics, setAllCompletedTopics] = useState<number[]>([]);
  const [nextTopic, setNextTopic] = useState<number>();
  const [nextLesson, setNextLesson] = useState<number>();

  const history = useHistory();

  const { id, lesson, topic } = useParams<{
    id: string;
    lesson: string;
    topic: string;
  }>();

  const program: IProgramState = useSelector<IRootState, IProgramState>(
    (state): IProgramState => state.Program
  );

  console.log("p", program);

  const course: ICoursesState = useSelector<IRootState, ICoursesState>(
    (state): ICoursesState => state.Courses
  );

  const progressData: IProgressState = useSelector<IRootState, IProgressState>(
    (state): IProgressState => state.Progress
  );

  const progress = useMemo(() => {
    if (id && progressData?.byId) {
      return progressData?.byId[id];
    }
    return null;
  }, [id, progressData]);

  const loading = progress?.loading || program?.loading || course?.loading;

  const error = progress?.error || program?.error || course?.error;

  const allTopics = useMemo(() => {
    if (course?.unique && course?.unique?.lessons?.length > 0) {
      return course?.unique?.lessons
        ?.filter((lesson: API.Lesson) => lesson?.id)
        .map((lesson: API.Lesson) => lesson);
    }
    return [];
  }, [course]);

  const isCompleted = useMemo(() => {
    return (
      (topic &&
        allCompletedTopics?.length > 0 &&
        allCompletedTopics?.includes(parseInt(topic))) ||
      false
    );
  }, [allCompletedTopics, topic]);

  const currentLesson = useMemo(() => {
    return program?.lessons?.find((s: API.Lesson) => s?.id === Number(lesson));
  }, [lesson, program]);

  const currentTopic = useMemo(() => {
    if (currentLesson?.topics && currentLesson?.topics?.length > 0 && topic) {
      return currentLesson?.topics?.find(
        (t: API.Topic) => t?.id === Number(topic)
      );
    }
    return null;
  }, [currentLesson, topic]);

  const isCourseFinished = useMemo(() => {
    return allCompletedTopics?.length === progress?.list.length || false;
  }, [allCompletedTopics, progress]);

  useEffect(() => {
    if (progress?.list && progress?.list?.length > 0) {
      const lid = progress?.list?.find(
        (progressEl: IProgressElement) => progressEl.status === courseIncomplete
      )?.topic_id;
      lid && lid !== nextTopic && setNextTopic(lid);
    }
  }, [progress]);

  /*

  useEffect(() => {
    if (nextLesson && allLectures?.length > 0) {
      const sid = allLectures?.find(
        (lecture: ILesson) => lecture?.id === nextLesson
      )?.section_id;

      sid && sid !== nextSection && setNextSection(sid);
    }
  }, [allLectures, nextLesson]);

  */

  useEffect(() => {
    if (progress && progress?.list?.length > 0) {
      const all: number[] = progress.list
        .filter((p: IProgressElement) => p.status !== courseIncomplete)
        .map((p: IProgressElement) => p.topic_id);
      setAllCompletedTopics(all);
    }
  }, [progress]);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseProgress(id));
      dispatch(fetchProgram(id));
      dispatch(fetchCourse(parseInt(id)));
    }
  }, [id]);

  useEffect(() => {
    if (
      id &&
      allTopics?.length > 0 &&
      nextLesson &&
      nextTopic &&
      (!lesson || !topic)
    ) {
      history.push(`/course/${id}/program/${nextLesson}/${nextTopic}`);
    }
  }, [nextLesson, nextTopic, allTopics, id]);

  const state: ICourseState =
    !lesson && !topic && isCourseFinished && !loading
      ? "FINISHED"
      : !lesson && !topic && !isCourseFinished && !loading
      ? "EMPTY"
      : lesson && !currentTopic
      ? "NOTFOUND"
      : currentTopic
      ? isCourseFinished
        ? "COMPLETE"
        : "NORMAL"
      : "NOTFOUND";

  if (program.error && typeof program.error === "object") {
    return (
      <MainLayout>
        <Error desc={Object.values(program.error).join(",")} />
      </MainLayout>
    );
  }

  if (
    !program?.loading &&
    !course.loading &&
    (!course.unique || course.unique.id !== Number(id) || error)
  ) {
    return (
      <MainLayout>
        <Error desc="Course not found" />
      </MainLayout>
    );
  }

  return (
    <div className="program-page">
      <Header
        lesson={currentLesson?.title}
        topic={currentTopic?.title}
        title={course?.unique?.title}
        loading={loading}
      />

      {program?.loading ? (
        <Loader width={100} height={100} />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-18">
              <div className="program-page__iframe-wrapper">
                {state === "FINISHED" && <Finished id={Number(id)} />}
                {state === "EMPTY" && (
                  <div>
                    <p>No lesson selected, click START to continue course.</p>
                  </div>
                )}
                {state === "NOTFOUND" && !loading && (
                  <div>
                    <p>Lesson does not exist.</p>
                  </div>
                )}
                {(state === "NORMAL" || state === "COMPLETE") && currentTopic && (
                  <div>
                    <ProgramElement
                      topic={currentTopic}
                      completed={isCompleted}
                      loading={loading}
                      error={error}
                    />
                  </div>
                )}
                {state !== "FINISHED" && (
                  <NextButton
                    courseId={id}
                    active={state === "NORMAL" ? isCompleted : true}
                    topic={nextTopic}
                    lesson={nextLesson}
                    loading={loading}
                    state={state}
                  />
                )}
              </div>
            </div>

            <div className="col-6">
              {program?.lessons?.length > 0 && (
                <Menu
                  courseId={id}
                  selectedLesson={currentLesson?.id}
                  selectedTopic={currentTopic?.id}
                  data={program.lessons}
                  allCompleted={allCompletedTopics}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseProgram;
