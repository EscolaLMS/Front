export const getEventType = (event: string) =>
  event.split("\\").pop() as String;

export const getTopicType = (type: string) => type.split("\\")?.pop();
