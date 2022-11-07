import React from 'react'
import './_Sidebar.scss';
import { AiOutlineClose } from "react-icons/ai";
function Sidebar(props) {
  return (
    <aside className='sidebar sm-hidden'>
        <div className="container">
            <div className="row">
                <div className="col-sm-4">
                <h1 className='visually-hidden'>페이지 사이드바</h1>
                    <div className='sidebar-header'>
                        <h2 className='sidebar-title'>ㅇㅇㅇ님 ㅎㅇ</h2>
                        <AiOutlineClose className='sidebar-close' onClick={props.onTouchCloseButton}></AiOutlineClose>
                    </div>
                    <div className='sidebar-nav-main'>
                        <ul className='sidebar-nav-main-list'>
                            <li className='sidebar-nav-main-item'>투데이</li>
                            <li className='sidebar-nav-main-item'>차트</li>
                            <li className='sidebar-nav-main-item'>최신앨범</li>
                            <li className='sidebar-nav-main-item'>이달의 노래</li>
                        </ul>
                    </div>
                    <div className='sidebar-nav-desc'>
                        <ul className='sidebar-nav-desc-list'>
                            
                            <li className='sidebar-nav-desc-item'>제목없음 멤버십</li>
                            <li className='sidebar-nav-desc-item'>공지사항</li>
                            <li className='sidebar-nav-desc-item'>로그인</li>
                        </ul>
                    </div>
                    <div className='sidebar-footer'>
                        <strong className='sideber-button'>멤버십 구독</strong>
                    </div>
                </div>
            </div>
        </div>
     
    </aside>
  )
}

export default Sidebar