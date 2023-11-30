'use client'
import { useState, useRef, useEffect , Suspense } from "react"

import "./style.css"

function DropDown({data , titel , onChange , onClick}) {
    var selectedValueRef = useRef(null);
    var [opende , setOpend] = useState(false)
    
    const ref = useRef(null);
    // console.log(ref)
    useEffect(() => {
        const handleOutSideClick = (event) => {
            if (!ref.current?.contains(event.target)) {
                setOpend(false)
            }
        };

        window.addEventListener("mousedown", handleOutSideClick);

        return () => {
        window.removeEventListener("mousedown", handleOutSideClick);
        };
    }, [ref]);
    
    return (
        <div className="drop-down-contaner">
                <div ref={ref}  onClick={()=>setOpend(!opende)} className="arrow" >
                    <input placeholder={titel} onChange={onChange} className={opende ? "search-text opened" : 'search-text'} ref={selectedValueRef}  type="text" />
                    {data && <span className={opende ? "flip" : ""}>{">"}</span>}
                    {!data && <span className='rot'>{"|"}</span>}
                </div>
                <div className={ opende ? "dataList" : 'hide'} >
                {data?.map(function(el, i){
                    return <span onClick={()=>selectedValueRef.current.value = el.name} >{el.name}</span>;
                })}
            </div>
        </div>
    )
}

export default DropDown
