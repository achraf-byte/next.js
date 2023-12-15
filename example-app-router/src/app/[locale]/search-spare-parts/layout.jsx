import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Navigation from '../components/navigation/Navigation';
import Footer from "../components/footer/Footer"
import { piece } from '../consts/variables';
import "./style.css"
import {getSeachVhData} from "../../../api/fectchFuntions/index"
import SearchPiece from "../components/search/piece/SearchPiece";

export default function RootLayout({children , params}) {
  // Enable static rendering
  unstable_setRequestLocale(params.locale);
   // Use the useRouter hook to get access to the router object
  const t = useTranslations('search-piece');
  const t_link_base = useTranslations('navigation');
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
    },
    "ref" : t('ref'),
    "immat" : t('immate'),
    "vh" : t('vh'),
    "link_base" : t_link_base('piece-search-url')
  }
  return (
    <>
    <Navigation selected={piece} locale={params.locale} t={useTranslations('navigation')} ></Navigation>
    <SearchPiece locale={params.locale} lables={texts}></SearchPiece>
    <div className='content'>{children}</div>
    
    <Footer></Footer>
    </>
  );
}