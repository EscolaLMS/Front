const { alias, configPaths, aliasJest } = require("react-app-rewire-alias");

const { override, useBabelRc } = require("customize-cra");

const aliasMap = configPaths("./tsconfig.paths.json"); // or jsconfig.paths.json

const supportMjs = () => (webpackConfig) => {
  webpackConfig.module.rules.push({
    test: /\.mjs$/,
    include: /node_modules/,
    type: "javascript/auto",
  });
  return webpackConfig;
};

module.exports = override(alias(aliasMap), useBabelRc(), supportMjs());

module.exports.jest = aliasJest(aliasMap);
