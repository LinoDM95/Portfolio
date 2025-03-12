import React, { useState } from "react";
import BulbImg from "../components/images/bulb_img";
import CardCarousel from "../components/carousels/card_carousel";
import { motion } from "framer-motion";

import SnippetVault from "../../public/SnippetVault.png";
import StudyVibe from "../../public/StudyVibe.png";
import DataSmartPointAcademy from "../../public/DataSMart_Point_Academy.png";

// Mapping der Titel zu den importierten Bildern
const imageMapping = {
  snippetvault: SnippetVault,
  studyvibe: StudyVibe,
  datasmart_point_academy: DataSmartPointAcademy,
};

export default function Work() {
  const [hoveredSlide, setHoveredSlide] = useState(null);

  function handleSlideHover(index, slideData) {
    if (window.innerWidth < 768) {
      return;
    }

    if (index !== null) {
      setHoveredSlide({ index, slideData });
    } else {
      setHoveredSlide(null);
    }
  }
  function getImage(title) {
    const imageKey = title.replace(/\s+/g, "_").toLowerCase();
    return imageMapping[imageKey];
  }

  return (
    <>
      {/* Würfel NUR auf Desktop ab md anzeigen */}
      <div className="hidden md:block">
        <BulbImg />
      </div>

      {/* Container: Mobil stacked, Desktop nebeneinander */}
      <div
        className="
        flex 
        flex-col 
        items-center 
        md:justify-center 
        min-h-screen
        gap-4 
        text-white
        mx-4
        sm:mx-30
        md:flex-row
        md:mx-100
        md:gap-50
      "
      >
        {/* Linker Bereich: Hover-Bild oder Einleitungstext */}
        {hoveredSlide && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col md:gap-5 bg-[#2e2257] border border-primary p-4 rounded-lg w-full md:w-auto"
          >
            <img
              src={getImage(hoveredSlide.slideData.title)}
              alt={hoveredSlide.slideData.title}
            />
          </motion.div>
        )}

        {!hoveredSlide && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col md:gap-5 w-full md:w-auto"
          >
            <h2 className="font-semibold text-lg md:text-4xl">
              Karriere &amp; Projekte:{" "}
              <span className="text-primary">Mein persönlicher Werdegang</span>
            </h2>
            <p className="text-gray-300 overflow-x-scroll md:overflow-hidden h-30 sm:h-60">
              Auf meinem Weg als Entwickler habe ich mich zahlreichen
              Herausforderungen gestellt, die meine Leidenschaft für das Lösen
              komplexer Probleme und meinen Drang zur stetigen Weiterbildung
              widerspiegeln. Jedes meiner Projekte – sei es die datengetriebene
              Analyse, der Aufbau robuster Backend-Strukturen oder die Umsetzung
              intuitiver Frontend-Designs – hat mich persönlich weitergebracht.
              Auf dieser Seite teile ich meine Reise, präsentiere meine Erfolge
              und zeige, wie ich mit Begeisterung an ganzheitlichen und
              zukunftsweisenden Lösungen arbeite.
            </p>
          </motion.div>
        )}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="w-full md:w-100"
        >
          <CardCarousel onSlideHover={handleSlideHover} />
        </motion.div>
      </div>
    </>
  );
}
