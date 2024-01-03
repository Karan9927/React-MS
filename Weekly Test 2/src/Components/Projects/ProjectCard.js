import React from "react";
import { IoEyeOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="text-center w-fit text-[15px] flex flex-col gap-4">
      <img
        className="project-image cursor-pointer w-[250px] h-[145px] rounded-2xl duration-200"
        src={props.image}
        alt="banner"
      />
      <div>
        <h3 className="mb-[3px] text-white">{props.title}</h3>
        <p className="text-[#D6D6D6B2]">{props.type}</p>
        <p className="text-[#D6D6D6B2]">{props.tech}</p>
      </div>
      <div className="flex flex-col gap-1">
        <button className="text-[#FFDB70] text-[17px] rounded-md py-[2px] px-[10px] mx-[5px] bg-[#20202237] hover:bg-[#20202260] duration-200 flex justify-center items-center gap-2">
          <span>
            <IoEyeOutline />
          </span>{" "}
          Preview
        </button>
        <button className="text-[#FFDB70] text-[17px] rounded-md py-[2px] px-[10px] mx-[5px] bg-[#20202237] hover:bg-[#20202260] duration-200 flex justify-center items-center gap-2">
          <span>
            <FaGithub />
          </span>{" "}
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
