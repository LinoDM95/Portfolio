import { motion } from "framer-motion";
import PropTypes from "prop-types";

export default function PageTransition({
  // Layer settings
  layerCount = 3,
  colors = ["#2e2257", "#3b2d71", "#4b3792"],
  zIndexStart = 30,

  // Animation timing
  baseDuration = 0.6,
  staggerDelay = 0.2,

  // Animation easing
  easing = "easeInOut",

  // Direction and positioning
  direction = "rightToLeft", // "rightToLeft", "leftToRight", "topToBottom", "bottomToTop"

  // Custom variants (optional)
  customVariants = null,

  // Additional styling
  className = "",
  containerClassName = "",
}) {
  // Generate direction-based animation variants
  const getDirectionVariants = () => {
    switch (direction) {
      case "leftToRight":
        return {
          initial: { x: "-100%", width: "100%" },
          animate: { x: "0%", width: "0%" },
          exit: { x: ["0%", "-100%"], width: ["0%", "100%"] },
        };
      case "topToBottom":
        return {
          initial: { y: "-100%", height: "100%" },
          animate: { y: "0%", height: "0%" },
          exit: { y: ["0%", "-100%"], height: ["0%", "100%"] },
        };
      case "bottomToTop":
        return {
          initial: { y: "100%", height: "100%" },
          animate: { y: "0%", height: "0%" },
          exit: { y: ["0%", "100%"], height: ["0%", "100%"] },
        };
      default: // rightToLeft
        return {
          initial: { x: "100%", width: "100%" },
          animate: { x: "0%", width: "0%" },
          exit: { x: ["0%", "100%"], width: ["0%", "100%"] },
        };
    }
  };

  // Use custom variants if provided, otherwise generate based on direction
  const transitionVariants = customVariants || getDirectionVariants();

  // Generate position classes based on direction
  const getPositionClasses = () => {
    switch (direction) {
      case "leftToRight":
        return "fixed top-0 bottom-0 left-full w-screen h-screen";
      case "topToBottom":
        return "fixed left-0 right-0 top-full w-screen h-screen";
      case "bottomToTop":
        return "fixed left-0 right-0 bottom-full w-screen h-screen";
      default: // rightToLeft
        return "fixed top-0 bottom-0 right-full w-screen h-screen";
    }
  };

  const basePositionClasses = getPositionClasses();

  // Generate layers dynamically
  const renderLayers = () => {
    const layers = [];
    const actualLayerCount = Math.min(layerCount, colors.length);

    for (let i = 0; i < actualLayerCount; i++) {
      const delay = i * staggerDelay;
      const zIndex = zIndexStart - i * 10;
      const color = colors[i] || colors[colors.length - 1]; // Fallback to last color

      layers.push(
        <motion.div
          key={`transition-layer-${i}`}
          className={`${basePositionClasses} ${className}`}
          style={{ backgroundColor: color, zIndex }}
          variants={transitionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            delay,
            duration: baseDuration,
            ease: easing,
          }}
        />
      );
    }

    return layers;
  };

  return <div className={containerClassName}>{renderLayers()}</div>;
}

PageTransition.propTypes = {
  // Layer settings
  layerCount: PropTypes.number,
  colors: PropTypes.arrayOf(PropTypes.string),
  zIndexStart: PropTypes.number,

  // Animation timing
  baseDuration: PropTypes.number,
  staggerDelay: PropTypes.number,

  // Animation easing
  easing: PropTypes.string,

  // Direction and positioning
  direction: PropTypes.oneOf([
    "rightToLeft",
    "leftToRight",
    "topToBottom",
    "bottomToTop",
  ]),

  // Custom variants
  customVariants: PropTypes.object,

  // Additional styling
  className: PropTypes.string,
  containerClassName: PropTypes.string,
};
