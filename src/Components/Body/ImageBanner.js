import React from 'react'
import './ImageBanner.scss';

function ImageBanner() {
  return (
    <section className='main-banner sm-only'>
        <h1 className='visually-hidden'>음악 이미지</h1>
        <div className='banner-image'>
            <img src="/images/albumcover.png"/>
            <div className='banner-desc'>
            <span className='banner-badge'>SPECIAL</span>
            <p>beerbongs & bentleys</p>
            </div>
        </div>
    </section>
  )
}

export default ImageBanner