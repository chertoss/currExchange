import { takeEvery, call, put } from "redux-saga/effects";

import { getCurrencies } from "../utils/api";
import { PROJECT_NAME } from "../utils";
import { RootStore } from "../types";

export const moduleName = "currencyList";
export const CURRENCIES_REQUEST_START = `${PROJECT_NAME}/${moduleName}/CURRENCIES_REQUEST_START`;
export const CURRENCIES_REQUEST_SUCCESS = `${PROJECT_NAME}/${moduleName}/CURRENCIES_REQUEST_SUCCESS`;
export const CURRENCIES_REQUEST_ERROR = `${PROJECT_NAME}/${moduleName}/CURRENCIES_REQUEST_ERROR`;

interface ActionInterface {
  type: string;
  payload?: any;
}

const initialState = {
  error: null,
};

export default function reducer(
  state = { ...initialState },
  action: ActionInterface
) {
  const { type, payload } = action;

  switch (type) {
    case CURRENCIES_REQUEST_START:
      return { ...state, inProcess: true };
    case CURRENCIES_REQUEST_SUCCESS:
      return {
        ...state,
        inProcess: false,
        data: payload.data,
      };
    case CURRENCIES_REQUEST_ERROR:
      return { ...state, inProcess: false, error: payload.error };
    default:
      return state;
  }
}

export const getCurrencyList = () => ({
  type: CURRENCIES_REQUEST_START,
});

const currenciesRequestSaga = function* () {
  const { status, data } = yield call(getCurrencies);

  if (status < 400 && data) {
    yield put({
      type: CURRENCIES_REQUEST_SUCCESS,
      payload: { data },
    });
  } else {
    yield put({
      type: CURRENCIES_REQUEST_ERROR,
      payload: {
        error: {
          message: data,
          code: status,
        },
      },
    });
  }
};

export const saga = function* () {
  yield takeEvery<ActionInterface>(
    CURRENCIES_REQUEST_START,
    currenciesRequestSaga
  );
};

export const selectCurrencies = (state: RootStore) => state[moduleName];
