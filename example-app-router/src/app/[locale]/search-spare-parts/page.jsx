import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Navigation from '../components/navigation/Navigation';
import Footer from "../components/footer/Footer"
import { piece } from '../consts/variables';
import SearchPiece from "../components/search/piece/SearchPiece";

export default function page({params: {locale}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('search-piece');
  var texts = {
    "search-referece" : t("search-referece"),
    "search-immat" :  t("search-immat"),
    "search-vh-tab" : t("search-vh"),
    "search-ref-placeholder" : t('search-ref-placeholder'),
    "search-immat-placeholder" : t('search-immat-placeholder'),
    "search-vh" : {
      'brand' : t('brand'),
      'model' : t('model'),
      'type' : t('type'),
    }
  }
  return (
    <>
    <Navigation selected={piece} locale={locale} t={useTranslations('navigation')} ></Navigation>
    {/* <div className={piece} >{t('titel')}</div> */}
    <SearchPiece lables={texts}></SearchPiece>
    <Footer></Footer>
    </>
  );
}
