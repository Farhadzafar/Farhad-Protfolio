import { HiMiniArrowDownTray } from "react-icons/hi2";
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
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../../public/Farhad_Ahmad_Zafari.pdf"; // Replace with the actual path to your PDF file
    link.download = "Farhad.pdf"; // Replace with the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section>
      <div className="w-full overflow-hidden relative">
        {/* Icons for large screens */}
        <div className="w-full hidden lg:block">
          <img
            src={react}
            alt="react icon"
            className="w-[4rem] absolute bottom-12 right-10 -z-1"
          />
          <img
            src={git}
            alt="git icon"
            className="w-[3rem] absolute top-32 right-16 -z-1"
          />
          <img
            src={nextJs}
            alt="next js icon"
            className="w-[8rem] absolute top-28 right-[35%] -z-1 -rotate-45"
          />
        </div>

        <div className="w-full h-full z-20 flex flex-col-reverse lg:flex-row gap-8 my-20 items-center lg:items-start">
          {/* Content about me */}
          <div className="w-full lg:w-[55%] mt-10 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl leading-none">
              Hi,👋
              <br />
              <span className="font-semibold text-3xl md:text-4xl lg:text-5xl">
                I am <span className="text-color-3">Farhad Zafari</span>
              </span>
            </h1>
            <p className="text-base md:text-lg mb-6 mt-8">
              A{" "}
              <span className="bg-color-2/30 rounded-full px-2">
                <strong>frontend developer</strong> & UX/UI designer
              </span>{" "}
              crafting sleek, responsive designs that enhance user interaction
              with React.js, Next.js, MetrilUI, from Afghanistan. 😘
            </p>

            {/* Skills */}
            <div className="w-full flex flex-col  gap-4 items-center lg:flex-row lg:items-start  lg:justify-start  my-8">
              <strong className="w-auto text-xl text-center lg:text-left">
                Skills
              </strong>
              <ul className="flex flex-wrap gap-3 lg:gap-1 justify-center lg:justify-start">
                {[
                  figma,
                  nextJs,
                  html,
                  react,
                  redux,
                  css,
                  sass,
                  mu5,
                  javascript,
                  python,
                  api,
                  git,
                ].map((icon, index) => (
                  <li
                    key={index}
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-8 lg:h-8 transition-all "
                  >
                    <img
                      className="w-full hover:scale-110"
                      src={icon}
                      alt={`icon ${icon}`}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 justify-center lg:justify-start mt-11">
              <Button onClick={handleDownload}>
                Download CV{" "}
                <span>
                  {<HiMiniArrowDownTray className=" text-xl font-semibold" />}
                </span>
              </Button>
              {/* <Button href="#projects">Projects</Button> */}
            </div>
          </div>

          {/* Image of me */}
          <div className="w-full lg:w-[40%] my-8 lg:ml-32 flex justify-center lg:justify-start">
            <img
              className="w-[75%] md:w-[60%] lg:w-full rounded-full border-1 border-color-3 shadow-md shadow-color-3"
              src={farhad4}
              alt="Farhad Zafari"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
