import BulbImg from "../components/images/bulb_img";
import CardCarousel from "../components/carousels/card_carousel";
import { motion } from "framer-motion";
export default function Work() {
  return (
    <>
      <BulbImg />

      <div className="flex items-center justify-center min-h-screen mx-100 gap-50">
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
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="w-100"
        >
          <CardCarousel />
        </motion.div>
      </div>
    </>
  );
}
