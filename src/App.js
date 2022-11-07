import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
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

function App() {
  const [showSidebar,setShowSidebar] = useState(false)
  function sidebarHandler(){
    setShowSidebar(state=>!state)
  } 
  return (
    <>
  {showSidebar && <Sidebar onTouchCloseButton={sidebarHandler}></Sidebar>}
   <div className="container">
    <div className="row">
      <div className="col-sm-4 col-md-12 col-lg-12">
        <Header onTouchMenuButton={sidebarHandler}/>
        <ImageBanner/>
        <Section title={'NEWS'}/>
        <NewsCarousel/>
        <Section title={'매거진'}/>
        <MagazineCarousel/>
        <Section title={'추천 플레이리스트'}/>
        <PlayListCarousel/>
        <Subscribe/>
        <MainDesc/>
        <Footer></Footer>
      </div>
    </div>
   </div>
   
      
   </>
  );
}

export default App;
