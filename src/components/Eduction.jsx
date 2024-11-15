import { eductionData } from "../constants";
import EductionCard from "./EductionCard";

export default function Eduction() {
  return (
    <div className="w-full h-full p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mt-4 text-gray-800">
        My Education Journey
      </h2>
      <p className="mt-2 text-center text-xl font-semibold text-gray-700">
        Education is the foundation upon which we build our future. Keep
        learning and growing!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 text-center sm:text-left gap-8 mt-6">
        {eductionData.map((data, i) => (
          <EductionCard data={data} key={i} />
        ))}
      </div>
    </div>
  );
}
