import TaskForm from "./Components/Taskform";
import TaskList from "./Components/Tasklist";
import ProgressTracker from "./Components/ProgressTracker";
import { useEffect, useState } from "react";
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (!savedTasks) {
      return [];
    }

    try {
      const parsedTasks = JSON.parse(savedTasks);
      return Array.isArray(parsedTasks)
        ? parsedTasks.map((task) => ({ ...task, id: task.id ?? crypto.randomUUID() }))
        : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((currentTasks) => [...currentTasks, task]);
  };

  const updateTask = (updatedTask, index) => {
    setTasks((currentTasks) => {
      const newTasks = [...currentTasks];
      newTasks[index] = updatedTask;
      return newTasks;
    });
  }
  const deleteTask = (index) => {
    setTasks((currentTasks) => currentTasks.filter((_, i) => i !== index));
  }
  const clearTasks = () => {
    setTasks([]);
  };

  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">YOUR DAILY DESK</p>
          <h1>Taskdoer</h1>
          <p className="tagline">A little more clarity, one task at a time.</p>
        </div>
        <span className="task-count">{tasks.length} {tasks.length === 1 ? "task" : "tasks"}</span>
      </header>
      <main className="task-content">
        <TaskForm addTask={addTask} />
        <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        <ProgressTracker tasks={tasks} />
        {tasks.length > 0 && (
          <button className="clear-btn" onClick={clearTasks}>Clear all tasks</button>
        )}
      </main>
    </div>
  );
}