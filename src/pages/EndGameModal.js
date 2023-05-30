import React from "react";
import PlayerInfoInput from "../components/PlayerInfoInput";
import LeaderBoard from "./LeaderBoard";

const EndGameModal = ({ timer, showModal }) => (
  <div className={`modal ${showModal ? "show" : ""}`}>
    <div className="player_score_panel--container modal-content">
      <PlayerInfoInput timer={timer} />
      <LeaderBoard />
    </div>
  </div>
);

export default EndGameModal;
