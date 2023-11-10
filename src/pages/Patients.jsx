import React from "react";
import { Button } from "@mui/material/";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GetHelpPost from "../component/GetHelpPost";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";

const Patients = () => {
  return (
    <main>
      <div className="fullscreen pt-[60px] pb-[130px]">
        <div className="container">
          <h1 className="font-[700] text-[40px] leading-[66px]">Анализы</h1>
          <div className="wrapper-content flex flex-col lg:flex-row justify-between gap-[20px] items-center mt-[20px]">
            <aside className="left lg:w-[50%]">
              <div className="post flex flex-col-reverse pt-[20px] lg:pt-[0px] lg:flex-row items-center lg:items-end bg-[#3BB96D] rounded-[5px] dark:bg-transparent dark:border-[1px] dark:border-[#3BB96D] ">
                <div className="wrapper-text lg:w-[60%] p-[20px] text-[#fff] flex flex-col gap-[20px]">
                  <p className="font-[700] text-[30px]">Скидка -20% на МРТ</p>
                  <p className="text-[16px] font-[400] leading-[22.4px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra amet dolor sed mi tincidunt pharetra montes. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                    amet dolor sed mi tincidunt pharetra montes.
                  </p>
                  <div className="stock">
                    <p className="text-[16px] font-[400]">
                      Акция действует до{" "}
                    </p>
                    <p className="text-[18px] font-[700]">22.03.2023</p>
                  </div>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFFFFF",
                      textTransform: "none",
                      px: "53px",
                      py: "13px",
                      display: "flex",
                      gap: "5px",
                      ":hover": {
                        bgcolor: "#fff",
                      },
                    }}
                  >
                    <p className="text-[#3BB96D] font-[700] text-[16px]">
                      Подробнее
                    </p>
                    <ArrowForwardIosIcon
                      className="text-[#3BB96D]"
                      fontSize="15px"
                    />
                  </Button>
                </div>
                <div className="wrapper-image">
                  <img src="src/assets/stock.svg" alt="" />
                </div>
              </div>
            </aside>
            <aside className="right lg:w-[50%] flex flex-col lg:flex-row flex-wrap justify-between items-start gap-[20px]">
              <div className="post flex flex-col-reverse pt-[20px] lg:pt-[0px] lg:flex-row items-center lg:items-end bg-[#27C8DA] rounded-[5px] dark:bg-transparent dark:border-[1px] dark:border-[#3BB96D] ">
                <div className="wrapper-text lg:w-[60%] p-[20px] text-[#fff] flex flex-col gap-[20px]">
                  <p className="font-[700] text-[30px]">Скидка -20% на МРТ</p>
                  <p className="text-[16px] font-[400] leading-[22.4px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra amet dolor sed mi tincidunt pharetra montes. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                    amet dolor sed mi tincidunt pharetra montes.
                  </p>
                  <div className="stock">
                    <p className="text-[16px] font-[400]">
                      Акция действует до{" "}
                    </p>
                    <p className="text-[18px] font-[700]">22.03.2023</p>
                  </div>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFFFFF",
                      textTransform: "none",
                      px: "53px",
                      py: "13px",
                      display: "flex",
                      gap: "5px",
                      ":hover": {
                        bgcolor: "#fff",
                      },
                    }}
                  >
                    <p className="text-[#3BB96D] font-[700] text-[16px]">
                      Подробнее
                    </p>
                    <ArrowForwardIosIcon
                      className="text-[#3BB96D]"
                      fontSize="15px"
                    />
                  </Button>
                </div>
                <div className="wrapper-image">
                  <img src="src/assets/stock.svg" alt="" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="wrapper-get-help">
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
      {/* Section 4 */}
      <div className="wrapper-dmc mt-[60px] pb-[130px]">
        <div className="container">
          <div className="wrapper-text">
            <h4 className="text-[30px] font-[700]">
              Мы оказываем услуги ДМС по следующим направлениям:
            </h4>
          </div>
          <div className="wrapper-post flex flex-col  gap-[30px] lg:gap-[0px] lg:flex-row justify-between items-start  mt-[40px]">
            <div className="post border-[1px] lg:w-[24%] w-[100%] border-[#C4CDD4] rounded-[5px] h-[300px]">
              <div className="wrapper-content p-[20px] flex flex-col gap-[13px]">
                <div className="wrapper-image h-[50px] w-[50px] rounded-[25px] bg-[#3BB96D] flex justify-center items-center">
                  <img src="src/assets/analyz-1.svg" alt="" />
                </div>
                <p className="text-[20px] font-[700] border-b-[2px] border-[#3BB96D] text-[#3BB96D] w-[20%]">
                  Онкология
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Гистология
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Онкомаркёры
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Цитология
                </p>
              </div>
            </div>
            <div className="post border-[1px] lg:w-[24%] w-[100%] border-[#C4CDD4] rounded-[5px] h-[300px]">
              <div className="wrapper-content p-[20px] flex flex-col gap-[15px]">
                <div className="wrapper-image h-[50px] w-[50px] rounded-[25px] bg-[#3BB96D] flex justify-center items-center">
                  <img src="src/assets/analyz-2.svg" alt="" />
                </div>
                <p className="text-[20px] font-[700] border-b-[2px] border-[#3BB96D] text-[#3BB96D] w-[90%]">
                  Исследования крови
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Клинические исследования
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Биохимия
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Иммунология
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">Гормоны</p>
              </div>
            </div>
            <div className="post border-[1px] lg:w-[24%] w-[100%] border-[#C4CDD4] rounded-[5px] h-[300px]">
              <div className="wrapper-content p-[20px] flex flex-col gap-[15px]">
                <div className="wrapper-image h-[50px] w-[50px] rounded-[25px] bg-[#3BB96D] flex justify-center items-center">
                  <img src="src/assets/analyz-3.svg" alt="" />
                </div>
                <p className="text-[20px] font-[700] border-b-[2px] border-[#3BB96D] text-[#3BB96D] w-[90%]">
                  Исследования мочи
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Биохимический анализ мочи
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Общий анализ мочи
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">Гормоны</p>
              </div>
            </div>
            <div className="post border-[1px] lg:w-[24%] w-[100%] border-[#C4CDD4] rounded-[5px] h-[300px]">
              <div className="wrapper-content p-[20px] flex flex-col gap-[15px]">
                <div className="wrapper-image h-[50px] w-[50px] rounded-[25px] bg-[#3BB96D] flex justify-center items-center">
                  <img src="src/assets/analyz-4.svg" alt="" />
                </div>
                <p className="text-[20px] font-[700] border-b-[2px] border-[#3BB96D] text-[#3BB96D] w-[20%]">
                  Аллергии
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Аллергокомпоненты
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Индивидуальные аллергены
                </p>
                <p className="font-[500] text-[16px] leading-[24px]">
                  Аллергия на лекарства
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="wrapper-science bg-[#272727] dark:bg-[#000]">
        <div className="container">
          <div className="wrapper-content flex flex-col-reverse pt-[50px] lg:pt-[0px] lg:flex-row justify-between items-end">
            <aside className="left flex flex-col gap-[30px] py-[80px]">
              <div className="wrapper-text ">
                <p className="text-[#fff] text-[30px] font-[700]">
                  Виды лабораторных анализов и исследований
                </p>
              </div>
              <div className="wrapper-list flex flex-col lg:gap-[30px] lg:flex-row justify-between gap-[20px] text-[#fff]">
                <ul className="flex flex-col gap-[17px]">
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Общие исследования крови
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Биохимические исследования крови
                    </p>
                  </li>
                  <li className="flex items-center gap-[3px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">Онкомаркёры</p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Общеклинические исследования кала
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>

                    <p className="text-[16px] font-[400]">Панели аллергенов</p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Гистологические исследования
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Гормональные исследования крови
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>

                    <p className="text-[16px] font-[400]">Исследования мочи</p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Иммунологические исследования крови
                    </p>
                  </li>
                </ul>
                <ul className="flex flex-col gap-[17px]">
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Гематологические исследования
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Аллергологические исследования
                    </p>
                  </li>
                  <li className="flex items-center gap-[3px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">Исследования кала</p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Аутоиммунные заболевания
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>

                    <p className="text-[16px] font-[400]">
                      Исследование спермы
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Генетический анализ
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Исследования крови на инфекции
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>

                    <p className="text-[16px] font-[400]">
                      Цитологические исследования
                    </p>
                  </li>
                  <li className="flex items-center gap-[5px]">
                    <div className="circle h-[10px] w-[10px] rounded-[5px] bg-[#3BB96D]"></div>
                    <p className="text-[16px] font-[400]">
                      Исследования инфекционных заболеваний
                    </p>
                  </li>
                </ul>
              </div>
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/sciens-girl.svg" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="wrapper-license py-[130px]">
        <div className="wrapper-text">
          <div className="container">
            <h3 className="font-[700] text-[40px] leading-[66px]">
              Наши лицензии
            </h3>

            <div className="wrapper-post flex justify-center gap-[50px] lg:gap-[0px] lg:justify-between items-start flex-wrap mt-[53px]">
              <div className="post">
                <img src="src/assets/licence.svg" alt="" />
              </div>
              <div className="post">
                <img src="src/assets/licence.svg" alt="" />
              </div>
              <div className="post">
                <img src="src/assets/licence.svg" alt="" />
              </div>
              <div className="post">
                <img src="src/assets/licence.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Patients;
