
export default function ProgressTracker({ tasks = [] }) {
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
  return (
    <div className="progress-tracker">
      <div className="progress-copy">
        <p>Progress</p>
        <span>{completedTasks} of {totalTasks} completed</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  )
}
