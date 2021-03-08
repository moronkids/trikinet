/* eslint-disable import/no-anonymous-default-export */
import { combineReducers } from "redux";
import news from 'redux/reducers/news.js'
const appReducer = combineReducers({
  news : news
});
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;

