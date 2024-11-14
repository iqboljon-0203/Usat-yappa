import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './App.css' // CSS faylini import qilish
import GirlImage from '../../assets/logos/girl.png'
import GirlsImage from '../../assets/logos/girls.png'

import TraditionImage from '../../assets/logos/tradition.png'
import LessonImage from '../../assets/logos/lesson.png'

const photos = [
  {
            id: 1,
            image: GirlImage,
            content: "birinchi qor yoqqan kuni talabalar qor o’ynashganda!",
        },
        { id: 2, image: GirlsImage, content: "navruz bayrami munosabati bilan o'tkazilgan tadbirda qizlarimiz milliy liboslarda! " },
        { id: 3, image: TraditionImage, content: "Navruz sayli jarayonlaridan foto lavhalar!" },
        { id: 4, image: LessonImage, content: `"Fan javohirlari" grant imtixonlari o'tkazildi` },
];

const PhotoGallery = () => {
  return (
    <div style={{ padding: "20px", backgroundColor: "#27476e", color: "white" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>USAT ATMOSFERASI FOTOGALEREYA</h2>
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        pagination={{ clickable: true }}
        style={{ paddingBottom: "20px" }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <div
              className="swiper-content"
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "10px",
                cursor: "pointer",
                transition: "transform 0.3s",
              }}
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  transition: "transform 0.3s",
                }}
                className="swiper-image"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "10px",
                  color: "white",
                  fontWeight: "bold",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  padding: "5px 10px",
                  borderRadius: "5px",
                }}
              >
                {photo.title}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx>{`
        .swiper-content:hover .swiper-image {
          transform: scale(1.1); /* Hover qilinganda kattalashtiradi */
        }
      `}</style>
    </div>
  );
};

export default PhotoGallery;
