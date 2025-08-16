import type {TaskStatus} from "../types/taskTypes.ts";
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import PlaylistRemoveRoundedIcon from '@mui/icons-material/PlaylistRemoveRounded';

type ListItemProps = {
    title: string,
    note: string,
    status: TaskStatus
}

export default function TaskItem({ title, note, status }: ListItemProps) {
    console.log({status})
    return (
        <div className='tasks'>
            <div className='task-item-content'>
                <input type="checkbox" name="checkbox" id="checkbox" />
                <div className='task-item'>
                    <p className='task-title'>{title}</p>
                    <p className='task-note'>{note}</p>
                    {/*<p className='task-text'>{status}</p>*/}
                </div>
            </div>
            <div className='task-item-buttons'>
                <EditNoteRoundedIcon />
                <PlaylistRemoveRoundedIcon />
            </div>
        </div>
    )
}
