import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";

import reducer from "./reducer";
import { saga as currenciesSaga } from "../ducks/currencyList";
import { saga as latestCoursesSaga } from "../ducks/latest";

const sagaMiddleware = createSagaMiddleware();
const enhancer = applyMiddleware(sagaMiddleware, logger);
const store = createStore(reducer, enhancer);

function* rootSaga() {
  yield all([currenciesSaga(), latestCoursesSaga()]);
}

sagaMiddleware.run(rootSaga);

export default store;
