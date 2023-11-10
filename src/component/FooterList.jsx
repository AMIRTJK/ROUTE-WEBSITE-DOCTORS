import React from "react";
import { Link } from "react-router-dom";

const FooterList = (props) => {
  return (
    <ul className="flex flex-col gap-[25px] w-[45%] lg:w-auto">
      <li>
        <p className="font-[700]">{props.title}</p>
      </li>
      <div className="list flex flex-col gap-[10px] ">
        <li>
          <Link to="*">{props.list1}</Link>
        </li>
        <li>
          <Link to="*">{props.list2}</Link>
        </li>
        <li>
          <Link to="*">{props.list3}</Link>
        </li>
        <li>
          <Link to="*">{props.list4}</Link>
        </li>
        <li>
          <Link to="*">{props.list5}</Link>
        </li>
        <li>
          <Link to="*">{props.list6}</Link>
        </li>
      </div>
    </ul>
  );
};

export default FooterList;
