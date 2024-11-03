import {
  api,
  cpp,
  css,
  figma,
  git,
  graphql,
  html,
  javascript,
  mu5,
  nextJs,
  node,
  python,
  react,
  sass,
} from ".././assets/index";

import {
  HiMiniLanguage,
  HiQrCode,
  HiAdjustmentsHorizontal,
} from "react-icons/hi2";

const head = [
  {
    id: 1,
    name: "About",
    url: "#about",
  },
  {
    id: 2,
    name: "Features",
    url: "#features",
  },
  {
    id: 3,
    name: "Resume",
    url: "#resume",
  },
  {
    id: 4,
    name: "Projects",
    url: "#projects",
  },
  {
    id: 5,
    name: "Testimonial",
    url: "#testimonial",
  },
  {
    id: 6,
    name: "Contact",
    url: "#contact",
  },
];

// ! what can I do cards data.

const toDo = [
  {
    id: 1,
    Icon: HiMiniLanguage,
    title: "Speaking",
    desorption:
      " i can make design in adob XD and figma with beatifull lyoute.",
    color: "bg-color-4",
  },
  {
    id: 2,
    Icon: HiQrCode,
    title: "make ux/ui design",
    desorption:
      " i can make design in adob XD and figma with beatifull lyoute.",
    color: "bg-color-2",
  },
  {
    id: 3,
    Icon: HiAdjustmentsHorizontal,
    title: "Codeing in 3 langnuge",
    desorption:
      " i can make design in adob XD and figma with beatifull lyoute.",

    color: "bg-color-3",
  },
];

// ! Skills icons

const icons = [
  {
    icon: git,
    size: "w-[54px]",
    position: {
      top: "top-[25%]",
      left: "left-[25%]",
    },
  },
  {
    icon: html,
    size: "w-[44px]",
    position: {
      top: "top-[30%]",
      left: "left-[30%]",
    },
  },
  {
    icon: react,
    size: "w-[70px]",
    position: {
      top: "top-[10%]",
      left: "left-[10%]",
    },
  },
  {
    icon: nextJs,
    size: "w-[120px]",
    position: {
      top: "top-[50%]",
      left: "left-[50%]",
    },
  },
  {
    icon: figma,
    size: "w-[50px]",
    position: {
      top: "top-[75%]",
      left: "left-[50%]",
    },
  },
  {
    icon: css,
    size: "w-[80px]",
    position: {
      top: "top-[0%]",
      left: "left-[0%]",
    },
  },
  {
    icon: javascript,
    size: "w-[110px]",
    position: {
      top: "top-[0%]",
      left: "left-[80%]",
    },
  },
  {
    icon: python,
    size: "w-[90px]",
    position: {
      top: "top-[100%]",
      left: "left-[80%]",
    },
  },
  {
    icon: cpp,
    size: "w-[54px]",
    position: {
      top: "top-[100%]",
      left: "left-[0%]",
    },
  },
];

// ! data about my skills

const skills = [
  {
    skill: "HTML",
    icon: html,
    width: "w-[95%]",
    personates: 95,
  },
  {
    skill: "CSS",
    icon: css,
    width: "w-[90%]",
    personates: 90,
  },
  {
    skill: "JavaScript",
    icon: javascript,
    width: "w-[80%]",
    personates: 80,
  },
  {
    skill: "React.js",
    icon: react,
    width: "w-[87%]",
    personates: 87,
  },
  {
    skill: "Next.js",
    icon: nextJs,
    width: "w-[75%]",
    personates: 75,
  },
  {
    skill: "Sass",
    icon: sass,
    width: "w-[90%]",
    personates: 90,
  },
  {
    skill: "Tailwind",
    icon: node,
    width: "w-[92%]",
    personates: 92,
  },
  {
    skill: "Materiel UI",
    icon: mu5,
    width: "w-[83%]",
    personates: 83,
  },
  {
    skill: "SQL",
    icon: graphql,
    width: "w-[74%]",
    personates: 74,
  },
  {
    skill: "API",
    icon: api,
    width: "w-[89%]",
    personates: 89,
  },
  {
    skill: "Python",
    icon: python,
    width: "w-[54%]",
    personates: 54,
  },
];

export { head, toDo, icons, skills };
