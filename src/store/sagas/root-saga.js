// CORE
import { all } from "redux-saga/effects";
// SAGAS
import { getUsersWatch } from "../sagas/getUsersSaga";

export function* rootSaga() {
  yield all([getUsersWatch()]);
}
