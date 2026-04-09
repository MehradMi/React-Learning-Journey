import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
	// State to store the list of "all" tasks
	const [tasks, setTasks] = useState([]);
	// State to store different panels visibility
	const [openSection, setOpenSection] = useState({
		taskForm: false,
		tasks: true,
		completedTasks: true
	});
	
	const addTask = (task) => {
		setTasks([...tasks, {...task, completed: false, id: Date.now()}]);	
	}

	const completeTask = (id) => {
		setTasks([tasks.map((task) => (task.id === id ? {...task, completed: true} : true))]);
	}

	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	}

	const toggleSectionVis = (section) => {
		setOpenSection((prev) => ({
			...prev,
			[section]: !prev[section]
		}));
	}
	
	const activeTasks = tasks.filter((task) => !task.completed);
	const completedTasks = tasks.filter((task) => task.completed);

  return (
    <div className="app">
      <div className="task-container">
        <h1>Task List with Priority</h1>
        <button
          className={`close-button ${openSection.taskForm ? "open" : ""}`}
          onClick={() => toggleSectionVis("taskForm")}
        >
          +
        </button>
        {openSection.taskForm && <TaskForm addTask={addTask}></TaskForm>}
      </div>
      <div className="task-container">
        <h2>Tasks: </h2>
        <button
          className={`close-button ${openSection.tasks ? "open" : ""}`}
          onClick={() => toggleSectionVis("tasks")}
        >
          +
        </button>
        <div className="sort-controls">
          <button className="sort-button">By Date</button>
          <button className="sort-button">By Priority</button>
        </div>
        {openSection.tasks && (
          <TaskList
            completeTask={completeTask}
            deleteTask={deleteTask}
						activeTasks={activeTasks}
          ></TaskList>
        )}
      </div>
    </div>
  ); 
}

export default App;
