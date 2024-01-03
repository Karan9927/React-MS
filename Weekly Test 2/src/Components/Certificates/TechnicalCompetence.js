import React from "react";
import CertificateCard from "./CertificateCard";
import { FaDesktop } from "react-icons/fa6";

const TechnicalCompetence = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-[25px]">
        <div className="p-3.5 text-[#FFDB70] text-lg bg-[#202022D5] rounded-xl">
          <FaDesktop />
        </div>
        <h3 className="text-white text-[24px] font-semibold">
          Technical Competence
        </h3>
      </div>
      <ol className="list1">
        <CertificateCard
          title="Node.Js Essentials"
          name="LinkedIn Learning"
          image="https://oktayshakirov.com/assets/images/certificates/node.js-essentials.png"
        />
        <CertificateCard
          title="React.Js Essentials"
          name="LinkedIn Learning"
          image="https://oktayshakirov.com/assets/images/certificates/react.js-essentials.png"
        />
        <CertificateCard
          title="JavaScript Essentials"
          name="LinkedIn Learning"
          image="https://oktayshakirov.com/assets/images/certificates/javascript-essentials.png"
        />
        <CertificateCard
          title="Fundamentals Of Digital Marketing"
          name="Google Certified Digital Marketing Course"
          image="https://oktayshakirov.com/assets/images/certificates/fundamentals-of-digital-marketing.png"
        />
        <CertificateCard
          title="Elements Of AI"
          name="University of Helsinki"
          image="https://oktayshakirov.com/assets/images/certificates/elements-of-ai.png"
        />
      </ol>
    </div>
  );
};

export default TechnicalCompetence;
