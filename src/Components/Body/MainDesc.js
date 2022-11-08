import React from 'react'
import './MainDesc.scss'
function MainDesc() {
  return (
    <section className='main-desc'>
        <h2 className='visually-hidden'>지금 바로 로그인하세요</h2>
        <h3>지금 로그인하고 한땀 한땀 빚은 플레이리스트 듣기!</h3>
        
        <p>K-Pop부터 클래식까지 모든 장르를 아우르는 건 기본.<br/>
        수천 개의 플레이리스트가 트렌드에 맞게 업데이트!
        </p>
        <div className='main-desc-image'>
        <img src="/images/Group 6.jpg" alt="" className='sm-only' />
        </div>
    </section>

  )
}

export default MainDesc