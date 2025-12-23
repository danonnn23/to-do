import './TaskList.css'
import TaskItem from './TaskItem.jsx'

function TaskList() {

function formatToday() {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });
}



    return (
        <>
            <div className='task-list-container'>
                <nav className='filters-nav'>
                    <button className='btn filter-btn active'>Today</button>
                    <button className='btn filter-btn'>Yesterday</button>
                    <button className='btn filter-btn'>Upcomming</button>
                </nav>
                <div className='info-container'>
                    <h2>Today's tasks</h2>
                    <h3>{formatToday()}</h3>
                    <button className='new-task-btn btn'>
                        <span class="material-symbols-outlined add-icon">
                            add
                        </span>
                        New Task
                    </button>
                </div>
                <div className='task-list'>
                    <TaskItem></TaskItem>
                    <TaskItem></TaskItem>
                    <TaskItem></TaskItem>
                    <TaskItem></TaskItem>
                    <TaskItem></TaskItem>
                    <TaskItem></TaskItem>
                </div>
            </div>
        </>
    )
}

export default TaskList