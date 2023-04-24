const { alias, configPaths, aliasJest } = require("react-app-rewire-alias");

const { override, useBabelRc } = require("customize-cra");

// Comment for tsconfig.paths.json file:
// Webpack aliases can provide a workaround for CRA 4
// Issue: https://github.com/igordanchenko/yet-another-react-lightbox/issues/7
const aliasMap = configPaths("./tsconfig.paths.json"); // or jsconfig.paths.json

module.exports = override(alias(aliasMap), useBabelRc());

module.exports.jest = aliasJest(aliasMap);
