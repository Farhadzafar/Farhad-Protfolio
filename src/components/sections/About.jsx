import { farhad } from "../../assets";

export default function About() {
  return (
    <div
      id="about"
      className="max-w-[1440px] my-0 mx-auto w-full h-[90%] bg-slate-50 flex justify-start gap-16"
    >
      <div className="w-[30%] bg-stone-100 py-20">
        <img className="w-[100%] rounded-full " src={farhad} alt="" />
      </div>

      <div className="w-[70%] pr-20">
        <span className=" span">About me</span>
        <h1 className=" h3">Who Am I?</h1>
        <p className=" p">
          My name is Farhad Ahmad Zafari, a dedicated software engineer from
          Afghanistan with a Bachelor’s degree in Computer Science, which I
          earned at Kandahar University between 2021 and 2024. I am passionate
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
