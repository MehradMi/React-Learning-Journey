import react_core_concepts_img from "../assets/react-core-concepts.png";
import "./Header.css"

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

const getRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

function Header() {
  const description = reactDescriptions[getRandomInt(2)];

  return (
    <header>
      <img src={react_core_concepts_img} />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

export default Header;