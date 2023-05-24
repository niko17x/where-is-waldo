import React, { useCallback, useEffect, useRef, useState } from "react";
import CharacterImage from "./CharacterImage";
import GameImage from "./GameImage";
import TargetCircle from "./TargetCircle";
import characterData from "../characterData";
import CharacterSelection from "./CharacterSelection";

// window.addEventListener("click", (e) => {
//   console.log(e.target);
// });

const useTimer = (initialSeconds = 0, interval = 1000, deps = []) => {
  const [seconds, setSeconds] = useState(() => initialSeconds);

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
  const [targetFocused, setTargetFocused] = useState(false);
  const clickedCharacter = useRef(0);

  useEffect(() => {
    const gameImage = document.querySelector(".game_image");
    const handleTargetFocus = () => {
      setTargetFocused((prev) => !prev);
    };
    gameImage.addEventListener("click", handleTargetFocus);
    return () => {
      gameImage.removeEventListener("click", handleTargetFocus);
    };
  }, []);

  const displayTime = useTimer(0, 1000, [gameInPlay]);

  const toggleShowCharacters = () => {
    setShowCharacter((prev) => !prev);
  };

  const matchCharacter = (e) => {
    clickedCharacter.current = {
      ...e.target.parentElement.dataset,
      xCoordinate: parseFloat(e.target.parentElement.dataset.xCoordinate),
      yCoordinate: parseFloat(e.target.parentElement.dataset.yCoordinate),
    };
    console.log(clickedCharacter.current);
    return clickedCharacter.current;
  };

  const generateTargetBox = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    setClickCoordinates({ x, y });
  };

  const isInTargetArea = (character, dimensionSize, event) => {
    const { x, y } = clickCoordinates;
    const top = x + (30 / dimensionSize) * 100;
    const bottom = x - (30 / dimensionSize) * 100;
    const left = y - (30 / dimensionSize) * 100;
    const right = y + (30 / dimensionSize) * 100;
    return (
      character <= top &&
      character >= bottom &&
      character >= left &&
      character <= right
    );
  };

  const validateCoordinates = (width, height, event) => {
    if (
      isInTargetArea(clickedCharacter.current.xCoordinate, width, event) &&
      isInTargetArea(clickedCharacter.current.yCoordinate, height, event)
    ) {
      console.log("success");
      setTargetFocused(false);
    } else {
      console.log("no match");
    }
    clickedCharacter.current = 0;
  };

  const handleGameImageClick = (event) => {
    const { x, y } = clickCoordinates;
    const { width, height } = event.target.getBoundingClientRect();
    generateTargetBox(event);

    //   if (clickedCharacter.current.xCoordinate) {
    //     validateCoordinates(x, y, width, height, event);
    //   }
  };

  return (
    <div className="main--container">
      <div className="main--header">
        <CharacterImage
          allCharacters={allCharacters}
          toggleShowCharacters={toggleShowCharacters}
          showCharacters={showCharacters}
        />
        <div className="render_timer">{gameInPlay ? displayTime : "0:00"}</div>
      </div>
      <div className="game-image-wrapper" style={{ position: "relative" }}>
        <GameImage handleClick={targetFocused ? handleGameImageClick : null} />
        <CharacterSelection
          allCharacters={allCharacters}
          clickedCoordinates={clickCoordinates}
          targetFocused={targetFocused}
          clickedCharacter={matchCharacter}
        />
        <TargetCircle
          clickedCoordinates={clickCoordinates}
          targetFocused={targetFocused}
        />
      </div>
    </div>
  );
}

export default Main;
