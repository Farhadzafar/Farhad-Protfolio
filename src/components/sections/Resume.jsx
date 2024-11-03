// import { useState } from "react";
import Section from "../Section";
import Skills from "../Skills";

export default function Resume() {
  // const [item, setItem] = useState("skills");
  const classes = `w-full cursor-pointer border-b-[3px]  hover:border-color-3/60 hover:text-gray-500 py-4`;
  return (
    <Section has="resume" color="bg-slate-50" classes="py-24">
      <span className=" span">3+ years of experience</span>
      <h3 className=" h3 mb-8">My Resume</h3>

      <ul className="w-full grid grid-cols-4 justify-center items-center text-center font-medium ">
        <li className={`${classes}`}>Eduction</li>
        <li className={` ${classes} border-color-3 `}>Skill</li>
        <li className={`${classes}`}>Internship </li>
        <li className={`${classes}`}>srtipcat</li>
      </ul>

      <div className="w-full h-[21rem]">
        <Skills />
      </div>
    </Section>
  );
}
