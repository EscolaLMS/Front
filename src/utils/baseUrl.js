const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://escolalms-react.envytheme.com"
    : "http://localhost:3000";

export default baseUrl;
