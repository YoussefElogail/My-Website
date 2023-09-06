import Header from '../../components/Header';
import   './not_fond.css';
import Footer from '../../components/Footer';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { i18n } = useTranslation();

  return (
    <>
      <Header />
        <main className='main_nf flex'>
          <section className='con_sec'>
            <h1>
            {i18n.language===("ar")&&"عذرا، لم يتم العثور على الصفحة"}
            {i18n.language===("en")&&"sorry page not found"}
            </h1>
          </section>
        </main>
      <Footer />
    </>
  );
}

export default NotFound;
