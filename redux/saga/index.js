// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

// Import all actions
import {
  HIT_NEWS_LATEST,
  GET_NEWS_LATEST,
  HIT_DETAIL_NEWS,
  GET_DETAIL_NEWS,
  HIT_CATEGORY_NEWS,
  GET_CATEGORY_NEWS

} from "redux/actions/index";
// Import all actions

//Import api call
import {newsLatest, detailNews, sortByCategory} from 'redux/api/news';
import { HIT_LOADING } from "../actions";
//Import api call

function* getNewsLatest({payload}) {
  const newsLatest_ = yield call(newsLatest);
  yield put({type: GET_NEWS_LATEST, payload: newsLatest_})
}
function* getDetailNews({ payload }) {
  const detailNews_ = yield call(detailNews, payload);
  yield put({ type: GET_DETAIL_NEWS, payload: detailNews_ });
}
function* getInternetNews({ payload }) {
  yield put({type: HIT_LOADING, payload : true})
  const internetNews_ = yield call(sortByCategory, payload);
  yield put({ type: GET_CATEGORY_NEWS, payload: internetNews_ });
  yield put({type: HIT_LOADING, payload : false})
}

export default function* protra() {
yield takeEvery(HIT_NEWS_LATEST, getNewsLatest)
yield takeEvery(HIT_DETAIL_NEWS, getDetailNews)
yield takeEvery(HIT_CATEGORY_NEWS, getInternetNews)
}
