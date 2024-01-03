import React from "react";
import LinearProgress from "@mui/joy/LinearProgress";

const ProgressBar = (props) => {
  return (
    <div>
      <p className="text-[#FAFAFA] font-semibold text-[15px] mb-2">
        {props.title}{" "}
        <span className="text-[#D6D6D6] font-light">{props.level}</span>
      </p>
      <LinearProgress
        determinate
        value={props.value}
        size="lg"
        style={{
          color: "#FFDB70",
          height: "8px",
          backgroundColor: "#383838",
        }}
      />
    </div>
  );
};

export default ProgressBar;
