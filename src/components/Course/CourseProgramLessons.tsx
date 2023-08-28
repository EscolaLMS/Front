import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { useTranslation } from "react-i18next";
import { Col, Row } from "react-grid-system";
import { API } from "@escolalms/sdk/lib";
import { Title } from "@escolalms/components/lib/components/atoms/Typography/Title";
import { Text } from "@escolalms/components/lib/components/atoms/Typography/Text";
import {
  CourseTopNav,
  NoteData,
} from "@escolalms/components/lib/components/molecules/CourseTopNav/CourseTopNav";

import CourseSidebar from "@/components/Course/CourseSidebar";
import { useLessonProgram } from "@/hooks/useLessonProgram";
import { useCourseProgram } from "@/hooks/useCourseProgram";
import { useBookmarkNotes } from "@/hooks/useBookmarkNotes";
import { useCourseBreakPoint } from "@/hooks/useCourseBreakPoint";
import Breadcrumbs from "../Breadcrumbs";
import Container from "../Container";
import ErrorBox from "../Errorbox";
import { StyledCourse } from "./CourseProgramLessonsStyles";
import CourseFinishModal from "./CourseFinishModal";
import CourseProgramPlayer from "./CourseProgramPlayer";

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
  } = useLessonProgram(program);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const { onCompleteTopic, onXAPI } = useCourseProgram({ program });
  const { topicBookmark, handleBookmark, topicNote } = useBookmarkNotes({
    topic,
    lesson,
    program,
    courseId,
  });
  const { finishedTopicIndex } = useCourseBreakPoint({
    courseId,
    program,
    topic,
  });
  const { t } = useTranslation();

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
            {showFinishModal && <CourseFinishModal courseId={courseId} />}
            {!showFinishModal && (
              <CourseProgramPlayer
                lesson={lesson}
                topic={topic}
                onXAPI={onXAPI}
                disableNextTopicButton={disableNextTopicButton}
                getNextPrevTopic={getNextPrevTopic}
              />
            )}
          </Col>
          <Col lg={3}>
            <CourseSidebar
              course={program}
              topicId={Number(topic?.id)}
              onCourseFinish={() => setShowFinishModal(true)}
              onCompleteTopic={onCompleteTopic}
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
            addNotes
            newNoteData={{
              id: topic.id,
              type: `${courseId}/${lesson?.id}/${topic?.id}:${program.title}:${topic?.title}`,
            }}
            currentNote={topicNote?.[0] as NoteData | undefined}
            addBookmarks
            bookmarkBtnText={
              topicBookmark?.length ? "deleteBookmark" : "addBookmark"
            }
            onBookmarkClick={() => handleBookmark()}
            hasPrev={!!getNextPrevTopic(Number(topic?.id), false)}
            hasNext={!isNextTopicButtonDisabled}
          />
        </Container>
      </div>
    </StyledCourse>
  );
};

export default CourseProgramLessons;
