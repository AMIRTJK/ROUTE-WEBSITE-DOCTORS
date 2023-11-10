import React from "react";

const FeedBackList = (props) => {
  return (
    <li className="flex gap-[21px] lg:pl-[55px]">
      <div className="wrapper-text flex flex-col gap-[5px] relative">
        <div className="line absolute w-[39px] h-[2px] bg-[#3BB96D] top-[13.5%] left-[-4.5%] hidden lg:block"></div>
        <p className="font-[700] lg:text-left text-center">{props.title}</p>
        <p className="lg:text-left text-center">{props.desc}</p>
      </div>
    </li>
  );
};

export default FeedBackList;
