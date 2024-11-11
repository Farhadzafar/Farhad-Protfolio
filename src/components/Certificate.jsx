import { certificateCard } from "../constants";

export default function Certificate() {
  return (
    <div className="w-full grid grid-cols-3 py-8">
      {certificateCard.map((data, i) => (
        <div className="py-4" key={i}>
          <div className="w-[80%] h-[10rem] rounded-md overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={data.image}
              alt={`certificate of ${data.title}`}
            />
          </div>
          <p>{data.title}</p>
          <small>{data.year}</small>
        </div>
      ))}
    </div>
  );
}
