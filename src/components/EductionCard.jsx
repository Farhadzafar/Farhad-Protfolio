export default function EductionCard({ data }) {
  const { logo, title, description, linkName, link } = data;

  return (
    <div className="flex justify-start items-start mb-8">
      <img
        className="w-[45px] rounded-full mr-2"
        src={logo}
        alt={`logo ${logo}`}
      />
      <div className="w-[75%]">
        <strong>{title}</strong>
        <br />
        <small>Kandahar University</small>
        <p>{description}</p>
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
