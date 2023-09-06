import Header from "../../components/Header";
import "./projects.css";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
const siteData = [
  {
    title_ar: "موقعي التعريفي الاول",
    title_en: "my first portfolio",
    urlSite: "https://zlllxjdbnrqiiibu3fowvw.on.drv.tw/youssef%20elogail%20portfolio/1-en.html",
    urlImg:"./imgs/img_site/1.png",
    lang: ["html5", "css3","javaScript"],
    discrimination_ar: "هذا هو موقعي التعريفي الاول",
    discrimination_en: "it is the first portfolio for me",
  },
  {
    title_ar: "موقع قائمة المهام",
    title_en: "To do list website",
    urlSite: "https://to-do-list-132e3.firebaseapp.com/",
    urlImg:"./imgs/img_site/2.png",
    lang: ["html5", "css3","javaScript","React.js","Firebase"],
    discrimination_ar: "موقع قائمة المهام تم استخدام firebase (Authentication-Firestore Database)",
    discrimination_en: " To do list website used firebase  (Authentication-Firestore Database)",
  },

];
const Projects = () => {
  const { i18n } = useTranslation();

  return (
    <>
    <Helmet>
        <title>Projects</title>
        <meta
          name="description"
          content="In the field of front-end development, I have always strived to develop and improve my knowledge and skills by overcoming obstacles, and have always strived to reach the best throughput as soon as possible."
        />
      </Helmet>
      <Header />
      <main className="main_projects flex con">
        <section className="con_sec">
          <h1>
            {i18n.language === "ar" && "مشاريعي"}
            {i18n.language === "en" && "my projects"}
          </h1>
          <div className="flex con_card mtt">
            {siteData.map((item) => {
              return(
                <div key={item.urlSite} className='card flex'>
              <h2>
                {i18n.language===("ar")&&item.title_ar}
                {i18n.language===("en")&&item.title_en}
              </h2>
              <a rel="noopener noreferrer" target="_blank" href={item.urlSite}>
                <div className='my_pro_pic' style={{backgroundImage:`url(${item.urlImg})`}}>

                </div>
              </a>
              <ul className='flex con_ul'>
                {item.lang.map((item) => {
                  return(
                    <li key={item}>{item}</li>
                  )
                })}
                <div className='when_hover'>
                  <p dir="auto">
                    {i18n.language===("ar")&&item.discrimination_ar}
                    {i18n.language===("en")&&item.discrimination_en}
                  </p>
                  <ul>
                    <div >
                      {i18n.language===("ar")&&"اللغات"}
                      {i18n.language===("en")&&"language"}
                    </div>
                  {item.lang.map((item) => {
                    return(
                      <li key={item}>
                        {item}
                      </li>
                    )
                  })}

                  </ul>
                </div>
              </ul>
            </div>
              )
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
