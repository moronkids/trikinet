// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

// Import all actions
import {
  HIT_NEWS_LATEST,
  GET_NEWS_LATEST,
} from "redux/actions/index";
// Import all actions

//Import api call
import {newsLatest} from 'redux/api/news';
//Import api call
function* getNewsLatest({payload}) {
  const newsLatest_ = yield call(newsLatest);
  console.log(newsLatest_)
  yield put({type: GET_NEWS_LATEST, payload: newsLatest_})
}

export default function* protra() {
yield takeEvery(HIT_NEWS_LATEST, getNewsLatest)
}
