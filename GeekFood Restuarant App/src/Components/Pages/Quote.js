import React from "react";
import Navbar from "../Navbar";
import Quotes from "../Quote/Quotes";
import Author from "../Quote/quotes.json";
import Footer from "../Footer";
import "../Quote/quote.css";

const Quote = () => {
  return (
    <div>
      <Navbar />
      <Quotes quote={Author} />
      <Footer />
    </div>
  );
};

export default Quote;
