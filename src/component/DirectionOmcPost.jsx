import React from "react";
import { Button } from "@mui/material/";
const DirectionOmcPost = (props) => {
  return (
    <div
      className={`post lg:${props.bg} lg:w-[30%] w-[100%] shadow-lg dark:border-[1px] rounded-[10px]`}
    >
      <div
        className={`wrapper-content p-[20px] flex flex-col items-start justify-between gap-[10px] h-[250px] lg:h-[200px] `}
      >
        <p className="font-[700] text-[20px]">{props.title}</p>
        <p className="text-[16px] font-[400] leading-[24px]">{props.desc}</p>
        <Button
          variant="text"
          sx={{
            borderBottom: "1px solid #3BB96D",
            fontSize: "16px",
            color: "#3BB96D",
            padding: "0px",
            borderRadius: "0px",
            textTransform: "none",
            fontWeight: "400",
          }}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

export default DirectionOmcPost;
