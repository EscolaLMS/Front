import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { PersistGate } from "redux-persist/es/integration/react";
import { store, history, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { HashRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import "./ybug";
import "./sentry";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <HashRouter>
          <App />
        </HashRouter>
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
