import React from "react";

const Quotes = ({ quote }) => {
  return (
    <>
      {quote.map((item) => (
        <div className="quote-card" key={item.id}>
          <h1 className="quote">{item.quote}</h1>
          <p className="author">{item.author}</p>
        </div>
      ))}
    </>
  );
};

export default Quotes;
