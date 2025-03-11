import React, { useState } from "react";
import BulbImg from "../components/images/bulb_img";
import CardCarousel from "../components/carousels/card_carousel";
import { motion } from "framer-motion";
export default function Work() {
  const [hoveredSlide, setHoveredSlide] = useState(null);

  function handleSlideHover(index, slideData) {
    if (index !== null) {
      setHoveredSlide({ index, slideData });
    } else {
      setHoveredSlide(null);
    }
  }
  function getImagePath(title) {
    const imageTitle = title.replace(/\s+/g, "").toLowerCase();
    return `/public/${imageTitle}.png`;
  };

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
              src={getImagePath(hoveredSlide.slideData.title)}
              alt={hoveredSlide.slideData.title}
            />
          </motion.div>
        )}
        {!hoveredSlide && (
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
            className="flex flex-col gap-5"
          >
            <h2 className="font-semibold text-4xl text-white">
              Überwundene <span className="text-primary">Meilensteine</span>
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              ipsam! Debitis voluptas ullam deleniti. Molestias nobis distinctio
              cumque tempora vel odio a aliquam aliquid. A praesentium error
              excepturi itaque ratione!
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
