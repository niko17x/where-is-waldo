import React from "react";

function CharacterImage({ allCharacters }) {
  const getCharacterImage = () =>
    allCharacters.map((character) => (
      <div className="character_image" key={character.id}>
        <img
          src={`../../${character.image}`}
          alt=""
          height={"160px"}
          width={"auto"}
        />
      </div>
    ));

  return (
    <div className="character_image--container">{getCharacterImage()}</div>
  );
}

export default CharacterImage;
