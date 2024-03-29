import { useCallback, useMemo } from "react";
import { useHistory } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { CourseTopNav } from "@escolalms/components/lib/components/molecules/CourseTopNav/CourseTopNav";
import { useCoursePanel } from "@/components/Courses/Course/Context";

export const ButtonsNav = () => {
  const {
    completeCurrentTopic,
    currentTopic,
    finishedTopicsIds,
    courseId,
    currentLesson,
    nextTopic,
    prevTopic,
    availableTopicsIds,
    isNextTopicButtonDisabled,
    isAnyDataLoading,
    isLastTopic,
  } = useCoursePanel();
  const history = useHistory();

  const isTopicFinished = useMemo(
    () =>
      currentTopic?.id !== undefined &&
      (finishedTopicsIds ?? []).includes(currentTopic?.id),
    [finishedTopicsIds, currentTopic?.id]
  );

  const onNextTopic = useCallback(() => {
    if (courseId === undefined || nextTopic === undefined) return;

    history.push(`/course/${courseId}/${currentLesson?.id}/${nextTopic?.id}`);
  }, [courseId, currentLesson?.id, history, nextTopic]);

  const onPrevTopic = useCallback(() => {
    if (courseId === undefined || prevTopic === undefined) return;

    history.push(`/course/${courseId}/${currentLesson?.id}/${prevTopic?.id}`);
  }, [courseId, currentLesson?.id, history, prevTopic]);

  const isNextTopicAvailable = useMemo(
    () =>
      Boolean(
        nextTopic?.id !== undefined &&
          availableTopicsIds?.includes(nextTopic.id)
      ),
    [availableTopicsIds, nextTopic?.id]
  );

  return (
    <CourseTopNav
      mobile={isMobile}
      // Finish current topic. Not last
      onFinish={() => completeCurrentTopic?.()}
      onNext={() => onNextTopic()}
      isFinished={isTopicFinished}
      onPrev={() => onPrevTopic()}
      hasPrev={!!prevTopic}
      hasNext={isNextTopicAvailable}
      isLast={isLastTopic}
      isMarkBtnDisabled={isNextTopicButtonDisabled}
      // Last topic and finish course button
      onCourseFinished={() => completeCurrentTopic?.(true)}
      allButtonsDisabled={isAnyDataLoading}
    />
  );
};
