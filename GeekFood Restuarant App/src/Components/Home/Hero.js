import React from "react";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-container">
        <h1 className="heading">
          Let us find your <br />
          <span className="red-heading">Forever Food.</span>
        </h1>
        <p className="sub-heading">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          <br /> Nesciunt illo tenetur fuga ducimus numquam ea!
        </p>
        <div className="button-container">
          <button className="red">Search Now</button>
          <button className="white">Know more</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
