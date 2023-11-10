import React from "react";

const StacionerPost = (props) => {
  return (
    <div className="post lg:w-[31%] flex gap-[20px] px-[14px] py-[16px] rounded-[5px] bg-[#27C8DA] cursor-pointer dark:bg-transparent dark:border-[1px] dark:border-[#27C8DA]">
      <div className="wrapper-image min-w-[70px] min-h-[70px] rounded-[35px] bg-[#fff] flex justify-center items-center">
        <img src={props.image} alt="" />
      </div>
      <div className="wrapper-text flex items-center w-[60%]">
        <p className="text-[16px] text-[#fff]">{props.title}</p>
      </div>
    </div>
  );
};

export default StacionerPost;
