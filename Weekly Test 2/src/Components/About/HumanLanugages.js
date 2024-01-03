import React from "react";
import ProgressBar from "./ProgressBar/ProgressBar";

const HumanLanugages = () => {
  return (
    <div>
      <p className="text-[24px] my-[20px] text-[#fafafa] text-center font-semibold">
        Human Languages
      </p>
      <div className="insideS flex flex-col gap-5 bg-[#2020221F] p-[40px] rounded-2xl">
        <ProgressBar title="English" level="Fluent" value={100} />
        <ProgressBar title="German" level="Fluent" value={100} />
        <ProgressBar title="Bulgarian" level="Native" value={100} />
        <ProgressBar title="Turkish" level="Billingual" value={80} />
      </div>
    </div>
  );
};

export default HumanLanugages;
