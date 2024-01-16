import React from "react";
import Navbar from "../Navbar";
import Hero from "../Home/Hero";
import Main from "../Home/Main";
import Feedbacks from "../Home/Feedbacks";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Feedbacks />
      <Footer />
    </div>
  );
};

export default Home;
