import React, { useState } from "react";
import characterData from "./characterData";
import Main from "./pages/Main";
import "./styles.css";
import LandingPage from "./components/LandingPage";

function App() {
  const [gameInPlay, setGameInPlay] = useState(true);
  // const [charactersFound, setCharactersFound] = useState({});
  const [allCharacters, setAllCharacters] = useState(characterData);

  const gamePlayTrue = () => {
    setGameInPlay(true);
  };

  return (
    <div className="app_container">
      {gameInPlay ? (
        <Main allCharacters={allCharacters} gameInPlay={gameInPlay} />
      ) : (
        <LandingPage
          gameIsInPlay={gamePlayTrue}
          allCharacters={allCharacters}
        />
      )}
    </div>
  );
}

export default App;
