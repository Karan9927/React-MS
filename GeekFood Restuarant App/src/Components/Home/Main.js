import React from "react";
import "./home.css";

const Main = () => {
  return (
    <div className="main">
      <div className="main-image">
        <img
          src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="main-image"
        />
      </div>
      <div className="main-text">
        <h1 className="font-bold text-[30px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore,
          debitis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
          molestiae! Quidem est esse numquam odio deleniti, beatae, magni
          dolores provident quaerat totam eos, aperiam architecto eius quis
          quibusdam fugiat dicta.
        </p>
        <button>Get in Touch</button>
      </div>
    </div>
  );
};

export default Main;
