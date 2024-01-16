import React from "react";
const Quotes = ({ quote }) => {
  return (
    <>
      {quote.map((item) => (
        <div className="quote-card" key={item.id}>
          <h1 className="quote text-[30px] font-bold">{item.quote}</h1>
          <p className="author text-gray-500 font-semibold text-[20px]">
            {item.author}
          </p>
        </div>
      ))}
    </>
  );
};

export default Quotes;
