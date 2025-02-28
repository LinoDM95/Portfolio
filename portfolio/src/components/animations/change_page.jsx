import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ChangePage({ onComplete }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete(); // Callback, um den Seiteninhalt zu laden
    }, 1000); // 1 Sekunde Animation

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null; // Sobald die Animation fertig ist, wird sie entfernt

  return (
    <motion.div
      initial={{ opacity: 1, scaleX: 1 }}
      animate={{ opacity: 0, scaleX: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 bg-black z-50 flex items-center justify-center text-white text-3xl"
    >
      Lade neue Seite...
    </motion.div>
  );
}
