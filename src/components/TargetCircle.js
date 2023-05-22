import React from "react";

const TargetCircle = ({ clickedCoordinates }) => {
  if (!clickedCoordinates.x || !clickedCoordinates.y) return null;

  return (
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
  );
};

export default TargetCircle;
