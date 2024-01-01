import React, { useState, useEffect } from "react";

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 1);
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [progress]);

  const statusMessage = progress < 100 ? "Loading..." : "Completed !";

  return (
    <div className="container">
      <p className="heading">Progress Bar</p>
      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "white",
            textAlign: "center",
            lineHeight: "20px",
            color: "white",
          }}
        >
          <p className="percentage">{progress}%</p>
        </div>
        <h2 className="message">{statusMessage}</h2>
      </div>
    </div>
  );
};

export default Loader;
