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
    .get("news/latest?page=1&limit5")
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
