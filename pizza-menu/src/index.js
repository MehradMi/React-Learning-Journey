import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
}

const Header = () => {
	const style = {
	};

	return (
		<header className="header">
			<h1 style={style}>Pizza Co.</h1>
		</header>
	);
}

const Menu = () => {
	return (
		<main className="menu">
			<h2>Menu</h2>
			<Pizza />
			<Pizza />
			<Pizza />
			<Pizza />
		</main>
	);	
}

const Footer = () => {
	const hour = new Date().getHours();
	const openningHour = 12;
	const closingHour  = 22;
	const isOpen = hour >= openningHour && hour <= closingHour;
	if (isOpen) {
		return (
			<div>
				<footer className="footer">
					We're currently open!
				</footer>
			</div>
		);
	} else {
		return (
			<div className="footer">
				<footer>
					Sorry we're closed!
				</footer>
			</div>
		);
	}
}

const Pizza = () => {
	return (
		<div>
			<img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"/>
			<h3>Pizza Spinaci</h3>	
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