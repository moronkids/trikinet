/* eslint-disable import/no-anonymous-default-export */
import { GET_NEWS_LATEST } from "redux/actions/index";

// Define your state here
const initialState = {
  newsLatest: {
    data : [],
    status : false
  },
};
// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  console.log(payload, "payload reducers")
  switch (type) {
    case GET_NEWS_LATEST: {
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};
