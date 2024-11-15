import { icons, skills as skillsData } from "../constants";
import Icon from "./Icon";
import SkillProgress from "./SkillProgress";

export default function Skills() {
  return (
    <div className="w-full h-full p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-bold text-center mt-1 text-gray-800">
        My Skill Set
      </h2>
      <p className="mt-2 text-center lg:text-xl font-medium text-gray-700">
        My education has given me diverse skills. I’m always learning and
        growing in technology.
      </p>
      <div className="w-full h-full flex flex-col md:flex-row gap-12 mt-2">
        <div className="w-full md:w-[48%] h-[500px] relative mt-4">
          {icons.map((icon, i) => (
            <Icon
              icons={icon}
              key={i}
              className="transition-transform duration-300 hover:scale-110"
            />
          ))}
        </div>

        {/* Skill Progress part */}
        <div className="w-full md:w-[48%] h-full mt-3">
          <ul className="space-y-4">
            {skillsData.map((items, i) => (
              <SkillProgress skills={items} key={i} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
