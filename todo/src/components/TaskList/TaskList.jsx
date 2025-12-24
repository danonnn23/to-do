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
                    <TaskItem title="Work" description="" day="Today" time="13:45"></TaskItem>
                    <TaskItem title="Buy milk" description="1 pack only" day="Today" time="17:15"></TaskItem>
                    <TaskItem title="Do homework" description="Math and English" day="Today" time="13:00"></TaskItem>
                    <TaskItem title="Walk with dog" description="" day="Today" time="16:30"></TaskItem>
                </div>
            </div>
        </>
    )
}

export default TaskList