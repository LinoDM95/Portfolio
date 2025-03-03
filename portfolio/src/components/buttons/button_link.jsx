export default function ButtonLink({
  title = "Click me",
  textColor = "text-white",
  hoverColor = "hover:text-white",
  fontKind = "font-primary",
  textSize = "text-lg",
  onClick,
  isActive,
}) {
  return (
    <button
      onClick={onClick}
      className={`${textColor} ${hoverColor} ${fontKind} ${textSize} hover:cursor-pointer relative overflow-hidden
        after:absolute after:right-0 after:bottom-0 after:h-[1.7px] after:rounded-lg after:w-[0px] after:bg-white active:after:bg-white active:after:duration-100
        after:transition-all after:duration-300 hover:after:w-full hover:after:left-0 hover:after:bg-primary ${isActive ? "after:w-full after:bg-primary" : ""}  `}
    >
      {title}
    </button>
  );
}
