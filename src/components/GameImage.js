function GameImage({ handleClick }) {
  return (
    <div className="game_image-container">
      <img
        className="game_image"
        src="../game-image.jpeg"
        alt=""
        height="100%"
        width="100%"
        onClick={handleClick}
      />
    </div>
  );
}

export default GameImage;
