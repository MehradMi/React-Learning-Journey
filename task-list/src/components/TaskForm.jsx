import { useState } from "react";

function TaskForm({addTask}) {
  const [title, setTitle] = useState("");
  const [priority, setPriority]   = useState("Low");
	const [deadline, setDeadline]     = useState("");

  const handlePriorityChange = (eventObj) => {
    setPriority(eventObj.target.value);
  };

	const handleTaskTitleChange = (eventObj) => {
		setTitle(eventObj.target.value);
	}

	const handleDeadlineChange = (eventObj) => {
		console.log("Hey");
		confirm.log(eventObj.target.value);
		setDeadline(eventObj.target.value);	
	}
	
	const resetFormOnSubmit = () => {
		setTitle("");
		setPriority("Low");
		setDeadline("");
	}

	const handleSubmit = (eventObj) => {
		eventObj.preventDefault();
		if (title.trim()) {
			addTask({title, priority, deadline});			
			resetFormOnSubmit();
		}
	}

  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={handleTaskTitleChange}
      />
      <select value={priority} onChange={handlePriorityChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        type="datetime-local"
        value={deadline}
        onChange={handleDeadlineChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
