import React from "react";
import generateCharacterImages from "../utilities/generateCharacterImages";

function CharacterImage({
  allCharacters,
  showCharacters,
  toggleShowCharacters,
}) {
  const getCharacterImage = generateCharacterImages(allCharacters, "160px");

  return (
    <div onClick={toggleShowCharacters}>
      {showCharacters ? (
        <div className="character_image--container">
          {getCharacterImage}
          <div className="overlay">Hide Characters</div>
        </div>
      ) : (
        <div className="character_image--show_characters">
          <button className="character_image--button">Show Characters</button>
        </div>
      )}
    </div>
  );
}

export default CharacterImage;
