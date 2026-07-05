import { Slider, SliderProps } from "@mui/material";
import React from "react";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: "#1976d2",
        height: 8,
        "& .MuiSlider-thumb": {
          width: 18,
          height: 18,
          backgroundColor: "#fff",
          border: "2px solid currentColor",
          boxShadow: "0 2px 6px rgba(0,0,0,0.12)",
        },
        "& .MuiSlider-track": {
          height: 8,
          borderRadius: 8,
        },
        "& .MuiSlider-rail": {
          height: 8,
          borderRadius: 8,
          opacity: 0.38,
        },
        "& .MuiSlider-valueLabel": {
          backgroundColor: "#1976d2",
          color: "#fff",
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
