import React from 'react'
import './Overlay.scss'
function Overlay(props) {
  return (
    <div className='overlay' onClick={props.onTouch}></div>
  )
}

export default Overlay