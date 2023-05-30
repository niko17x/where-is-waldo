import React from "react";

const PlayerInfoInput = ({ timer }) => (
  <div className="player_info_input--container">
    <form className="player_info_input--form" id="input_form">
      <label>Enter your name: </label>
      <input type="text" id="name" name="name" required />
    </form>
    <div className="player_info_input--timer">{timer}</div>
    <button className="submit_button" type="submit" form="input_form">
      Submit
    </button>
  </div>
);

export default PlayerInfoInput;
