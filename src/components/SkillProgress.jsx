function SkillProgress({ skills }) {
  const { skill, icon, personates, width } = skills;
  return (
    <div className="w-full flex justify-start items-center gap-1 mb-2">
      <img src={icon} alt={`icon of ${skill}`} className="w-7" />
      <div className=" relative w-full h-2 bg-gray-200 rounded-full">
        <div
          className={`absolute -top-6 ${width} h-full text-right rounded-full`}
        >
          {`${skill}:${personates}%`}
        </div>
        <div
          className={`${width} h-full bg-gradient-to-r from-color-2 to-color-3 flex justify-end items-start text-right`}
        >
          <div className="w-[4px] h-full border-4 border-black rounded-full   bg-color-2 "></div>
        </div>
      </div>
    </div>
  );
}

export default SkillProgress;
