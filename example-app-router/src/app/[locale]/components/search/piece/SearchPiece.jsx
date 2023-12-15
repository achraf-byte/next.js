'use client'

import SearchTab from "../../uiElements/search/SearchTab/SearchTab";
import TextSearch from "../../uiElements/search/TextSearch/TextSearch"
import Search_Vh from "./Search_Vh";
import SearchButton from "../../uiElements/Button/SearchButton"
import { getSeachVhData } from "../../../../../api/fectchFuntions/index"
import { useEffect, useState } from "react"

import { usePathname , useSearchParams } from 'next/navigation';
import "./style.css"

export default function SearchPiece({lables , locale , params }) {
    var [tab , setTab] = useState('vh')
    var [data , setData] = useState({})
    var [values , setValues] = useState({})
    var [searchLink , setSearchLink] = useState('#')
    
  const pathname = useSearchParams()
  console.log(params)
    async function handeTabClick(tab){
        setTab(tab)
        if(tab == 'vh' && !data.Brands){
            var brandesData = await getSeachVhData({next_d : 'Brands' , value:null})
            setData({ ...data, Brands: brandesData });
        }
    }
    useEffect(() => {
        tab == 'vh' && handeTabClick('vh')
    }, [tab]);
    function setSearchLinkFunc(values , locale) {
        if(typeof values != "undefined"){
            console.log(values)
            var base = `/${locale}/${lables['link_base']}/${lables[tab]}/`
            var values = tab == 'vh' ? Object.values([values.brand, values.model, values.v_id]).join('-') : values[tab]
            console.log(searchLink)
            setSearchLink(base + values)
        }
    }
    async function handelOnChange(params){
        setValues({...values, [params.name] : params.value})
        setSearchLinkFunc(values , locale)
        if(params.next_d){
            var resData = await getSeachVhData(params)
            setData({ ...data, [params.next_d]: resData });
        }
    }
    return (
        <div className="bg-container" >
            <form action="">
            <div className="container">
                <div className="tabs" >
                    <SearchTab onClick={handeTabClick} currentTab={tab} tab="ref" lable={lables["search-referece"]} ></SearchTab>
                    <SearchTab onClick={handeTabClick} currentTab={tab} tab="immat" lable={lables["search-immat"]} ></SearchTab>
                    <SearchTab onClick={handeTabClick} currentTab={tab} tab="vh" lable={lables["search-vh-tab"]} ></SearchTab>
                </div>
                <div className="search-el-cont" >
                    {tab == 'ref' && <TextSearch onChange={handelOnChange} name="ref" placeholder={lables['search-ref-placeholder']}></TextSearch>}
                    {tab == 'immat' && <TextSearch onChange={handelOnChange} name="immat" img={'image.png'} placeholder={lables['search-immat-placeholder']}></TextSearch>}
                    {tab == 'vh' && 
                    <Search_Vh
                        data={data}
                        titels={lables['search-vh']}
                        handelOnChangeDropDown={handelOnChange}
                    ></Search_Vh>}
                </div>
                <SearchButton lable={'Recherch'} link={searchLink}></SearchButton>
            </div>
            </form>
        </div>
  )
}
