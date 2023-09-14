import Header from "../../components/Header";
import "./contact.css";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
const contactImg = [
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
  {
    title: "Twitter",
    imgUrl: "https://cdn-icons-png.flaticon.com/512/5969/5969020.png?ga=GA1.1.2146089281.1689745396",
    urlSite: "https://twitter.com/JOEOGAIL"
  }
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
