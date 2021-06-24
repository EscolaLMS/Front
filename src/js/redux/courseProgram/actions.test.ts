import * as actions from "./actions";

describe("courseprogram actions", () => {
  it("should reset", () => {
    const expectedAction = {
      type: actions.FETCH_REQUEST,
      id: "1",
    };
    expect(actions.fetchProgram("1")).toEqual(expectedAction);
  });
});
