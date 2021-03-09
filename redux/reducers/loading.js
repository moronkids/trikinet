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
export default (state = initialState, { type, payload }) => {
  console.log(payload, "payload reducers");
  switch (type) {
    case DO_LOADING: {
      return {
        ...state,
        loading : payload,
      };
    }
    default:
      return state;
  }
};
