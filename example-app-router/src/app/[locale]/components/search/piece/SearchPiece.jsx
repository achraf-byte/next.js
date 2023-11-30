'use client'

import SearchTab from "../../uiElements/search/SearchTab/SearchTab";
import TextSearch from "../../uiElements/search/TextSearch/TextSearch"
import Search_Vh from "./Search_Vh";
import { getBrandes } from "../../../../../api/fectchFuntions/index"
import { use, useState } from "react"
import "./style.css"

export default function SearchPiece({lables}) {
    var [tab , setTab] = useState('ref')
    var [data , setData] = useState({})

    async function handeTabClick(tab){
        console.log(11)
        setTab(tab)
        if(tab == 'vh' && !data.brandes){
            var brandesData = await getBrandes()
            setData({ ...data, brandes: brandesData });
        }
    }
    function handleOnChangeRef(){

    }
    function handleOnChangeImmat(){

    }
    function handelOnChangeBrande(){
        
    }
    function handelOnChangeModel(){

    }
    function handelOnChangeType(){

    }
    return (
        <div className="bg-container" >
            <div className="container">
                <div className="tabs" >
                    <SearchTab onClick={handeTabClick} currentTab={tab} tab="ref" lable={lables["search-referece"]} ></SearchTab>
                    <SearchTab onClick={handeTabClick} currentTab={tab} tab="immat" lable={lables["search-immat"]} ></SearchTab>
                    <SearchTab onClick={handeTabClick} currentTab={tab} tab="vh" lable={lables["search-vh-tab"]} ></SearchTab>
                </div>
                <div className="search-el-cont" >
                    {tab == 'ref' && <TextSearch onChange={handleOnChangeRef} placeholder={lables['search-ref-placeholder']}></TextSearch>}
                    {tab == 'immat' && <TextSearch onChange={handleOnChangeImmat} img={'image.png'} placeholder={lables['search-immat-placeholder']}></TextSearch>}
                    {tab == 'vh' && 
                    <Search_Vh
                        brandes={data?.brandes}
                        handelOnChangeBrande={handelOnChangeBrande} titels={lables['search-vh']}
                        handelOnChangeModel={handelOnChangeModel} 
                        handelOnChangeType={handelOnChangeType}
                    ></Search_Vh>}
                </div>
            </div>
        </div>
  )
}
