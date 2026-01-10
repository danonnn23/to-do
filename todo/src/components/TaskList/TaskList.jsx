import './TaskList.css'
import TaskItem from './TaskItem.jsx'
import { useState } from 'react';
import CreateTaskModal from "./CreateTaskModal.jsx";

function TaskList({}) {
    const [section, setSection] = useState("today");

    const [isCreateOpen, setIsCreateOpen] = useState(false);

    function handleCreateTask(taskData) {
        setTasks(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                completed: false,
                ...taskData,
            },
        ]);
    }

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: "Work",
            description: "",
            dueAt: "2025-12-29T13:45:00.000Z",
            completed: false,
        },
        {
            id: 2,
            title: "Buy milk",
            description: "1 pack only",
            dueAt: "2025-12-30T17:15:00.000Z",
            completed: false,
        },
        {
            id: 3,
            title: "Do homework",
            description: "Math and English",
            dueAt: "2025-12-31T13:00:00.000Z",
            completed: false,
        },
    ]);

    function getTaskSection(dueAt) {
        const today = new Date();
        today.setHours(0,0,0,0);

        const taskDate = new Date(dueAt);
        taskDate.setHours(0,0,0,0);

        const DAY = 1000 * 60 * 60 * 24;
        const diffDays = (taskDate - today) / DAY;

        if (diffDays <= 0) return "today";
        if (diffDays === 1) return "tomorrow";
        if (diffDays > 1) return "upcomming";
    }

    const filteredTasks = tasks.filter(
        task => getTaskSection(task.dueAt) === section
    );

    function formatDate(offset = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offset);

    return d.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "2-digit",
        month: "long",
    });
}

    return (
        <>
            <div className='task-list-container'>
                <nav className='filters-nav'>
                    <button className={`btn filter-btn ${section === "today" ? "active" : ""}`} onClick={() => setSection("today")}>Today</button>
                    <button className={`btn filter-btn ${section === "tomorrow" ? "active" : ""}`} onClick={() => setSection("tomorrow")}>Tomorrow</button>
                    <button className={`btn filter-btn ${section === "upcomming" ? "active" : ""}`} onClick={() => setSection("upcomming")}>Upcomming</button>
                </nav>
                <div>
                    <div className='info-container'>
                        <h2>
                            {section === "today" && "Today's tasks"}
                            {section === "tomorrow" && "Tomorrow's tasks"}
                            {section === "upcomming" && "Upcoming tasks"}
                        </h2>

                        <h3>
                            {section === "today" && formatDate(0)}
                            {section === "tomorrow" && formatDate(1)}
                        </h3>

                        <button className='new-task-btn btn' onClick={() => setIsCreateOpen(true)}>
                            <span className="material-symbols-outlined add-icon">
                                add
                            </span>
                            New Task
                        </button>
                    </div>

                    <div className="task-list">
                        {filteredTasks.length === 0 && (
                            <p className="empty">No tasks here 👀</p>
                        )}

                        {filteredTasks.map(task => (
                            <TaskItem
                                key={task.id}   // ← ОБОВʼЯЗКОВО
                                title={task.title}
                                description={task.description}
                                iso={task.dueAt}
                            />
                        ))}

                    </div>
                    <CreateTaskModal
                        isOpen={isCreateOpen}
                        onClose={() => setIsCreateOpen(false)}
                        onCreate={handleCreateTask}
                    />
                </div>
            </div>
        </>
    )
}

export default TaskList