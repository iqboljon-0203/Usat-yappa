import React, { useRef } from "react";
import "./App.css";
import SnowGirl from "../../assets/logos/girl.png";
import Girls from "../../assets/logos/girls.png";
import Exam from "../../assets/logos/lesson.png";
import Tradition from "../../assets/logos/tradition.png";
import NextIcon from "../../assets/logos/next.png";
import PrevIcon from '../../assets/logos/left_icon.png'
const Slider = ({setHandleNextButton,setHandlePrevButton}) => {
  const slideRef = useRef(); // Slaydni boshqarish uchun

  // Keyingi slaydga o'tish
  const handleNext = () => {    
    const items = slideRef.current.children;
    slideRef.current.appendChild(items[0]); // Birinchi elementni oxiriga o'tkazadi
  };
  setHandleNextButton(handleNext)
  // Oldingi slaydga o'tish
  const handlePrev = () => {
    const items = slideRef.current.children;
    slideRef.current.prepend(items[items.length - 1]); // Oxirgi elementni boshiga o'tkazadi
  };
  setHandlePrevButton(handlePrev)

  return (
    <div id="main">
      <div className="container">
        <div className="slide" ref={slideRef}>
          {/* Slayder elementlari */}
          {[
            {
              backgroundImage:SnowGirl,
              name: "Qor o'yini",
              desc:
                "The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M performance and aesthetics to match.",
            },
            {
              backgroundImage:Girls,               
              name: "Navruz bayrami",
              desc:
                "Engineered around Porsche’s iconic 911 engine with unique hybrid technologies and delivering unsurpassed Porsche and hybrid performance.",
            },
            {
              backgroundImage:Exam,
              name: "Fan javohirlari granti imtixoni",
              desc:
                "The Ferrari 488 Pista is powered by the most powerful V8 engine in the Maranello marque’s history and is the company’s special series sports car.",
            },
            {
              backgroundImage:Tradition,
              name: "Navruz sayli",
              desc:
                "Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency.",
            },
            {
              backgroundImage:SnowGirl,
              name: "Qor o'yini",
              desc:
                "The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M performance and aesthetics to match.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="item"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition:"center",
              }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
                
              </div>
            </div>
          ))}
        </div>
        {/* Tugmalar */}
        <div className="button">
          <button className="prev" onClick={handlePrev} title="Previous">
            <img src={PrevIcon} alt="Prev icon" />
            
          </button>
          <button className="next" onClick={handleNext} title="Next">
            <img src={NextIcon} alt="Next icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
