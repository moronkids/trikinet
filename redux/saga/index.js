// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

// Import all actions
import {
  HIT_NEWS_LATEST,
  GET_NEWS_LATEST,
  HIT_DETAIL_NEWS,
  GET_DETAIL_NEWS

} from "redux/actions/index";
// Import all actions

//Import api call
import {newsLatest, detailNews} from 'redux/api/news';
//Import api call

function* getNewsLatest({payload}) {
  const newsLatest_ = yield call(newsLatest);
  yield put({type: GET_NEWS_LATEST, payload: newsLatest_})
}
function* getDetailNews({ payload }) {
  const detailNews_ = yield call(detailNews, payload);
  yield put({ type: GET_DETAIL_NEWS, payload: detailNews_ });
}

export default function* protra() {
yield takeEvery(HIT_NEWS_LATEST, getNewsLatest)
yield takeEvery(HIT_DETAIL_NEWS, getDetailNews)
}
