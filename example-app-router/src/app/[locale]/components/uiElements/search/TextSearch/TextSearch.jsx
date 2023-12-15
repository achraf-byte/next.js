"use client"
import './style.css'
import { useRef } from 'react'

function TextSearch({placeholder , name , onChange , img}) {
  const inputText = useRef(null);
  function handelOnChange(){
    onChange({value: inputText.current.value , name})
  }
  return (
    <input placeholder={placeholder} ref={inputText} name={name} className={img ? 'img search-text' : 'search-text'} onChange={handelOnChange} type="text" />
  )
}

export default TextSearch
