import { useState } from "react";
import Section from "../Section";
import Skills from "../Skills";
import Eduction from "../Eduction";
import Certificate from "../Certificate";

export default function Resume() {
  const [item, setItem] = useState("eduction");
  console.log(setItem);
  const classes = `w-full cursor-pointer border-b-[3px]  hover:border-color-3/60 hover:text-gray-500 py-4`;
  return (
    <Section has="resume" color="bg-slate-50" classes="py-24">
      <span className=" span">3+ years of experience</span>
      <h3 className=" h3 mb-8">My Resume</h3>

      <ul className="w-full grid grid-cols-4 justify-center items-center text-center font-medium mb-4">
        <li
          onClick={() => setItem("eduction")}
          className={`${classes} ${
            item === "eduction" ? "border-color-3 " : ""
          }`}
        >
          Eduction
        </li>
        <li
          onClick={() => setItem("skills")}
          className={` ${classes} ${
            item === "skills" ? "border-color-3 " : ""
          } `}
        >
          Skills
        </li>
        <li
          onClick={() => setItem("internship")}
          className={`${classes} ${
            item === "internship" ? "border-color-3 " : ""
          }`}
        >
          Internship
        </li>
        <li
          onClick={() => setItem("certificate")}
          className={`${classes} ${
            item === "certificate" ? "border-color-3 " : ""
          }`}
        >
          certificate
        </li>
      </ul>
      <div className="w-full h-full">
        {item === "skills" && <Skills />}
        {item === "eduction" && <Eduction />}
        {item === "certificate" && <Certificate />}
      </div>
    </Section>
  );
}
