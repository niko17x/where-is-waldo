const generateCharacterImages = (allCharacters, height, handleClick) =>
  allCharacters.map((character) => (
    <div
      className="character_image"
      key={character.id}
      data-name={character.name}
      data-x-coordinate={character.xCoordinate}
      data-y-coordinate={character.yCoordinate}
    >
      <img
        src={`../../${character.image}`}
        alt={character.name}
        height={height}
        width={"auto"}
      />
    </div>
  ));

export default generateCharacterImages;
