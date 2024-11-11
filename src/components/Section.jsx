export default function Section({
  children,
  color = "",
  classes = "",
  has = "#",
}) {
  return (
    <section
      id={has}
      className={`w-full max-w-[1440px] my-0 mx-auto px-6 sm:px-20  ${color} ${
        classes ? classes : "py-4"
      }`}
    >
      {children}
    </section>
  );
}
