# Escola TypeScript React App bootstrap

This boostrap is based on ejected [create-react-app](https://github.com/facebook/create-react-app)

Contains

- [react router](https://reacttraining.com/react-router/web/guides/quick-start)
- [styleguidist](https://github.com/styleguidist/react-styleguidist)
- [storybook](https://storybook.js.org/)
- [redux](https://redux.js.org/basics/usage-with-react])
- [saga](https://redux-saga.js.org/)
- [jest testing](https://jestjs.io/), [enzyme](https://airbnb.io/enzyme/), [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)
- [boostrap 4](https://getbootstrap.com/docs/4.3/layout/grid/) Grid, and mixins (only)

## Installing this app.

replace `blablabla` with name of your project and run

`PROJECT_NAME="blablabla" && git clone git@git.qunabu.com:qunabuinteractive/react-typescript-bootstrap.git $PROJECT_NAME && rm -rf $PROJECT_NAME/.git && cd $PROJECT_NAME && npm i`

## Common workflow. Available Scripts

In the project directory, you can run:

### Deployment

Script `npm run start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### Testing

`npm test` runs all the scripts `**/*.test.js`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

To run one test use `npm run test src/js/redux/data/sagas.test.js`

You should write a [jest](https://jestjs.io/) tests for

- components with support of [enzyme](https://airbnb.io/enzyme/)
- services (eg API service)
- redux actions
- redux reducers
- redux sagas with support od `fetch-mock` (see example in the repo files)

There are examples in the repository for each

E2E are welcome :)

### Components documentation

You should document your components. You can select either [styleguidist](https://github.com/styleguidist/react-styleguidist) or [storybook](https://storybook.js.org/) are enabled in this boilerplate.

#### Styleguidist

`npm run styleguidist` to run server (default action)

`npm run styleguidist:build` to build

### Storybook

`npm run storybook` to run server (default action)

`npm run storybook:build` to build

### Building

`npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
