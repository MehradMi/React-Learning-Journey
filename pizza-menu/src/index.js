import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photo_src: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photo_src: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photo_src: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photo_src: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photo_src: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photo_src: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
			<ul className="pizzas">
				{ pizzaData.map( (pizza) => (<Pizza pizzaObj={pizza} />) ) }
			</ul>
		</main>
	);
}

const Footer = () => {
	const hour = new Date().getHours();
	const openningHour = 12;
	const closingHour = 22;
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

const Pizza = (props) => {
	return (
		<li className="pizza">
			<img src={props.pizzaObj.photo_src} alt={props.pizzaObj.name} />
			<div>
				<h3>{props.pizzaObj.name}</h3>
				<p>{props.pizzaObj.ingredients}</p>
				<span>{props.pizzaObj.price}</span>
			</div>
		</li>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);