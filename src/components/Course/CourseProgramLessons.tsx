import React, { useCallback, useEffect, useState } from "react";
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
import { BookmarkableType } from "@escolalms/sdk/lib/types/api";
import routeRoutes from "@/components/Routes/routes";
import { ContextStateValue } from "@escolalms/sdk/lib/react/context/types";
import { ProjectsData } from "@escolalms/components/lib/components/players/ProjectPlayer/ProjectPlayer";

export const isTopicFinished = (
  progress: ContextStateValue<API.CourseProgressDetails>,
  topicId: number,
  courseId: number | undefined
) => {
  if (!topicId || !courseId || !progress.byId) return false;
  const findTopic = progress.byId[courseId]?.value?.find(
    ({ topic_id: id }) => topicId === id
  );
  if (findTopic?.status === 1) {
    return true;
  }
  return false;
};

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
    courseProgressDetails,
    isLastTopic,
  } = useLessonProgram(program);
  const [showFinishModal, setShowFinishModal] = useState(false);
  const [isLastTopicFinished, setIsLastTopicFinished] = useState(false);
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
    const nextTopic = getNextPrevTopic(Number(topic?.id));
    if (!program || !topic) return;
    if (
      nextTopic === null ||
      (topic.can_skip === false &&
        isTopicFinished(courseProgressDetails, topic.id, courseId) === false)
    ) {
      disableNextTopicButton(true);
      return;
    } else {
      disableNextTopicButton(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topic?.id, program, courseProgressDetails, courseId]);

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

  const onCompleteTopicCb = useCallback(
    (showModal?: boolean) => {
      // If video, audio or pdf etc can't be skipped not allow to complete
      // onAudioEnd or onVideoEnd etc in CourseProgramPlayer component will complete topic
      if (
        (topic?.topicable_type === API.TopicType.Video ||
          topic?.topicable_type === API.TopicType.Audio ||
          topic?.topicable_type === API.TopicType.GiftQuiz ||
          topic?.topicable_type === API.TopicType.Project ||
          topic?.topicable_type === API.TopicType.Pdf) &&
        topic?.can_skip === false &&
        !isLastTopicFinished
      ) {
        return false;
      }
      onCompleteTopic(topic?.can_skip);
      if (showModal) {
        setShowFinishModal(true);
      }
    },
    [
      isLastTopicFinished,
      onCompleteTopic,
      topic?.can_skip,
      topic?.topicable_type,
    ]
  );

  const onAutoCompleteTopic = useCallback(() => {
    isLastTopic ? setIsLastTopicFinished(true) : onCompleteTopic();
  }, [isLastTopic, onCompleteTopic]);

  const onProjectsChange = useCallback(
    (projects: ProjectsData) => {
      if (projects.data.length > 0) {
        onAutoCompleteTopic();
        return;
      }
      if (isLastTopic) {
        setIsLastTopicFinished(false);
      }
    },
    [isLastTopic, onAutoCompleteTopic]
  );

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
          goTo: routeRoutes.courses,
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
            <Link to={routeRoutes.home}>{t("Home")}</Link>,
            <Link to={routeRoutes.courses}>{t("Courses")}</Link>,
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
                onAudioEnd={onAutoCompleteTopic}
                onVideoEnd={onAutoCompleteTopic}
                onPdfEnd={onAutoCompleteTopic}
                onQuizEnd={onAutoCompleteTopic}
                onProjectEnd={onAutoCompleteTopic}
                onProjectsChange={onProjectsChange}
              />
            )}
          </Col>
          <Col lg={3}>
            <CourseSidebar
              course={program}
              topicId={Number(topic?.id)}
              onCourseFinish={() => onCompleteTopicCb(true)}
              onCompleteTopic={onCompleteTopicCb}
            />
          </Col>
        </Row>
      </Container>
      <div className="course-nav">
        <CourseTopNav
          onFinish={onCompleteTopicCb}
          mobile={isMobile}
          onNext={onNextTopic}
          isFinished={
            typeof finishedTopicIndex === "number"
              ? finishedTopicIndex > -1
              : false
          }
          onPrev={onPrevTopic}
          addNotes
          newNoteData={{
            id: topic.id,
            type: `${courseId}/${lesson?.id}/${topic?.id}:${program.title}:${topic?.title}` as BookmarkableType,
          }}
          currentNote={topicNote?.[0] as NoteData | undefined}
          addBookmarks
          bookmarkBtnText={
            topicBookmark?.length ? "deleteBookmark" : "addBookmark"
          }
          onBookmarkClick={() => handleBookmark()}
          hasPrev={!!getNextPrevTopic(Number(topic?.id), false)}
          hasNext={!isNextTopicButtonDisabled}
          isLast={isLastTopic}
          onCourseFinished={() => onCompleteTopicCb(true)}
        />
      </div>
    </StyledCourse>
  );
};

export default CourseProgramLessons;
