export default function Icon({ icons }) {
  const {
    icon,
    size,
    position: { top, left },
  } = icons;
  return (
    <img
      src={icon}
      alt={` icon of ${icon}`}
      className={` absolute ${top} ${left} ${size}`}
    />
  );
}
