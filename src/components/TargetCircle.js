import React from "react";

const TargetCircle = ({ clickedCoordinates, targetFocused }) => {
  if (!clickedCoordinates.x || !clickedCoordinates.y) return null;

  return targetFocused ? (
    <img
      className="circle_target"
      src="./circle.png"
      alt=""
      style={{
        height: "100px",
        position: "absolute",
        left: `calc(${clickedCoordinates.x}% - 50px)`,
        top: `calc(${clickedCoordinates.y}% - 50px)`,
      }}
    />
  ) : null;
};

export default TargetCircle;
