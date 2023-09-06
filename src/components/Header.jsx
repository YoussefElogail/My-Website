import { useContext, useState } from "react";
import "./header.css";
import { NavLink } from "react-router-dom";
import ThemeContext from "../ThemeContext";
import { useTranslation } from 'react-i18next';
const Header = () => {
  const [menu, setMenu] = useState("none");
  const {  theme,chanegTheme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  return (
    <header dir="auto">
      <div className="con flex">
        <div className="flex">
          <ul>
            {t("Language")}
            {i18n.language===("en")&&<div  className="icon-caret-down en"></div>}
            {i18n.language===("ar")&&<div  className="icon-caret-down ar"></div>}
            <div className="con_li">
              <li onClick={() => {
                i18n.changeLanguage("ar")
              }}>
                {t("Arabic")}
                {i18n.language==="ar"&&<div></div>}
              </li>
              <li onClick={() => {
                i18n.changeLanguage("en")
              }}>
                {t("English")}
                {i18n.language===("en")&&<div></div>}
              </li>
            </div>
          </ul>
          <button
            onClick={() => {
              chanegTheme(
                theme === "light" ? "dark" : "light"
              );
            }}
          >
            {theme==="light"?t("Light"):t("Dark")}
            
          </button>
        </div>
        <nav className="flex">
          <span
            onClick={() => {
              setMenu("flex");
            }}
            className="icon-menu"
          ></span>
          <div style={{ display: menu }} className="con_links flex">
            <span
              onClick={() => {
                setMenu("none");
              }}
              className="icon-close"
            ></span>
            <NavLink to="/">{t("Home")}</NavLink>
            <NavLink to="/skills">{t("Skills")}</NavLink>
            <NavLink to="/projects">{t("Projects")}</NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
