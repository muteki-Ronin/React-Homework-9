// CORE
import { takeEvery, put, call } from "redux-saga/effects";
// CONSTS
import { GET_USERS } from "../consts/consts";
// ACTIONS
import { setUsersAction } from "../actions/actions";
// API
import { getUsersAPI } from "../../api";

function* workerSaga() {
  try {
    const data = yield call(getUsersAPI);
    yield put(setUsersAction(data));
  } catch {
    // error
  }
}

export function* watchSaga() {
  yield takeEvery(GET_USERS, workerSaga);
}

export function* rootSaga() {
  yield watchSaga();
}
