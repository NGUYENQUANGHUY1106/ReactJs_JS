import axios from "axios";
const Api_TODO = "https://67a7518f203008941f67426c.mockapi.io/ap1"
const apiServiceTodo = {
     apiPostTodo:async (data) =>
     {
        return axios.post(`${Api_TODO}/todo`,data);
     }
}
export default apiServiceTodo;