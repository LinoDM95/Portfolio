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
      description:
        "StudyVibe ist eine Online-Plattform, die Mathematik durch Animationen und interaktive Elemente verständlich macht. Nutzer absolvieren verschiedene Mathe-Kurse, in denen komplexe Inhalte visuell vermittelt werden. Als Nebenprojekt, an dem ich mit zwei Partnern arbeite, bin ich für die Full-Stack-Entwicklung und -Wartung verantwortlich. Obwohl StudyVibe noch in Entwicklung ist, freuen wir uns auf spannende Updates.",
    },
    {
      title: "DataSmart Point Academy",
      description:
        "Der Träger DataSmart Point hat mir durch seine datengetriebene Weiterbildung grundlegende Konzepte in der Analyse von Daten sowie in der Erstellung skalierbarer Datenbanken vermittelt. Dank DataSmartPoint kann ich die Softwareentwicklung gekonnt mit Datenanalyse und Datenbankdesign im Full-Stack verknüpfen. Dadurch kann ich auch komplexe Projekte effizient und zielgerichtet umsetzen.",
      Url: "https://datasmartpoint.com/",
    },
  ];

  function handleMouseEnter(index) {
    if (onSlideHover) {
      onSlideHover(index, slidesData[index]);
    }
  }

  function handleMouseLeave() {
    if (onSlideHover) {
      onSlideHover(null, null);
    }
  }

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
                  <a href={slide.Url} target="_blank" rel="noopener noreferrer">
                    {slide.Url}
                  </a>
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
