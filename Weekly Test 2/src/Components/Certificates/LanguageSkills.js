import React from "react";
import CertificateCard from "./CertificateCard";
import { HiMiniLanguage } from "react-icons/hi2";

const LanguageSkills = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-[25px]">
        <div className="p-3.5 text-[#FFDB70] text-lg bg-[#202022D5] rounded-xl">
          <HiMiniLanguage />
        </div>
        <h3 className="text-white text-[24px] font-semibold">
          Language Skills
        </h3>
      </div>
      <ol className="list3">
        <CertificateCard
          title="German Language C1"
          name="TELC European Language Certificates"
          image="https://oktayshakirov.com/assets/images/certificates/german-c1.png"
        />
        <CertificateCard
          title="English Language B2"
          name="LinguaTV GmbH"
          image="https://oktayshakirov.com/assets/images/certificates/english-b2.png"
        />
      </ol>
    </div>
  );
};

export default LanguageSkills;
