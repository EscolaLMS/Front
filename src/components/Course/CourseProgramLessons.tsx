/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useContext,
  useState,
} from "react";
import { API } from "@escolalms/sdk/lib";
import CourseProgramContent from "@/components/Course/CourseProgramContent";
import CourseSidebar from "@/components/Course/CourseSidebar";
import { useLessonProgram } from "../../hooks/useLessonProgram";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import {
  CourseTopNav,
  NoteData,
} from "@escolalms/components/lib/components/molecules/CourseTopNav/CourseTopNav";
import { MarkdownRenderer } from "@escolalms/components/lib/components/molecules/MarkdownRenderer/MarkdownRenderer";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import { Link, useHistory, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import CourseDownloads from "./CourseDownloads";
import { useTranslation } from "react-i18next";
import Breadcrumbs from "../Breadcrumbs";
import { Col, Row } from "react-grid-system";
import Container from "../Container";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react/context";
import ErrorBox from "../Errorbox";
import { Button } from "@escolalms/components/lib/components/atoms/Button/Button";
import { toast } from "react-toastify";

const StyledCourse = styled.section`
  padding-bottom: 110px;
  .main-title {
    margin-bottom: 20px;
  }
  .course-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  .course-program-finish-modal {
    font-family: "Mulish", sans-serif;
    background: #f8f8f8;
    inset: 0;
    border: 1px solid #157493;
    padding: 16px;
    display: grid;
    place-content: center;
    gap: 16px;
    height: 100%;
    max-height: 500px;

    p {
      text-align: center;
      margin: 0;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
    }

    &__paragraph {
      font-size: 18px;
    }

    &__buttons {
      display: grid;
      grid-auto-flow: column;
      gap: 8px;
      justify-content: center;
      margin-top: 8px;
    }
  }
`;

export const courseIncomplete = 0;
export const courseComplete = 1;
export const courseInProgress = 2;

export const CourseProgramLessons: React.FC<{
  program: API.CourseProgram;
  courseId?: number;
}> = ({ program, courseId }) => {
  const {
    topic,
    lesson,
    onNextTopic,
    onPrevTopic,
    getNextPrevTopic,
    isNextTopicButtonDisabled,
    disableNextTopicButton,
    sendProgress,
    progress,
  } = useLessonProgram(program);
  const {
    courseProgressDetails,
    bookmarkNotes,
    fetchBookmarkNotes,
    createBookmarkNote,
    deleteBookmarkNote,
  } = useContext(EscolaLMSContext);
  const [showFinishModal, setShowFinishModal] = useState<boolean>(false);

  const { topicID } = useParams<{ lessonID: string; topicID: string }>();

  const { push } = useHistory();
  const { t } = useTranslation();
  const location = useLocation();
  // if pathname contain 3 splited items we cannot fire topicbreakpoint effect otherwise we can
  const startWithBreakPoint = location.pathname.split("/").length === 3;

  const getCourseProgress = useMemo(() => {
    if (
      courseProgressDetails.byId?.[Number(courseId)] &&
      courseProgressDetails.byId[Number(courseId)].value
    ) {
      return courseProgressDetails.byId[Number(courseId)].value;
    }
    return (
      progress &&
      progress.value &&
      progress.value.find(
        (courseProgress: API.CourseProgressItem) =>
          courseProgress.course.id === Number(courseId)
      )?.progress
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, courseId]);

  const onCompleteTopic = useCallback((): void => {
    if (program?.id) {
      sendProgress(program?.id, [{ topic_id: Number(topicID), status: 1 }]);
    }
  }, [program, topicID, sendProgress]);

  const topicBreakPoint = useMemo(() => {
    const currentProgress = getCourseProgress || [];

    const lastStartedLesson = currentProgress
      .filter(
        (topic: API.CourseProgressItemElement) =>
          topic.status === API.CourseProgressItemElementStatus.IN_PROGRESS
      )
      .sort(
        (a: API.CourseProgressItemElement, b: API.CourseProgressItemElement) =>
          new Date(b.started_at as string).getTime() -
          new Date(a.started_at as string).getTime()
      )[0];

    if (!lastStartedLesson) {
      return currentProgress.filter(
        (topic: API.CourseProgressItemElement) =>
          topic.status === API.CourseProgressItemElementStatus.INCOMPLETE
      )[0];
    }
    return lastStartedLesson;
  }, [getCourseProgress]);

  const findLessonBreakPoint = useMemo(() => {
    return (
      topicBreakPoint &&
      program.lessons.find(
        (lesson: API.Lesson) =>
          lesson &&
          lesson.topics &&
          lesson.topics.some(
            (topic: API.Topic) => topic.id === topicBreakPoint.topic_id
          )
      )
    );
  }, [program, topicBreakPoint]);

  const topicBookmark = useMemo(
    () =>
      bookmarkNotes.list?.data.filter(
        (item) =>
          item.bookmarkable_id === Number(topic?.id) && item.value === null
      ),
    [bookmarkNotes.list?.data, topic?.id]
  );

  const topicNote = useMemo(
    () =>
      bookmarkNotes.list?.data.filter(
        (item) =>
          item.bookmarkable_id === Number(topic?.id) && item.value !== null
      ),
    [bookmarkNotes.list?.data, topic?.id]
  );

  const handleBookmark = () => {
    return !topicBookmark?.length
      ? createBookmarkNote({
          bookmarkable_id: Number(topic?.id),
          bookmarkable_type: `${courseId}/${lesson?.id}/${topic?.id}:${program.title}:${topic?.title}`,
        }).then(() => {
          fetchBookmarkNotes();
          toast.success(t<string>("Notifications.CreateBookmark"));
        })
      : deleteBookmarkNote(topicBookmark[0].id).then(() => {
          fetchBookmarkNotes();
          toast.success(t<string>("Notifications.DeleteBookmark"));
        });
  };

  useEffect(() => {
    if (startWithBreakPoint) {
      if (findLessonBreakPoint && topicBreakPoint) {
        push(
          `/course/${program.id}/${findLessonBreakPoint.id}/${topicBreakPoint.topic_id}`,
          null
        );
      }
    }
  }, [
    startWithBreakPoint,
    findLessonBreakPoint,
    program,
    push,
    topicBreakPoint,
  ]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [lesson?.id, topic?.id]);

  useEffect(() => {
    if (!program || !topic) return;
    if (getNextPrevTopic(Number(topic?.id)) === null) {
      disableNextTopicButton(true);
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic?.id, program]);

  const columnWidth =
    lesson && lesson.summary && topic && topic.summary ? 6 : 12;

  //@ts-ignore
  window.resetProgress = () =>
    (async () => {
      await sendProgress(
        program.id,
        program.lessons
          .flatMap((lesson) => lesson.topics)
          .map((topic) => ({ topic_id: Number(topic?.id), status: 0 }))
      );
    })();

  const finishedTopicIndex = getCourseProgress?.findIndex((ttopic) => {
    return (
      ttopic.topic_id === topic?.id &&
      ttopic.status === API.CourseProgressItemElementStatus.COMPLETE
    );
  });

  if (!program) {
    return <ErrorBox error={t("CourseProgram.NoProgram")} />;
  }

  if (!topic) {
    return (
      <ErrorBox
        error={t("CourseProgram.NoTopic")}
        goTo={`/course/${program.id}`}
        goToText={t("CoursePage.BackToCourse")}
        alternativeButton={{
          goTo: "/courses",
          goToText: t("CoursePage.SeeOtherCourses"),
        }}
      />
    );
  }

  return (
    <React.Fragment>
      <StyledCourse className="course-program-wrapper">
        <Container>
          <Breadcrumbs
            items={[
              <Link to="/">{t("Home")}</Link>,
              <Link to="/courses">{t("Courses")}</Link>,
              <Text size="12">{program.title}</Text>,
              <Text size="12">{topic.title}</Text>,
            ]}
          />
          <Title className="main-title" level={3}>
            {topic.title}
          </Title>
          <Row>
            <Col lg={9}>
              {!!showFinishModal && (
                <div className="course-program-finish-modal">
                  <p className="course-program-finish-modal__title">
                    {t("CourseProgram.FinishTitle")}
                  </p>
                  <p className="course-program-finish-modal__paragraph">
                    {t("CourseProgram.FinishSubtitle")}
                  </p>

                  <div className="course-program-finish-modal__buttons">
                    <Button
                      mode="primary"
                      onClick={() => push("/user/my-profile")}
                    >
                      {t("Menu.Profile")}
                    </Button>
                    <Button mode="primary" onClick={() => push("/courses")}>
                      {t("Menu.Courses")}
                    </Button>
                  </div>
                </div>
              )}
              {!showFinishModal && (
                <div className="course-program-player">
                  <div className="course-program-player-content">
                    {topic && topic.introduction && (
                      <MarkdownRenderer>{topic.introduction}</MarkdownRenderer>
                    )}
                    <div
                      className="course-program-player-content__wrapper"
                      style={{
                        ...((topic?.json?.wrapperStyle as object) || {}),
                      }}
                    >
                      <CourseProgramContent
                        key={topic.id}
                        lessonId={Number(lesson?.id)}
                        topicId={topic && Number(topic.id)}
                        disableNextTopicButton={disableNextTopicButton}
                        isThereAnotherTopic={Boolean(
                          getNextPrevTopic(Number(topic?.id))
                        )}
                      />
                    </div>
                  </div>
                  <div className="course-program-content__container">
                    <Row>
                      {lesson && lesson.summary && (
                        <Col sm={12} md={columnWidth} lg={columnWidth}>
                          <div className="course-program-summary">
                            <MarkdownRenderer>
                              {lesson.summary}
                            </MarkdownRenderer>
                          </div>
                        </Col>
                      )}
                      {topic && topic.summary && (
                        <Col sm={12} md={columnWidth} lg={columnWidth}>
                          <div className="course-program-summary">
                            <MarkdownRenderer>{topic.summary}</MarkdownRenderer>

                            {topic &&
                              topic.resources &&
                              topic.resources?.length > 0 && (
                                <CourseDownloads
                                  resources={topic.resources || []}
                                  subtitle={topic.introduction || ""}
                                />
                              )}
                          </div>
                        </Col>
                      )}
                    </Row>
                  </div>
                </div>
              )}
            </Col>
            <Col lg={3}>
              <CourseSidebar
                course={program}
                lessonId={Number(lesson?.id)}
                topicId={Number(topic?.id)}
                onCourseFinish={() => setShowFinishModal(true)}
              />
            </Col>
          </Row>
        </Container>
        <div className="course-nav">
          <Container>
            <CourseTopNav
              onFinish={() => onCompleteTopic()}
              mobile={isMobile}
              onNext={onNextTopic}
              isFinished={finishedTopicIndex ? finishedTopicIndex > -1 : false}
              onPrev={onPrevTopic}
              addNotes={true}
              newNoteData={{
                id: topic.id,
                type: `${courseId}/${lesson?.id}/${topic?.id}:${program.title}:${topic?.title}`,
              }}
              currentNote={
                topicNote?.length ? (topicNote[0] as NoteData) : undefined
              }
              addBookmarks={true}
              bookmarkBtnText={
                topicBookmark?.length ? "deleteBookmark" : "addBookmark"
              }
              onBookmarkClick={() => handleBookmark()}
              hasPrev={
                getNextPrevTopic(Number(topic?.id), false) ? true : false
              }
              hasNext={!isNextTopicButtonDisabled}
            />
          </Container>
        </div>
      </StyledCourse>
    </React.Fragment>
  );
};

export default CourseProgramLessons;
