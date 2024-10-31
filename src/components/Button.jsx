export default function Button({ children, herf = "" }) {
  const link = () => (
    <a
      className=" text-cyan-500 underline hover:text-cyan-500/60 active:translate-y-1"
      href={herf}
    >
      {children}
    </a>
  );
  const button = () => (
    <button className="px-6 py-2 bg-color-3 rounded-md hover:bg-color-3/60 transition-all active:translate-y-1 font-semibold">
      {children}
    </button>
  );
  return herf ? link() : button();
}
