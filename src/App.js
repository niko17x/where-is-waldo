import React, { useState } from "react";
import characterData from "./characterData";
import Main from "./components/Main";
import "./styles.css";

function App() {
  // const [gameInPlay, setGameInPlay] = useState(false);
  // const [charactersFound, setCharactersFound] = useState({});
  const [allCharacters, setAllCharacters] = useState(characterData);

  return (
    <div className="app_container">
      <Main allCharacters={allCharacters} />
    </div>
  );
}

export default App;
