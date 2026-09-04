import { useState } from 'react'

export default function TaskForm({ addTask }) {
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState("Medium")
    const [category, setCategory] = useState("General")

    const handlesubmit = (e)=>{
        e.preventDefault();
        const trimmedTask = task.trim();
        if (!trimmedTask) {
            return;
        }
        addTask({ id: crypto.randomUUID(), text: trimmedTask, priority, category, completed: false })
        //Reset State:
        setTask("");
        setPriority("Medium")
        setCategory('General')
    }
  return (
    <form onSubmit={handlesubmit} className='task-form'>
        <div className="task-input-row">
            <input 
            type = "text"
            placeholder='Enter Your Task'
            value={task}
            onChange={(e)=>setTask(e.target.value)} />
            <button type="submit">Add task</button>
        </div>

        <div className="task-filters">
            <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>

            <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                <option value="General">General</option>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
        </div>
    </form>
  )
}