import React from "react";
import CertificateCard from "./CertificateCard";
import { FaUserGroup } from "react-icons/fa6";

const ProfessionalSkills = () => {
  return (
    <div>
      <div className="flex items-center gap-4 mb-[25px]">
        <div className="p-3.5 text-[#FFDB70] text-lg bg-[#202022D5] rounded-xl">
          <FaUserGroup />
        </div>
        <h3 className="text-white text-[24px] font-semibold">
          Professional Skills
        </h3>
      </div>
      <ol className="list2">
        <CertificateCard
          title="Efficient Email Management"
          name="WEKA Media GmbH & Co. KG"
          image="https://oktayshakirov.com/assets/images/certificates/efficient-email-management.png"
        />
        <CertificateCard
          title="Time And Self Management"
          name="VIWIS GmbH"
          image="https://oktayshakirov.com/assets/images/certificates/time-and-self-management.png"
        />
        <CertificateCard
          title="Excel 2013 Professional"
          name="Microsoft"
          image="https://oktayshakirov.com/assets/images/certificates/excel-2013-professional.png"
        />
        <CertificateCard
          title="Word 2013 Professional"
          name="Microsoft"
          image="https://oktayshakirov.com/assets/images/certificates/word-2013-professional.png"
        />
        <CertificateCard
          title="Intercultural Competence"
          name="Hiba impulse GmbH"
          image="https://oktayshakirov.com/assets/images/certificates/intercultural-competence.png"
        />
        <CertificateCard
          title="Communication And Complaint Management"
          name="Hiba impulse GmbH"
          image="https://oktayshakirov.com/assets/images/certificates/communication-complaint-management.png"
        />
      </ol>
    </div>
  );
};

export default ProfessionalSkills;
