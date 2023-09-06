import Footer from '../../components/Footer';
import Header from '../../components/Header';
import  './home.css';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
const Home = () => {
  const {  i18n } = useTranslation();
  return (
    <>
       <Helmet>
        <title>Home Page</title>
        <meta name="description" content="In the field of front-end development, I have always strived to develop and improve my knowledge and skills by overcoming obstacles, and have always strived to reach the best throughput as soon as possible." />
      </Helmet>
      <Header />
      <main className='main_home flex' dir='auto'>
        <div className='con_sec con'>
          <section className='sec_1'>
            <div className='me flex'>
              <div className='my_pic mt'></div>
              <div className='name_job mt'>
                <h1>
                  {i18n.language===("ar")&&"يوسف العجيل"}
                  {i18n.language===("en")&&"youssef el ogail"}
                </h1>
                <h2>
                  
                  {i18n.language===("ar")&&"مطور الواجهة الأمامية"}
                  {i18n.language===("en")&&"front-end developer"}
                </h2>
              </div>
            </div>
          </section>
          <section className='sec_2'>
            <h3 className='mt'>
              
              {i18n.language===("ar")&&"عني"}
                  {i18n.language===("en")&&"about me"}
            </h3>
            <p className='mt'> 
            {i18n.language===("ar")&&"في مجال تطوير الواجهة الأمامية ، سعيت دائمًا لتطوير وتحسين معرفتي ومهاراتي من خلال التغلب على العقبات ، وسعيت دائمًا للوصول إلى أفضل انتاجية في أسرع وقت ممكن."}
            {i18n.language===("en")&&"In the field of front-end development, I have always strived to develop and improve my knowledge and skills by overcoming obstacles, and have always strived to reach the best throughput as soon as possible."}
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
