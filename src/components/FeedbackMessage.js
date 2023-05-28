import React from "react";

const FeedbackMessage = ({ gameOn, messageContent }) => {
  const message = () => (
    <h2 className="feedback_message--content">{messageContent}</h2>
  );

  return <div className="feedback_message--container">{message()}</div>;
};

export default FeedbackMessage;
