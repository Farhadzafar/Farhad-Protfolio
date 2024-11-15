export default function EductionCard({ data }) {
  const { logo, title, description, linkName, link } = data;

  return (
    <div className="flex flex-col lg:flex-row justify-start items-center sm:items-center sm:text-center lg:items-start mb-8 p-4 rounded-lg">
      <div className="flex justify-center items-center p-2 border border-white rounded-md bg-color-4/60 mb-4 sm:mb-0 lg:mr-4">
        <img
          className="w-[35px] h-[35px] rounded-full"
          src={logo}
          alt={`logo ${logo}`}
        />
      </div>

      <div className="flex-1 sm:text-center lg:text-left">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-2">Kandahar University</p>
        <p className="text-gray-700 mb-4 md:text-left">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-800 underline"
        >
          {linkName}
        </a>
      </div>
    </div>
  );
}
