function TaksItem({task, completeTask, deleteTask}) {
	const { title, priority, deadline, id, completed } = task; // obj destructuring

	return (
		<li className={`task-item ${priority.toLowerCase()}`}>
			<div className="task-info">
				<div>
					{title} <strong>{priority}</strong>
				</div>
				<div className="task-deadline">Due: {new Date(deadline).toLocaleString()}</div>
			</div>
			<div className="task-buttongs">
        {/* Show complete button only for active tasks */}
        {!completed && (
          <button className="complete-button" onClick={() => completeTask(id)}>
            Complete
          </button>
        )}
        {/* Delete button to remove the task */}
        <button className="delete-button" onClick={() => deleteTask(id)}>
          Delete
        </button>
			</div>
		</li>
	);
}

export default TaskItem;