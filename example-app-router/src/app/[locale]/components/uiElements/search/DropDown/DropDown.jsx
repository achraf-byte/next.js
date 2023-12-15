'use client'
import { useState, useRef, useEffect } from "react"

import "./style.css"

function DropDown({next_d ,name,  data , titel , onChange , onClick , is_search}) {

    var searchVal = useRef(null);
    var [opende , setOpend] = useState(false)
    var [clicked , setClicked] = useState(false)
    var [currentData , setCurrentData] = useState(data)
    var [selectedValue , setSelectedValue] = useState(null)
    const ref = useRef(null);

    useEffect(() => {
        setCurrentData(data)
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setOpend(false)
            }
        };
        window.addEventListener("mousedown", handleOutSideClick);
        data && !clicked && itemClick(data.filter(item => item.value !== "-")[0])
        return () => {
            window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref , data]);

    function search(){
        if(is_search){
            setOpend(true)
            setCurrentData(data.filter(item => item.name.toLowerCase().includes(searchVal.current.value.toLowerCase())));
        }else{
            searchVal.current.value = selectedValue?.name ? selectedValue.name : ""
        }
    }

    function itemClick(el){
        if(el.name != searchVal.current.value){
            setClicked(false)
            searchVal.current.value = el.name
            setSelectedValue(el)
            onChange({value: el.value , next_d , name})
            setOpend(false)
        }
    }

    return (
        <div ref={ref} className="drop-down-contaner">
                <div onClick={()=>setOpend(!opende)} className="arrow" >
                    <input placeholder={titel} onChange={search} className={opende ? "search-text opened" : 'search-text'} ref={searchVal}  type="text" />
                    {currentData && <span className={opende ? "flip" : ""}>{">"}</span>}
                    {!currentData && <span className='rot'>{"|"}</span>}
                </div>
                <div className={ opende ? "dataList" : 'hide'} >
                {currentData?.map(function(el, i){
                    return <span key={Math.random()*100} data-value={el.value} className={el.value != "-" ? "" : "select-titel"} onClick={()=>itemClick(el)} >{el.name}</span>;
                })}
            </div>
        </div>
    )
}

export default DropDown
