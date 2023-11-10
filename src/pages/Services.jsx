import React from "react";
import { Button } from "@mui/material/";
import PostDirection from "../component/PostDirection";

const Services = () => {
  return (
    <div className="wrapper-doctor pb-[130px] pt-[40px]">
      <div className="container">
        <h1 className="font-[700] text-[40px]">Направления нашей работы</h1>
        <div className="wrapper-post gap-y-[40px] flex-wrap flex justify-between items-start mt-[42px] pb-[130px]">
          <PostDirection
            image="src/assets/direction-1.svg"
            title="Гинекология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-2.svg"
            title="Урология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-3.svg"
            title="Отоларингология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-4.svg"
            title="Неврология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-5.svg"
            title="Терапия"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-6.svg"
            title="Ревматология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-7.svg"
            title="Гастроэнтерология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-8.svg"
            title="УЗИ- диагностика"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-9.svg"
            title="Кардиология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-10.svg"
            title="Эндокринология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-11.svg"
            title="Общая хирургия"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
          <PostDirection
            image="src/assets/direction-12.svg"
            title="Урология"
            more="Подробнее"
            brd="border-b-[1px]"
            colorText="#3BB96D"
          />
        </div>
        <div className="wrapper-appointment">
          <h2 className="font-[700] text-[40px] text-center lg:text-left">
            Запись на приём
          </h2>
          <form className="wrapper-form flex flex-col lg:flex-row justify-between items-end gap-[40px] mt-[50px] lg:mt-[0px]">
            <div className="input-list flex flex-col gap-[10px] w-[100%]">
              <label
                for="name-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Ваше ФИО
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="name-input"
                placeholder="Иванов Иван Иванович"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%]">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Номер телефона
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="+7 (___) ___-__-__"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%]">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Выберите направление
              </label>
              <select
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="+7 (___) ___-__-__"
              >
                <option label="Эндокринология"></option>
                <option label="Ревматология"></option>
                <option
                  label="Гастроэнтерология


"
                ></option>
              </select>
            </div>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                px: "28px",
                py: "8px",
                borderRadius: "30px",
                bgcolor: "#3BB96D",
                fontSize: "14px",
                textTransform: "none",
                fontWeight: "400",
                ":hover": {
                  bgcolor: "#3BB96D",
                },
              }}
            >
              Записаться на прием
            </Button>
          </form>
          <p className="text-[14px] font-[500] text-[#8D979F] mt-[33px]">
            Нажимая на кнопку Записаться на приём вы соглашаетесь с{" "}
            <span className="text-[#3BB96D] underline">
              политикой конфиденциальности
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
