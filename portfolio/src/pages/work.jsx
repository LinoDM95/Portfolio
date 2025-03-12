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
    if (index !== null) {
      setHoveredSlide({ index, slideData });
    } else {
      setHoveredSlide(null);
    }
  }

  // Nutzt das Mapping, um den korrekten Import zu erhalten
  function getImage(title) {
    const imageKey = title.replace(/\s+/g, "_").toLowerCase();
    return imageMapping[imageKey];
  }

  return (
    <>
      <BulbImg />
      <div className="flex items-center justify-center min-h-screen mx-100 gap-50">
        {hoveredSlide && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex flex-col gap-5 bg-[#2e2257] border-1 border-primary p-4 rounded-lg"
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
            className="flex flex-col gap-5"
          >
            <h2 className="font-semibold text-4xl text-white">
              Karriere & Projekte:{" "}
              <span className="text-primary">Mein persönlicher Werdegang</span>
            </h2>
            <p className="text-gray-300">
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
          className="w-100"
        >
          <CardCarousel onSlideHover={handleSlideHover} />
        </motion.div>
      </div>
    </>
  );
}
