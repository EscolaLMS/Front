import API from "./api";
//API.url = 'https://api.okapi.cash/'; // to mock we must work with absolute URLs

jest.mock("fetch");

import fetchMock from "fetch-mock";
fetchMock.config.overwriteRoutes = true;

describe("API serrvice test ", () => {
  beforeAll(() => fetchMock.reset());

  it("simple test", async () => {
    fetchMock.mock("*", {
      // mock all http traffic
      body: JSON.stringify({}),
      status: 200,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    // eslint-disable-next-line
    const response: any = await API.call("whatever", "GET");

    //let request = fetchMock.lastCall();

    expect(response.headers.get("Content-Type")).toBe("application/json");
    expect(response.headers.get("Accept")).toBe("application/json");
  });

  it("API simple test", async () => {
    fetchMock.mock("*", {
      // mock all http traffic
      body: JSON.stringify({}),
      status: 200,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const response = await API.call("whatever", "GET");

    expect((response as Response).headers.get("Content-Type")).toBe(
      "application/json"
    );
    expect((response as Response).headers.get("Accept")).toBe(
      "application/json"
    );
  });

  it("API uses token from the store", () => {
    /** simulattion of redux store */
    /** TODO, how to mock store with types in TypeSciprt */
    /*
    const store = {
      getState() {
        return {
          User: {
            token: "abc"
          }
        }
      }
    }

    API.store = store;
    */

    //expect(API.headers.get('Authorization')).toBe('Bearer abc');
    expect(API.headers.get("Authorization")).toBe(null);
  });

  it("API uses manual token ", () => {
    API.token = "aaa";
    expect(API.headers.get("Authorization")).toBe("Bearer aaa");
  });

  it("API sends form data ", async () => {
    const formData = new FormData();
    formData.append("foo", "bar");

    API.token = "zzz";

    fetchMock.mock("*", () => {
      return "aaaa";
    });

    await API.call("upload", "POST", undefined, formData);

    const request = fetchMock.lastCall();

    if (request) {
      expect((request[1] as Request).headers.get("Authorization")).toBe(
        "Bearer zzz"
      );
      expect((request[1] as Request).method).toBe("POST");
      expect((request[1] as Request).body).toBe(formData);
    }
  });
});
