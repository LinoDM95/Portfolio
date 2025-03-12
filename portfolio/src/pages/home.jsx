import Particle from "../components/animations/particles";
import Avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden ">
      <Particle />
      <div className="flex flex-col xl:flex-row items-center justify-center z-5 w-full h-full  overflow-hidden m-20 ">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="flex flex-col text-white gap-5 w-full xl:w-1/3 h-full justify-center px-4 sm:px-0 "
        >
          <div className="font-semibold text-4xl mt-10 sm:mt-50">
            <h1 className="font-code text-sm">Hi, mein Name ist</h1>
            <h2>Lino De Marco</h2>
            <h3>
              Ich bin
              <span className="text-primary"> Software Entwickler.</span>
            </h3>
          </div>
          <p className="text-sm text-gray-300 h-80 sm:h-full overflow-y-auto">
            Schon immer war es meine Leidenschaft, Probleme zu lösen – eine
            Fähigkeit, die mir in der Softwareentwicklung und Projektbearbeitung
            zugutekommt. Mit meiner Expertise, komplexe Daten im Backend zu
            verarbeiten und stabile, robuste Strukturen aufzubauen, sorge ich
            für effiziente und zuverlässige Anwendungen. Gleichzeitig setze ich
            vorgegebene Designs im Frontend präzise um und kreiere intuitive
            Benutzeroberflächen. Diese Kombination ermöglicht es mir, als
            Full-Stack-Entwickler ganzheitliche und innovative Lösungen zu
            realisieren, die sowohl funktional als auch benutzerfreundlich sind.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="flex h-full justify-end items-end"
        >
          <motion.div>
            <img
              src={Avatar}
              alt="avatar"
              className="hidden w-38 sm:block sm:w-85 md:w-99 lg:w-110 xl:w-auto h-auto object-contain self-end"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
