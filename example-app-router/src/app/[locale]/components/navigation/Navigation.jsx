
import {useTranslations} from 'next-intl';
import NavLink from "../uiElements/NavLink/Button"
import { piece , tyres } from 'app/[locale]/consts/variables';
import "./style.css"
export default function Navigation({selected}) {
  const t = useTranslations('navigation');
  return (
    <>
    <div className='head' >HEADER</div>
    <div className='navigation' >
      <NavLink selected={selected == 'home'} style={{padding:"10px"}} link={`/`} lable={t('home')}/>
      <NavLink selected={selected == piece} style={{padding:"10px"}} link={`/${t('piece-search-url')}`} lable={t('piece-search')}/>
      <NavLink selected={selected == tyres} style={{padding:"10px"}} link={`/${t('pneux-search-url')}`} lable={t('pneux-search')}/>
    </div>
    </>
  )
}

