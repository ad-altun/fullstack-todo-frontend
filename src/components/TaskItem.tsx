import type {TaskStatus} from "../types/taskTypes.ts";

type ListItemProps = {
    title: string,
    note: string,
    status: TaskStatus
}

export default function TaskItem({ title, note, status }: ListItemProps) {

    return (
        <div className='tasks'>
            <div className='task-item-content'>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <div className='task-item'>
                    <p>{title}</p>
                    <p>{note}</p>
                    <p>{status}</p>
                </div>
            </div>
            <div className='task-item-buttons'>
                <button type="button">Edit</button>
                <button type="button">Delete</button>
            </div>
        </div>
    )
}