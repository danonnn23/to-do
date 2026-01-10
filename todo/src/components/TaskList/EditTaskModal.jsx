import { useState, useEffect } from "react";

const emptyTask = {
    title: "",
    description: "",
    dueDate: "",
    dueTime: "",
};

function EditTaskModal({
    isOpen,
    onClose,
    onSave,
    onDelete,
    task, // 👈 передаємо ціле завдання
}) {
    const [editedTask, setEditedTask] = useState(emptyTask);

    // ⬇️ коли відкривається модалка — заповнюємо поля
    useEffect(() => {
        if (isOpen && task) {
            setEditedTask({
                title: task.title || "",
                description: task.description || "",
                dueDate: task.dueAt?.slice(0, 10) || "",
                dueTime: task.dueAt?.slice(11, 16) || "",
            });
        }
    }, [isOpen, task]);

    if (!isOpen) return null;

    function handleCancel() {
        setEditedTask(emptyTask);
        onClose();
    }

    function handleSave(e) {
        e.preventDefault();

        onSave({
            ...task,
            title: editedTask.title,
            description: editedTask.description,
            dueAt: new Date(
                `${editedTask.dueDate}T${editedTask.dueTime}`
            ).toISOString(),
        });

        onClose();
    }

    function handleDelete() {
        onDelete(task.id);
        onClose();
    }

    return (
        <div className="edit-bg active" onClick={onClose}>
            <div
                className="task-data-window"
                onClick={e => e.stopPropagation()}
            >
                <h2>Edit task</h2>

                <form onSubmit={handleSave}>
                    <input
                        type="text"
                        className="title-input"
                        maxLength={40}
                        value={editedTask.title}
                        onChange={e =>
                            setEditedTask({ ...editedTask, title: e.target.value })
                        }
                        required
                    />

                    <div className="date-time-field">
                        <input
                            type="date"
                            className="date-input"
                            value={editedTask.dueDate}
                            onChange={e =>
                                setEditedTask({ ...editedTask, dueDate: e.target.value })
                            }
                            required
                        />

                        <input
                            type="time"
                            className="time-input"
                            value={editedTask.dueTime}
                            onChange={e =>
                                setEditedTask({ ...editedTask, dueTime: e.target.value })
                            }
                            required
                        />
                    </div>

                    <textarea
                        className="description-input"
                        placeholder="Add description"
                        maxLength={300}
                        value={editedTask.description}
                        onChange={e =>
                            setEditedTask({ ...editedTask, description: e.target.value })
                        }
                    />

                    <div className="actions">
                        <button
                            type="button"
                            className="btn delete-btn"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>

                        <button
                            type="button"
                            className="btn cancel-btn"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>

                        <button type="submit" className="btn apply-btn">
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditTaskModal;
