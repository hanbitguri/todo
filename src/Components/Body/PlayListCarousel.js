import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'

const imgs = [
    {
        id:'m1',
        url:'/images/pl1.jpg'
    },
    {
        id:'m2',
        url:'/images/pl2.jpg'
    },
    {
        id:'m3',
        url:'/images/pl3.jpg'
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

const content1 = '비로소 가을이 실감 나는 발라드 명곡 playlist'
const content2 = '차분한 집중이 필요한 날'
const content3 = '혼자 듣기 아까운 인생 띵곡'
function PlayListCarousel() {
  return (
  <section className='carousel'>
    <h2 className='visually-hidden'>앨범자켓 캐러셀</h2>
    <Slider {...settings}>
     <div className='carousel-image'><img src={imgs[0].url} alt="" /><p className='carousel-content'>{content1}</p><span className='carousel-content-desc'>시티팝/드라이브</span></div>
     <div className='carousel-image'><img src={imgs[1].url} alt="" /><p className='carousel-content'>{content3}</p><span className='carousel-content-desc'>커피한잔</span></div>
     <div className='carousel-image'><img src={imgs[2].url} alt="" /><p className='carousel-content'>{content2}</p><span className='carousel-content-desc'>주말아침</span></div>
    </Slider>
  </section>
  )
}

export default PlayListCarousel