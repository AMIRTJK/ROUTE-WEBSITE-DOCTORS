import React from "react";
import { Button } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GetHelpPost from "../component/GetHelpPost";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";

const About = () => {
  return (
    <main>
      {/* Section 1 */}
      <div className="fullscreen bg-[#F1F5F8] py-[88px] dark:bg-[#000]">
        <div className="container">
          <div className="wrapper-text flex flex-col gap-[20px] lg:w-[60%]">
            <h1 className="text-[40px] font-[700] leading-[56px]">О клинике</h1>
            Клиники играют важную роль в обеспечении доступной и качественной
            медицинской помощи для людей. Они помогают диагностировать и лечить
            различные заболевания, а также предоставляют профилактическую
            медицинскую помощь для поддержания здоровья. Клиники обычно имеют
            расписание приема пациентов, и пациенты могут записываться на прием
            заранее или обращаться за помощью в случае неотложных ситуаций. В
            клиниках также могут проводиться различные медицинские процедуры,
            обследования и лечение.
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
