import reducer, { INIT_STATE } from "./reducer";
import * as actions from "./actions";

describe("tags reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INIT_STATE);
  });

  it("should handle fetch", () => {
    const data = {
      type: actions.FETCH_CATEGORIES_SUCCESS,
      payload: {
        success: true,
        data: [
          {
            id: 1,
            name: "Development",
            slug: "development",
            icon_class: "fa-chart-line",
            is_active: 1,
            created_at: "2020-12-10T12:28:27.000000Z",
            updated_at: "2020-12-10T12:28:27.000000Z",
            parent_id: null,
          },
          {
            id: 2,
            name: "Business",
            slug: "business",
            icon_class: "fa-business-time",
            is_active: 1,
            created_at: "2020-12-10T12:28:27.000000Z",
            updated_at: "2020-12-10T12:28:27.000000Z",
            parent_id: null,
          },
        ],
        message: "Tags retrieved successfully",
      },
    };

    expect(reducer(undefined, data)).toEqual({
      loading: false,
      error: false,
      list: data.payload.data,
      unique: undefined,
    });
  });
});
