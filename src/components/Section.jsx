export default function Section({
  children,
  color = "",
  classes = "",
  has = "#",
}) {
  return (
    <section
      id={has}
      className={`w-full max-w-[1440px] my-0 mx-auto px-20 py-4 ${color} ${classes}`}
    >
      {children}
    </section>
  );
}
