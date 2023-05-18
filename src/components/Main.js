import React, { useEffect, useState } from "react";
import CharacterImage from "./CharacterImage";
import GameImage from "./GameImage";

function Main({ allCharacters, gameInPlay }) {
  const [seconds, setSeconds] = useState(0);

  const clickedCoordinates = (event) => {
    const imageWidth = event.target.offsetWidth;
    const imageHeight = event.target.offsetHeight;
    const xPercentage = (event.nativeEvent.offsetX / imageWidth) * 100;
    const yPercentage = (event.nativeEvent.offsetY / imageHeight) * 100;
    console.log(xPercentage, yPercentage);
    return { xPercentage, yPercentage };
  };

  useEffect(() => {
    let interval = null;
    if (gameInPlay) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameInPlay]);

  const renderTimer = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    const displayTime = `${minutes
      .toString()
      .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;

    return gameInPlay ? (
      <div className="render_timer">{displayTime}</div>
    ) : (
      "0:00"
    );
  };

  return (
    <div className="main--container">
      {renderTimer()}
      <CharacterImage allCharacters={allCharacters} />
      <GameImage handleClick={clickedCoordinates} />
    </div>
  );
}

export default Main;
