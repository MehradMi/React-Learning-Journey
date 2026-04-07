import { useState } from "react";

function App() {
	const [count, setCount] = useState(0); // [count, setCount] is the syntax for object destructuring
	const [activeItem, setActiveItem] = useState("");
	
	const handleAddBtnClick = () => {
		setCount((count) => count + 1);
	}

	const handleSubtractBtnClick = () => {
		setCount((prev) => prev - 1);	
	}

	const handleResetBtnClick = () => {
		setCount(0); // here it does NOT depened on the previous value (no matter what we set it to 0)
	}

	const handleMouseEnter = (item) => {
		setActiveItem(item);
	}

	const handleMouseLeave = () => {
		setActiveItem("");
	}

  return (
    <>
      {<span className="cross">&times;</span>}
      {/*<button>Начать</button>*/}

      <h1>Vite + React = Love</h1>

      {
        <div className="logo-container">
          <img
            src="/vite.svg"
            className={`logo ${count >= 1 || activeItem == "vite" ? "active" : ""}`}
            alt="Vite logo"
            onMouseEnter={() => handleMouseEnter("vite")}
            onMouseLeave={handleMouseLeave}
          />
          <p>+</p>
          <img
            src="/react.svg"
            className={`logo ${count >= 2 || activeItem == "react" ? "active" : ""}`}
            alt="React logo"
            onMouseEnter={() => handleMouseEnter("react")}
            onMouseLeave={handleMouseLeave}
          />
          <p>=</p>
          <img
            src="/love.svg"
            className={`logo ${count >= 3 || activeItem == "love" ? "active" : ""}`}
            alt="Love logo"
            onMouseEnter={() => handleMouseEnter("love")}
            onMouseLeave={handleMouseLeave}
          />
        </div>
      }

      <hr />

      <div className="card">
        <p className="count-paragraph">count is {count}</p>
        <div className="increment-buttons">
          <button onClick={handleAddBtnClick}>+1</button>
          <button onClick={handleSubtractBtnClick}>-1</button>
          <button onClick={handleResetBtnClick}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
