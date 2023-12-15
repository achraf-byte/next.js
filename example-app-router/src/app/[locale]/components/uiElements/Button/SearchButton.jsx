import React from 'react'
import { useRouter } from 'next/navigation';
import "./style.css"
export default function SearchButton({link , lable}) {
  const router = useRouter();
  function navigateToPage(params) {
    event.preventDefault();
    router.push(link)
  }
  return (
    <button className="submitBtn" onClick={navigateToPage} >{lable}</button>
  )
}
