import React from 'react'
import './Header.scss'
import { AiOutlineMenu } from "react-icons/ai";

function Header(props) {
  return (
    <header className='global-header'>
      <div className='global-header-left'>
      <a href="/" className='global-header-title'>Lorem</a>
      </div>
      <div className='global-header-right'>
      <button onClick={props.onTouchMenuButton}><AiOutlineMenu></AiOutlineMenu></button>
      </div>
    </header>
  )
}

export default Header