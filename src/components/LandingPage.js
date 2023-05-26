import React from "react";
import CharacterImageList from "./CharacterImageList";
import generateCharacterImages from "../utilities/generateCharacterImages";

function LandingPage({ gameIsInPlay, allCharacters }) {
  const getCharacterImage = generateCharacterImages(allCharacters);

  const startGameButton = () => (
    <button className="landing_page--button" onClick={gameIsInPlay}>
      Start Game
    </button>
  );

  return (
    <div className="landing_page--container">
      <h2 className="landing_page--title">Find us and you win!</h2>
      <div className="landing_page--characters">{getCharacterImage}</div>
      {startGameButton()}
    </div>
  );
}

export default LandingPage;
