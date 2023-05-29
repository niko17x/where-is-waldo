import React, { useCallback, useEffect, useRef, useState } from "react";
import CharacterImageList from "../components/CharacterImageList";
import HeroImage from "../components/HeroImage";
import TargetCircle from "../components/TargetCircle";
import CharacterSelector from "../components/CharacterSelector";
import FeedbackMessage from "../components/FeedbackMessage";
import useTimer from "../components/UseTimer";

// window.addEventListener("click", (e) => {
//   console.log(e.target);
// });

// const useTimer = (initialSeconds = 0, interval = 1000, deps = []) => {
//   const [seconds, setSeconds] = useState(() => initialSeconds);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1);
//     }, interval);
//     return () => clearInterval(timer);
//   }, deps);

//   const minutes = Math.floor(seconds / 60);
//   const remainingSeconds = seconds % 60;
//   return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//     .toString()
//     .padStart(2, "0")}`;
// };

function Main({ allCharacters, gameInPlay }) {
  const [messageContent, setMessageContent] = useState(null);
  const [clickCoordinates, setClickCoordinates] = useState({});
  const [targetFocused, setTargetFocused] = useState(false);
  const [gameOn, setGameOn] = useState(true);
  const clickedCharacter = useRef(0);
  const currentCoordinates = useRef({});
  const charactersFoundList = useRef([]);
  const currentTime = useRef();

  const displayTime = useTimer(0, 1000, [gameInPlay]);

  useEffect(() => {
    const heroImage = document.querySelector(".game_image");
    const handleTargetFocus = () => {
      setTargetFocused((prev) => !prev);
    };
    heroImage.addEventListener("click", handleTargetFocus);
    return () => {
      heroImage.removeEventListener("click", handleTargetFocus);
    };
  }, []);

  useEffect(() => {
    if (charactersFoundList.current.length >= 3) setGameOn(false);
    currentTime.current = displayTime;
  }, [charactersFoundList.current.length]);

  const isGameOver = () => {
    // If game is over: Display congrats message =>
    if (!gameOn) setMessageContent("You win! Awesome job!");
  };

  const matchCharacter = (e) => {
    clickedCharacter.current = {
      ...e.target.parentElement.dataset,
      xCoordinate: parseFloat(e.target.parentElement.dataset.xCoordinate),
      yCoordinate: parseFloat(e.target.parentElement.dataset.yCoordinate),
    };
    return clickedCharacter.current;
  };

  const isInTargetArea = (x, y, width, height) => {
    const topBorder = x + (30 / height) * 100;
    const bottomBorder = x - (30 / height) * 100;
    const leftBorder = y - (30 / width) * 100;
    const rightBorder = y + (30 / width) * 100;
    return { topBorder, bottomBorder, leftBorder, rightBorder };
  };

  const generateTargetBox = (event) => {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    const { clientX, clientY } = event;
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;
    const { topBorder, bottomBorder, leftBorder, rightBorder } = isInTargetArea(
      x,
      y,
      width,
      height
    );
    setClickCoordinates({ x, y });
    currentCoordinates.current = {
      topBorder,
      bottomBorder,
      leftBorder,
      rightBorder,
    };
    return { topBorder, bottomBorder, leftBorder, rightBorder };
  };

  const validateCoordinates = (event) => {
    const { topBorder, bottomBorder, leftBorder, rightBorder } =
      currentCoordinates.current;
    const characterX = clickedCharacter.current.xCoordinate;
    const characterY = clickedCharacter.current.yCoordinate;

    // console.log("All borders: ", {
    //   topBorder,
    //   bottomBorder,
    //   leftBorder,
    //   rightBorder,
    // });
    // console.log("CharacterX: ", characterX, "CharacterY: ", characterY);
    // console.log(characterX, characterY);
    // console.log(
    //   characterX >= bottomBorder &&
    //     characterX <= topBorder &&
    //     characterY >= leftBorder &&
    //     characterY <= rightBorder
    // );

    return (
      characterX >= bottomBorder &&
      characterX <= topBorder &&
      characterY >= leftBorder &&
      characterY <= rightBorder
    );
  };

  const messageContentInterval = (message) => {
    setMessageContent(message);
    setTimeout(() => {
      setMessageContent(null);
    }, 3000);
  };

  const isMatchFound = (characterFound) => {
    setMessageContent(null);
    if (characterFound) {
      const foundCharacter = clickedCharacter.current;
      const characterExists = charactersFoundList.current.find(
        (character) => character.name === foundCharacter.name
      );
      if (!characterExists) {
        charactersFoundList.current = [
          ...charactersFoundList.current,
          foundCharacter,
        ];
      }
      messageContentInterval(`You found ${foundCharacter.name}!`);
    } else {
      messageContentInterval("Try again");
    }
    setTargetFocused(false);
  };

  const handleCharacterSelectionClicks = (event) => {
    matchCharacter(event);
    const characterFound = validateCoordinates(event);
    isMatchFound(characterFound);
  };

  return (
    <div className="main--container">
      <div className="main--header">
        <div className="render_timer">
          {gameOn ? displayTime : currentTime.current}
        </div>
      </div>
      <div className="game-image-wrapper" style={{ position: "relative" }}>
        <HeroImage
          handleClick={
            targetFocused ? (event) => generateTargetBox(event) : null
          }
        />
        {messageContent !== null ? (
          <FeedbackMessage messageContent={messageContent} />
        ) : null}
        <CharacterSelector
          allCharacters={allCharacters}
          clickedCoordinates={clickCoordinates}
          targetFocused={targetFocused}
          clickedCharacter={handleCharacterSelectionClicks}
          charactersFoundList={charactersFoundList.current}
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
