import React from "react";
import { Button } from "@mui/material/";
import PostDirection from "../component/PostDirection";
import StacionerPost from "../component/StacionerPost";
import StockPost from "../component/StockPost";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const Home = () => {
  return (
    <main className="dark:bg-[#000] dark:text-[#fff]">
      {/* Section 1 */}
      <div className="fullscreen  bg-[#38B469] dark:bg-[#000] py-[30px] lg:py-[0px]">
        <div className="container">
          <div className="wrapper-content flex justify-center items-center flex-col lg:flex-row  text-[#fff]">
            <aside className="left lg:w-[50%]">
              <div className="wrapper-text lg:w-[60%] flex flex-col items-start gap-[20px]">
                <h1 className="font-[600] text-[40px] lg:text-[60px] lg:leading-[66px]">
                  Lorem ipsum dolor sit amet, consectetur
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra amet dolor sed mi tincidunt pharetra montes. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                  amet dolor sed mi tincidunt pharetra montes.
                </p>
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
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/fullscreen.svg" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="wrapper-little-more py-[60px] lg:py-[130px]">
        <div className="container">
          <div className="wrapper-content flex flex-col lg:flex-row justify-between items-center gap-[20px]">
            <aside className="left lg:w-[50%]">
              <div className="wrapper-text flex flex-col gap-[20px]">
                <h2 className="text-[40px] font-[700] leading-[56px]">
                  Немного о нас
                </h2>
                <p className="text-[16px] font-[400] leading-[22.4px] text-[#686868] dark:text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                  diam pretium risus, ultrices felis a. Adipiscing maecenas
                  mattis ullamcorper magnis eget varius. At lobortis tristique
                  mattis orci aenean. Pretium, posuere tristique id potenti ac.
                  Ac praesent arcu vitae arcu. Velit ut et, leo, augue bibendum
                  euismod in. Turpis massa, commodo vestibulum bibendum amet
                  orci velit, risus. Semper mauris curabitur auctor id amet
                  mauris lacus. Ut quis nisi, ac consequat sed massa egestas.
                  Sed adipiscing scelerisque enim, id amet eget. Ipsum dui a
                  bibendum quisque in.
                </p>
                <p className="text-[16px] font-[400] leading-[22.4px] text-[#686868] dark:text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                  diam pretium risus, ultrices felis a. Adipiscing maecenas
                  mattis ullamcorper magnis eget varius. At lobortis tristique
                  mattis orci aenean. Pretium, posuere tristique id potenti ac.
                </p>
              </div>
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/little-more.svg" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 3 */}
      <div className="wrapper-direction-work pb-[130px]">
        <div className="container">
          <div className="wrapper-button flex flex-col justify-center lg:flex-row items-center lg:justify-between">
            <h3 className="text-[40px] font-[700] text-center lg:text-left mb-[20px] lg:mb-[0px]">
              Направления нашей работы
            </h3>
            <Button
              className="dark:bg-[#3bb96daf]"
              variant="contained"
              sx={{
                backgroundColor: "#3BB96D",
                textTransform: "none",
                px: "53px",
                py: "13px",
                display: "flex",
                borderRadius: "30px",
                gap: "5px",
                ":hover": {
                  bgcolor: "#3BB96D",
                },
              }}
            >
              <p className="text-[#fff] font-[700] text-[16px]">
                Все направления
              </p>
              <ArrowForwardIosIcon className="text-[#fff]" fontSize="15px" />
            </Button>
          </div>
          <div className="wrapper-post gap-y-[40px] lg:flex-wrap flex-col lg:flex-row justify-center flex lg:justify-between items-start mt-[42px]">
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
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="our-spec bg-[#F1F5F8] py-[130px] dark:bg-[#000]">
        <div className="container">
          <div className="wrapper-button flex items-center justify-between">
            <h4 className="lg:text-[40px] text-[20px] font-[700]">
              Наши специалисты
            </h4>
            <div className="button flex gap-[10px]">
              <Button
                variant="outline"
                sx={{
                  borderRadius: "50px",
                  minHeight: "25px",
                  minWidth: "25px",
                  padding: "0px",
                  color: "#3BB96D",
                  border: "1px solid #3BB96D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ChevronLeftIcon />
              </Button>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "50px",
                  minHeight: "25px",
                  minWidth: "25px",
                  padding: "0px",
                  bgcolor: "#3BB96D",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  ":hover": {
                    bgcolor: "#3BB96D",
                  },
                }}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>
          <div className="wrapper-post flex flex-wrap lg:gap-[0px] gap-[40px] justify-between items-start mt-[40px]">
            <PostDirection
              image="src/assets/our-spec.svg"
              title="Иванов Иван Иванович"
              more="Врач-уролог"
              brd="border-none"
              colorText="#000"
              btn={
                <Button
                  className="dark:bg-[#3bb96daf]"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3BB96D",
                    textTransform: "none",
                    px: "53px",
                    py: "13px",
                    display: "flex",
                    borderRadius: "30px",

                    gap: "5px",
                    ":hover": {
                      bgcolor: "#3BB96D",
                    },
                  }}
                >
                  <p className="text-[#fff] font-[700] text-[16px]">
                    Запись на приём
                  </p>
                </Button>
              }
            />
            <PostDirection
              image="src/assets/our-spec.svg"
              title="Иванов Иван Иванович"
              more="Врач-уролог"
              brd="border-none"
              colorText="#000"
              btn={
                <Button
                  className="dark:bg-[#3bb96daf]"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3BB96D",
                    textTransform: "none",
                    px: "53px",
                    py: "13px",
                    display: "flex",
                    borderRadius: "30px",

                    gap: "5px",
                    ":hover": {
                      bgcolor: "#3BB96D",
                    },
                  }}
                >
                  <p className="text-[#fff] font-[700] text-[16px]">
                    Запись на приём
                  </p>
                </Button>
              }
            />
            <PostDirection
              image="src/assets/our-spec.svg"
              title="Иванов Иван Иванович"
              more="Врач-уролог"
              brd="border-none"
              colorText="#000"
              btn={
                <Button
                  className="dark:bg-[#3bb96daf]"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3BB96D",
                    textTransform: "none",
                    px: "53px",
                    py: "13px",
                    display: "flex",
                    borderRadius: "30px",

                    gap: "5px",
                    ":hover": {
                      bgcolor: "#3BB96D",
                    },
                  }}
                >
                  <p className="text-[#fff] font-[700] text-[16px]">
                    Запись на приём
                  </p>
                </Button>
              }
            />
            <PostDirection
              image="src/assets/our-spec.svg"
              title="Иванов Иван Иванович"
              more="Врач-уролог"
              brd="border-none"
              colorText="#000"
              btn={
                <Button
                  className="dark:bg-[#3bb96daf]"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3BB96D",
                    textTransform: "none",
                    px: "53px",
                    py: "13px",
                    display: "flex",
                    borderRadius: "30px",

                    gap: "5px",
                    ":hover": {
                      bgcolor: "#3BB96D",
                    },
                  }}
                >
                  <p className="text-[#fff] font-[700] text-[16px]">
                    Запись на приём
                  </p>
                </Button>
              }
            />
          </div>
          <Button
            variant="contained"
            sx={{
              justifyContent: "center",
              mx: "auto",
              mt: "50px",
              backgroundColor: "transparent",
              textTransform: "none",
              px: "53px",
              py: "13px",
              display: "flex",
              borderRadius: "30px",
              border: "1px solid #3BB96D",
              gap: "5px",
              ":hover": {
                bgcolor: "transparent",
              },
            }}
          >
            <p className="text-[#3BB96D] font-[700] text-[16px]">
              Все специалисты
            </p>
          </Button>
        </div>
      </div>
      {/* Section 5 */}
      <div className="wrapper-our-stock py-[60px] lg:py-[130px]">
        <div className="container">
          <h5 className="font-[700] text-[40px] text-center lg:text-left">
            Наши акции
          </h5>
          <div className="wrapper-content flex flex-col lg:flex-row justify-between gap-[20px] items-center mt-[40px]">
            <aside className="left lg:w-[50%]">
              <div className="post flex flex-col lg:flex-row justify-between items-end lg:h-[470px] bg-[#3BB96D] dark:bg-transparent dark:border-[1px] dark:border-[#3BB96D] rounded-[10px]">
                <div className="wrapper-text flex flex-col gap-[20px] items-start p-[30px] lg:w-[50%] text-[#fff]">
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
              <StockPost
                title="Скидка -20% на МРТ"
                desc="Акция действует до "
                date="22.03.2023"
                image="src/assets/stock.svg"
                bg="bg-[#6567F2]"
                text="text-[#fff]"
                borderColor="border-[#6567F2]"
              />
              <StockPost
                title="Скидка -20% на МРТ"
                desc="Акция действует до "
                date="22.03.2023"
                image="src/assets/stock.svg"
                bg="bg-[#F57676]"
                text="text-[#fff]"
                borderColor="border-[#F57676]"
              />
              <StockPost
                title="Скидка -20% на МРТ"
                desc="Акция действует до "
                date="22.03.2023"
                image="src/assets/stock.svg"
                bg="bg-[#FFDB5C]"
                text="text-[#000]"
                borderColor="border-[#FFDB5C]"
              />
              <StockPost
                title="Скидка -20% на МРТ"
                desc="Акция действует до "
                date="22.03.2023"
                image="src/assets/stock.svg"
                bg="bg-[#27C8DA]"
                text="text-[#fff]"
                borderColor="border-[#27C8DA]"
              />
            </aside>
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="wrapper-statcioner bg-[#F1F5F8] dark:bg-[#000] py-[130px] ">
        <div className="container">
          <h6 className="font-[700] text-[40px]">Стационар</h6>
          <div className="wrapper-post flex flex-col lg:flex-row justify-between items-start flex-wrap mt-[40px] gap-x-[10px] gap-[30px]">
            <StacionerPost
              image="src/assets/stacioner-1.svg"
              title="Отлично оборудованные операционные"
            />
            <StacionerPost
              image="src/assets/stacioner-2.svg"
              title="Полный контроль за состоянием пациентов"
            />
            <StacionerPost
              image="src/assets/stacioner-3.svg"
              title="Комфорт и забота после операции"
            />
          </div>
          <div className="wrapper-content flex flex-col gap-[40px] lg:gap-[0px] lg:flex-row justify-between items-start mt-[30px]">
            <aside className="left lg:w-[50%]">
              <div className="wrapper-text flex flex-col items-start gap-[28px] ">
                <p className="text-[16px] font-[400] leading-[22.4px] text-[#686868] dark:text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                  diam pretium risus, ultrices felis a. Adipiscing maecenas
                  mattis ullamcorper magnis eget varius. At lobortis tristique
                  mattis orci aenean. Pretium, posuere tristique id potenti ac.
                  Ac praesent arcu vitae arcu. Velit ut et, leo, augue bibendum
                  euismod in. Turpis massa, commodo vestibulum bibendum amet
                  orci velit, risus. Semper mauris curabitur auctor id amet
                  mauris lacus. Ut quis nisi, ac consequat sed massa egestas.
                  Sed adipiscing scelerisque enim, id amet eget. Ipsum dui a
                  bibendum quisque in.
                </p>
                <p className="text-[16px] font-[400] leading-[22.4px] text-[#686868] dark:text-[#fff]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
                  diam pretium risus, ultrices felis a. Adipiscing maecenas
                  mattis ullamcorper magnis eget varius. At lobortis tristique
                  mattis orci aenean. Pretium, posuere tristique id potenti ac.
                </p>
                <Button
                  className="dark:bg-[#3bb96daf]"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3BB96D",
                    textTransform: "none",
                    px: "53px",
                    py: "13px",
                    display: "flex",
                    borderRadius: "30px",

                    gap: "5px",
                    ":hover": {
                      bgcolor: "#3BB96D",
                    },
                  }}
                >
                  <p className="text-[#fff] font-[700] text-[16px]">
                    Подробнее
                  </p>
                </Button>
              </div>
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/little-more.svg" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
