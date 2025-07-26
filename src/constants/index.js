import {
  api,
  cpp,
  css,
  figma,
  git,
  graphql,
  html,
  javascript,
  aboutLogo,
  mu5,
  nextJs,
  node,
  python,
  react,
  sass,
  skype,
  spotify,
  certificate,
  certificate1,
  certificate2,
  certificate3,
  certificate4,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  email,
  flutter,
  nb,
  mobile,
  redux,
  typescript,
  vue,
  gitHub,
} from ".././assets/index";

import {
  HiMiniLanguage,
  HiQrCode,
  HiAdjustmentsHorizontal,
  HiOutlineDevicePhoneMobile,
  HiOutlineChartBar,
  HiOutlineWrenchScrewdriver,
  HiOutlineCloud,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
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
    Icon: HiOutlineDevicePhoneMobile,
    title: "Responsive Web Design",
    description:
      "Crafting clean, mobile-first interfaces using modern frameworks like Tailwind CSS & Material UI for optimal user experience.",
    color: "bg-color-1",
  },
  {
    id: 2,
    Icon: HiOutlineChartBar,
    title: "Data-Driven Solutions",
    description:
      "Implementing dashboards and analytics using APIs and charts to help users visualize and act on their data.",
    color: "bg-color-2",
  },
  {
    id: 3,
    Icon: HiOutlineWrenchScrewdriver,
    title: "Custom Web Applications",
    description:
      "Building scalable full-stack apps with React.js, Next.js, Node.js, Express.js, and TypeScript.",
    color: "bg-color-3",
  },
  {
    id: 4,
    Icon: HiOutlineCloud,
    title: "API Development & Integration",
    description:
      "Designing RESTful APIs and integrating third-party services like payment gateways, CRMs, and cloud storage.",
    color: "bg-color-4",
  },
  {
    id: 5,
    Icon: HiOutlineGlobeAlt,
    title: "Multilingual & SEO Optimization",
    description:
      "Creating fast, globally-accessible web apps with SEO best practices and multi-language support.",
    color: "bg-color-5",
  },
  {
    id: 6,
    Icon: HiOutlineShieldCheck,
    title: "Secure & Scalable Backend",
    description:
      "Ensuring reliable performance with JWT auth, validation, and secure data handling across all services.",
    color: "bg-color-6",
  },
];

// ! Skills icons

const icons = [
  {
    icon: git,
    size: "w-[30px] md:w-[50px] lg:w-[55px]", // smaller for small screens, original for large screens
    position: {
      top: "top-[0%]",
      left: "left-[0%]",
    },
  },
  {
    icon: html,
    size: "w-[45px] md:w-[75px] lg:w-[90px]",
    position: {
      top: "top-[40%]",
      left: "left-[0%]",
    },
  },
  {
    icon: react,
    size: "w-[45px] md:w-[75px] lg:w-[90px]",
    position: {
      top: "top-[0%]",
      left: "left-[40%]",
    },
  },
  {
    icon: nextJs,
    size: "w-[50px] md:w-[85px] lg:w-[100px]",
    position: {
      top: "top-[40%]",
      left: "left-[40%]",
    },
  },
  {
    icon: figma,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[20%]",
      left: "left-[25%]",
    },
  },
  {
    icon: css,
    size: "w-[45px] md:w-[75px] lg:w-[90px]",
    position: {
      top: "top-[40%]",
      left: "left-[85%]",
    },
  },
  {
    icon: javascript,
    size: "w-[45px] md:w-[75px] lg:w-[90px]",
    position: {
      top: "top-[83%]",
      left: "left-[40%]",
    },
  },
  {
    icon: python,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[20%]",
      left: "left-[80%]",
    },
  },
  {
    icon: cpp,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[20%]",
      left: "left-[40%]",
    },
  },
  {
    icon: api,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[20%]",
      left: "left-[60%]",
    },
  },
  {
    icon: email,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[20%]",
      left: "left-[7%]",
    },
  },
  {
    icon: flutter,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[0%]",
      left: "left-[20%]",
    },
  },
  {
    icon: graphql,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[0%]",
      left: "left-[68%]",
    },
  },
  {
    icon: nb,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[94%]",
      left: "left-[90%]",
    },
  },
  {
    icon: node,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[45%]",
      left: "left-[23%]",
    },
  },
  {
    icon: mobile,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[87%]",
      left: "left-[0%]",
    },
  },
  {
    icon: mu5,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[66%]",
      left: "left-[45%]",
    },
  },
  {
    icon: redux,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[43%]",
      left: "left-[67%]",
    },
  },
  {
    icon: skype,
    size: "w-[40px] md:w-[60px] lg:w-[66px]",
    position: {
      top: "top-[69%]",
      left: "left-[65%]",
    },
  },
  {
    icon: typescript,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[67%]",
      left: "left-[10%]",
    },
  },
  {
    icon: vue,
    size: "w-[35px] md:w-[55px] lg:w-[60px]",
    position: {
      top: "top-[66%]",
      left: "left-[80%]",
    },
  },
  {
    icon: gitHub,
    size: "w-[30px] md:w-[50px] lg:w-[55px]",
    position: {
      top: "top-[0%]",
      left: "left-[90%]",
    },
  },
];

// ! programs about my skills

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

// ? Eduction Card data

const eductionData = [
  {
    logo: aboutLogo,
    title: "JavaScript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta deleniti, nobis et rem modi alias. Tempore odit ullam illum nostrum! Saepe dicta perferendis placeat quibusdam quia a sint ipsum! ",
    linkName: "lest see this course",
    link: "http://www.link.com",
  },
  {
    logo: skype,
    title: "HTML & CSS",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta deleniti, nobis et rem modi alias. Tempore odit ullam illum nostrum! Saepe dicta perferendis placeat quibusdam quia a sint ipsum! ",
    linkName: "lest see this course",
    link: "http://www.link.com",
  },
  {
    logo: spotify,
    title: "React.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta deleniti, nobis et rem modi alias. Tempore odit ullam illum nostrum! Saepe dicta perferendis placeat quibusdam quia a sint ipsum! ",
    linkName: "lest see this course",
    link: "http://www.link.com",
  },
  {
    logo: aboutLogo,
    title: "Next.js",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe soluta deleniti, nobis et rem modi alias. Tempore odit ullam illum nostrum! Saepe dicta perferendis placeat quibusdam quia a sint ipsum! ",
    linkName: "lest see this course",
    link: "http://www.link.com",
  },
];

// ! Certificate cards data
const certificateCard = [
  {
    image: certificate,
    title: "web development JavaScript",
    year: "2021 - 2030",
  },
  {
    image: certificate1,
    title: "web development HTML & CSS",
    year: "2021 - 2024",
  },
  {
    image: certificate2,
    title: "web development React.js",
    year: "2023-2024",
  },
  {
    image: certificate3,
    title: "web development Next.js",
    year: "2024- now",
  },
  {
    image: certificate4,
    title: "SQL",
    year: "2020 - 2020/3",
  },
  {
    image: certificate,
    title: "web development",
    year: "2021",
  },
  {
    image: certificate3,
    title: "web development",
    year: "2021",
  },
  {
    image: certificate4,
    title: "web development",
    year: "2021",
  },
  {
    image: certificate,
    title: "web development",
    year: "2021",
  },
];

// ? project data for slider
const projectData = [
  {
    image: project1,
    title: "World mark",
    description:
      "What nextAs you see it is really easy to integrate Swiper into your website or app. So here are your next steps Go to API Documentation to learn more about all Swiper API..",
    technology: ["React.js, ", "Router, ", "css module, "],
    projectLink: [
      { name: "gitHub", link: "www.github/farhadzafar/worldmark" },
      { name: "world Make", link: "www.github/farhadzafar/worldmark" },
      { name: "code sandbox", link: "www.github/farhadzafar/worldmark" },
    ],
  },
  {
    image: project2,
    title: "World mark",
    description:
      "What nextAs you see it is really easy to integrate Swiper into your website or app. So here are your next steps Go to API Documentation to learn more about all Swiper API..",
    technology: ["React.js", "Router", "css module"],
    projectLink: [
      { name: "gitHub", link: "www.github/farhadzafar/worldmark" },
      { name: "world Make", link: "www.github/farhadzafar/worldmark" },
      { name: "code sandbox", link: "www.github/farhadzafar/worldmark" },
    ],
  },
  {
    image: project3,
    title: "World mark",
    description:
      "What nextAs you see it is really easy to integrate Swiper into your website or app. So here are your next steps Go to API Documentation to learn more about all Swiper API..",
    technology: ["React.js", "Router", "css module"],
    projectLink: [
      { name: "gitHub", link: "www.github/farhadzafar/worldmark" },
      { name: "world Make", link: "www.github/farhadzafar/worldmark" },
      { name: "code sandbox", link: "www.github/farhadzafar/worldmark" },
    ],
  },
  {
    image: project4,
    title: "World mark",
    description:
      "What nextAs you see it is really easy to integrate Swiper into your website or app. So here are your next steps Go to API Documentation to learn more about all Swiper API...",
    technology: ["React.js", "Router", "css module"],
    projectLink: [
      { name: "gitHub", link: "www.github/farhadzafar/worldmark" },
      { name: "world Make", link: "www.github/farhadzafar/worldmark" },
      { name: "code sandbox", link: "www.github/farhadzafar/worldmark" },
    ],
  },
  {
    image: project5,
    title: "World mark",
    description:
      "What nextAs you see it is really easy to integrate Swiper into your website or app. So here are your next steps Go to API Documentation to learn more about all Swiper API...",
    technology: ["React.js", "Router", "css module"],
    projectLink: [
      { name: "gitHub", link: "www.github/farhadzafar/worldmark" },
      { name: "world Make", link: "www.github/farhadzafar/worldmark" },
      { name: "code sandbox", link: "www.github/farhadzafar/worldmark" },
    ],
  },
  {
    image: project6,
    title: "World mark",
    description:
      "What nextAs you see it is really easy to integrate Swiper into your website or app. So here are your next steps Go to API Documentation to learn more about all Swiper API...",
    technology: [
      "React.js, ",
      "Router, ",
      "css module, ",
      "React Query, ",
      "API",
    ],
    projectLink: [
      { name: "gitHub", link: "www.github/farhadzafar/worldmark" },
      { name: "world Make", link: "www.github/farhadzafar/worldmark" },
      { name: "code sandbox", link: "www.github/farhadzafar/worldmark" },
    ],
  },
];

export {
  head,
  toDo,
  icons,
  skills,
  eductionData,
  certificateCard,
  projectData,
};
