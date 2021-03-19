import React from "react";
import defaultAxios from "axios";
import { useReducer } from "react";
// import { FetchLoading } from 'redux/reducers/loading';
const axios = defaultAxios.create({
  baseURL: "https://venom.trikinet.com",
  headers: {
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Origin": "*",
    // Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
  withCredentials: false,
  crossorigin: true,
});
function FetchLoading(state = initialState, { type, payload }) {
  console.log(payload, "payload reducers");
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

// export const useNewsLatestx = (initialRequestConfig, initialData = {}) => {
//   const [state, dispatch] = useReducer(FetchLoading);
//   return (
//     <></>
//   )
// };

// export default useNewsLatestx;

export const useNewsLatestx = async (unlimit, data = null , limit = null) => {
  // const [state, dispatch] = useReducer(FetchLoading, { status: false }, {});
  // dispatch({ type: "DO_LOADING", payload: true });
  const page_ = data === null ? 1 : data
  const limit_ = limit === null ? 16 : limit
 if(unlimit) {
 const todos = await axios
   .get(`news/latest`)
   .catch(function (error) {
     // dispatch({ type: "DO_LOADING", payload: false });
     if (error.response.status !== 200) {
       console.log(error, "response failed");
       return {
         newsLatest: {
           status: false,
         },
       };
     }
   });
 console.log(todos, "response success");
 // dispatch({ type: "DO_LOADING", payload: false });
 return {
   newsLatest: {
     data: todos.data.data,
     status: todos.status,
   },
 };
 }
 else {
    const todos = await axios
      .get(`news/latest?page=${page_}&limit=${limit_}`)
      .catch(function (error) {
        // dispatch({ type: "DO_LOADING", payload: false });
        if (error.response.status !== 200) {
          console.log(error, "response failed");
          return {
            newsLatest: {
              status: false,
            },
          };
        }
      });
    console.log(todos, "response success");
    // dispatch({ type: "DO_LOADING", payload: false });
    return {
      newsLatest: {
        data: todos.data.data,
        status: todos.status,
      },
    };
 }
};
export const detailNews = async (data) => {
  console.log(data, "bree");
  const slug = data;
  const todos = await axios.get("news/slug/" + data).catch(function (error) {
    if (error.response.status !== 200) {
      console.log(error, "response failed");
      return {
        status: "failed",
      };
    }
  });
  console.log(todos, "response success");
  return {
    detailNews: {
      data: todos.data.data[0],
      status: todos.status,
    },
  };
};

export const sortByCategory = async (data) => {
  console.log(data);
  const category = data[0];
  const page = data[1] !== null ? data[1] : 1;
  const limit = data[2] !== null ? data[2] : 20;
  try {
    const todos = await axios
      .get(`news/category/${category}?page=${page}&limit=${limit}`)
      .catch(function (error) {
        if (error.response.status !== 200) {
          console.log(error, "response failed");
          return {
            status: "failed",
          };
        }
      });
    // console.log(todos, "response success category");
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

export const searchNews = async (data) => {
  console.log(data);
  const query = data[0];
  const page = data[1] !== null ? data[1] : 1;
  const limit = data[2] !== null ? data[2] : 18;
  try {
    const todos = await axios
      .get(`/news/search?q=${query}&page=${page}&limit=${limit}`)
      .catch(function (error) {
        if (error.response.status !== 200) {
          console.log(error, "response failed");
          return {
            status: "failed",
          };
        }
      });
    // console.log(todos, "response success category");
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
