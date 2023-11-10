import React from "react";
import { Button } from "@mui/material/";

const PostDirection = (props) => {
  return (
    <div className="post flex flex-col justify-between items-start gap-[20px]">
      <div className="wrapper-image">
        <img src={props.image} alt="" />
      </div>
      <div className="wrapper-text flex flex-col justify-start items-start gap-[10px]">
        <p className="text-[20px] font-[700]">{props.title}</p>
        <Button
          variant="text"
          sx={{
            minHeight: "0px",
            minWidth: "0px",
            padding: "0px",
            textTransform: "none",
          }}
        >
          <p
            className={`text-[${props.colorText}] ${props.brd} border-[#3BB96D] text-[16px] font-[400]`}
          >
            {props.more}
          </p>
        </Button>
        <div className="wrapper-buttons flex flex-col items-center justify-start gap-[20px]">
          {props.btn}
          {props.btn2}
        </div>
      </div>
    </div>
  );
};

export default PostDirection;
