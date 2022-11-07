import React from 'react'
import './Footer.scss'
function Footer() {
  return (
    <section className='footer'>
        <h2 className='visually-hidden'>사이트 정보</h2>
        <div className='footer-content'>
        <strong className='footer-alert'>
            <a href="">공지사항</a>
        </strong>
        <a href="" className='footer-alert-link'>음악과 쇼핑 혜택을 하나로! 첫...</a>
        </div>
        <dl className='contact-list'>
            <div className='contact'>
            <dt>대표이사</dt>
            <dd>전한빛</dd>
            </div>
            <div className='contact'>
            <dt>이메일</dt>
            <dd>asjask123@gmail.com</dd>
            </div>
            <div className='contact'>
            <dt>Git</dt>
            <dd>https://github.com/hanbitguri</dd>
            </div>
            
        </dl>
    </section>
  )
}

export default Footer