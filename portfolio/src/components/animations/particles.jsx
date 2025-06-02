import { useCallback, useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import PropTypes from "prop-types";

export default function ParticleAnimation({
  // Appearance settings
  particleColor = "#bae6fd",
  linkColor = "#e0f2fe",
  particleCount = 160,
  particleSize = { min: 1, max: 5 },
  particleOpacity = 0.5,
  linkOpacity = 0.5,
  linkDistance = 150,
  linkWidth = 1,

  // Animation settings
  speed = 1.2,
  fpsLimit = 120,

  // Interaction settings
  enableClick = true,
  enableHover = true,
  clickMode = "push",
  hoverMode = "repulse",
  pushQuantity = 4,
  repulseDistance = 200,
  repulseDuration = 0.4,

  // Layout settings
  densityArea = 800,
  zIndex = -1,

  // Additional props
  className = "",
  style = {},
}) {
  const [init, setInit] = useState(false);

  // Initialize particles engine
  useEffect(() => {
    const initEngine = async () => {
      try {
        await initParticlesEngine(async (engine) => {
          await loadFull(engine);
        });
        setInit(true);
      } catch (error) {
        console.error("Failed to initialize particles engine:", error);
      }
    };

    initEngine();
  }, []);

  // Callback for when particles are loaded
  const particlesLoaded = useCallback((container) => {
    // Optional: Add any custom logic when particles are loaded
    if (container) {
      console.log("Particles loaded successfully");
    }
  }, []);

  // Particles configuration object
  const particlesConfig = {
    fpsLimit,
    interactivity: {
      events: {
        onClick: {
          enable: enableClick,
          mode: clickMode,
        },
        onHover: {
          enable: enableHover,
          mode: hoverMode,
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: pushQuantity,
        },
        repulse: {
          distance: repulseDistance,
          duration: repulseDuration,
        },
      },
    },
    particles: {
      color: {
        value: particleColor,
      },
      links: {
        color: linkColor,
        distance: linkDistance,
        enable: true,
        opacity: linkOpacity,
        width: linkWidth,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: densityArea,
        },
        value: particleCount,
      },
      opacity: {
        value: particleOpacity,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: particleSize,
      },
    },
    detectRetina: true,
  };

  const combinedStyle = {
    zIndex,
    ...style,
  };

  if (!init) {
    return null; // Or a loading spinner
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      style={combinedStyle}
      className={className}
      options={particlesConfig}
    />
  );
}

ParticleAnimation.propTypes = {
  // Appearance settings
  particleColor: PropTypes.string,
  linkColor: PropTypes.string,
  particleCount: PropTypes.number,
  particleSize: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }),
  particleOpacity: PropTypes.number,
  linkOpacity: PropTypes.number,
  linkDistance: PropTypes.number,
  linkWidth: PropTypes.number,

  // Animation settings
  speed: PropTypes.number,
  fpsLimit: PropTypes.number,

  // Interaction settings
  enableClick: PropTypes.bool,
  enableHover: PropTypes.bool,
  clickMode: PropTypes.string,
  hoverMode: PropTypes.string,
  pushQuantity: PropTypes.number,
  repulseDistance: PropTypes.number,
  repulseDuration: PropTypes.number,

  // Layout settings
  densityArea: PropTypes.number,
  zIndex: PropTypes.number,

  // Additional props
  className: PropTypes.string,
  style: PropTypes.object,
};
