import { useState } from "react";
import Section from "../Section";
import Skills from "../Skills";
import Eduction from "../Eduction";
import Certificate from "../Certificate";
import Entership from "../Entership";

export default function Resume() {
  const [item, setItem] = useState("eduction");

  const buttonClasses = `
    border border-color-3 text-color-3 rounded-full px-3 py-1 text-sm
    transition duration-200 ease-in-out hover:bg-color-3 hover:text-white
    focus:outline-none focus:ring-2 focus:ring-color-3 focus:ring-opacity-50
  `;
  const activeButtonClasses = `
    bg-color-3 text-white border-none
  `;

  return (
    <Section has="resume" color="bg-slate-50" classes="py-24">
      <span className="span">3+ years of experience</span>
      <h3 className="h3 mb-8">My Resume</h3>
      <div className="w-full text-center flex justify-center">
        <div className="w-full sm:w-3/4 text-center font-medium mb-4 flex justify-center gap-2 sm:gap-4">
          <button
            onClick={() => setItem("eduction")}
            className={`${buttonClasses} ${
              item === "eduction" ? activeButtonClasses : ""
            }`}
          >
            Eduction
          </button>
          <button
            onClick={() => setItem("skills")}
            className={`${buttonClasses} ${
              item === "skills" ? activeButtonClasses : ""
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => setItem("internship")}
            className={`${buttonClasses} ${
              item === "internship" ? activeButtonClasses : ""
            }`}
          >
            Internship
          </button>
          <button
            onClick={() => setItem("certificate")}
            className={`${buttonClasses} ${
              item === "certificate" ? activeButtonClasses : ""
            }`}
          >
            Certificate
          </button>
        </div>
      </div>
      <div className="w-full h-full transition-opacity duration-300">
        {item === "skills" && <Skills />}
        {item === "eduction" && <Eduction />}
        {item === "certificate" && <Certificate />}
        {item === "internship" && <Entership />}
      </div>
    </Section>
  );
}
