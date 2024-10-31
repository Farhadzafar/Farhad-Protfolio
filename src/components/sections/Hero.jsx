import {
  api,
  bgWhite,
  css,
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
          {/* <img
            src={figma}
            alt="react icon"
            className="w-[8rem] absolute top-20 right-[40%] -z-1 rotate-45"
            /> */}

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
