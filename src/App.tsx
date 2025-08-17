import TaskLists from "./components/TaskLists.tsx";
import SidebarNav from "./components/SidebarNav.tsx";
import Header from "./components/Header.tsx";
import {useEffect, useState} from "react";
import {fetchTasks} from "./service/api.ts";
import type { TaskApiResponse } from "./types/taskTypes.ts";

export default function App() {
    const [tasks, setTasks] = useState<TaskApiResponse[]>([]);

    useEffect(() => {
      fetchTasks()
          .then(setTasks)
          .catch(e => console.log(e));
    },[]);

    /*
     useEffect(() => {
        if (tasks.length > 0) {
            setTaskTitles(tasks.map((task) => task.title));
        }
    }, [tasks]);
     */

    // const [taskTitles, setTaskTitles] = useState<string[]>([])

  return (
    <>
        <div className='app-main'>
            <Header />
            <div className='app-content'>
                {/*<SidebarNav title={tasks.map(task => task.title)}  />*/}
                <SidebarNav />
                <div>
                    {tasks.map((task) => (
                        <div key={task.id} className='tasklist-app' >
                            <TaskLists
                                title={task.title}
                                note={task.note}
                                status={task.status} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
  )
}