import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Navigation from '../components/navigation/Navigation';
import Footer from '../components/footer/Footer';
import { tyres } from '../consts/variables';

export default function page({params: {locale}}) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations('search-pneux');

  return (
    <>
    <Navigation selected={tyres} locale={locale} t={useTranslations('navigation')} ></Navigation>
    <div className={tyres} >{t('titel')}</div>
    <Footer></Footer>
    </>
  );
}
