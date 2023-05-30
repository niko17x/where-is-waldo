import React from "react";
import WinnersList from "../components/WinnersList";

const LeaderBoard = () => (
  <div className="leader_board--container">
    <div className="leader_board--headers">
      <h1>Place</h1>
      <h1>Players</h1>
      <h1>Score</h1>
    </div>
    <WinnersList />
  </div>
);

export default LeaderBoard;
