import Header from "../../components/Header";
import "./projects.css";
import Footer from "../../components/Footer";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
const siteData = [
  // {
  //   title_ar: "موقعي التعريفي الاول",
  //   title_en: "my first portfolio",
  //   urlSite: "https://zlllxjdbnrqiiibu3fowvw.on.drv.tw/youssef%20elogail%20portfolio/1-en.html",
  //   urlImg:"./imgs/img_site/1.png",
  //   lang: ["html5", "css3","javaScript"],
  //   discrimination_ar: "هذا هو موقعي التعريفي الاول",
  //   discrimination_en: "it is the first portfolio for me",
  // },
  {
    title_ar: "Qubly",
    title_en: "Qubly",
    urlSite: "https://rainbow-fudge-0bdf38.netlify.app/",
    urlImg:"./imgs/img_site/3.png",
    lang: ["html5", "css3","scss"],
    discrimination_ar: "موقع Qubly الفكره منه التطبيق علي ال scss و تحول التصميم الي موقع فعلي",
    discrimination_en: " The idea of ​​​​Qubly website is to apply it to the scss and turn the design into an actual website",
    gitHubLink:"https://github.com/YoussefElogail/Qubly/tree/main",
  },
  {
    title_ar: "Bondi",
    title_en: "Bondi",
    urlSite: "https://candid-kataifi-f96d6f.netlify.app/",
    urlImg:"./imgs/img_site/4.png",
    lang: ["html5", "css3","scss","bootstrap 5"],
    discrimination_ar: "الفكرة من موقع Bondi هو التطبيق علي ال bootstrap 5 ",
    discrimination_en: "The idea from Bondi is to apply it to bootstrap 5",
    gitHubLink:"https://github.com/YoussefElogail/Bondi_bootstrap-and-scss",
  },
  {
    title_ar: "معلومات العملاء",
    title_en: "Customers Information",
    urlSite: "https://bootstrap-product.web.app/",
    urlImg:"./imgs/img_site/5.png",
    lang: ["html5", "css3","scss","bootstrap 5","javascript"],
    discrimination_ar: "فكرة موقع معلومات العملاء هو التطبيق على bootstrap و scss و ال javascript",
    discrimination_en: "The idea of ​​a customer information website is an application based on bootstrap, scss and javascript",
    gitHubLink:"https://github.com/YoussefElogail/bootstrap-product",
  },
  {
    title_ar: "موقع قائمة المهام",
    title_en: "To do list website",
    urlSite: "https://to-do-list-132e3.firebaseapp.com/",
    urlImg:"./imgs/img_site/2.png",
    lang: ["html5", "css3","javaScript","React.js","Firebase"],
    discrimination_ar: "موقع قائمة المهام تم استخدام firebase (Authentication-Firestore Database)",
    discrimination_en: " To do list website used firebase  (Authentication-Firestore Database)",
    gitHubLink:"https://github.com/YoussefElogail/to-do-list_react.js_v2",
  },

];
const Projects = () => {
  const { i18n ,t} = useTranslation();

  return (
    <>
    <Helmet>
        <title>
    {t("Projects")}
        </title>
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
                    <li style={{fontSize:"14px"}} key={item}>{item}</li>
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
              <a className="gh-links" rel="noopener noreferrer" target="_blank" href={item.gitHubLink}>
                  {i18n.language===("ar")&&"عرض اكواد المشروع"}
                  {i18n.language===("en")&&"View project codes"}
                </a>
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
