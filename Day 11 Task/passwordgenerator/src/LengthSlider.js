import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function DiscreteSlider({ lengthHandler, length }) {
  const ChangeHandler = (event) => {
    const len = event.target.value;
    lengthHandler(len);
  };
  return (
    <Box sx={{ width: 400 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={8}
        onChange={ChangeHandler}
        valueLabelDisplay="auto"
        step={2}
        marks
        min={2}
        max={18}
      />
    </Box>
  );
}
