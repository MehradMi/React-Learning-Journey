import { useState } from "react";

function Player({initialName, symbol, isActive}) {

	const [isEditing, setIsEditing] = useState(false);
	const handleEditClick = () => {
		setIsEditing(() => !isEditing);
	}

	const [playerName, setPlayerName] = useState(initialName);
	const handleChange = (event) => {
		setPlayerName(() => event.target.value);
	}
	
  return (
    <li className="active">
      <span className="player">
				{!isEditing && <span className="player-name">{playerName}</span> } 
				{isEditing && <input type="text" defaultValue={playerName} required onChange={handleChange}></input>}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
