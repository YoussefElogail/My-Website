import "./skills.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "react-circular-progressbar/dist/styles.css";
// import {

//   CircularProgressbarWithChildren,
// } from "react-circular-progressbar";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
const skillsAndImg = [
  {
    name: "adobe xd",
    percent: 70,
    urlImg: "https://cdn-icons-png.flaticon.com/512/5611/5611129.png",
  },
  {
    name: "html5",
    percent: 80,
    urlImg: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
  },
  {
    name: "css3",
    percent: 80,
    urlImg: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
  },
  {
    name:"scss",
    percent:75,
    urlImg:"https://cdn-icons-png.flaticon.com/512/5968/5968358.png"
  },
  {
    name: "bootstrap 5",
    percent: 75,
    urlImg: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png",
  },
  {
    name : "Tailwind Css",
    percent: 75,
    urlImg: "https://res.cloudinary.com/dg17bwjup/image/upload/v1689759534/89711240-4172a200-d989-11ea-8d51-4aaf922fa407-removebg-preview_aodxfi.png",
  },
  {
    name: "javaScript",
    percent: 75,
    urlImg: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
  },
  {
    name: "react.js",
    percent: 80,
    urlImg: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
  },
  {
    name: "Material UI",
    percent: 70,
    urlImg:
      "https://seeklogo.com/images/M/mui-logo-56F171E991-seeklogo.com.png",
  },
  {
    name: "Git",
    percent: 75,
    urlImg:
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
  },
  {
    name: "GitHub",
    percent: 75,
    urlImg:
      "https://cdn-icons-png.flaticon.com/512/733/733553.png",
  },
  {
    name: "npm",
    percent: 80,
    urlImg: "https://seeklogo.com/images/N/npm-logo-F0E1FE956F-seeklogo.com.png",
  },
  {
    name: "Postman",
    percent: 70,
    urlImg:
      "https://seeklogo.com/images/P/postman-logo-0087CA0D15-seeklogo.com.png",
  },
  {
    name: "Firebase (web)",
    percent: 70,
    urlImg:
      "https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png",
  },
];


const Skills = () => {
  const { i18n ,t} = useTranslation();
  return (
    <>
      <Helmet>
        <title>
          {t("Skills")}
        </title>
        <meta
          name="description"
          content="In the field of front-end development, I have always strived to develop and improve my knowledge and skills by overcoming obstacles, and have always strived to reach the best throughput as soon as possible."
        />
      </Helmet>
      <Header />
      <main className="main_skills flex" dir="auto">
        <section className="flex con_sec">
          <h1>
            {i18n.language === "ar" && "مهاراتي"}
            {i18n.language === "en" && "my skills"}
          </h1>
          <div className="flex con_skills mtt">
            {skillsAndImg.map((item) => {
              return (
                <div
                  key={item.urlImg}
                  className="flex"
                  style={{
                    width: "100px",
                    height:"100px",
                    marginBottom: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {/* <CircularProgressbarWithChildren value={item.percent}>
          
                  </CircularProgressbarWithChildren> */}

                  <div
                      className="img_skills"
                      style={{ backgroundImage: `url(${item.urlImg}) ` ,marginBottom:"13px"}}
                    ></div>
                  <div>
                    {/* <div style={{ textAlign: "center" }}>{item.percent}%</div> */}
                    <p>{item.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Skills;
