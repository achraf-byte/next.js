"use client"
import './style.css'

function TextSearch({placeholder , onChange , img}) {
  return (
    <input placeholder={placeholder} className={img ? 'img search-text' : 'search-text'} onChange={onChange} type="text" />
  )
}

export default TextSearch
