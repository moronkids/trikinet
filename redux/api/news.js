import React from "react";
import defaultAxios from "axios";
import { useReducer } from "react";
const axios = defaultAxios.create({
  baseURL: "https://venom.trikinet.com",
  headers: {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
  },
  withCredentials: false,
  crossorigin: true,
});
function FetchLoading(state = initialState, { type, payload }) {
  switch (type) {
    case DO_LOADING: {
      state.status = payload;
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export const useNewsLatestx = async (data, props) => {
  const todos = await axios
    .get("news/latest?page=1&limit=16")
    .catch(function (error) {
      if (error.response.status !== 200) {
        return {
          newsLatest: {
            status: false,
          },
        };
      }
    });
  return {
    newsLatest: {
      data: todos.data.data,
      status: todos.status,
    },
  };
};
export const useNewsLatest_ = async (page) => {
  const todos = await axios
    .get(`news/latest?page=${page}&limit=18`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        return {
          newsLatest: {
            status: false,
          },
        };
      }
    });
  return {
    data: todos.data.data,
    status: todos.status,
    page: page,
    category: "latest",
  };
};
export const detailNews = async (data) => {
  const slug = data;
  const todos = await axios.get("news/slug/" + data).catch(function (error) {
    if (error.response.status !== 200) {
      return {
        status: "failed",
      };
    }
  });

  return {
    detailNews: {
      data: todos.data.data[0],
      status: todos.status,
    },
  };
};

export const sortByCategory = async (data) => {
  const category = data[0];
  const page = data[1] !== null ? data[1] : 1;
  const limit = data[2] !== null ? data[2] : 20;
  try {
    const todos = await axios
      .get(`news/category/${category}?page=${page}&limit=${limit}`)
      .catch(function (error) {
        if (error.response.status !== 200) {
          return {
            status: "failed",
          };
        }
      });
    return {
      data: todos.data.data,
      status: todos.status,
      page: page,
      category: category,
    };
  } catch (error) {
    return {
      status: "failed",
    };
  }
};
export const sortByCategory_ = async (data) => {
  const category = data;

  const todos = await axios
    .get(`news/category/${category}?page=${1}&limit=${20}`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        return {
          status: "failed",
        };
      }
    });
  return {
    data: todos.data,
    status: todos.status,
    category: category,
  };
};

export const searchNews = async (data) => {
  const query = data[0];
  const page = data[1] !== null ? data[1] : 1;
  const limit = data[2] !== null ? data[2] : 18;
  try {
    const todos = await axios
      .get(`/news/search?q=${query}&page=${page}&limit=${limit}`)
      .catch(function (error) {
        if (error.response.status !== 200) {
          return {
            status: "failed",
          };
        }
      });
    //
    return {
      data: todos.data.data,
      status: todos.status,
      page: page,
      query: query,
    };
  } catch (error) {
    return {
      status: "failed",
    };
  }
};
export const searchNews_ = async (data) => {
  const query = data;
  const todos = await axios
    .get(`/news/search?q=${query}&page=${1}&limit=${18}`)
    .catch(function (error) {
      if (error.response.status !== 200) {
        return {
          data: [],
          status: "failed",
        };
      }
    });

  return {
    data: todos.data.data,
    status: todos.status,
    query: query,
  };
};
