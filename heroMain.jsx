import {
  api,
  css,
  farhad4,
  figma,
  git,
  html,
  javascript,
  mu5,
  nextJs,
  python,
  react,
  redux,
  sass,
} from "../../assets";
import Button from "../Button";
import Section from "../Section";

export default function Hero() {
  return (
    <Section>
      <div className="w-full overflow-hidden  ">
        {/* react next.js git icons */}
        <div className=" hidden w-full lg:inline-block ">
          <img
            src={react}
            alt="react icon"
            className="w-[4rem] absolute bottom-12 right-10   -z-1"
          />
          <img
            src={git}
            alt="git icon"
            className="w-[3rem] absolute top-32 right-16 -z-1"
          />

          <img
            src={nextJs}
            alt="next js icon"
            className=" w-[8rem] absolute top-28 right-[35%] -z-1 -rotate-45"
          />
        </div>

        <div className=" w-full h-full z-20 flex gap-8 my-20">
          {/* content about me  */}
          <div className="w-[55%] mt-10 ">
            <h1 className="text-6xl leading-none">
              Hi,👋
              <br />
              <span className=" font-semibold text-5xl">
                I am<span className="text-color-3"> Farhad Zafari</span>
              </span>
            </h1>
            <p className="mb-6 mt-8 p ">
              A{" "}
              <span className="bg-color-2/30 rounded-full px-1">
                <strong>frontend developer</strong> & UX/UI designer
              </span>
              to Crafting sleek, responsive designs that enhance user
              interaction with React.js, Next.js, MetrilUI, from Afghanistan.😘
            </p>

            {/* # skill of  */}
            <div className="w-full h-auto flex justify-start content-center gap-2 my-8">
              <strong className="mt-1 text-xl">Skill</strong>
              <ul className=" flex content-center gap-[1px] justify-start">
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={figma} alt={`icon ${figma}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={nextJs} alt={`icon ${nextJs}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={html} alt={`icon ${html}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={react} alt={`icon ${react}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={redux} alt={`icon ${redux}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={css} alt={`icon ${css}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={sass} alt={`icon ${sass}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={mu5} alt={`icon ${mu5}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img
                    className="w-full"
                    src={javascript}
                    alt={`icon ${javascript}`}
                  />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={python} alt={`icon ${python}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={api} alt={`icon ${api}`} />
                </li>
                <li className="w-[30px] h-[30px]">
                  <img className="w-full" src={git} alt={`icon ${git}`} />
                </li>
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 content-end w-auto h-auto justify-start mt-11">
              <Button>Download CV</Button>
              {/* <Button herf="#projects">Projects</Button> */}
            </div>
          </div>

          {/* Image of me */}
          <div className="w-[40%] my-8 ml-32 ">
            <img
              className="w-full rounded-full border-1 border-color-3 shadow-md  shadow-color-3"
              src={farhad4}
              alt=""
            />
            {/* <div className="flex justify-center content-center gap-3 ml-10  mt-[1rem]">
                <a href="#">
                  <img className="w-[30px]" src={gitHub} alt="github icon" />
                </a>
                <a href="#">
                  <img className="w-[30px]" src={linkedin} alt="Linkedin icon" />
                </a>
              </div> */}
          </div>
        </div>
      </div>
    </Section>
  );
}


// // ///////////////////////////////////////////

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
      <div className="w-full text-center flex justify-center">
        <ul className="w-3/4 grid grid-cols-4 justify-center items-center text-center font-medium mb-4">
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
      </div>
      <div className="w-full h-full">
        {item === "skills" && <Skills />}
        {item === "eduction" && <Eduction />}
        {item === "certificate" && <Certificate />}
      </div>
    </Section>
  );
}



// ///////////////////////////////////////////////////
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

const testimonials = [
  {
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
  },
  {
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
  },
  {
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
  },
  {
    name: "Lisa Redfern",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It is a long established fact that a reader will be distracted by the readable its layout.",
    rating: 5,
  },
  {
    name: "John Doe",
    text: "The service was amazing! I would highly recommend it to anyone.",
    rating: 4,
  },
  {
    name: "Alice Smith",
    text: "Exceptional quality and great customer support.",
    rating: 5,
  },
  // Add more testimonials as needed
];

export default function Testimonials() {
  return (
    <div className="w-full py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Clients Say
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-5">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927C9.432 1.905 10.567 1.905 10.951 2.927l1.378 3.73a1 1 0 00.95.69h3.951c1.054 0 1.497 1.357.683 2.019l-3.3 2.516a1 1 0 00-.364 1.118l1.338 3.745c.383 1.074-.874 1.973-1.8 1.319l-3.194-2.308a1 1 0 00-1.134 0L6.244 17.06c-.926.654-2.183-.245-1.8-1.319l1.338-3.745a1 1 0 00-.364-1.118l-3.3-2.516c-.814-.662-.371-2.019.683-2.019h3.951a1 1 0 00.95-.69l1.378-3.73z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
