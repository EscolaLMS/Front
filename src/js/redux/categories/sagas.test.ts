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
  message: "Categories retrieved successfully",
};

describe("redux saga data", () => {
  beforeAll(() => fetchMock.reset());

  it("handles fetch success", () => {
    const goodResponse = {
      loading: false,
      error: false,
      list: mockResponseFetchSuccess.data,
      unique: undefined,
    };

    fetchMock.mock("*", {
      // mock all http traffic
      body: JSON.stringify(mockResponseFetchSuccess),
      status: 200,
    });

    return expectSaga(rootSaga)
      .dispatch({ type: actions.FETCH_CATEGORIES_REQUEST }) // request from API new fetch
      .put({
        type: actions.FETCH_CATEGORIES_SUCCESS,
        payload: mockResponseFetchSuccess,
      }) // at some stage you should get this state
      .withReducer(reducer) // test if reducers has beed updated
      .hasFinalState(goodResponse) // result of the reducer after call
      .run();
  });
});
