import { icons, skills as skillsData } from "../constants";
import Icon from "./Icon";
import SkillProgress from "./SkillProgress";

export default function Skills() {
  return (
    <div className="w-full  h-full flex gap-12 mt-6">
      <div className="w-[48%] h-full relative">
        {icons.map((icon, i) => (
          <Icon icons={icon} key={i} />
        ))}
      </div>

      {/* Skill Progress parte */}
      <div className="w-[48%] h-full ">
        <h6 className="h6 my-4">My Skills are:</h6>
        <ul>
          {skillsData.map((items, i) => (
            <SkillProgress skills={items} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}
