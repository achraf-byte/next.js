
import {useTranslations} from 'next-intl'
import {locales} from '../../../config'
import { LoginForm } from "../components/login/LoginForm"

export default function IndexPage({params: {locale} , messages}) {

  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) return <div>not found</div>;

  const t = useTranslations('home');



  

  
  return (
    <>
    <LoginForm />
    </>
  );
}



