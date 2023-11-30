'use client'

import { Link } from 'navigation'
import "./style.css"

export default function Button({link , lable , selected}) {
  return (
    <Link className={selected ? 'link selected' : 'link'} style={{padding:"10px"}} href={link}>{lable}</Link>
  )
}


