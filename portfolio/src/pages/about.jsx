import { useState } from "react";
import { motion } from "framer-motion";
import ButtonLink from "../components/buttons/button_link";
import ButtonMain from "../components/buttons/button_main";

import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import BulbImg from "../components/images/bulb_img";

export default function About() {
  const [activeTab, setActiveTab] = useState("language");

  const buttonConfig = {
    textSize: "font-bold",
  };

  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  function downloadPDF() {
    const link = document.createElement("a");
    link.href = "/Lebenslauf_Lino_De_Marco.pdf"; 
    link.download = "Lebenslauf_Lino_De_Marco.pdf"; 
    link.click();
  };

  return (
    <>
      <BulbImg />
      <div className="fixed flex items-center justify-center min-h-screen text-white z-1">
        <div className="flex flex-col gap-10 z-40 pointer-events-none ml-50">
          <div className="flex gap-30">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              className="flex flex-col w-1/3 gap-5">
              <h2 className="font-semibold text-4xl ">
              Von Daten zur  <span className="text-primary">Software</span> – mein Weg zum Software Entwickler.
              </h2>
              <p className="text-gray-300">
              Während meiner Weiterbildung in der Datenanalyse habe ich meine Leidenschaft für Softwareentwicklung entdeckt. In der Zeit habe ich mir Full-Stack Development beigebracht und wurde dabei vom CEO der co-dex GmbH begleitet. Jetzt kombiniere ich meine Datenkenntnisse mit der Softwareentwicklung, indem ich beispielsweise mit SQL arbeite, um Datenbanken zu managen und die Daten in Python verarbeite. Anschließend werden diese Daten im Frontend dargestellt.
              </p>
              <div className="pointer-events-auto ">
                <ButtonMain title="Lebenslauf herunterladen" onClick={downloadPDF}/>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              className="flex flex-col w-1/3 gap-5 pointer-events-auto"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <ButtonLink
                  title="Sprachen"
                  textSize={buttonConfig.textSize}
                  onClick={() => handleTabClick("language")}
                  isActive={activeTab === "language"}
                />
                <ButtonLink
                  title="Skills"
                  textSize={buttonConfig.textSize}
                  onClick={() => handleTabClick("skills")}
                  isActive={activeTab === "skills"}
                />
                <ButtonLink
                  title="Motivation"
                  textSize={buttonConfig.textSize}
                  onClick={() => handleTabClick("motivation")}
                  isActive={activeTab === "motivation"}
                />
              </div>
              <div className=" w-full text-gray-300">
                {activeTab === "language" && (
                  <div className="flex flex-col gap-1">
                    <div>
                      <h2>Frontend: </h2>
                      <p className="flex items-center">
                        HTML&nbsp;
                        <FaHtml5 color="white" />, CSS&nbsp;
                        <RiTailwindCssFill color="white" />, JavaScript&nbsp;
                        <IoLogoJavascript color="white" />, React&nbsp;
                        <FaReact color="white" />
                      </p>
                    </div>
                    <div>
                      <h2>Backend: </h2>
                      <p className="flex items-center">
                        Python&nbsp;
                        <FaPython color="white" />, Django&nbsp;
                        <SiDjango color="white" />, SQL&nbsp;
                        <GrMysql color="white" />
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "skills" && (
                  <p>
                    2 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore, non culpa ea sint expedita rem in eveniet fugiat,
                    aspernatur, atque commodi? Impedit, commodi! Dicta, hic
                    vero? Sapiente minima repellendus maxime.
                  </p>
                )}
                {activeTab === "motivation" && (
                  <p>
                    3 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Labore, non culpa ea sint expedita rem in eveniet fugiat,
                    aspernatur, atque commodi? Impedit, commodi! Dicta, hic
                    vero? Sapiente minima repellendus maxime.
                  </p>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
