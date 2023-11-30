"use client"


function SearchBtn({lable , onClick}) {
  return (
    <button onClick={onClick}>{lable}</button>
  )
}

export default SearchBtn
