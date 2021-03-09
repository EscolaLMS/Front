import * as actions from "./actions";

describe("tags actions", () => {
  it("should reset", () => {
    const expectedAction = {
      type: actions.FETCH_REQUEST,
    };
    expect(actions.fetchTags()).toEqual(expectedAction);
  });
});
