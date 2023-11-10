import React from "react";
import { Button } from "@mui/material/";
import PostDirection from "../component/PostDirection";
import StacionerPost from "../component/StacionerPost";
import StockPost from "../component/StockPost";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import GetHelpPost from "../component/GetHelpPost";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";
import DirectionOmcPost from "../component/DirectionOmcPost";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Diagnostics = () => {
  return (
    <main>
      <div className="fullscreen  bg-[#F1F5F8] dark:bg-[#000] py-[51px]">
        <div className="container">
          <div className="wrapper-content flex flex-col  gap-[40px] lg:gap-[0px] lg:flex-row justify-center items-center  text-[#fff]">
            <aside className="left lg:w-[50%]">
              <div className="wrapper-text lg:w-[60%] flex flex-col items-start gap-[20px]">
                <h1 className="font-[700] text-[40px] leading-[56px] text-[#000] dark:text-[#fff]">
                  Лечение по ОМС
                </h1>
                <p className="font-[400] text-[16px] leading-[24px] text-[#686868] dark:text-[#fff]">
                  Лечение в частной клинике не всегда стоит больших денег. В
                  наших клиниках жители разных регионов России могут получить
                  услуги по полису обязательного медицинского страхования (ОМС).
                </p>
                <Button
                  variant="contained"
                  sx={{
                    width: "60%",
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
                  Как получить лечение
                </Button>
              </div>
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/diagnostics.svg" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="wrapper-get-help py-[60px] lg:py-[130px]">
        <div className="container">
          <h2 className="text-[40px] font-[700]">Как получить лечение?</h2>
          <div className="wrapper-post flex gap-[80px] flex-col lg:flex-row justify-between items-start lg:gap-[17px] flex-wrap mt-[80px]">
            <GetHelpPost
              number="1"
              desc="Узнайте, входит ли интересующее вас лечение в программу для вашего региона"
              icon={
                <SearchIcon className="text-[#fff]" sx={{ fontSize: "40px" }} />
              }
            />
            <GetHelpPost
              number="2"
              desc="Подготовьте необходимые документы и отправьте заявку на лечение"
              icon={
                <DescriptionIcon
                  className="text-[#fff]"
                  sx={{ fontSize: "40px" }}
                />
              }
            />
            <GetHelpPost
              number="3"
              desc="В течение 3-х рабочих дней специалист отдела ОМС свяжется с вами по указанному вами номеру телефона"
              icon={
                <PhoneIcon className="text-[#fff]" sx={{ fontSize: "40px" }} />
              }
            />
          </div>
        </div>
      </div>
      <div className="wrapper-direction-omc pb-[130px]">
        <div className="container">
          <h3 className="text-[40px] font-[700]">
            Все направления лечения по ОМС
          </h3>
          <div className="wrapper-post flex-col lg:flex-row mt-[40px] flex justify-start items-start flex-wrap gap-[20px]">
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Оториноларингология"
              desc="Порядок и условия предоставления медицинской помощи по полису ОМС"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Сурдология"
              desc="Более 600 схем лечения на оригинальных препаратах"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Педиатрия"
              desc="Удаление гемангиом и винных пятен"
            />
            <DirectionOmcPost
              bg="bg-[#F1F5F8]"
              title="Неврология"
              desc="Эндопротезирование тазобедренных и коленных суставов, реконструктивные операции на кисти и стопе."
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Терапия"
              desc="Петлевая пластика уретры с использованием петлевого, синтетического, сетчатого протеза при недержании мочи"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Ревматология"
              desc="Для взрослых и детей: удаление катаракты, лечение птоза и косоглазия"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Гастроэнтерология"
              desc="Реконструктивные операции на позвоночнике"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="УЗИ- диагностика"
              desc="Для жителей Санкт-Петербурга и регионов России"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Кардиология и функциональная диагностика"
              desc="Генно-инженерная терапия ревматических заболеваний по ОМС в «Скандинавии»"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Эндокринология"
              desc="Резекция печени или одного сегмента печени и эндоскопические операции на органах ЖКТ"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Общая хирургия"
              desc="Верификация образования кожи"
            />
            <DirectionOmcPost
              bg="bg-[#fff]"
              title="Урология"
              desc="МРТ и КТ для взрослых и детей"
            />
          </div>
        </div>
      </div>
      <div className="wrapper-diagnostics video">
        <div className="container">
          <div className="wrapper-image flex justify-center">
            <img src="src/assets/diagnost-video.svg" alt="" />
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="wrapper-appointment py-[60px] lg:py-[130px]">
        <div className="container">
          <div className="wrapper-text flex flex-col gap-[20px]">
            <h4 className="font-[700] text-[40px]">Заявка на лечение по ОМС</h4>
            <p className="text-[16px] text-[#686868] dark:text-[#fff]">
              Заполните поля ниже и прикрепите документ, чтобы отправить заявку
            </p>
          </div>
          <form className="wrapper-form flex flex-wrap justify-between items-end mt-[40px] gap-[40px] ">
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto ">
              <label
                for="name-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Ваше ФИО
              </label>
              <input
                className="min-h-[44px] px-[13px]  bg-[#F1F5F8] outline-none rounded-[30px] "
                type="text"
                id="name-input"
                placeholder="Иванов Иван Иванович"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Дата рождения
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="21.09.2000"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                E-mail
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="Poshta@gmail.com"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
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
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Профиль
              </label>
              <select
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px] dark:text-[#000]"
                type="text"
                id="number-input"
                placeholder=""
              >
                <option value="" label="Основной аккаунт"></option>
              </select>
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Медицинская услуга
              </label>
              <select
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px] dark:text-[#000]"
                type="text"
                id="number-input"
                placeholder="+7 (___) ___-__-__"
              >
                <option label="Эндокринология"></option>
                <option label="Ревматология"></option>
                <option label="Гастроэнтерология"></option>
              </select>
            </div>
            <div className="input-list flex flex-col gap-[10px]  w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Регион
              </label>
              <select
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px] dark:text-[#000]"
                type="text"
                id="number-input"
                placeholder="+7 (___) ___-__-__"
              >
                <option label="Москва"></option>
                <option label="Санкт-Петербург"></option>
                <option label="Воронеж"></option>
              </select>
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                ФИО и телефон вашего врача
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="Иванова Анна +7 (___) ___-__-__"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Причина обращения
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="Причина обращения"
              />
            </div>
            <div className="input-list flex flex-col gap-[10px] w-[100%] lg:w-auto">
              <label
                for="number-input"
                className="text-[18px] font-[600] text-center lg:text-left"
              >
                Откуда вы узнали о нас?
              </label>
              <input
                className="min-h-[44px] px-[13px] bg-[#F1F5F8] outline-none rounded-[30px]"
                type="text"
                id="number-input"
                placeholder="Интернет"
              />
            </div>
          </form>
          <div className="wrapper-submit mt-[40px] flex flex-col items-center lg:items-start gap-[20px] lg:w-[50%]">
            <p className="font-[400] text-[16px] text-[#686868] dark:text-[#fff]">
              Не забудьте прикрепить выписку из медицинской документации или
              результаты исследований в соответствии с перечнем выше
            </p>
            <Button
              variant="text"
              sx={{ display: "flex", gap: "10px", textTransform: "none" }}
            >
              <AttachFileIcon className="text-[#3BB96D]" />
              <p className="text-[#3BB96D] font-[600] text-[18px]">
                Прикрепить документы
              </p>
            </Button>
            <Button
              variant="contained"
              sx={{
                width: "70%",
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default Diagnostics;
