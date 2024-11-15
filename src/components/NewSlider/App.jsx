import React, { useRef } from "react";
import "./App.css";

const Slider = () => {
  const slideRef = useRef(); // Slaydni boshqarish uchun

  // Keyingi slaydga o'tish
  const handleNext = () => {
    const items = slideRef.current.children;
    slideRef.current.appendChild(items[0]); // Birinchi elementni oxiriga o'tkazadi
  };

  // Oldingi slaydga o'tish
  const handlePrev = () => {
    const items = slideRef.current.children;
    slideRef.current.prepend(items[items.length - 1]); // Oxirgi elementni boshiga o'tkazadi
  };

  return (
    <div id="main">
      <div className="container">
        <div className="slide" ref={slideRef}>
          {/* Slayder elementlari */}
          {[
            {
              backgroundImage:
                "https://images.unsplash.com/photo-1610809376778-928ee2c3a561?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "BMW M4",
              desc:
                "The 2024 BMW M4 Coupe delivers signature pulse-pounding BMW M performance and aesthetics to match.",
            },
            {
              backgroundImage:
                "https://images.unsplash.com/photo-1625179904634-243c6cdd6421?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Porsche 911",
              desc:
                "Engineered around Porsche’s iconic 911 engine with unique hybrid technologies and delivering unsurpassed Porsche and hybrid performance.",
            },
            {
              backgroundImage:
                "https://images.unsplash.com/photo-1597935370784-051cdebbe6a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Ferrari 488 Pista",
              desc:
                "The Ferrari 488 Pista is powered by the most powerful V8 engine in the Maranello marque’s history and is the company’s special series sports car.",
            },
            {
              backgroundImage:
                "https://images.unsplash.com/photo-1453491945771-a1e904948959?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              name: "Tesla Model S",
              desc:
                "Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency.",
            },
            {
              backgroundImage: "https://images2.alphacoders.com/724/724677.jpg",
              name: "Mercedes-Benz C-Class Cabriolet",
              desc:
                "The C-Class Cabriolet shows an ever-fresh face to the sun. Four of you can take in the sky. Ride in coupelike comfort under a rich fabric top.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="item"
              style={{
                backgroundImage: `url(${item.backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="content">
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
                <button>More Info</button>
              </div>
            </div>
          ))}
        </div>
        {/* Tugmalar */}
        <div className="button">
          <button className="prev" onClick={handlePrev} title="Previous">
            orqaga
            
          </button>
          <button className="next" onClick={handleNext} title="Next">
            oldinga
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
