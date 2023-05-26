import React, { useCallback } from "react";
import generateCharacterImages from "../utilities/generateCharacterImages";

const CharacterSelector = ({
  allCharacters,
  clickedCoordinates,
  targetFocused,
  clickedCharacter,
  charactersFound,
}) => {
  if (!clickedCoordinates.x || !clickedCoordinates.y) return null;

  const removeFoundCharacters = useCallback(() => {
    const getCharacters = generateCharacterImages(allCharacters, "80px");
    const characterFoundNames = charactersFound.map(
      (character) => character.name
    );
    const updatedCharacters = getCharacters.map((character) => {
      if (characterFoundNames.includes(character.props["data-name"])) {
        return {
          ...character,
          props: { ...character.props, style: { opacity: 0.2 } },
        };
      }
      return character;
    });

    return updatedCharacters;
  }, [charactersFound]);

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
      {removeFoundCharacters()}
    </div>
  ) : null;
};

export default CharacterSelector;
