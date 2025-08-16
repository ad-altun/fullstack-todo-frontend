import TaskLists from "./components/TaskLists.tsx";
import SidebarNav from "./components/SidebarNav.tsx";
import Header from "./components/Header.tsx";
import {useCallback, useEffect, useState} from "react";
import { fetchTasks} from "./service/api.ts";
import type {CreateTaskRequest, TaskApiResponse} from "./types/taskTypes.ts";
import CreateTask from "./components/CreateTask.tsx";


export default function App() {
    const [tasks, setTasks] = useState<TaskApiResponse[]>([]);

    const fetching = useCallback(async () => {
        fetchTasks()
            .then(setTasks)
            .catch(e => console.log(e));
    }, [])

    useEffect(() => {
        fetching()
            .then();
    },[fetching]);

    const handleTaskCreate = (newTask: CreateTaskRequest) => {
        if (newTask) {
            fetching()
                .then();
        }
    };

  return (
    <>
        <div className='app-main'>
            <Header />
            <div className='app-content'>
                <SidebarNav />
                <div>
                    <CreateTask onTaskCreate={handleTaskCreate} />
                    <div>
                        {tasks.map((task: TaskApiResponse) => (
                            <div key={task.id} className='tasklist-app' >
                                <TaskLists
                                    title={task.title}
                                    // note={task.note}
                                    status={task.status} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};