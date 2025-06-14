import { useState } from "react";

function Player({ initialName = "Guest Player", symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  function handleEdit() {
    setIsEditing((prev) => !prev); //! use prev-state - Best Practice
  }

  function handleChange(evt) {
    console.log('Value: ',evt.target)
    setPlayerName(evt.target.value);
  }

  return (
    <li>
      <span className="player">
        {/* EDIT PLAYER-NAME 🎮 */}
        {isEditing ? (
          <input
            type="text"
            value={playerName}
            onChange={handleChange}
            required
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handleEdit}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;
