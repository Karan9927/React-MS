import React from "react";

const CertificateCard = (props) => {
  return (
    <li className="timeline-item mb-[20px] flex gap-8">
      <span class="custom-circle"></span>
      <div>
        <h4 className="text-[15px] font-semibold text-white mb-[7px]">
          {props.title}
        </h4>
        <p className="text-[#D6D6D6] text-[15px]">{props.name}</p>
        <div className="w-[275px] overflow-hidden">
          <img
            className="w-[240px] border-[10px] transition-all duration-200 p-[5px] border-black hover:scale-[1.01] hover:p-0 overflow-hidden"
            src={props.image}
            alt="certificate"
          />
        </div>
      </div>
    </li>
  );
};

export default CertificateCard;
