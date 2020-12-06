import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root.reducer";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

// array - easy to add more options later
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// individual sagas will run from here
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };