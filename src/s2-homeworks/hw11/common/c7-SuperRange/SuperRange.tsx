import { Slider, SliderProps } from "@mui/material";
import React from "react";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
  
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
