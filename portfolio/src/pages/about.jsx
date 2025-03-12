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
  }

  return (
    <>
      <BulbImg />
      <div
        className="
          relative
          min-h-screen
          w-full
          text-white
          z-1
          overflow-hidden

          md:fixed
          md:flex
          md:items-center
          md:justify-center
          md:min-h-screen
        "
      >
        <div
          className="
            flex flex-col
            gap-10
            z-40
            pointer-events-none
            x-auto
            mt-10
            md:mt-0
            md:ml-50
          "
        >
          <div className="flex flex-col gap-10 md:flex-row md:gap-30 ">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              className="
                flex flex-col
                gap-5
                pointer-events-auto
                w-full md:w-1/3
              "
            >
              <h2 className="font-semibold text-2xl md:text-4xl">
                Von Daten zur <span className="text-primary">Software</span> –
                mein Weg zum Software Entwickler.
              </h2>
              <p className="text-gray-300">
                Während meiner Weiterbildung in der Datenanalyse habe ich meine
                Leidenschaft für Softwareentwicklung entdeckt. In der Zeit habe
                ich mir Full-Stack Development beigebracht und wurde dabei vom
                CEO der co-dex GmbH begleitet. Jetzt kombiniere ich meine
                Datenkenntnisse mit der Softwareentwicklung, indem ich
                beispielsweise mit SQL arbeite, um Datenbanken zu managen und
                die Daten in Python verarbeite. Anschließend werden diese Daten
                im Frontend dargestellt.
              </p>
              <div className="hidden pointer-events-auto">
                <ButtonMain
                  title="Lebenslauf herunterladen"
                  onClick={downloadPDF}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              className="
                flex flex-col
                gap-5
                pointer-events-auto
                w-full md:w-1/3
              "
            >
              <div className="flex flex-row md:flex-row gap-10">
                <ButtonLink
                  title="Sprachen"
                  textSize={buttonConfig.textSize}
                  onClick={() => handleTabClick("language")}
                  isActive={activeTab === "language"}
                />
                <ButtonLink
                  title="Softskills"
                  textSize={buttonConfig.textSize}
                  onClick={() => handleTabClick("skills")}
                  isActive={activeTab === "skills"}
                />
                <ButtonLink
                  title="Entwicklung"
                  textSize={buttonConfig.textSize}
                  onClick={() => handleTabClick("motivation")}
                  isActive={activeTab === "motivation"}
                />
              </div>
              <div className="w-full text-gray-300 h-32 overflow-y-auto sm:h-auto sm:overflow-hidde">
                {activeTab === "language" && (
                  <div className="flex flex-col gap-1">
                    <div>
                      <h2>Frontend: </h2>
                      <p className="flex items-center flex-wrap gap-2">
                        HTML
                        <FaHtml5 color="white" />, CSS
                        <RiTailwindCssFill color="white" />, JavaScript
                        <IoLogoJavascript color="white" />, React
                        <FaReact color="white" />
                      </p>
                    </div>
                    <div>
                      <h2>Backend: </h2>
                      <p className="flex items-center flex-wrap gap-2">
                        Python
                        <FaPython color="white" />, Django
                        <SiDjango color="white" />, SQL
                        <GrMysql color="white" />
                      </p>
                    </div>
                  </div>
                )}
                {activeTab === "skills" && (
                  <p>
                    Ich bin ein erfahrener Problemlöser, der komplexe Themen in
                    überschaubare Einzelschritte zerlegen kann, um Abläufe
                    besser zu verstehen. Durch meine Tätigkeit in der
                    Teamleitung habe ich gelernt, wie wichtig eine gute
                    Zusammenarbeit ist – Flexibilität und Zeitmanagement sind
                    dabei unverzichtbare Werkzeuge. Kritik betrachte ich als
                    wertvolles Feedback, das mir hilft, mich kontinuierlich
                    weiterzuentwickeln.
                  </p>
                )}
                {activeTab === "motivation" && (
                  <p>
                    Zunächst möchte ich mich intensiv in der Softwareentwicklung
                    etablieren und durch praxisnahe Projekte, kontinuierliche
                    Weiterbildung und den Austausch mit erfahrenen Entwicklern
                    mein technisches und methodisches Know-how vertiefen. Im
                    Anschluss plane ich, mich gezielt in DevOps
                    weiterzuentwickeln. Mein Ziel ist es, die Prozesse der
                    Softwarebereitstellung und -wartung zu optimieren, um so
                    effizientere und qualitativ hochwertigere Softwarelösungen
                    zu schaffen. Dabei setze ich auf moderne
                    Automatisierungstools und CI/CD-Pipelines, um die
                    Zusammenarbeit zwischen Entwicklung und Betrieb nahtlos zu
                    gestalten.
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
