import { useState } from "react";
import CheckBoxOutlineBlank from "../icons/CheckBoxOutlinrBlank.jsx";
import CheckBox from "../icons/CheckBox.jsx";

function TaskItem(props) {
    const [completed, setCompleted] = useState(false);

    return (
        <div className={`task-item ${completed ? "completed" : ""}`}>
            <div className='name-section'>
                <button className="btn task-title">
                        {props.title}
                </button>
                <h3 className="task-description">
                    {props.description?.length === 0 ? "No description" : props.description}
                </h3>
                <div className="check-area">
                    <button className="btn check-btn" onClick={() => setCompleted(prev => !prev)}>
                        {completed ? <CheckBox /> : <CheckBoxOutlineBlank />}
                    </button>
                </div> 
            </div>
            <div className="time-section">
                <p className="task-time">
                    <span className="day">{props.day}</span>
                    <span className="time">{props.time}</span>
                </p>
            </div>
        </div>
    )
}

export default TaskItem