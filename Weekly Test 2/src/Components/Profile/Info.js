import React from "react";

const Info = (props) => {
  return (
    <div className="flex items-center justify-start gap-5">
      <div className="p-3 text-[#FFDB70] text-lg bg-[#202022D5] rounded-xl">
        {props.icon}
      </div>

      <div className="text-left ">
        <p className="uppercase text-[12px] text-[#D6D6D6B2] font-medium">
          {props.title}
        </p>
        <p className=" text-[14px] text-[#FAFAFA]">{props.sub}</p>
      </div>
    </div>
  );
};

export default Info;
