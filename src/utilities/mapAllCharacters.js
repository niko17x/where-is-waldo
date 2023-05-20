const generateCharacterImages = (allCharacters) =>
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

export default generateCharacterImages;
