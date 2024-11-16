import React, { useState } from 'react'
import "./UsatGallery.css"
// import NextIcon from "../../../assets/logos/next.png";
// import PrevIcon from '../../../assets/logos/left_icon.png'
// import SwiperGallery from "../../../components/SwiperGallery/App.jsx";
import NewSlider from '../../../components/NewSlider/App.jsx';
import { useTranslation } from 'react-i18next';
const UsatGallery = () => {
    const [handleNextButton,setHandleNextButton]=useState(null);
    const [handlePrevButton,setHandlePrevButton]=useState(null);
    console.log(handlePrevButton);
    
  const { t } = useTranslation()
  return (
      <div id='atmosphere' className="usat_gallery">
          <div className="usat_gallery_container">
              <div className="usat_gallery_top">
                  <h2 className="usat_gallery_title">{t('fotogalareya')}</h2>
                  {/* <div className="usat_gallery_buttons">
                      <div onClick={handlePrevButton} className="usat_gallery_button_left">
                          <img src={PrevIcon} alt="Next icon" />
                      </div>
                      <div onClick={handleNextButton} className="usat_gallery_button_right">
                          <img src={NextIcon} alt="Prev Icon" />
                      </div>
                  </div> */}
              </div>
              <NewSlider setHandleNextButton={setHandleNextButton} setHandlePrevButton={setHandlePrevButton}></NewSlider>
          </div>
      </div>
  )
}

export default UsatGallery;
