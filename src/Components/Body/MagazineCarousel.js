import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'

const imgs = [
    {
        id:'m1',
        url:'/images/scott.jpg'
    },
    {
        id:'m2',
        url:'/images/cpcp.jpg'
    },
    {
        id:'m3',
        url:'/images/unedu2.jpg'
    },
]

const settings = {
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth:true,
  responsive: [ // 반응형 웹 구현 옵션
  {  
    breakpoint: 350, //화면 사이즈 960px일 때
    settings: {
      variableWidth:false,
    } 
  }
]
};

const content1 = 'New Release # 1 : Travis Scott'
const content2 = 'NexTrend : UNEDUCATEDKID'
const content3 = '세상의 모든 팬들과 함께 찾아낸 Charlie Puth의 가장 솔직한 얼굴, [CHARLIE]'
function MagazineCarousel() {
  return (
  <section className='carousel'>
    <h2 className='visually-hidden'>앨범자켓 캐러셀</h2>
    <Slider {...settings}>
     <div className='carousel-image'><img src={imgs[0].url} alt="" /><p className='carousel-content'>{content1}</p><span className='carousel-content-date'>2022-11-07</span></div>
     <div className='carousel-image'><img src={imgs[1].url} alt="" /><p className='carousel-content'>{content3}</p><span className='carousel-content-date'>2022-11-07</span></div>
     <div className='carousel-image'><img src={imgs[2].url} alt="" /><p className='carousel-content'>{content2}</p><span className='carousel-content-date'>2022-11-07</span></div>
    </Slider>
  </section>
  )
}

export default MagazineCarousel