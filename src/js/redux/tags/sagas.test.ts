import API from "./../../services/api";
import * as actions from "./actions";
import rootSaga from "./sagas";
import reducer from "./reducer";
import { expectSaga } from "redux-saga-test-plan";
expectSaga.DEFAULT_TIMEOUT = 500; // set it to 500ms

API.url = "https://api.google.com/"; // to mock we must work with absolute URLs

jest.mock("fetch");

import fetchMock from "fetch-mock";
fetchMock.config.overwriteRoutes = true;

const mockResponseFetchSuccess = {
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
};

describe("redux saga data", () => {
  beforeAll(() => fetchMock.reset());

  it("handles fetch success", () => {
    const goodResponse = {
      loading: false,
      error: false,
      list: mockResponseFetchSuccess.data,
      unique: [],
    };

    fetchMock.mock("*", {
      // mock all http traffic
      body: JSON.stringify(mockResponseFetchSuccess),
      status: 200,
    });

    return expectSaga(rootSaga)
      .dispatch({ type: actions.FETCH_REQUEST }) // request from API new fetch
      .put({ type: actions.FETCH_SUCCESS, payload: mockResponseFetchSuccess }) // at some stage you should get this state
      .withReducer(reducer) // test if reducers has beed updated
      .hasFinalState(goodResponse) // result of the reducer after call
      .run();
  });
});
