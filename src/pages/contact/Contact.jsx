import Header from "../../components/Header";
import "./contact.css";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
const contactImg = [
  {
    title: "Facebook",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968764.png",
    urlSite: "https://www.facebook.com/youssefelgail/",
  },
  {
    title: "Instagram",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3955/3955024.png",
    urlSite: "https://www.instagram.com/youssefmohamedd790/",
  },

  {
    title: "WhatsApp",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/3670/3670051.png",
    urlSite: "https://wa.me/qr/CH7HTKIL67ABF1",
  },
  {
    title: "Telegram",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png",
    urlSite: "https://t.me/Joe3o",
  },
  {
    title: "LinkedIn",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
    urlSite: "https://www.linkedin.com/in/youssef-el-ogail-57404a262",
  },
  {
    title: "GitHub",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    urlSite: "https://github.com/YoussefElogail",
  },
];
const Contact = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Header />
      <main className="main_contact flex">
        <section className="con_sec flex">
          <h1>
            {i18n.language === "ar" && "تواصل معي عبر"}
            {i18n.language === "en" && "Contact Me Via"}
          </h1>
          <div className="flex mtt">
            {contactImg.map((item) => {
              return (
                <a
                  title={item.title}
                  key={item.imgUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  href={item.urlSite}
                >
                  <img className="img" alt={item.title}  src={item.imgUrl}  />
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
