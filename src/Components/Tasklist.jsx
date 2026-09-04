export default function TaskList({ tasks, updateTask, deleteTask }) {

    const toggleComplete = (index) => {
        const updatedTask = { ...tasks[index], completed: !tasks[index].completed };
        updateTask(updatedTask, index);
    }

    return (
        <ul className='task-list'>
            {tasks.map((task, index) => (
                <li key={task.id} className={task.completed ? "is-complete" : ""}>
                    <div className="task-details">
                        <span className="task-text">{task.text}</span>
                        <small>{task.priority} · {task.category}</small>
                    </div>

                    <div className="task-actions">
                        <button className="complete-btn" onClick={() => toggleComplete(index)}>
                            {task.completed ? "Undo" : "Complete"}
                        </button>
                        <button className="delete-btn" onClick={() => deleteTask(index)}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}