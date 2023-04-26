const { alias, configPaths, aliasJest } = require("react-app-rewire-alias");

const { override, useBabelRc } = require("customize-cra");

const aliasMap = configPaths("./tsconfig.paths.json"); // or jsconfig.paths.json

module.exports = override(alias(aliasMap), useBabelRc());

module.exports.jest = aliasJest(aliasMap);
