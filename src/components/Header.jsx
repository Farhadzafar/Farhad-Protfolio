import { logo } from "../assets";
import { head } from "../constants";
import Button from "./Button";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 bg-slate-50 border-b-[1px] border-color-3 flex justify-between content-center w-full z-40 px-10 py-4">
      <a href="#">
        <img src={logo} alt="Farhad.io logo" className="w-[45px]" />
      </a>

      <ul className="fixed top-10 flex  justify-center content-center  flex-col  lg:flex-row lg:static ">
        {head.map((itme) => (
          <li className=" ml-8" key={itme.id}>
            <a className=" hover:text-color-3" href={itme.url}>
              {itme.name}
            </a>
          </li>
        ))}
      </ul>
      <span className=" hidden lg:inline-block">
        <Button>contact us</Button>
      </span>
    </div>
  );
}
