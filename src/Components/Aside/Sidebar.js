import React from 'react'
import './_Sidebar.scss';
import { AiOutlineClose,AiOutlineUser,AiFillSound } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsHeart,BsMinecartLoaded,BsFillMusicPlayerFill,BsFillHouseFill,BsHandThumbsUpFill } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { authAction } from '../../store/authslice';
import { MdFavorite } from "react-icons/md";
import { BiShuffle,BiPlay,BiSkipNext,BiSkipPrevious } from "react-icons/bi";
function Sidebar(props) {
    const auth = useSelector(state => state.isAuth)
    const dispatch = useDispatch()
    function logoutHandler(){
        dispatch(authAction.logout())
        
    }
  return (
    <aside className='sidebar'>
        
                <h1 className='visually-hidden'>페이지 사이드바</h1>
                    <div className='sidebar-header'>
                        {
                            !auth ?
                            <div className='sidebar-profile'>
                              <AiOutlineUser className='profile-icon'></AiOutlineUser>
                              <div className='user-name'>비회원입니다.</div>
                            </div> :
                            <div className='sidebar-profile'>
                            <FaUserAlt className='profile-icon'/>
                            <div className='user-name'>{props.emailValue}</div>
                          </div>
                        }

                        
                        <AiOutlineClose className='sidebar-close' onClick={props.onTouchCloseButton}></AiOutlineClose>
                    </div>
                    <div className='sidebar-nav-main'>
                        <ul className='sidebar-nav-main-list'>
                            {
                                auth && <li className='sidebar-nav-main-item'><FaUserAlt className='nav-icon'></FaUserAlt>마이페이지</li>
                            }
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
                            {
                                auth &&  <li className='sidebar-nav-desc-item' onClick={logoutHandler}>로그아웃</li>
                            }
                        </ul>
                    </div>
                    {
                    !auth &&
                    <div className='sidebar-footer' onClick={props.onGoLogin}>    
                    <strong className='sidebar-button'>로그인 하기</strong>
                    </div>
                    }
                    {
                     auth &&   
                     <div className='sidebar-footer lg-only'>    
                      <div className='player-1'>
                          <MdFavorite></MdFavorite>
                          <div>
                              <span>오늘 뭐듣지?<br/></span>
                              <span>재생 버튼을 클릭해보세요.</span>
                          </div>
                      </div>
                      <div className='player-2'>
                          <div className='player-icons'>
                              <BiShuffle className='shuffle'/>
                              <BiSkipPrevious></BiSkipPrevious>
                              <BiPlay className='play'></BiPlay>
                              <BiSkipNext></BiSkipNext>
                          </div>
                      </div>
                      <div className='player-3'>
                          <div className='player-sound'>
                            <span>00:00 / 00:00 </span>
                            <AiFillSound></AiFillSound>

                          </div>
                      </div>
                    </div>
                    }
                    
    
     
    </aside>
  )
}

export default Sidebar