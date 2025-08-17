import axios from "axios";
import type {TaskApiResponse} from "../types/taskTypes.ts";

const fetchTasks = async () => {
    return await axios.get<TaskApiResponse[]>("/api/todo")
        .then(res => res.data);
}

export { fetchTasks };