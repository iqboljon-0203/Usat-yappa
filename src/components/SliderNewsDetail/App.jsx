import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useEffect } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function App({width}) {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const { newsItem} = useSelector((state) => state.getNews)
    const [swiperHeight, setSwiperHeight] = useState(650);
    const [littleSwiperHeight,setLittleSwiperHeight]=useState(188)
    
     useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth<=1440&&width){
        setSwiperHeight((width/16)*9);
      }else{
        setSwiperHeight((1152/16)*9);
      }
    };
    // Call handler once to set initial size
    handleResize();

    // Add event listener to update height on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  useEffect(() => {
    const handleResize = () => {
    if(window.innerWidth<=1440&&width){
        setLittleSwiperHeight((width/64)*9);
      }else{
        setLittleSwiperHeight((1152/64)*9);
      }
    };

    // Call handler once to set initial size
    handleResize();

    // Add event listener to update height on resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
          height: `${swiperHeight}px`,
          borderRadius:"10px",
        }}
       
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="myNewsSwiper2"
      >
        {newsItem&&newsItem?.photos?.map((item) => (
            <SwiperSlide>
                <img style={{height:"100%"}} src={item} alt="News info image" />
            </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="myNewsSwiper"
        style={{height: `${littleSwiperHeight+20}px`,borderRadius:"10px",marginBottom:"20px"}}
      >
        {newsItem&&newsItem?.photos?.map((item) => (
            <SwiperSlide>
                <img style={{height:"100%"}} src={item} alt="News info image" />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
