import React from 'react'
import './Subscribe.scss'
import { AiFillGithub } from "react-icons/ai";
function Subscribe() {
  return (
    <section className='main-subscribe'>
        <h2 className='visually-hidden'>앱 다운받으래</h2>
        <div className='sub-image'>
            <img src="./images/tape.jpg" alt="" />
        </div>
        <h3 className='sub-title'>아티스트 고르고 매일매일 소식 받기</h3>
        <p className='sub-desc'>지금 앱에서 취향 길들이기를 해보세요!</p>
        <div className='sub-button-group'>
        <button className='sub-button'>
            <AiFillGithub className='sub-button-git'></AiFillGithub>
            Visit on my GitHub
            </button>
        
        </div>

    </section>
  )
}

export default Subscribe