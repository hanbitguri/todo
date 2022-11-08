import 'bootstrap/dist/css/bootstrap.min.css';
import Global from './Global';
import { useEffect, useState } from 'react';
import Sidebar from './Components/Aside/Sidebar'
import Header from './Components/Header/Header';
import ImageBanner from './Components/Body/ImageBanner';
import Section from './Components/Section/Section';
import NewsCarousel from './Components/Body/NewsCarousel';
import MagazineCarousel from './Components/Body/MagazineCarousel';
import PlayListCarousel from './Components/Body/PlayListCarousel'
import MainDesc from './Components/Body/MainDesc';
import Subscribe from './Components/Body/Subscribe';
import Footer from './Components/Footer/Footer';
import Login from './Components/Section/Login';
import Overlay from './Components/Aside/Overlay';
import { useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

function App() {
  const [showSidebar,setShowSidebar] = useState(true)
  const [showLoginPage,setShowLoginPage] = useState(false)
  const [showOverlay,setShowOverLay] = useState(false)
  const [emailValue,setEmailValue] = useState('')
  const auth = useSelector(state => state.isAuth)
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  
  useEffect(()=>{
    isMobile ? setShowSidebar(false) : setShowSidebar(true)
    
  },[isMobile])

  


  function sidebarHandler(){
    setShowSidebar(state=>!state)
  }
  function goLoginPage(){
    setShowLoginPage(state=>!state)
    setShowOverLay(true)
    isMobile && setShowSidebar(false)
  } 
  function closeLogin(){
    setShowLoginPage(false)
    setShowOverLay(false)
  }
  function onSave(value){
    setEmailValue(value)
  }
  
  return (
    <>
     
    <Global></Global>
    
      {showSidebar && <Sidebar onTouchCloseButton={sidebarHandler} onGoLogin={goLoginPage} emailValue={emailValue}></Sidebar>}
    
  {showLoginPage && <Login onSubmit={closeLogin} showSidebar={setShowSidebar} onSave={onSave}></Login>} 
  {showOverlay && <Overlay onTouch={closeLogin}></Overlay>}
   <div className="container">
    <div className="row">
      <div className="col-sm-4 col-md-12 col-lg-12">
        <Header onTouchMenuButton={sidebarHandler} onGoLogin={goLoginPage} />
        <ImageBanner/>
        <Section title={'NEWS'}/>
        <NewsCarousel/>
        <Section title={'매거진'}/>
        <MagazineCarousel/>
        <Section title={'추천 플레이리스트'}/>
        <PlayListCarousel/>
        <Subscribe/>
        {
          !auth && <MainDesc/>
        }
        <Footer></Footer>
        
      </div>
    </div>
   </div>
   
      
   </>
  );
}

export default App;
