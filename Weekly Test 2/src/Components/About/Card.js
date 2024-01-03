import React from "react";

const Card = (props) => {
  return (
    <div className="flex gap-5 px-5 py-8 rounded-2xl bg-[#2020221F] w-fit insideS">
      <div>
        <img className="w-[40px]" src={props.image} alt="card" />
      </div>
      <div>
        <p className=" mb-[7px] text-[18px] text-white font-semibold">
          {props.name}
        </p>
        <p className="text-[15px] w-72 text-[#D6D6D6] font-medium">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default Card;
