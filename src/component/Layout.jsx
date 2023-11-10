import { NavLink, Link, Outlet } from "react-router-dom";
import Switcher from "./Switcher";
import { Button, IconButton } from "@mui/material/";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useTranslation } from "react-i18next";
import "../App.css";
import FooterList from "./FooterList";
import MenuIcon from "@mui/icons-material/Menu";

const Layout = () => {
  // useState for translator
  const [t, i18n] = useTranslation();
  // Функция для смены языка
  const changeLang = (language) => {
    i18n.changeLanguage(language);
  };
  // useState для select
  const [lang, setLang] = useState();
  return (
    <main className="dark:bg-[#000] dark:text-[#fff]">
      <header>
        <div className="container">
          <div className="header-top py-[27px] hidden lg:flex items-center justify-between w-full">
            <p className="text-[16px] font-[500] text-[#686868] dark:text-[#fff]">
              Сеть клиник Томской области
            </p>

            <Button className="flex gap-[12px]">
              <RemoveRedEyeIcon
                className="dark:text-[#fff]"
                sx={{ color: "#686868" }}
              />
              <p className="text-[#686868] dark:text-[#fff]">
                Версия для слабовидящих
              </p>
            </Button>

            <a href="tel:79780000000" className="text-[22px] font-[500]">
              + 7 (978) 00-00-000
            </a>
            <Button
              className="dark:bg-[#3bb96daf]"
              variant="contained"
              sx={{
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
            <select
              className="bg-[transparent] outline-none "
              name=""
              id=""
              value={lang}
              onChange={(event) => {
                changeLang(event.target.value);
                setLang(event.target.value);
              }}
            >
              <option value="ru" className="dark:text-[#000]">
                RU
              </option>
              <option value="en" className="dark:text-[#000]">
                EN
              </option>
            </select>
            <Switcher />
          </div>
          <div className="header-bottom flex items-center justify-between gap-[38px] py-[24px]">
            <div className="logo">
              <Link to="/">
                <img src="src/assets/logo.svg" alt="" />
              </Link>
            </div>
            <ul className="hidden lg:flex items-center justify-between w-full">
              <li>
                <NavLink to="/doctors">Врачи</NavLink>
              </li>
              <li>
                <NavLink to="/services">Услуги</NavLink>
              </li>
              <li>
                <NavLink to="/diagnostics">Диагностика</NavLink>
              </li>
              <li>
                <NavLink to="/analyzes">Анализы</NavLink>
              </li>
              <li>
                <NavLink to="/stock">Акции</NavLink>
              </li>
              <li>
                <NavLink to="/patients">Пациентам</NavLink>
              </li>
              <li>
                <NavLink to="/about">О клинике</NavLink>
              </li>
              <li>
                <NavLink to="/reviews">Отзывы</NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Контакты</NavLink>
              </li>
            </ul>
            <div className="burger-menu lg:hidden flex items-center gap-[15px]">
              <Switcher className="lg:hidden block" />
              <IconButton>
                <MenuIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
      <footer className="py-[50px] bg-[#279A59] dark:bg-[#000] dark:border-t-[1px]">
        <div className="container">
          <div className="wrapper-footer flex flex-wrap lg:justify-between lg:items-start gap-[30px] lg:gap-[0px] lg:flex-nowrap items-center  text-[#fff]">
            <ul className="flex flex-col gap-[12px]">
              <li className="logo">
                <Link to="/">
                  <img src="src/assets/logo.svg" alt="" />
                </Link>
              </li>
              <li className="flex flex-col gap-[8px]">
                <p>Адрес</p>
                <p>Москва, ул. Пушкина, д.43</p>
              </li>
              <li className="flex flex-col gap-[8px]">
                <p>Телефон</p>
                <p>+7 (9__) ___-__-__</p>
              </li>
              <li className="flex flex-col gap-[8px]">
                <p>Почта</p>
                <p>Poshta@gmail.com</p>
              </li>
            </ul>
            <FooterList
              title="О клинике"
              list1="Название пункта меню 1"
              list2="Название пункта меню 2"
              list3="Название пункта меню 3"
              list4="Название пункта меню 4"
              list5="Название пункта меню 5"
              list6="Название пункта меню 6"
            />
            <FooterList
              title="Врач"
              list1="Название пункта меню 1"
              list2="Название пункта меню 2"
              list3="Название пункта меню 3"
              list4="Название пункта меню 4"
              list5="Название пункта меню 5"
              list6="Название пункта меню 6"
            />
            <FooterList
              title="Пациентам"
              list1="Название пункта меню 1"
              list2="Название пункта меню 2"
              list3="Название пункта меню 3"
              list4="Название пункта меню 4"
              list5="Название пункта меню 5"
              list6="Название пункта меню 6"
            />
            <FooterList
              title="Услуги"
              list1="Название пункта меню 1"
              list2="Название пункта меню 2"
              list3="Название пункта меню 3"
              list4="Название пункта меню 4"
              list5="Название пункта меню 5"
              list6="Название пункта меню 6"
            />
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Layout;
