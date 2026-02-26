import React from "react";
import ReactDOM from "react-dom/client";

function App() {
	return (
		<>
			<Pizza />
		</>
	);
}

function Pizza() {
	return (
		<div>
			<img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"/>
			<h2>Pizza Spinaci</h2>	
			<p>Tomato, mozarella, spinach, and ricotta cheese</p>	
		</div>	
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);