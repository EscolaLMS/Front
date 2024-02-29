import { API } from "@escolalms/sdk/lib";

export const getFlatLessons = (lessons: API.Lesson[]): API.Lesson[] =>
  lessons.reduce<API.Lesson[]>(
    (acc, curr) => [...acc, ...getFlatLessons(curr?.lessons ?? []), curr],
    []
  );

export const getFlatTopics = (lessons: API.Lesson[]): API.Topic[] =>
  lessons.reduce<API.Topic[]>(
    (acc, curr) => [
      ...acc,
      ...(curr.topics ?? []),
      ...(curr.lessons ? getFlatTopics(curr.lessons) : []),
    ],
    []
  );

export const getLessonParentsIds = (
  flatLessons: API.Lesson[],
  currentLesson: API.Lesson,
  result: number[] = []
): number[] => {
  const parentsIds: number[] = [...result];

  const parentLesson = flatLessons.find((l) =>
    l?.lessons?.find((innerL: API.Lesson) => innerL?.id === currentLesson?.id)
  );

  if (parentLesson) {
    parentsIds.unshift(parentLesson.id);
    return getLessonParentsIds(flatLessons, parentLesson, parentsIds);
  }

  return parentsIds;
};

export const getPrevNextTopic = (
  topic_id: number,
  topics: API.Topic[],
  dir: "prev" | "next" = "prev"
): API.Topic | undefined => {
  const currIndex = topics.findIndex((topic) => topic.id === topic_id);

  const topicsMap = new Map([
    ["prev", topics?.[currIndex - 1]],
    ["next", topics?.[currIndex + 1]],
  ]);

  return topicsMap.get(dir);
};
