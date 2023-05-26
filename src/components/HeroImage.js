import React from "react";
import CharacterSelector from "./CharacterSelector";

const HeroImage = ({ handleClick }) => (
  <div className="game_image-container">
    <img
      className="game_image"
      src="../game-image.jpeg"
      alt=""
      height="100%"
      width="100%"
      onClick={handleClick} // Add this line to pass the handleClick prop
    />
  </div>
);

export default HeroImage;
