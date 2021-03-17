/* eslint-disable import/no-anonymous-default-export */
import {
  GET_NEWS_LATEST,
  GET_DETAIL_NEWS,
  GET_CATEGORY_NEWS,
  GET_SEARCH_NEWS,
} from "redux/actions/index";
import { RESET_CATEGORY_NEWS } from "../actions";

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
    page_load: true,
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
  search: {
    data: [],
    current_keyword: null,
    existing_keyword: null,
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
      // state = {};
      if (payload.status === "failed")
        return { ...state, ...(state.category.page_load = false) };
      console.log(state, "je");
      if (payload.page !== 1) {
        console.log(state, "if");
        // state.category[payload.category].data = payload.data
        state.category[payload.category].data = state.category[
          payload.category
        ].data.concat(payload.data);
        return {
          ...state,
        };
      } else {
        console.log(state, "else");
        state.category[payload.category].data = payload.data;
        return {
          ...state,
        };
      }
    }
    case GET_SEARCH_NEWS: {
      // state = {};
      // console.log(payload.data.length, "cekiceki");
      if (payload.status === "failed") {
        if (state.search.existing_keyword === null) {
          return {
            ...state,
            ...(state.category.page_load = false),
            // ...(state.search.data = []),
          };
        } else if (payload.query === state.search.existing_keyword) {
          return {
            ...state,
            ...(state.category.page_load = false),
            // ...(state.search.data = []),
          };
        } else {
          state.search.existing_keyword = payload.query;
          return {
            ...state,
            ...(state.category.page_load = false),
            ...(state.search.data = []),
          };
        }
      }
      if (payload.data.length < 1)
        return {
          ...state,
          ...(state.category.page_load = false),
          ...state.search.data = [],
        };
      console.log(state, "je");
      if (payload.page !== 1) {
        console.log(state, "if");
        // state.category[payload.category].data = payload.data
        state.search.data = state.search.data.concat(payload.data);
        return {
          ...state,
          ...(state.category.page_load = true),
        };
      } else {
        console.log(state, "else");
        state.search.data = payload.data;
        return {
          ...state,
          ...(state.category.page_load = true),
        };
      }
    }
    case RESET_CATEGORY_NEWS: {
      state.category[payload].data = [];
      return {
        ...state,
        ...(state.category.page_load = true),
      };
    }
    default:
      return state;
  }
};
