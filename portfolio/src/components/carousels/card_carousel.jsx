import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";

export default function CardCarousel() {
  const slidesData = [
    {
      title: "Vault",
      description:
        "​Vault ist ein Tool, das entwickelt wurde, um Code-Snippets effizient und strukturiert zu speichern. Es ermöglicht einen schnellen Zugriff auf Ihre Snippets, um den Arbeitsfluss nicht zu unterbrechen. Durch die tabellarische Struktur werden unübersichtliche Textdateien vermieden.",
      Username: "Benutzername: Guest",
      Password: "Password: Guest",
    },
    {
      title: "StudyVibe",
      description: "Beschreibung für Slide 2.",
    },
    {
      title: "Data Analysis",
      description: "Beschreibung für Slide 3.",
    },
    {
      title: "Titel 4",
      description: "Beschreibung für Slide 4.",
    },
  ];

  const handleSlideClick = (index) => {
    console.log(`Slide ${index + 1} wurde geklickt.`);
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
          <SwiperSlide key={index} onClick={() => handleSlideClick(index)}>
            <div className="p-6 text-white border-1 bg-[#2e2257] border-primary rounded-lg shadow-md h-100">
              <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
              <p className="text-gray-300 mb-5">{slide.description}</p>
              {slide.Username && (
                <p className="text-gray-300">{slide.Username}</p>
              )}
              {slide.Password && (
                <p className="text-gray-300">{slide.Password}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
