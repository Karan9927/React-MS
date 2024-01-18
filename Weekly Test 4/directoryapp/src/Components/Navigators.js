import React from "react";
import { Link } from "react-router-dom";

const Navigators = () => {
  return (
    <div className="flex mx-16 my-4 gap-28">
      <Link to={"/"}>
        <button className="px-6 py-2 text-white bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-600">
          Add New Person
        </button>
      </Link>
      <Link to={"/retrieve"}>
        <button className="px-6 py-2 text-white bg-blue-500 rounded-sm cursor-pointer hover:bg-blue-600">
          Retrieve information
        </button>
      </Link>
    </div>
  );
};

export default Navigators;
