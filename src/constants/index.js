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
  project7,
  project8,
  email,
  flutter,
  nb,
  mobile,
  redux,
  typescript,
  vue,
  gitHub,
  project20,
  project10,
  project9,
} from ".././assets/index";

import {
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
    image: project1, // Replace with a screenshot or logo representing "DevBlog‑Roan"
    title: "DevBlog‑Roan",
    description:
      "DevBlog‑Roan is a developer hub for sharing blog posts, code snippets, curated learning resources, and a structured developer roadmap. It's built to help developers progress through blog-style tutorials, code examples, and pathway guidance.",
    technology: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    projectLink: [
      {
        name: "Github",
        link: "github.com/Farhadzafar/blag",
      },
      {
        name: "Live Site",
        link: "devblog-roan.vercel.app/",
      },
    ],
  },
  {
    image: project2, // Replace with a screenshot or icon of the platform
    title: "Book Summary Upload & Share",
    description:
      "Book Summary Upload & Share is a collaborative platform that enables users to upload, browse, and share concise book summaries. Built for readers and learners, it simplifies knowledge sharing and discovery through a clean, intuitive interface.",
    technology: ["React.js", "Vercel", "CSS Modules"],
    projectLink: [
      {
        name: "Github",
        link: "github.com/Farhadzafar/05_book-summary-upload-and-share",
      },
      {
        name: "Live Site",
        link: "05-book-summary-upload-and-share.vercel.app/",
      },
    ],
  },
  {
    image: project3,
    title: "Fatwa Admin Dashboard",
    description:
      "The Fatwa Admin Dashboard provides administrative insights across content types—books, articles, research, and fatwas. Administrators can view counts, monitor activity, and manage the platform’s knowledge base through a user-friendly interface.",
    technology: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "Web Analytics",
    ], // Web Analytics optional
    projectLink: [
      {
        name: "Github",
        link: "github.com/Farhadzafar/islamic-fatwa-Admin",
      },
      {
        name: "Live Admin Dashboard",
        link: "fatwa-admin.vercel.app/admin",
      },
    ],
  },
  {
    image: project4, // Use a screenshot or logo of the site
    title: "IslamicFatwa",
    description:
      "IslamicFatwa is an Islamic knowledge platform offering a rich repository of books, research papers, articles, and educational resources on Islamic jurisprudence, theology, and spiritual topics. It aims to empower learners and seekers with credible, structured content in both Arabic and other languages.",
    technology: [
      "Next.js",
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
    ],
    projectLink: [
      { name: "GitHub", link: "github.com/Farhadzafar/Frontend7" },
      { name: "Live Site", link: "afislamicfatwa.vercel.app/" },
    ],
  },
  {
    image: project5, // Add a company logo or system UI screenshot
    title: "BorderlessDevs",
    description:
      "BorderlessDevs is a digital software company focused on designing and developing borderless digital systems, platforms, and modern web/mobile applications. We build tools that empower businesses, institutions, and communities—combining innovation with simplicity to create scalable digital ecosystems.",
    technology: [
      "Next.js",
      "Node.js",
      "React Native",
      "Tailwind CSS",
      "MongoDB",
      "Prisma",
      "Vercel",
      "Render",
    ],
    projectLink: [
      { name: "Website", link: "afteach.vercel.app/" }, // Replace with real domain if different
      // { name: "GitHub", link: "https://github.com/Farhadzafar" }, // Optional, or company org repo
    ],
  },
  {
    image: project7, // Add a dashboard or landing screenshot
    title: "TechFix Repair App",
    description:
      "TechFix Repair App is a modern tool for repair shops and technicians to manage clients, track service tickets, and stay organized. The platform offers authentication, role-based dashboards, and real‑time statistics for repairs, customers, and work orders.",
    technology: ["React.js", "TypeScript", "Tailwind CSS", "Vercel"],
    projectLink: [
      {
        name: "Github",
        link: "github.com/Farhadzafar/TechFix-repair-app",
      },
      { name: "Live Site", link: "tech-fix-repair-app.vercel.app/" },
    ],
  },
  {
    image: project9,
    title: "Gem FitTrack",
    description:
      "Gem FitTrack is a fitness tracking platform where users can monitor workouts, add fitness goals, and follow their health journey. Designed with a clean interface, it supports personal goal-setting, progress tracking, and easy navigation through workout routines.",
    technology: ["React.js", "Tailwind CSS", "TypeScript", "Vercel"],
    projectLink: [
      { name: "GitHub", link: "github.com/Farhadzafar/01_gem-FitTrack" },
      { name: "Live Site", link: "01-gem-fit-track.vercel.app" },
    ],
  },
  {
    image: project10,
    title: "Gem FitTrack",
    description:
      "Gem FitTrack is a fitness tracking platform where users can monitor workouts, add fitness goals, and follow their health journey. Designed with a clean interface, it supports personal goal-setting, progress tracking, and easy navigation through workout routines.",
    technology: ["React.js", "Tailwind CSS", "TypeScript", "Vercel"],
    projectLink: [
      { name: "GitHub", link: "github.com/Farhadzafar/01_gem-FitTrack" },
      { name: "Live Site", link: "01-gem-fit-track.vercel.app" },
    ],
  },
  {
    image: project20,
    title: "Gem FitTrack",
    description:
      "Gem FitTrack is a fitness tracking platform where users can monitor workouts, add fitness goals, and follow their health journey. Designed with a clean interface, it supports personal goal-setting, progress tracking, and easy navigation through workout routines.",
    technology: ["React.js", "Tailwind CSS", "TypeScript", "Vercel"],
    projectLink: [
      { name: "GitHub", link: "github.com/Farhadzafar/01_gem-FitTrack" },
      { name: "Live Site", link: "01-gem-fit-track.vercel.app" },
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
