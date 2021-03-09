/* eslint-disable import/no-anonymous-default-export */
import {
  GET_NEWS_LATEST,
  GET_DETAIL_NEWS,
  GET_CATEGORY_NEWS,
} from "redux/actions/index";

// Define your state here
const initialState = {
  newsLatest: {
    data: [],
    status: false,
  },
  detailNews: {
    data: [],
    status: false,
  },
  category: {
    internet: {
      data: [],
      status: false,
    },
    mobile: {
      data: [],
      status: false,
    },
    pc: {
      data: [],
      status: false,
    },
    web: {
      data: [],
      status: false,
    },
  },
};
// This export default will control your state for your application
export default (state = initialState, { type, payload }) => {
  console.log(payload, "payload reducers");
  switch (type) {
    case GET_NEWS_LATEST: {
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        ...payload,
      };
    }
    case GET_DETAIL_NEWS: {
      if (payload.status === "failed") return { ...state };
      return {
        ...state,
        ...payload,
      };
    }
    case GET_CATEGORY_NEWS: {
      if (payload.status === "failed") return { ...state };
      console.log(state, "je");
      if (payload.page !== 1) {
        console.log(state, "if");
        state.category[payload.category].data = state.category[payload.category].data.concat(payload.data)
        return {
          ...state
        };
      } else {
        console.log(state, "else");
        state.category[payload.category].data = payload.data
        return {
          ...state
        };
      }
    }
    default:
      return state;
  }
};
