import defaultAxios from "axios";
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

export const newsLatest = async (data, props) => {
  const todos = await axios
    .get("news/latest?page=1&limit=16")
    .catch(function (error) {
      if (error.response.status !== 200) {
        console.log(error, "response failed");
        return {
          status : "failed"
        }
      }

    });
    console.log(todos, "response success")
    return {
      newsLatest : {
        data: todos.data.data,
        status : todos.status
      },

    }
};
export const detailNews = async (data) => {
  console.log(data, "bree")
  const slug = data
  const todos = await axios
    .get("news/slug/"+data)
    .catch(function (error) {
      if (error.response.status !== 200) {
        console.log(error, "response failed");
        return {
          status: "failed",
        };
      }
    });
    console.log(todos, "response success")
    return {
      detailNews : {
        data: todos.data.data[0],
        status : todos.status
      },

    }
};
