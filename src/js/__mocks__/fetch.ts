import fetchMock from "fetch-mock";
require("isomorphic-fetch");

const fetch = fetchMock.sandbox();
module.exports = fetch;
