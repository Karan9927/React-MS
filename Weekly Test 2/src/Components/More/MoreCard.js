import React from "react";
import { IoIosGlobe } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

const MoreCard = (props) => {
  return (
    <div className="w-[400px] rounded-2xl bg-[#20202243] pb-[20px]">
      <img
        className="w-[402px] rounded-2xl h-[230px]"
        src={props.image}
        alt="banner"
      />
      <div className="p-[25px] text-[15px]">
        <p className="text-[#D6D6D6B2]">{props.cat}</p>
        <h3 className="text-[24px] text-white my-[10px] font-semibold">
          {props.title}
        </h3>
        <p className="w-[380px] text-[#D6D6D6] font-light">{props.desc}</p>
      </div>
      <div className="flex flex-col gap-1">
        <button className="text-[#FFDB70] text-[17px] rounded-md py-[2px] px-[10px] mx-[5px] bg-[#20202237] hover:bg-[#20202260] duration-200 flex justify-center items-center gap-2">
          <span>
            <IoIosGlobe />
          </span>{" "}
          Website
        </button>
        <button className="text-[#FFDB70] text-[17px] rounded-md py-[2px] px-[10px] mx-[5px] bg-[#20202237] hover:bg-[#20202260] duration-200 flex justify-center items-center gap-2">
          <span>
            <FaInstagram />
          </span>{" "}
          Instagram
        </button>
        <button className="text-[#FFDB70] text-[17px] rounded-md py-[2px] px-[10px] mx-[5px] bg-[#20202237] hover:bg-[#20202260] duration-200 flex justify-center items-center gap-2">
          <span>
            <FiYoutube />
          </span>{" "}
          Youtube
        </button>
      </div>
    </div>
  );
};

export default MoreCard;
