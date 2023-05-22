import React, { useEffect, useState } from "react";
import CharacterImage from "./CharacterImage";
import GameImage from "./GameImage";
import TargetCircle from "./TargetCircle";

const useTimer = (initialSeconds = 0, interval = 1000, deps = []) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, interval);
    return () => clearInterval(timer);
  }, deps);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

function Main({ allCharacters, gameInPlay }) {
  const [showCharacters, setShowCharacter] = useState(true);
  const [clickCoordinates, setClickCoordinates] = useState({});

  const generateTargetBox = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setClickCoordinates({ x, y });
  };

  const displayTime = useTimer(0, 1000, [gameInPlay]);

  return (
    <div className="main--container">
      <div className="main--header">
        <CharacterImage
          allCharacters={allCharacters}
          toggleShowCharacters={() => setShowCharacter(!showCharacters)}
          showCharacters={showCharacters}
        />
        <div className="render_timer">{gameInPlay ? displayTime : "0:00"}</div>
      </div>
      <div className="game-image-wrapper" style={{ position: "relative" }}>
        <GameImage handleClick={generateTargetBox} />
        {/* {clickCoordinates.x && clickCoordinates.y && (
          <img
            className="target_circle"
            src="./circle.png"
            alt=""
            style={{
              height: "80px",
              left: `calc(${clickCoordinates.x}% - 40px`,
              top: `calc(${clickCoordinates.y}% - 40px`,
              position: "absolute",
            }}
          />
        )} */}
        <TargetCircle clickedCoordinates={clickCoordinates} />
      </div>
    </div>
  );
}

export default Main;
