"use client"

import DropDown from "../../uiElements/search/DropDown/DropDown"
import { useState } from "react"

export default function Search_Vh({titels , data , handelOnChangeDropDown }) {
    // console.log('-------------------------------------------------')
    return (
        <>
            <DropDown is_search={true} next_d={"Models"} data={data.Brands} onChange={handelOnChangeDropDown} name="brand" titel={titels['brand']}></DropDown>
            <DropDown is_search={true} next_d={"Types"} data={data.Models} onChange={handelOnChangeDropDown} name="model" titel={titels['model']}></DropDown>
            <DropDown is_search={true} data={data.Types} onChange={handelOnChangeDropDown} name="v_id" titel={titels['type']}></DropDown>
        </>
    )
}
