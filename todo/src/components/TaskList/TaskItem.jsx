import { useState } from "react";
import CheckBoxOutlineBlank from "../icons/CheckBoxOutlinrBlank.jsx";
import CheckBox from "../icons/CheckBox.jsx";

function TaskItem(props) {
    const [isCompleted, setIsCompleted] = useState(false);
    const [showData, setShowData] = useState(false);

    const task = {
        id: crypto.randomUUID(),
        title: props.title,
        description: props.description,
        completed: isCompleted,
        dueAt: props.iso,
    };

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const taskDateString = new Date(task.dueAt);

    const pad = (num) => String(num).padStart(2, "0");

    const formattedDate = `${taskDateString.getFullYear()}/${pad(taskDateString.getMonth() + 1)}/${pad(taskDateString.getDate())}`;

    function getTaskSection(dueAt) {
        const today = new Date();
        today.setHours(0,0,0,0);

        const taskDate = new Date(dueAt);
        taskDate.setHours(0,0,0,0);

        const diffDays = (taskDate - today) / (1000 * 60 * 60 * 24);

        if (diffDays < 0) return "earlier"
        if (diffDays === 0) return "today";
        if (diffDays === 1) return "tomorrow";
        return "upcoming";
    }


    return (
        <div className={`task-item ${isCompleted ? "completed" : ""}`}>
            <div className='name-section'>
                <button className="btn task-title" onClick={() => setShowData(prev => !prev)}>
                        {task.title}
                </button>
                <h3 className="task-description">
                    {props.description?.length === 0 ? "No description" : props.description}
                </h3>
                <div className="check-area">
                    <button className="btn check-btn" onClick={() => setIsCompleted(prev => !prev)}>
                        {isCompleted ? <CheckBox /> : <CheckBoxOutlineBlank />}
                    </button>
                </div> 
            </div>
            <div className="time-section">
                <p className="task-time">
                    {
                        getTaskSection(task.dueAt) === "today" ||
                        getTaskSection(task.dueAt) === "tomorrow" ? (
                            <span className="day">
                                {days[taskDateString.getDay()]}
                            </span>
                        ) : (
                            <span>
                                {formattedDate}
                            </span>
                        )
                    }
                    <span className="time">{props.time}</span>
                </p>
            </div>
            <div className={`task-data-bg ${showData ? "task-data-active" : ""}`} onClick={() => setShowData(prev => !prev)}>
                <div className="task-data-window">
                    <h2 className="task-title">{props.title}</h2>
                </div>
            </div>
        </div>
    )
}

export default TaskItem