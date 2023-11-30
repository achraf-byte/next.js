"use client"
import "./style.css"

export default function SearchTab({currentTab , lable , tab , onClick}) {
  return (
    <div onClick={()=>onClick(tab)} data-lable={lable} className={currentTab == tab ? "SearchTab selected" : "SearchTab"}>
      {lable}
    </div>
  )
}
