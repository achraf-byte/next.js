import {useTranslations} from 'next-intl';
import {locales} from '../../../config';
import Navigation from "../components/Navigation"

export default function IndexPage({params: {locale} , messages}) {

  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) return <div>not found</div>;

  const t = useTranslations('home');
  return (
    <>
    <Navigation locale={locale} ></Navigation>
    <div>{t('home')}</div>
    </>
    );
}