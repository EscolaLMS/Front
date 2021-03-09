import reducer, { INIT_STATE } from "./reducer";
import * as actions from "./actions";

describe("tags reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(INIT_STATE);
  });

  it("should handle fetch list", () => {
    const data = {
      type: actions.FETCH_SUCCESS,
      payload: {
        success: true,
        data: [
          {
            id: 1,
            title: "repellat",
            morphable_type: "App\\Models\\Blog",
            morphable_id: 1,
            created_at: "2000-09-28T07:41:42.000000Z",
            updated_at: "2017-12-08T01:11:09.000000Z",
          },
          {
            id: 2,
            title: "officia",
            morphable_type: "App\\Models\\Course",
            morphable_id: 10,
            created_at: "1974-06-24T08:27:54.000000Z",
            updated_at: "1992-03-31T03:15:37.000000Z",
          },
          {
            id: 105,
            title: "nulla",
            morphable_type: "App\\Models\\Blog",
            morphable_id: 1,
            created_at: "1973-02-18T17:11:28.000000Z",
            updated_at: "1981-02-08T06:39:43.000000Z",
          },
          {
            id: 106,
            title: "autem",
            morphable_type: "App\\Models\\Course",
            morphable_id: 14,
            created_at: "2018-05-01T04:02:01.000000Z",
            updated_at: "2002-06-18T06:51:35.000000Z",
          },
        ],
        message: "Tags retrieved successfully",
      },
    };

    expect(reducer(undefined, data)).toEqual({
      loading: false,
      error: false,
      list: data.payload.data,
      unique: [],
    });
  });

  it("should handle fetch unique", () => {
    const data = {
      type: actions.FETCH_UNIQUE_SUCCESS,
      payload: {
        success: true,
        data: ["a", "b", "c"],
        message: "Tags retrieved successfully",
      },
    };

    expect(reducer(undefined, data)).toEqual({
      loading: false,
      error: false,
      list: [],
      unique: data.payload.data,
    });
  });
});
