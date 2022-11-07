import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss'

const imgs = [
    {
        id:'p1',
        url:'/images/astro.jpg'
    },
    {
        id:'p2',
        url:'/images/taylor2.png'
    },
    {
        id:'p3',
        url:'/images/travis.jpeg'
    },
]

const settings = {
  arrows:true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1

};

const content1 = '트래비스 스콧 x 나이키 에어 조던 1 로우 :올리브 새로운 실착 사진'
const content2 = '우리는 도대체 왜 트래비스 스콧에 열광하나?'
const content3 = '빌보드 톱10 도배, LP 57만장 판매…테일러 스위프트의 저력'
function NewsCarousel() {
  return (
  <section className='carousel'>
    <h2 className='visually-hidden'>앨범자켓 캐러셀</h2>
    <Slider {...settings}>
     <div className='carousel-image'><img src={imgs[0].url} alt="" /><p className='carousel-content'>{content1}</p><a href="/" className='carousel-content-news'>관련 뉴스 보기</a></div>
     <div className='carousel-image'><img src={imgs[1].url} alt="" /><p className='carousel-content'>{content3}</p><a href="/" className='carousel-content-news'>관련 뉴스 보기</a></div>
     <div className='carousel-image'><img src={imgs[2].url} alt="" /><p className='carousel-content'>{content2}</p><a href="/" className='carousel-content-news'>관련 뉴스 보기</a></div>
    </Slider>
  </section>
  )
}

export default NewsCarousel