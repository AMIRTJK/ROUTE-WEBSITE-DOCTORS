import React from "react";
import { Button } from "@mui/material/";

const StockPost = (props) => {
  return (
    <div
      className={`post lg:w-[48%] min-h-[226px] flex justify-between items-end ${props.bg} rounded-[10px] dark:bg-transparent dark:border-[1px] ${props.borderColor}`}
    >
      <div
        className={`wrapper-text flex flex-col gap-[20px] items-start ${props.text} p-[10px]`}
      >
        <p className="font-[700] text-[20px]">{props.title}</p>
        <div className="stock">
          <p className="text-[12px] font-[400]">{props.desc}</p>
          <p className="text-[18px] font-[700]">{props.date}</p>
        </div>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#FFFFFF",
            textTransform: "none",
            px: "15px",
            py: "5px",
            display: "flex",
            gap: "5px",
            borderRadius: "30px",
            ":hover": {
              bgcolor: "#fff",
            },
          }}
        >
          <p className="text-[#3BB96D] font-[700] text-[14px]">Подробнее</p>
        </Button>
      </div>
      <div className="wrapper-image">
        <img src="src/assets/stock.svg" alt="" />
      </div>
    </div>
  );
};

export default StockPost;
