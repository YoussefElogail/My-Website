import "./footer.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer dir="auto">
      <div className="con">
        <div>
          <NavLink to="/contact_me">{t("Contact")}</NavLink>
        </div>
        <p className="mt">{t("Designed And Developed")}</p>

      </div>
    </footer>
  );
};

export default Footer;
