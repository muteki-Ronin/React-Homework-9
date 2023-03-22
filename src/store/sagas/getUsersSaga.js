// CORE
import { takeEvery, put, call } from "redux-saga/effects";
// ACTIONS
import {
  setUsersAction,
  setUsersActionError,
} from "../actions/actions";
// CONSTS
import { GET_USERS } from "../consts/consts";
// API
import { getUsersAPI } from "../../api";

function* setUsersWork() {
  try {
    const data = yield call(getUsersAPI);
    yield put(setUsersAction(data));
  } catch {
    yield put(setUsersActionError("ERROR DATA USERS!!!"));
  }
}

export function* getUsersWatch() {
  yield takeEvery(GET_USERS, setUsersWork);
}
