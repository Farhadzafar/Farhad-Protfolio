function SkillProgress({ skills }) {
  const { skill, icon, personates, width } = skills;
  return (
    <div className="w-full flex justify-start items-center gap-1 mb-2">
      <img src={icon} alt={`icon of ${skill}`} className="w-7" />
      <div className=" relative w-full h-1 bg-color-4 ">
        <div className={`absolute -top-5 ${width} h-full text-right`}>
          {`${skill}:${personates}%`}
        </div>
        <div
          className={`${width} h-full bg-color-5 flex justify-end items-start text-right`}
        >
          <div className="w-[4px] h-full border-4 border-black rounded-full   bg-color-2 "></div>
        </div>
      </div>
    </div>
  );
}

export default SkillProgress;
