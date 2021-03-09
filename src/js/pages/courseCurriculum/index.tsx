import React, { ReactElement, useEffect, useMemo, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";

import { fetchCurriculum } from "../../redux/courseCurriculum/actions";
import { fetchCourseProgress } from "../../redux/courseProgress/actions";
import { fetchCourse } from "../../redux/courses/actions";

import { useParams, useHistory } from "react-router-dom";

import { courseIncomplete } from "../../constants";

import { ICurriculumState } from "../../redux/courseCurriculum/reducer";
import {
  ICurriculum,
  ICurriculumLecture,
} from "../../interfaces/course/curriculum";
import { ICoursesState } from "../../redux/courses/reducer";
import { ICourseState } from "../../interfaces/course";
import { IRootState } from "../../interfaces/redux";
import { IProgressState } from "../../redux/courseProgress/reducer";
import { IProgressElement } from "../../interfaces/course/progress";
import { ILesson } from "../../interfaces/course";

import Header from "../../components/CourseCurriculumComponents/Header";
import Menu from "../../components/CourseCurriculumComponents/Menu";
import Error from "../../components/Error";
import CurriculumElement from "../../components/CourseCurriculumComponents/CurriculumElement";
import NextButton from "../../components/CourseCurriculumComponents/NextButton";
import Loader from "../../components/Loader";
import Finished from "../../components/CourseCurriculumComponents/Finished";
import MainLayout from "../../layouts/MainLayout";

import "./index.scss";

const CourseCurriculum: React.FC = (): ReactElement => {
  const dispatch: Dispatch = useDispatch();

  const [allCompletedLessons, setAllCompletedLessons] = useState<number[]>([]);
  const [nextLesson, setNextLesson] = useState<number>();
  const [nextSection, setNextSection] = useState<number>();

  const history = useHistory();

  const { id, section, lecture } = useParams<{
    id: string;
    section: string;
    lecture: string;
  }>();

  const curriculum: ICurriculumState = useSelector<
    IRootState,
    ICurriculumState
  >((state): ICurriculumState => state.Curriculum);

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

  const loading = progress?.loading || curriculum?.loading || course?.loading;
  const error = progress?.error || curriculum?.error || course?.error;

  const allLectures = useMemo(() => {
    if (course?.unique && course?.unique?.lessons?.length > 0) {
      return course?.unique?.lessons
        ?.filter((lesson: ILesson) => lesson?.id)
        .map((lesson: ILesson) => lesson);
    }
    return [];
  }, [course]);

  const isCompelted = useMemo(() => {
    return (
      (lecture &&
        allCompletedLessons?.length > 0 &&
        allCompletedLessons?.includes(parseInt(lecture))) ||
      false
    );
  }, [allCompletedLessons, lecture]);

  const currentSection = useMemo(() => {
    return curriculum?.list?.find(
      (s: ICurriculum) => s?.section_id === Number(section)
    );
  }, [section, curriculum]);

  const currentLecture = useMemo(() => {
    if (
      currentSection?.lectures &&
      currentSection?.lectures?.length > 0 &&
      lecture
    ) {
      return currentSection?.lectures?.find(
        (l: ICurriculumLecture) => l?.lecture_quiz_id === Number(lecture)
      );
    }
    return null;
  }, [currentSection, lecture]);

  const isCourseFinished = useMemo(() => {
    return allCompletedLessons?.length === progress?.list.length || false;
  }, [allCompletedLessons, progress]);

  useEffect(() => {
    if (progress?.list && progress?.list?.length > 0) {
      const lid = progress?.list?.find(
        (progressEl: IProgressElement) => progressEl.status === courseIncomplete
      )?.lecture_id;
      lid && lid !== nextLesson && setNextLesson(lid);
    }
  }, [progress]);

  useEffect(() => {
    if (nextLesson && allLectures?.length > 0) {
      const sid = allLectures?.find(
        (lecture: ILesson) => lecture?.id === nextLesson
      )?.section_id;

      sid && sid !== nextSection && setNextSection(sid);
    }
  }, [allLectures, nextLesson]);

  useEffect(() => {
    if (progress && progress?.list?.length > 0) {
      const all: number[] = progress.list
        .filter((p: IProgressElement) => p.status !== courseIncomplete)
        .map((p: IProgressElement) => p.lecture_id);
      setAllCompletedLessons(all);
    }
  }, [progress]);

  useEffect(() => {
    if (id) {
      dispatch(fetchCourseProgress(id));
      dispatch(fetchCurriculum(id));
      dispatch(fetchCourse(parseInt(id)));
    }
  }, [id]);

  useEffect(() => {
    if (
      id &&
      allLectures?.length > 0 &&
      nextSection &&
      nextLesson &&
      (!section || !lecture)
    ) {
      history.push(`/course/${id}/curriculum/${nextSection}/${nextLesson}`);
    }
  }, [nextLesson, nextSection, allLectures, id]);

  const state: ICourseState =
    !section && !lecture && isCourseFinished && !loading
      ? "FINISHED"
      : !section && !lecture && !isCourseFinished && !loading
      ? "EMPTY"
      : section && !currentLecture
      ? "NOTFOUND"
      : currentLecture
      ? isCourseFinished
        ? "COMPLETE"
        : "NORMAL"
      : "NOTFOUND";

  if (
    !curriculum?.loading &&
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
    <div className="curriculum-page">
      <Header
        section={currentSection?.title}
        lecture={currentLecture?.title}
        title={course?.unique?.course_title}
        loading={loading}
      />

      {curriculum?.loading ? (
        <Loader width={100} height={100} />
      ) : (
        <div className="container">
          <div className="row">
            <div className="col-18">
              <div className="curriculum-page__iframe-wrapper">
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
                {(state === "NORMAL" || state === "COMPLETE") &&
                  currentLecture && (
                    <div>
                      <CurriculumElement
                        lecture={currentLecture}
                        completed={isCompelted}
                        loading={loading}
                        error={error}
                      />
                    </div>
                  )}
                {state !== "FINISHED" && (
                  <NextButton
                    courseId={id}
                    active={state === "NORMAL" ? isCompelted : true}
                    lesson={nextLesson}
                    section={nextSection}
                    loading={loading}
                    state={state}
                  />
                )}
              </div>
            </div>

            <div className="col-6">
              {curriculum?.list?.length > 0 && (
                <Menu
                  courseId={id}
                  selectedSection={currentSection?.section_id}
                  selectedLecture={currentLecture?.lecture_quiz_id}
                  data={curriculum}
                  allCompleted={allCompletedLessons}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseCurriculum;
