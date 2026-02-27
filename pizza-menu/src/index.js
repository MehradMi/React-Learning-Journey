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

const Order = ({closingHour, openHour}) => {
	return (
		<div className="order">
			<p className="footer"> We're open from {openHour}:00 until {closingHour}:00 </p>
			<button className="btn">Order</button>
		</div>
	);	
}

const Footer = () => {
	const hour = new Date().getHours();
	const openningHour = 12;
	const closingHour = 22;
	const isOpen = hour >= openningHour && hour <= closingHour;
	return (
		<footer className="footer">
			{isOpen && (
				<Order closingHour={closingHour} openHour={openningHour}/>
			)}
		</footer>
	);
}

const Pizza = ( { pizzaObj} ) => {
	return (
		<li className="pizza">
			<img src={pizzaObj.photo_src} alt={pizzaObj.name} />
			<div>
				<h3>{pizzaObj.name}</h3>
				<p>{pizzaObj.ingredients}</p>
				<span>{pizzaObj.price}</span>
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