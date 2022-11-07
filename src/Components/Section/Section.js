import React from 'react'
import './Section.scss'
import { BsChevronRight } from "react-icons/bs";
function Section(props) {
  return (
    <div className='section-banner'>
        <a href="/">
            {props.title}
            <BsChevronRight className='chevron'></BsChevronRight>
        </a>
    </div>
  )
}

export default Section