import React, { useState } from "react";
import characterData from "./characterData";
import Main from "./components/Main";
import "./styles.css";
import LandingPage from "./components/LandingPage";

function App() {
  const [gameInPlay, setGameInPlay] = useState(false);
  // const [charactersFound, setCharactersFound] = useState({});
  const [allCharacters, setAllCharacters] = useState(characterData);

  const gamePlayTrue = () => {
    setGameInPlay(true);
  };

  return (
    <div className="app_container">
      <LandingPage gameIsInPlay={gamePlayTrue} />
      <Main allCharacters={allCharacters} gameInPlay={gameInPlay} />
    </div>
  );
}

export default App;
