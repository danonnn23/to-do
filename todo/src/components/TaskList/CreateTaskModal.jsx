import { useState } from "react";

const initialTask = {
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
};

function CreateTaskModal({ isOpen, onClose, onCreate }) {

    const [task, setTask] = useState({
        title: "",
        description: "",
        dueDate: "",
        dueTime: "",
    });

    if (!isOpen) return null;

    function handleCancel() {
        setTask(initialTask);
        onClose();
    }

    function handleSubmit(e) {
        e.preventDefault();

        onCreate({
            title: task.title,
            description: task.description,
            dueAt: new Date(
                `${task.dueDate}T${task.dueTime}`
            ).toISOString(),
        });

        setTask({
            title: "",
            description: "",
            dueDate: "",
            dueTime: "",
        });

        onClose();
    }

    return (
        <div className="create-bg active" onClick={onClose}>
            <div
                className="task-data-window"
                onClick={e => e.stopPropagation()}
            >
                <h2>New task</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="title-input"
                        maxLength={40}
                        placeholder="Title"
                        value={task.title}
                        onChange={e =>
                            setTask({ ...task, title: e.target.value })
                        }
                        required
                    />

                    <div className="date-time-field">
                        <input
                            type="date"
                            className="date-input"
                            value={task.dueDate}
                            onChange={e =>
                                setTask({ ...task, dueDate: e.target.value })
                            }
                            required
                        />

                        <input
                            type="time"
                            className="time-input"
                            value={task.dueTime}
                            onChange={e =>
                                setTask({ ...task, dueTime: e.target.value })
                            }
                            required
                        />
                    </div>
                    
                    <textarea
                        className="description-input"
                        placeholder="Add description"
                        maxLength={300}
                        value={task.description}
                        onChange={e =>
                            setTask({ ...task, description: e.target.value })
                        }
                    />

                    <div className="actions">
                        <button type="button" className="btn cancel-btn" onClick={handleCancel}>
                            Cancel
                        </button>
                        <button type="apply" className="btn apply-btn">Apply</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateTaskModal;
