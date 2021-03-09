import { Store } from "redux";
import { store } from "../redux/store";
import queryString, { StringifiableRecord } from "query-string";

const URL: string = process.env.REACT_APP_API || "http://localhost:1000/api/";

interface IAPI {
  store?: Store;
  url: string;
  headers: Headers;
  uploadHeaders: { Authorization: string };
  token?: string;
  getpath: (url: string) => string;
  call(
    endpoint: string,
    method: string,
    data?: unknown,
    formData?: FormData
  ): Promise<Response>;
}

const API: IAPI = {
  url: URL ? URL : "",

  /** get json API headers */
  get headers(): Headers {
    const headers: Headers = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
    });
    if (store) {
      const state = store && store.getState();
      if (state.Auth.token) {
        headers.set("Authorization", `Bearer ${state.Auth.token}`);
      }
    }

    if (this.token) {
      headers.set("Authorization", `Bearer ${this.token}`);
    }

    return headers;
  },

  /** get upload API headers */
  get uploadHeaders(): { Authorization: string } {
    let BearerToken: string | undefined = this.token;
    if (this.store) {
      const state = this.store.getState();
      if (state.User.token) {
        BearerToken = `Bearer ${state.User.token}`;
      }
    }

    return {
      Authorization: BearerToken ? `${BearerToken}` : "Bearer abcdef64",
    };
  },

  /** get full endpoint path */
  getpath(endpoint: string): string {
    return `${URL}${endpoint}`;
  },

  /** call and API and returns a Promise */
  call(
    endpoint: string,
    method = "GET",
    data?: StringifiableRecord,
    formData?: FormData
  ): Promise<Response> {
    const fetchOpt: RequestInit = {
      method: method,
      headers: API.headers,
    };

    if (method !== "GET" && data) {
      fetchOpt.body = JSON.stringify(data);
    }

    if (method === "GET" && data) {
      endpoint += "?" + queryString.stringify(data);
    }

    if (formData) {
      fetchOpt.body = formData;
      const headers = new Headers(API.headers);
      headers.delete("Content-Type");
      fetchOpt.headers = headers;
    }

    return fetch(URL + endpoint, fetchOpt);
  },
};

export default API;
