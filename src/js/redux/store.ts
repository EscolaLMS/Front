import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import { routerMiddleware, connectRouter } from "connected-react-router";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import rootReducers from "../redux/reducers";
import rootSaga from "../redux/sagas";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["File"],
};

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);
const middlewares = [sagaMiddleware, routeMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistReducer(
    persistConfig,
    combineReducers({
      ...rootReducers,
      router: connectRouter(history),
    })
  ),
  composeEnhancers(applyMiddleware(...middlewares))
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga, null);
export { store, history, persistor };
