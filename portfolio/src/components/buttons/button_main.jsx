import PropTypes from "prop-types";

export default function ButtonMain({
  title = "Click me",
  onClick,
  textColor = "text-white",
  hoverColor = "hover:text-white",
  fontKind = "font-bold",
  textSize = "text-base",
  padding = "px-6 py-2",
  borderRadius = "rounded-full",
  backgroundColor = "bg-transparent",
  borderStyle = "border border-white",
  hoverBorderColor = "hover:border-transparent",
  afterBorderColor = "after:border-white",
  afterHoverBorderColor = "hover:after:border-primary",
  transitionDuration = "duration-300",
}) {
  return (
    <button
      onClick={onClick}
      className={`relative ${padding} ${fontKind} ${textColor} ${hoverColor} ${textSize} ${borderRadius} ${backgroundColor} ${borderStyle} 
    hover:cursor-pointer overflow-hidden transition-all ${transitionDuration} ease-in-out
    after:absolute after:inset-0 ${afterBorderColor} after:w-0 after:h-0 after:m-auto
    after:transition-all after:${transitionDuration} after:${borderRadius}
    after:border hover:after:w-full hover:after:h-full ${afterHoverBorderColor} ${hoverBorderColor}`}
    >
      {title}
    </button>
  );
}

ButtonMain.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func,
  textColor: PropTypes.string,
  hoverColor: PropTypes.string,
  fontKind: PropTypes.string,
  textSize: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderStyle: PropTypes.string,
  hoverBorderColor: PropTypes.string,
  afterBorderColor: PropTypes.string,
  afterHoverBorderColor: PropTypes.string,
  transitionDuration: PropTypes.string,
};
