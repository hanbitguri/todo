import React from 'react'
import './_Sidebar.scss';
import { AiOutlineClose } from "react-icons/ai";
import { BsHeart,BsMinecartLoaded,BsFillMusicPlayerFill,BsFillHouseFill,BsHandThumbsUpFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Sidebar(props) {
  return (
    <aside className='sidebar'>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <h1 className='visually-hidden'>페이지 사이드바</h1>
                    <div className='sidebar-header'>
                        <h2 className='sidebar-title'>ㅇㅇㅇ님</h2>
                        <AiOutlineClose className='sidebar-close' onClick={props.onTouchCloseButton}></AiOutlineClose>
                    </div>
                    <div className='sidebar-nav-main'>
                        <ul className='sidebar-nav-main-list'>
                            <li className='sidebar-nav-main-item'><BsHeart className='nav-icon'></BsHeart>투데이</li>
                            <li className='sidebar-nav-main-item'><BsMinecartLoaded className='nav-icon'></BsMinecartLoaded>스토어</li>
                            <li className='sidebar-nav-main-item'><BsFillMusicPlayerFill className='nav-icon'></BsFillMusicPlayerFill>최신앨범</li>
                            <li className='sidebar-nav-main-item'><BsFillHouseFill className='nav-icon'></BsFillHouseFill>이달의 노래</li>
                            <li className='sidebar-nav-main-item'><BsHeart className='nav-icon'></BsHeart>투데이</li>
                            <li className='sidebar-nav-main-item'><BsHandThumbsUpFill className='nav-icon'/>DJ 스테이션</li>
                           
                        </ul>
                    </div>
                    <div className='sidebar-nav-desc'>
                        <ul className='sidebar-nav-desc-list'>
                            
                            <li className='sidebar-nav-desc-item'>멤버십</li>
                            <li className='sidebar-nav-desc-item'>공지사항</li>
                            
                        </ul>
                    </div>
                    <div className='sidebar-footer' onClick={props.onGoLogin}>
                        
                        <strong className='sideber-button'>로그인 하기</strong>
                        
                    </div>
                </div>
            </div>
        </div>
     
    </aside>
  )
}

export default Sidebar