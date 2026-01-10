import { useState } from "react";
import CheckBoxOutlineBlank from "../icons/CheckBoxOutlineBlank.jsx";
import CheckBox from "../icons/CheckBox.jsx";
import EditTaskModal from "./EditTaskModal.jsx";

function TaskItem({ task, onSaveTask, onDeleteTask }) {
    const [isEditOpen, setIsEditOpen] = useState(false);

    const taskDate = new Date(task.dueAt);

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const pad = (num) => String(num).padStart(2, "0");

    const formattedDate = `${taskDate.getFullYear()}/${pad(
        taskDate.getMonth() + 1
    )}/${pad(taskDate.getDate())}`;

    function getTaskSection(dueAt) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const taskDay = new Date(dueAt);
        taskDay.setHours(0, 0, 0, 0);

        const diffDays = (taskDay - today) / 86400000;

        if (diffDays < 0) return "earlier";
        if (diffDays === 0) return "today";
        if (diffDays === 1) return "tomorrow";
        return "upcoming";
    }

    return (
        <div className={`task-item ${task.completed ? "completed" : ""}`}>
            <div className="name-section">
                <button
                    className="btn task-title"
                    onClick={() => setIsEditOpen(true)}
                >
                    {task.title}
                </button>

                <h3 className="task-description">
                    {task.description || "No description"}
                </h3>

                <div className="check-area">
                    <button
                        className="btn check-btn"
                        onClick={() =>
                            onSaveTask({
                                ...task,
                                completed: !task.completed,
                            })
                        }
                    >
                        {task.completed ? <CheckBox /> : <CheckBoxOutlineBlank />}
                    </button>
                </div>
            </div>

            <div className="time-section">
                <p className="task-time">
                    {getTaskSection(task.dueAt) === "today" ||
                    getTaskSection(task.dueAt) === "tomorrow" ? (
                        <span className="day">
                            {days[taskDate.getDay()]}
                        </span>
                    ) : (
                        <span>{formattedDate}</span>
                    )}
                </p>
            </div>

            <EditTaskModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                task={task}
                onSave={onSaveTask}
                onDelete={onDeleteTask}
            />
        </div>
    );
}

export default TaskItem;
