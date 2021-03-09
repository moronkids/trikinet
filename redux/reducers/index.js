/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import news from "redux/reducers/news.js";
import loading from "redux/reducers/loading.js";
const appReducer = combineReducers({
  news: news,
  loading: loading
});
const rootReducer = (state, action) => {
  if (action.type === "GET_CATEGORY_NEWS") {
  }

  return appReducer(state, action);
};

export default rootReducer;
