// import { useState, useEffect } from "react";
// import { projectData } from "../constants";
// import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// export default function ProjectSlide() {
//   const data = projectData;
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isHovered, setIsHovered] = useState(false);

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? data.length - 1 : prevIndex - 1
//     );
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === data.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentIndex(index);
//   };

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowRight") {
//         handleNext();
//       } else if (event.key === "ArrowLeft") {
//         handlePrev();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   useEffect(() => {
//     if (isHovered) return;

//     const interval = setInterval(() => {
//       handleNext();
//     }, 5000); // Change slide every 5 seconds

//     return () => clearInterval(interval);
//   }, [currentIndex, isHovered]);

//   return (
//     <div className="relative w-full overflow-hidden">
//       <div
//         className="flex items-center transition-transform ease-out duration-500 scale(0.95) rotate(2deg)"
//         style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//       >
//         {data.map((project, i) => (
//           <div
//             key={i}
//             className="w-full flex-shrink-0 px-4 hover:opacity-75"
//             style={{
//               flex: "0 0 100%",
//               transform: "perspective(5000px) rotateY(28deg) scale(0.9)",
//               transition: "transform .5s ease, opacity 1s ease",
//             }}
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <div
//               className="w-full pt-6 pb-8 mx-auto mt-4 shadow-lg rounded-lg border-2 max-w-9xl transform transition-transform ease-out duration-5000"
//               style={{
//                 transform: `rotate(${i === currentIndex ? 0 : 5}deg)`,
//                 boxShadow:
//                   i === currentIndex
//                     ? "0 10px 20px rgba(0,0,0,0.2)"
//                     : "0 5px 10px rgba(0,0,0,0.1)",
//               }}
//             >
//               <div className="w-full h-auto px-6">
//                 <div className="w-full flex flex-col md:flex-row gap-6">
//                   <div className="md:w-1/2 py-8 pl-4">
//                     <h4 className="text-xl font-bold mb-2">
//                       🌍 {project.title}
//                     </h4>
//                     <p className="text-lg leading-relaxed mb-4 text-gray-700">
//                       {project.description}
//                     </p>
//                     <p className="text-gray-600 mb-2">
//                       <strong>Technology:</strong> {project.technology}
//                     </p>
//                     <p className="text-blue-500 underline">
//                       🔗 GitHub, 🌐 www.worldmarks.com
//                     </p>
//                   </div>
//                   <div className="md:w-[60%] flex justify-center items-center bg-gray-100 rounded">
//                     <div
//                       className="w-full h-full bg-start bg-no-repeat bg-cover rounded-lg shadow-lg border-4 border-white"
//                       style={{ backgroundImage: `url('${project.image}')` }}
//                     ></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="w-full absolute top-1/2 flex justify-between transform -translate-y-1/2 px-4">
//         <button
//           onClick={handlePrev}
//           className="bg-stone-100 text-stone-500 text-2xl font-extrabold rounded-full p-1 border-2 border-stone-400 shadow-lg"
//         >
//           <HiChevronLeft />
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-stone-100 text-stone-500 text-2xl font-extrabold rounded-full p-1 border-2 border-stone-400 shadow-lg -mr-2"
//         >
//           <HiChevronRight />
//         </button>
//       </div>

//       <div className="w-full absolute bottom-0 flex justify-center space-x-2 mt-12">
//         {data.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => goToSlide(i)}
//             className={`w-3 h-3 rounded-full ${
//               i === currentIndex ? "bg-gray-700  w-4 h-4" : "bg-gray-300"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }

// this my code I will be use leter in this section
// Updated project card to show links and open in new tab

import { useState, useEffect } from "react";
import { projectData } from "../constants";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { HiGlobeAlt, HiOutlineCodeBracketSquare } from "react-icons/hi2";

export default function ProjectSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => handleNext(), 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  return (
    <div className="relative w-full overflow-hidden h-auto pb-14 ">
      <div
        className="flex items-center transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {projectData.map((project, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 px-4"
            style={{ flex: "0 0 100%" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="w-full pt-6 pb-8 mx-auto mt-4 shadow-lg rounded-lg border max-w-5xl">
              <div className="w-full h-auto px-6">
                <div className="w-full flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 py-8 pl-4">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-lg leading-relaxed mb-4 text-gray-700">
                      {project.description}
                    </p>
                    <p className="text-gray-600 mb-2">
                      <strong>Technology:</strong>{" "}
                      {project.technology.join(", ")}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      {project.projectLink.map((linkObj, idx) => {
                        const isGitHub = linkObj.name
                          .toLowerCase()
                          .includes("github");

                        const IconComponent = isGitHub
                          ? HiOutlineCodeBracketSquare
                          : HiGlobeAlt;

                        return (
                          <a
                            key={idx}
                            href={`https://${linkObj.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline text-sm flex items-center gap-1"
                          >
                            <IconComponent className="text-lg" />
                            {linkObj.name}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                  <div className="relative md:w-1/2 flex justify-center items-center bg-inherit rounded">
                    <div
                      className="w-full h-[80%] bg-cover bg-center rounded-lg shadow border"
                      style={{ backgroundImage: `url('${project.image}')` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-1/2 flex justify-between transform -translate-y-1/2 px-4">
        <button
          onClick={handlePrev}
          className="bg-white text-gray-700 text-xl font-bold rounded-full p-2 border shadow"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-gray-700 text-xl font-bold rounded-full p-2 border shadow"
        >
          <HiChevronRight />
        </button>
      </div>

      <div className="w-full absolute bottom-3 flex justify-center space-x-2 mt-12">
        {projectData.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              i === currentIndex ? "bg-gray-700 w-4 h-4" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
