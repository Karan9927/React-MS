import React from "react";
import "../App.css";

const ParagraphDisplay = ({ data, numberOfParagraphs }) => {
  const paragraphsToShow = data.slice(0, numberOfParagraphs);

  return (
    <div>
      {paragraphsToShow.map((paragraph) => (
        <p className="paragraph" key={paragraph.id}>
          {paragraph.id}:- {paragraph.para}
        </p>
      ))}
    </div>
  );
};

export default ParagraphDisplay;
