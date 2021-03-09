const pkg = require('./package.json');
const path = require('path');
const fs = require('fs');

module.exports = {
  propsParser: require('react-docgen-typescript').withCustomConfig(
    './tsconfig.json'
  ).parse,
  title: `${pkg.name} API docs v${pkg.version}`,
  usageMode: 'expand',
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'Components',
      components: 'src/js/components/**/*.tsx',
      ignore: ['**/*.example.*.tsx', '**/*.stor*'],
    },
  ],
  pagePerSection: true,
  webpackConfig: require('./config/webpack.config.js'),
  dangerouslyUpdateWebpackConfig: (c) => {
    // This makes hot reloading work
    c.cache = false;
    return c;
  },
  updateExample(props, exampleFilePath) {
    // props.settings are passed by any fenced code block, in this case
    const { settings, lang } = props;
    // "../mySourceCode.js"
    if (typeof settings.file === 'string') {
      // "absolute path to mySourceCode.js"
      const filepath = path.resolve(
        path.dirname(exampleFilePath),
        settings.file
      );
      // no longer needed
      delete settings.file;
      return {
        content: fs.readFileSync(filepath, 'utf8'),
        settings,
        lang,
      };
    }
    return props;
  },
};
