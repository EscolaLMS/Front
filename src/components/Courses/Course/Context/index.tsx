import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { useHistory, useParams } from "react-router-dom";
import { isAfter } from "date-fns";
import { API } from "@escolalms/sdk/lib";
import { EscolaLMSContext } from "@escolalms/sdk/lib/react";

import {
  getFlatLessons,
  getFlatTopics,
  getLessonParentsIds,
  getPrevNextTopic,
} from "@/utils/course";

export type CourseParams = Record<
  "id" | "lessonID" | "topicID" | string,
  string
>;

interface CourseContext {
  courseId?: string;
  flatLessons?: API.Lesson[];
  flatTopics?: API.Topic[];
  prevTopic?: API.Topic | null;
  currentTopic?: API.Topic;
  nextTopic?: API.Topic | null;
  currentLesson?: API.Lesson;
  currentCourseProgram?: API.CourseProgram;
  isNextTopicButtonDisabled?: boolean;
  setIsNextTopicButtonDisabled?: (b: boolean) => void;
  completeCurrentTopic?: (finished?: boolean) => void;
  finishedTopicsIds?: number[];
  availableTopicsIds?: number[];
  currentLessonParentsIds?: number[];
  isCourseFinished?: boolean;
  isAnyDataLoading?: boolean;
  showFinish?: boolean;
  isLastTopic?: boolean;
}

const Context = React.createContext<CourseContext>({});
export const UnknownTopicId = "-1";

export const useCoursePanel = () => useContext(Context);

const DISABLE_NEXT_BUTTON_TYPES = [
  API.TopicType.H5P,
  API.TopicType.Audio,
  API.TopicType.Video,
  API.TopicType.Project,
  API.TopicType.GiftQuiz,
  API.TopicType.Pdf,
];

const CoursePanelProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const {
    sendProgress,
    program,
    fetchProgram,
    courseProgressDetails,
    fetchCourseProgress,
  } = useContext(EscolaLMSContext);
  const [isNextTopicButtonDisabled, setIsNextTopicButtonDisabled] =
    useState(false);
  const [showFinish, setShowFinish] = useState(false);

  // :id/:lessonID?/:topicID
  const {
    id: courseId,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    lessonID: paramLessonId,
    topicID: paramTopicId,
  } = useParams<CourseParams>();
  const history = useHistory();

  const currentCourseProgress = courseProgressDetails.byId?.[courseId];
  // console.log('currentCourseProgress: ', currentCourseProgress);

  const currentCourseProgram = useMemo(() => program.value, [program.value]);

  // For development purposes only
  if (process.env.NODE_ENV === "development" && typeof window !== "undefined") {
    // @ts-ignore
    window.resetProgress = () =>
      sendProgress(
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        currentCourseProgram?.id!,
        (flatTopics ?? []).map((topic) => ({
          topic_id: Number(topic?.id),
          status: API.CourseProgressItemElementStatus.INCOMPLETE,
        }))
      );
  }

  const flatLessons = useMemo(
    () => getFlatLessons(currentCourseProgram?.lessons ?? []),
    [currentCourseProgram?.lessons]
  );

  const flatTopics = useMemo(
    () => getFlatTopics(currentCourseProgram?.lessons ?? []),
    [currentCourseProgram?.lessons]
  );

  const findLessonById = useCallback(
    (id: number) => flatLessons.find((l) => l.id === id),
    [flatLessons]
  );

  const findTopicById = useCallback(
    (id: number) => flatTopics.find((t) => t.id === id),
    [flatTopics]
  );

  const prevTopic = useMemo(
    () => getPrevNextTopic(Number(paramTopicId), flatTopics),
    [flatTopics, paramTopicId]
  );

  const currentTopic = useMemo(
    () => findTopicById(Number(paramTopicId)),
    [findTopicById, paramTopicId]
  );

  const nextTopic = useMemo(
    () => getPrevNextTopic(Number(paramTopicId), flatTopics, "next"),
    [flatTopics, paramTopicId]
  );

  const currentLesson = useMemo(
    () => currentTopic && findLessonById(currentTopic?.lesson_id),
    [findLessonById, currentTopic]
  );

  const completeCurrentTopic = useCallback(
    (finished?: boolean) => {
      if (currentCourseProgram?.id === undefined) return;
      if (currentTopic?.id === undefined) return;

      setIsNextTopicButtonDisabled(false);
      sendProgress(currentCourseProgram.id, [
        {
          topic_id: currentTopic.id,
          status: API.CourseProgressItemElementStatus.COMPLETE,
        },
      ]);
      if (finished) {
        setShowFinish(true);
      }
    },
    [sendProgress, currentCourseProgram?.id, currentTopic?.id]
  );

  const finishedTopicsIds = useMemo(
    () =>
      (currentCourseProgress?.value ?? []).reduce<number[]>(
        (acc, { status, topic_id }) =>
          status === API.CourseProgressItemElementStatus.COMPLETE
            ? [...acc, topic_id]
            : acc,
        []
      ),
    [currentCourseProgress]
  );

  const activeLessonsFlatTopics = useMemo(() => {
    const activeLessons = (currentCourseProgram?.lessons ?? []).filter(
      (l) =>
        l.active_from === null ||
        (l.active_from && isAfter(new Date(), new Date(l.active_from)))
    );

    return getFlatTopics(activeLessons);
  }, [currentCourseProgram]);

  const findClosestIncompleteTopicId = useCallback(
    (topicId: number | undefined) => {
      const topic = activeLessonsFlatTopics.find((t) => t.id === topicId);
      if (!topic) return null;

      const index = activeLessonsFlatTopics.indexOf(topic);
      const nextTopic = activeLessonsFlatTopics[index + 1];
      if (!nextTopic) return null;

      return nextTopic.id;
    },
    [activeLessonsFlatTopics]
  );

  const availableTopicsIds = useMemo(() => {
    const { in_progress, complete } = activeLessonsFlatTopics.reduce<{
      in_progress: number[];
      complete: number[];
      incomplete: number[];
    }>(
      (acc, t) => {
        const el = (currentCourseProgress?.value ?? []).find(
          ({ topic_id }) => topic_id === t.id
        );
        if (!el) return acc;

        const statusMap = {
          [API.CourseProgressItemElementStatus.INCOMPLETE]: "incomplete",
          [API.CourseProgressItemElementStatus.COMPLETE]: "complete",
          [API.CourseProgressItemElementStatus.IN_PROGRESS]: "in_progress",
        } as const;

        return {
          ...acc,
          [statusMap[el.status]]: [...acc[statusMap[el.status]], t.id],
        };
      },
      {
        in_progress: [],
        incomplete: [],
        complete: [],
      }
    );

    const firstInCompletedLessonId = findClosestIncompleteTopicId(
      currentTopic?.id
    );

    if (in_progress.length)
      return [...in_progress, ...complete, firstInCompletedLessonId].filter(
        (id): id is number => id !== null
      );

    return [...complete, firstInCompletedLessonId].filter(
      (id): id is number => id !== null
    );
  }, [
    currentCourseProgress?.value,
    currentTopic?.id,
    findClosestIncompleteTopicId,
    activeLessonsFlatTopics,
  ]);

  const currentLessonParentsIds: number[] = useMemo(() => {
    if (!currentLesson) return [];

    return getLessonParentsIds(flatLessons, currentLesson);
  }, [currentLesson, flatLessons]);

  useEffect(() => {
    if (!courseId) return;

    fetchProgram(Number(courseId));
  }, [courseId, fetchProgram]);

  useEffect(() => {
    if (!courseId) return;

    fetchCourseProgress(Number(courseId));
  }, [fetchCourseProgress, courseId]);

  // disable next button
  useEffect(() => {
    if (!currentTopic?.topicable_type) return;

    setIsNextTopicButtonDisabled(
      DISABLE_NEXT_BUTTON_TYPES.includes(currentTopic?.topicable_type) &&
        !currentTopic.can_skip
    );
  }, [currentTopic?.can_skip, currentTopic?.topicable_type]);

  useEffect(() => {
    if (!paramTopicId || Number(paramTopicId) !== currentTopic?.id) {
      const firstAvailableTopicId =
        availableTopicsIds.at(-1) ?? flatTopics?.[0]?.id;
      const firstAvailableTopic = flatTopics.find(
        ({ id }) => id === firstAvailableTopicId
      );

      if (firstAvailableTopic) {
        history.push(
          `/course/${courseId}/${firstAvailableTopic.lesson_id}/${firstAvailableTopicId}`
        );
      }
    }
  }, [
    paramTopicId,
    availableTopicsIds,
    flatTopics,
    history,
    courseId,
    currentTopic?.id,
  ]);

  const isCourseFinished = useMemo(
    () =>
      Boolean(
        currentCourseProgress?.value &&
          currentCourseProgress?.value.every(
            ({ status }) =>
              status === API.CourseProgressItemElementStatus.COMPLETE
          )
      ),
    [currentCourseProgress?.value]
  );

  const isLastTopic = useMemo(
    () =>
      currentTopic?.id !== undefined &&
      (flatTopics ?? []).at(-1)?.id === currentTopic?.id,
    [currentTopic?.id, flatTopics]
  );

  const isAnyDataLoading = useMemo(
    () => program.loading || currentCourseProgress?.loading,
    [program.loading, currentCourseProgress?.loading]
  );

  return (
    <Context.Provider
      value={{
        courseId,
        flatLessons,
        flatTopics,
        prevTopic,
        currentTopic,
        nextTopic,
        currentLesson,
        currentCourseProgram,
        isNextTopicButtonDisabled,
        setIsNextTopicButtonDisabled,
        completeCurrentTopic,
        availableTopicsIds,
        finishedTopicsIds,
        currentLessonParentsIds,
        isCourseFinished,
        isAnyDataLoading,
        showFinish,
        isLastTopic,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default CoursePanelProvider;
