const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://api.escolalms.com",
    changeOrigin: true,
  })
);
app.listen(3001);
