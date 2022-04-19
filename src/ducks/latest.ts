import { takeEvery, call, put } from "redux-saga/effects";

import { getLatest } from "../utils/api";
import { PROJECT_NAME } from "../utils";
import { RootStore } from "../types";

export const moduleName = "latest";
export const LATEST_REQUEST_START = `${PROJECT_NAME}/${moduleName}/LATEST_REQUEST_START`;
export const LATEST_REQUEST_SUCCESS = `${PROJECT_NAME}/${moduleName}/LATEST_REQUEST_SUCCESS`;
export const LATEST_REQUEST_ERROR = `${PROJECT_NAME}/${moduleName}/LATEST_REQUEST_ERROR`;

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
    case LATEST_REQUEST_START:
      return { ...state, inProcess: true };
    case LATEST_REQUEST_SUCCESS:
      return {
        ...state,
        inProcess: false,
        data: payload.data,
      };
    case LATEST_REQUEST_ERROR:
      return { ...state, inProcess: false, error: payload.error };
    default:
      return state;
  }
}

export const getLatestCourses = () => ({
  type: LATEST_REQUEST_START,
});

const latestRequestSaga = function* () {
  const { status, data } = yield call(getLatest);

  if (status < 400 && data) {
    yield put({
      type: LATEST_REQUEST_SUCCESS,
      payload: { data },
    });
  } else {
    yield put({
      type: LATEST_REQUEST_ERROR,
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
  yield takeEvery<ActionInterface>(LATEST_REQUEST_START, latestRequestSaga);
};

export const selectLatestCourses = (state: RootStore) => state[moduleName];
