import React from "react";

const FavoriteCard = (props) => {
  return (
    <div className="p-[30px] pt-[25px] insideS w-fit relative rounded-2xl mb-4">
      <img
        className="w-[80px] absolute top-[-30px]"
        src={props.image}
        alt="fav"
      />
      <p className="ml-[96px] mb-[10px] text-[14px] text-white font-semibold">
        {props.title}
      </p>
      <p className="w-[300px] text-[12px] text-[#D6D6D6]">{props.desc}</p>
    </div>
  );
};

export default FavoriteCard;
