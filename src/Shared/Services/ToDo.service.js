import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com"
});

export const ToDoService = {
  GetToDos() {
    return axiosInstance
      .get("/todos", {
        params: {
          _limit: 2
        }
      })
      .then(res => {
        return Promise.resolve(res.data);
      });
  }
};
