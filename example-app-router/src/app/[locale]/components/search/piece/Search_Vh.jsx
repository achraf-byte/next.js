"use client"

import DropDown from "../../uiElements/search/DropDown/DropDown"
import { useState } from "react"

export default function Search_Vh({titels , brandes , handelOnChangeBrande , handelOnChangeModel , handelOnChangeType }) {
    return (
        <>
            <DropDown data={brandes} onChange={handelOnChangeBrande} type="brand" titel={titels['brand']}></DropDown>
            <DropDown data={model} onChange={handelOnChangeModel} type="model" titel={titels['model']}></DropDown>
            <DropDown data={type} onChange={handelOnChangeType} type="type" titel={titels['type']}></DropDown>
        </>
    )
}

const type = [
    { name: 'John', value: 25 },
    { name: 'Jane', value: 30 },
    { name: 'Bob', value: 22 },
    { name: 'Alice', value: 28 },
    { name: 'Charlie', value: 35 },
    { name: 'David', value: 27 },
    { name: 'Eva', value: 29 },
    { name: 'Frank', value: 32 },
    { name: 'Grace', value: 31 },
    { name: 'Henry', value: 26 },
    { name: 'Ivy', value: 33 },
    { name: 'Jack', value: 24 },
    { name: 'Katie', value: 30 },
    { name: 'Liam', value: 29 },
    { name: 'Mia', value: 31 },
    { name: 'Noah', value: 28 },
    { name: 'Olivia', value: 34 },
    { name: 'Peter', value: 26 },
    { name: 'Quinn', value: 32 },
    { name: 'Ryan', value: 27 },
    { name: 'Sofia', value: 29 },
    { name: 'Tyler', value: 31 },
    { name: 'Uma', value: 30 },
    { name: 'Victor', value: 25 },
    { name: 'Wendy', value: 28 },
    { name: 'Xander', value: 33 },
    { name: 'Yara', value: 29 },
    { name: 'Zane', value: 30 }
];
const model = [
    { name: 'John', value: 25 },
    { name: 'Jane', value: 30 },
    { name: 'Bob', value: 22 },
    { name: 'Alice', value: 28 },
    { name: 'Charlie', value: 35 },
    { name: 'David', value: 27 },
    { name: 'Eva', value: 29 },
    { name: 'Frank', value: 32 },
    { name: 'Grace', value: 31 },
    { name: 'Henry', value: 26 },
    { name: 'Ivy', value: 33 },
    { name: 'Jack', value: 24 },
    { name: 'Katie', value: 30 },
    { name: 'Liam', value: 29 },
    { name: 'Mia', value: 31 },
    { name: 'Noah', value: 28 },
    { name: 'Olivia', value: 34 },
    { name: 'Peter', value: 26 },
    { name: 'Quinn', value: 32 },
    { name: 'Ryan', value: 27 },
    { name: 'Sofia', value: 29 },
    { name: 'Tyler', value: 31 },
    { name: 'Uma', value: 30 },
    { name: 'Victor', value: 25 },
    { name: 'Wendy', value: 28 },
    { name: 'Xander', value: 33 },
    { name: 'Yara', value: 29 },
    { name: 'Zane', value: 30 }
];