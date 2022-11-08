import React from 'react'
import './Header.scss'
import { AiOutlineMenu } from "react-icons/ai";
import { RiUser6Line,RiUser6Fill } from "react-icons/ri";

function Header(props) {
  return (
    <header className='global-header'>
      <div className='global-header-left'>
      <a href="/" className='global-header-title'>Lorem ipsum</a>
      </div>
      <div className='global-header-right'>
      <button onClick={props.onTouchMenuButton} className="sm-only"><AiOutlineMenu></AiOutlineMenu></button>
      <button  className="lg-only user-profile" onClick={props.onGoLogin}><RiUser6Line></RiUser6Line></button>
      </div>
    </header>
  )
}

export default Header