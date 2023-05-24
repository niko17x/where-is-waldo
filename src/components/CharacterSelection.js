import React from "react";
import generateCharacterImages from "../utilities/generateCharacterImages";

const CharacterSelection = ({
  allCharacters,
  clickedCoordinates,
  targetFocused,
  clickedCharacter,
}) => {
  if (!clickedCoordinates.x || !clickedCoordinates.y) return null;

  const getCharacters = generateCharacterImages(allCharacters, "80px");

  return targetFocused ? (
    <div
      className="character_selection--container"
      onClick={clickedCharacter}
      style={{
        position: "absolute",
        left: `calc(${clickedCoordinates.x}% - 120px)`,
        top: `calc(${clickedCoordinates.y}% - 150px)`,
      }}
    >
      {getCharacters}
    </div>
  ) : null;
};

export default CharacterSelection;
