import {
  api,
  bgWhite,
  farhad1,
  farhad2,
  farhad3,
  farhad4,
  figma,
  git,
  gitHub,
  html,
  javascript,
  linkedin,
  mu5,
  next,
  nextJs,
  node,
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
      <div className="w-full overflow-hidden">
        {/* react, next.js, git icons */}
        <div className="w-full flex justify-center items-center space-x-4 lg:space-x-6">
          <img
            src={react}
            alt="React icon"
            className="w-10 md:w-12 lg:w-16 xl:w-20 absolute bottom-8 md:bottom-10 lg:bottom-12 right-8 md:right-10 lg:right-12 -z-1"
          />
          <img
            src={git}
            alt="Git icon"
            className="w-8 md:w-10 lg:w-12 xl:w-16 absolute top-20 md:top-24 lg:top-32 right-12 md:right-14 lg:right-16 -z-1"
          />
          <img
            src={nextJs}
            alt="Next.js icon"
            className="w-8 md:w-10 lg:w-12 xl:w-16 absolute top-24 md:top-28 lg:top-32 left-8 md:left-10 lg:left-12 -z-1"
          />
        </div>

        {/* Main content */}
        <div className="flex flex-col items-center lg:flex-row lg:space-x-8 mt-8">
          <img
            src={farhad1}
            alt="Profile"
            className="w-24 md:w-32 lg:w-40 xl:w-48 mb-4 lg:mb-0"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
              Hello, I'm Farhad!
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-6">
              Software Engineer specializing in full-stack development.
            </p>
            <Button className="mt-4">Get in Touch</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
