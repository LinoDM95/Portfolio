export default function ButtonMain({
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
      className={`relative px-6 py-2 font-bold text-white rounded-full bg-transparent border border-white 
    hover:cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
    after:absolute after:inset-0 after:border after:border-white after:w-0 after:h-0 after:m-auto
    after:transition-all after:duration-300 after:rounded-full
    hover:after:w-full hover:after:h-full hover:after:border-primary hover:border-transparent`}
    >
      {title}
    </button>
  );
}
