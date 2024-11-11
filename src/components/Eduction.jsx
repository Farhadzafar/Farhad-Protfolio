import { eductionData } from "../constants";
import EductionCard from "./EductionCard";

export default function Eduction() {
  return (
    <div className=" w-full h-full grid grid-cols-2  gap-x-20 gap-y-8 mt-4">
      {eductionData.map((data, i) => (
        <EductionCard data={data} key={i} />
      ))}
    </div>
  );
}
