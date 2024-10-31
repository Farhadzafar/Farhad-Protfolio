export default function CardsSmall({ items }) {
  const { title, Icon, desorption, color } = items;
  return (
    <div className="py-10 px-8 shadow-md rounded-md border-[1px] border-stone-200">
      <span
        className={`span w-12 h-12 my-1 ${color} rounded-full flex justify-center content-center`}
      >
        {<Icon className="text-3xl z-10 text-gray-700" />}
      </span>

      <h5 className="h6 py-1">{title}</h5>
      <p>{desorption}</p>
    </div>
  );
}
