import { useState } from "react";

import ButtonLink from "../components/buttons/button_link";

import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import LampScene from "../components/animations/lampscene"

export default function About() {
  const [activeTab, setActiveTab] = useState("language");

  const buttonConfig = {
    textSize: "font-bold",
  };

  // Dynamische Click-Handler-Funktion
  function handleTabClick(tab) {
    setActiveTab(tab);
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-white ml-100 ">
      <div className="flex flex-col gap-10 ">
        <div className="flex gap-10">
          <div className="flex flex-col w-1/4 gap-5">
            <h2 className="font-semibold text-4xl ">
              Hier ist <span className="text-primary">Platz</span> für was
              kreatives?
            </h2>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem,
              ipsam! Debitis voluptas ullam deleniti. Molestias nobis distinctio
              cumque tempora vel odio a aliquam aliquid. A praesentium error
              excepturi itaque ratione!
            </p>
          </div>

          <div className="flex flex-col w-1/4 gap-5">
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
                  aspernatur, atque commodi? Impedit, commodi! Dicta, hic vero?
                  Sapiente minima repellendus maxime.
                </p>
              )}
              {activeTab === "motivation" && (
                <p>
                  3 Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Labore, non culpa ea sint expedita rem in eveniet fugiat,
                  aspernatur, atque commodi? Impedit, commodi! Dicta, hic vero?
                  Sapiente minima repellendus maxime.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex">
          <p>10+ Dinge</p>
          <p>10+ Dinge</p>
          <p>10+ Dinge</p>
          <p>10+ Dinge</p>
        </div>

      

      </div>
    </div>
  );
}
