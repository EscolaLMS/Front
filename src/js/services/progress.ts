import API from "./api";
import { completeLecture } from "./lectureComplete";

type IStatementCategory = {
  id: string;
  objectType: "string";
};

type IStatement = {
  actor: unknown;
  context: {
    contextActivities: { category: IStatementCategory[] };
  };
  object: unknown;
  result?: unknown;
  verb: { id: IEvent };
};

type IEventException = "GuessTheAnswer";

type IEvent =
  | "http://adlnet.gov/expapi/verbs/experienced"
  | "http://adlnet.gov/expapi/verbs/attended"
  | "http://adlnet.gov/expapi/verbs/attempted"
  | "http://adlnet.gov/expapi/verbs/completed"
  | "http://adlnet.gov/expapi/verbs/passed"
  | "http://adlnet.gov/expapi/verbs/failed"
  | "http://adlnet.gov/expapi/verbs/answered"
  | "http://adlnet.gov/expapi/verbs/interacted"
  | "http://adlnet.gov/expapi/verbs/imported"
  | "http://adlnet.gov/expapi/verbs/created"
  | "http://adlnet.gov/expapi/verbs/shared"
  | "http://adlnet.gov/expapi/verbs/voided";

const blackList: IEvent[] = [
  "http://adlnet.gov/expapi/verbs/attended",
  "http://adlnet.gov/expapi/verbs/attempted",
  "http://adlnet.gov/expapi/verbs/interacted",
  "http://adlnet.gov/expapi/verbs/imported",
  "http://adlnet.gov/expapi/verbs/created",
];

const completed: IEvent[] = [
  "http://adlnet.gov/expapi/verbs/completed",
  "http://adlnet.gov/expapi/verbs/answered",
];

const attempted: IEvent = "http://adlnet.gov/expapi/verbs/attempted";

const exception: IEventException = "GuessTheAnswer";

export const h5pProgress = (
  courseId: string,
  quizId: number,
  statement: IStatement
): Promise<Response> | void => {
  const statementId = statement?.verb?.id;
  const statementCategory = statement?.context?.contextActivities?.category;

  if (
    attempted === statementId &&
    statementCategory &&
    statementCategory[0].id.includes(exception)
  ) {
    completeLecture(courseId, quizId);
  }

  if (blackList.includes(statementId)) {
    return;
  }

  if (completed.includes(statementId)) {
    completeLecture(courseId, quizId);
  }

  return API.call(`/courses/progress/${quizId}/h5p`, "POST", {
    event: statementId,
    data: statement.result || {},
  });
};
