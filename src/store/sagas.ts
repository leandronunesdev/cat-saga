import { all } from "redux-saga/effects";
import catSaga from "../features/cat/catSaga";

export default function* rootSaga() {
  yield all([catSaga()]);
}
