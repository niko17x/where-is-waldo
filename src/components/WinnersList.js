import React from "react";

const data = [
  {
    name: "zoe",
    score: "3:03",
  },
  {
    name: "zack",
    score: "2:30",
  },
  {
    name: "brittney",
    score: "3:48",
  },
];

const placement = (indexPosition) => {
  if (indexPosition > 2) return "th";
  return indexPosition === 1 ? "st" : "nd";
};

const WinnersList = (winnersList) => {
  const getData = data.map((player, index) => (
    <div className="winners_list--scores" key={player.name}>
      <h3>
        {index + 1}
        {placement(index + 1)}
      </h3>
      <h3 className="winners_list--name">{player.name}</h3>
      <h3 className="winners_list--score">{player.score}</h3>
    </div>
  ));

  return getData;
};

export default WinnersList;
