import * as actions from "./actions";

describe("courseCurriculum actions", () => {
  it("should reset", () => {
    const expectedAction = {
      type: actions.FETCH_REQUEST,
      id: "1",
    };
    expect(actions.fetchCurriculum("1")).toEqual(expectedAction);
  });
});
