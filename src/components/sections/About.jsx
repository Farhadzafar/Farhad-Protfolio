import { farhad } from "../../assets";

export default function About() {
  return (
    <div
      id="about"
      className="max-w-[1440px] my-0 mx-auto w-full h-auto bg-slate-50 flex flex-col md:flex-row justify-start gap-8 md:gap-16 p-4 md:p-8 "
    >
      <div className="w-full md:w-[30%] bg-stone-100 py-10 md:py-20 flex justify-center items-center">
        <img
          className="w-[80%] md:w-[100%] rounded-full"
          src={farhad}
          alt="Farhad Ahmad Zafari"
        />
      </div>

      <div className="w-full md:w-[70%] pr-4 md:pr-20 pb-8 md:pb-16 py-10 md:py-20 text-left lg:text-left sm:text-center">
        <span className="text-lg font-semibold text-gray-700">About me</span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Who Am I?
        </h1>
        <p className="text-base md:text-lg text-gray-700 mt-6 leading-relaxed">
          My name is Farhad Ahmad Zafari, a dedicated software engineer from
          Afghanistan with a Bachelor’s degree in Computer Science, which I
          earned at Kandahar University between 2022 and 2054. I am passionate
          about leveraging modern technologies such as Next.js, React.js, and
          Python to develop dynamic and robust full-stack web applications. My
          focus extends beyond functionality to ensure an engaging and visually
          compelling user experience, utilizing advanced UX/UI design
          principles. I am committed to building innovative, responsive, and
          efficient digital solutions that address user needs and industry
          standards.
        </p>
      </div>
    </div>
  );
}
