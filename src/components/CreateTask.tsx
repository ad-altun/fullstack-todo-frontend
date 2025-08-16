import {type FormEvent, useState} from "react";
import {createTask} from "../service/api.ts";
import type {CreateTaskRequest} from "../types/taskTypes.ts";

type CreateTaskProps = {
    onTaskCreate: (task: CreateTaskRequest) => void
}

export default function CreateTask({ onTaskCreate }: CreateTaskProps) {
    const [addTask, setAddTask] = useState<boolean>(false);
    const [taskValue, setTaskValue] = useState<CreateTaskRequest>({id:"", title:"", status:"OPEN"})

    const handleDoubleClick = () => setAddTask(true);

    const handleChange = (value: string) => {
        setTaskValue({
            id: "",
            title:value,
            status: "OPEN"});
    }

    const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (taskValue.title.trim()) {
           try {
               onTaskCreate(taskValue);
               createTask(taskValue)
                   .catch(e => console.log(e));
               setTaskValue({id:"", title: "", status: "OPEN"});
               setAddTask(false)
           } catch (e) {
               console.error('Error:', e)
           }
        }
    }

    return (
        <>
            <div onDoubleClick={handleDoubleClick} className="add-task-form">
                { !addTask ? (
                    <p>Add a Task</p> ) :
                    <form onSubmit={onFormSubmit}>
                        <input type="text" value={taskValue.title}
                               onChange={(e) => handleChange(e.target.value)}
                                placeholder="Enter task..."
                                autoFocus
                        />
                        <input type="submit" value="Add Task" />
                    </form>
                }
            </div>
        </>
    )
}


