import { formatDate } from "../utils/dateFormatter";

function TaskItem({title, completed, dueDate, priority}) {
    return (
        <div className={`${completed ? "bg-green-500" : "bg-white"} py-10 px-6`}>
            <h3>{title}</h3>
            <div className="">
                <span>
                    {formatDate(dueDate)}
                </span>

                <span>
                    {priority}
                </span>
            </div>
        </div>
    )
}

export default TaskItem;