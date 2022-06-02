export const getEventType = (event: string) =>
  event.split("\\").pop() as String;
