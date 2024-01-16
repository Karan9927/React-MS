import React from "react";
import Accordian from "../Accordian";
import Navbar from "../Navbar";

const About = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mx-[100px] my-[48px] pb-12">
        <h1 className="text-center text-[36px] font-semibold mb-10">
          About Us
        </h1>
        <Accordian />
      </div>
    </div>
  );
};

export default About;
