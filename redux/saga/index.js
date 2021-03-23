// Import the redux-saga/effects
import { put, call, takeLatest, takeEvery } from "redux-saga/effects";

// Import all actions
import {
  HIT_NEWS_LATEST,
  GET_NEWS_LATEST,
  HIT_DETAIL_NEWS,
  GET_DETAIL_NEWS,
  HIT_CATEGORY_NEWS,
  GET_CATEGORY_NEWS,
  DO_LOADING,
  HIT_LOADING,
  RESET_CATEGORY_NEWS,
  DO_CATEGORY_NEWS,
  GET_SEARCH_NEWS,
  HIT_SEARCH_NEWS,
} from "redux/actions/index";
// Import all actions

//Import api call
import {
  newsLatest,
  detailNews,
  sortByCategory,
  useNewsLatestx,
  searchNews,
  useNewsLatest_,
} from "redux/api/news";
//Import api call

function* getNewsLatest({ payload }) {
  yield put({ type: DO_LOADING, payload: true });
  console.log(payload, "sdsd");
  if (payload[0] === "latest") {
    const newsLatest_ = yield call(useNewsLatest_, payload[1]);
    console.log(newsLatest_, "sdsd");
    yield put({ type: GET_CATEGORY_NEWS, payload: newsLatest_ });
     yield put({ type: DO_LOADING, payload: false });
  } else {
    const newsLatest_ = yield call(useNewsLatestx);
    yield put({ type: GET_NEWS_LATEST, payload: newsLatest_ });
     yield put({ type: DO_LOADING, payload: false });
  }
}
function* getDetailNews({ payload }) {
  const detailNews_ = yield call(detailNews, payload);
  yield put({ type: GET_DETAIL_NEWS, payload: detailNews_ });
}
function* getSearchNews({ payload }) {
  if (payload[0] === "reset") {
    return yield put({ type: GET_SEARCH_NEWS, payload: "reset" });
  }
  yield put({ type: DO_LOADING, payload: true });
  const searchNews_ = yield call(searchNews, payload);
  yield put({ type: GET_SEARCH_NEWS, payload: searchNews_ });
  yield put({ type: DO_LOADING, payload: false });
}

function* getLoading({ payload }) {
  yield put({ type: DO_LOADING, payload: payload });
}
function* resetCategoryNews({ payload }) {
  yield put({ type: DO_CATEGORY_NEWS, payload: payload });
}
function* getInternetNews({ payload }) {
  yield put({ type: DO_LOADING, payload: true });
  try {
    const internetNews_ = yield call(sortByCategory, payload);
    yield put({ type: GET_CATEGORY_NEWS, payload: internetNews_ });
    yield put({ type: DO_LOADING, payload: false });
  } catch (error) {
    yield put({ type: DO_LOADING, payload: false });
  }
}

export default function* protra() {
  yield takeEvery(HIT_NEWS_LATEST, getNewsLatest);
  yield takeEvery(HIT_DETAIL_NEWS, getDetailNews);
  yield takeEvery(HIT_CATEGORY_NEWS, getInternetNews);
  yield takeLatest(RESET_CATEGORY_NEWS, resetCategoryNews);
  yield takeEvery(HIT_LOADING, getLoading);
  yield takeEvery(HIT_SEARCH_NEWS, getSearchNews);
}
