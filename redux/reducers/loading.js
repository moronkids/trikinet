/* eslint-disable import/no-anonymous-default-export */
import {
  GET_NEWS_LATEST,
  GET_DETAIL_NEWS,
  GET_CATEGORY_NEWS,
} from "redux/actions/index";
import { DO_LOADING } from "../actions";

// Define your state here
const initialState = {
    status : false
};
// This export default will control your state for your application
export function FetchLoading(state = initialState, { type, payload }) {
  console.log(payload, "payload reducers");
  switch (type) {
    case DO_LOADING: {
      state.status = payload;
      return {
        ...state
      };
    }
    default:
      return state;
  }
}
export default FetchLoading;
