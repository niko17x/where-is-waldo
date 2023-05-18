import CharacterImage from "./CharacterImage";
import GameImage from "./GameImage";

function Main({ allCharacters }) {
  const clickedCoordinates = (event) => {
    const imageWidth = event.target.offsetWidth;
    const imageHeight = event.target.offsetHeight;
    const xPercentage = (event.nativeEvent.offsetX / imageWidth) * 100;
    const yPercentage = (event.nativeEvent.offsetY / imageHeight) * 100;
    console.log(xPercentage, yPercentage);
    return { xPercentage, yPercentage };
  };

  return (
    <div className="main--container">
      <CharacterImage allCharacters={allCharacters} />
      <GameImage handleClick={clickedCoordinates} />
    </div>
  );
}

export default Main;
