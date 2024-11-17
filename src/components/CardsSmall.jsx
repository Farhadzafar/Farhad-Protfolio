export default function CardsSmall({ items }) {
  const { title, Icon, description, color } = items;
  return (
    <div className="py-10 px-8 shadow-md rounded-md border-[1px] border-stone-200 flex flex-col items-center text-center lg:text-left lg:items-start hover:shadow-2xl">
      <span
        className={`span w-12 h-12 ${color} rounded-full flex justify-center items-center`}
      >
        <Icon className="text-3xl z-10 text-gray-700" />
      </span>

      <h5 className="h6 py-1">{title}</h5>
      <p>{description}</p>
    </div>
  );
}
