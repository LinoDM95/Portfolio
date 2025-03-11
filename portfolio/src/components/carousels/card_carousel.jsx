import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

export default function CardCarousel({ onSlideHover }) {

  const slidesData = [
    {
      title: "SnippetVault",
      description:
        "Snippet​Vault ist ein Tool, das entwickelt wurde, um Code-Snippets effizient und strukturiert zu speichern. Es ermöglicht einen schnellen Zugriff auf Ihre Snippets, um den Arbeitsfluss nicht zu unterbrechen. Durch die tabellarische Struktur werden unübersichtliche Textdateien vermieden.",
      Username: "Benutzername: guest",
      Password: "Password: guest",
      Url: "https://vault-kvgo.onrender.com/",
    },
    {
      title: "StudyVibe",
      description: "Beschreibung für Slide 2.",
    },
    {
      title: "DataAnalysis",
      description: "Beschreibung für Slide 3.",
    },
  ];

  function handleMouseEnter(index) {
    if (onSlideHover) {
      onSlideHover(index, slidesData[index]);
    }
  };

  function handleMouseLeave() {
    if (onSlideHover) {
      onSlideHover(null, null);
    }
  };

  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#e3312f",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="p-6 text-white border-1 bg-[#2e2257] border-primary rounded-lg shadow-md h-100">
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-gray-300 mb-5">{slide.description}</p>
              {slide.Url && (
                <li className="text-primary">
                  <a href={slide.Url}>{slide.Url}</a>
                </li>
              )}
              {slide.Username && (
                <>
                  <h2>Anmeldedaten:</h2>
                  <p className="text-gray-300">{slide.Username}</p>
                  {slide.Password && (
                    <p className="text-gray-300">{slide.Password}</p>
                  )}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
