import React from "react";
import Navbar from "../Navbar";

const Contact = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="mt-[48px] text-center n">
        <h1 className="text-[36px] font-semibold">Contact Me</h1>
        <div className="text-[18px] my-5">
          <p>Created by : Karandeep Singh</p>
          <p>
            <a
              className="hover:text-red-400"
              href="mailto:Karansingh.ks7417@gmail.com"
            >
              Email Address : Karansingh.ks7417@gmail.com
            </a>
          </p>
          <p>
            <a
              className="hover:text-blue-500"
              href="https://github.com/karan9927"
            >
              Github Link : https://github.com/karan9927
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
