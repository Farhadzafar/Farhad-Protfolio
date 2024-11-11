import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { logo } from "../assets";
import { head } from "../constants";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpen]);

  return (
    <div className="fixed top-0 left-0 bg-slate-50 border-b-[1px] border-color-3 flex justify-between items-center w-full z-40 px-2 py-4 lg:px-20">
      <a href="#">
        <img
          src={logo}
          alt="Farhad.io logo"
          className="w-[8rem] lg:w-[10rem]"
        />
      </a>

      <div className="lg:hidden">
        <button onClick={toggleMenu} className="">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <ul
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col fixed inset-0 top-16 justify-center items-center w-full bg-slate-50 lg:flex lg:flex-row lg:static lg:w-auto`}
      >
        {head.map((item) => (
          <li className="my-2 lg:my-0 lg:ml-8" key={item.id}>
            <a
              className="text-lg lg:text-base hover:text-color-3 py-2 px-4 lg:py-0 lg:px-0 rounded-lg hover:bg-color-3/10 transition duration-200 ease-in-out"
              href={item.url}
              onClick={closeMenu}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>

      <span className="hidden lg:inline-block">
        <Button>Contact Us</Button>
      </span>
    </div>
  );
}
