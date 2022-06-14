import React, { useState } from "react";

const SingleQuestions = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <div className="article">
      <header>
        <h4>{title}</h4>
        <button onClick={() => setShowInfo(!showInfo)}>holla</button>
      </header>
      {showInfo && <p>{info}</p>}
    </div>
  );
};

export default SingleQuestions;
