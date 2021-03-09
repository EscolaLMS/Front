import * as actions from "./actions";

describe("notifications actions", () => {
  it("should reset", () => {
    const expectedAction = {
      type: actions.FETCH_CATEGORIES_REQUEST,
    };
    expect(actions.fetchCategories()).toEqual(expectedAction);
  });
});
