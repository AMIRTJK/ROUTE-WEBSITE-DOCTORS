import React from "react";

const GetHelpPost = (props) => {
  return (
    <div className="post lg:w-[32%] shadow-md rounded-[10px] min-h-[258px] dark:border-[1px] relative">
      <h1 className="absolute bottom-[77%] left-0 font-[600] text-[82px] font-[sans-serif] text-[#3BB96D]">
        {props.number}
      </h1>
      <div className="wrapper-content p-[23px] flex items-start flex-col gap-[20px]">
        <div className="wrapper-image flex justify-center items-center min-h-[80px] min-w-[80px] rounded-[40px] bg-[#3BB96D]">
          {props.icon}
        </div>
        <div className="wrapper-text">
          <p className="text-[18px] font-[500] text-[#434343] dark:text-[#fff]">
            {props.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetHelpPost;
