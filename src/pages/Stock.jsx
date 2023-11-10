import React from "react";
import { Button } from "@mui/material/";
import FeedBackList from "../component/FeedBackList";
import GetHelpPost from "../component/GetHelpPost";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import PhoneIcon from "@mui/icons-material/Phone";

const Stock = () => {
  return (
    <main>
      {/* Section 1 */}
      <div className="fullscreen  bg-[#F1F5F8] dark:bg-[#000] py-[51px]">
        <div className="container">
          <div className="wrapper-content flex flex-col gap-[40px] lg:gap-[0px] lg:flex-row justify-center items-center  text-[#fff]">
            <aside className="left lg:w-[50%]">
              <div className="wrapper-text lg:w-[60%] flex flex-col items-center text-center lg:text-left lg:items-start gap-[20px]">
                <h1 className="font-[700] text-[30px] lg:text-[40px] leading-[56px] text-[#000] dark:text-[#fff]">
                  Отоларингология
                </h1>
                <p className="font-[400] text-[16px] leading-[24px] text-[#686868] dark:text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus
                  vitae aenean amet nibh lacus, habitasse fermentum, donec id.
                  Nisl, mollis dolor nec id volutpat quis.
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
                  Записаться
                </Button>
              </div>
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/stock-fullscreen.svg" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="wrapper-feedback  py-[60px] lg:py-[130px]">
        <div className="container">
          <div className="wrapper-text">
            <h2 className="font-[700] text-[40px] leading-[56px] text-[#000] dark:text-[#fff]">
              Когда нужно обратиться к отоларигологу?
            </h2>
          </div>
          <ul className="wrapper-list mt-[30px] flex flex-col items-start gap-[20px]">
            <FeedBackList
              title="Название заголовка"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus vitae
        aenean amet nibh lacus, habitasse fermentum, donec id. Nisl, mollis
        dolor nec id volutpat quis. Tempus suspendisse ipsum vitae rhoncus
        scelerisque sed. Et lacinia eget eros duis purus, tortor id senectus
        tristique."
            />
            <FeedBackList
              title="Название заголовка"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus vitae
        aenean amet nibh lacus, habitasse fermentum, donec id. Nisl, mollis
        dolor nec id volutpat quis. Tempus suspendisse ipsum vitae rhoncus
        scelerisque sed. Et lacinia eget eros duis purus, tortor id senectus
        tristique."
            />
            <FeedBackList
              title="Название заголовка"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus vitae
        aenean amet nibh lacus, habitasse fermentum, donec id. Nisl, mollis
        dolor nec id volutpat quis. Tempus suspendisse ipsum vitae rhoncus
        scelerisque sed. Et lacinia eget eros duis purus, tortor id senectus
        tristique."
            />
            <FeedBackList
              title="Название заголовка"
              desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus vitae
        aenean amet nibh lacus, habitasse fermentum, donec id. Nisl, mollis
        dolor nec id volutpat quis. Tempus suspendisse ipsum vitae rhoncus
        scelerisque sed. Et lacinia eget eros duis purus, tortor id senectus
        tristique."
            />
            <Button
              variant="contained"
              sx={{
                px: "28px",
                py: "8px",
                borderRadius: "30px",
                bgcolor: "#3BB96D",
                fontSize: "14px",
                textTransform: "none",
                fontWeight: "400",
                marginTop: "20px",
                ":hover": {
                  bgcolor: "#3BB96D",
                },
              }}
            >
              Записаться на прием
            </Button>
          </ul>
        </div>
      </div>
      {/* Section 3 */}
      <div className="wrapper-our-spec">
        <div className="container">
          <div className="wrapper-text">
            <h3 className="font-[700] text-[40px]  lg:text-left text-center leading-[56px] text-[#000] dark:text-[#fff]">
              Наши специалисты
            </h3>
          </div>
          <div className="wrapper-content flex gap-[30px] lg:gap-[0px] flex-col lg:flex-row justify-between items-center mt-[40px]">
            <aside className="left lg:w-[50%]">
              <div className="wrapper-image">
                <img src="src/assets/our-spec-stock.svg" alt="" />
              </div>
            </aside>
            <aside className="right lg:w-[50%]">
              <div className="wrapper-text  lg:text-left text-center items-center flex flex-col gap-[10px] lg:items-start">
                <p className="text-[30px] font-[700]">Иванов Иван Иванович</p>
                <p>Врач-отолариголог</p>
                <p className="text-[26px] font-[700]">О докторе</p>

                <p className="text-[16px] font-[400] leading-[24px] text-[#686868]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  tortor phasellus feugiat rhoncus id. Feugiat a, est urna
                  laoreet aenean arcu tellus mauris sagittis. Morbi praesent
                  nunc tortor risus aliquam lorem quam mauris. Enim, vitae, mi a
                  sapien lectus dictum posuere. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <p className="text-[16px] font-[400] leading-[24px] text-[#686868]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  tortor phasellus feugiat rhoncus id. Feugiat a, est urna
                  laoreet aenean arcu tellus mauris sagittis. Morbi praesent
                  nunc tortor risus aliquam lorem quam mauris. Enim, vitae, mi a
                  sapien lectus dictum posuere. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit.
                </p>
                <Button
                  variant="contained"
                  sx={{
                    px: "28px",
                    py: "8px",
                    borderRadius: "30px",
                    bgcolor: "#3BB96D",
                    fontSize: "14px",
                    textTransform: "none",
                    fontWeight: "400",
                    marginTop: "20px",
                    ":hover": {
                      bgcolor: "#3BB96D",
                    },
                  }}
                >
                  Запись на прием
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="wrapper-get-help py-[60px] lg:py-[130px]">
        <div className="container">
          <h2 className="text-[40px] font-[700]">Как записаться на прием?</h2>
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
    </main>
  );
};

export default Stock;
