import { Slider, SliderProps } from "@mui/material";
import React from "react";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // Стили для самого слайдера (ширина, отступы)
        width: "100%",
        color: "#00CC74", // Основной цвет трека и ползунка
        // Стили для ползунка (кругляшка)
        "& .MuiSlider-thumb": {
          height: 18,
          width: 18,
          backgroundColor: "#fff",
          border: "5px solid #00CC74", // Зеленая рамка
          "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
            boxShadow: "inherit",
          },
          "&::before": {
            display: "none",
          },
        },
        // Стили для активной полосы (между ползунками)
        "& .MuiSlider-track": {
          border: "none",
          height: 6,
        },
        
        // Стили для фоновой полосы
        "& .MuiSlider-rail": {
          opacity: 1,
          backgroundColor: "#8B8B8B", // Серый цвет неактивного трека
          height: 6,
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
