import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function LampScene() {
  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* Beleuchtung */}
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 3, 0]} intensity={1.5} />
      
      {/* Animierte Lampe */}
      <AnimatedLamp />
      
      {/* Orbit-Steuerung (zum Testen) */}
      <OrbitControls />
    </Canvas>
  );
}

// Funktion für das animierte 3D-Modell (Lampe)
function AnimatedLamp() {
  const lampRef = useRef();

  useFrame(({ clock }) => {
    // Lässt die Lampe sanft hin und her schwingen (Pendelsimulation)
    lampRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 1.2) * 0.1;
  });

  return (
    <motion.group
      ref={lampRef}
      initial={{ y: -3 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 10 }}
    >
      <LampModel />
    </motion.group>
  );
}

// 3D-Modell der Lampe
function LampModel() {
  const { scene } = useGLTF("src/assets/hanging_bulb_basement.glb"); // Lade dein eigenes GLB-Modell

  return <primitive object={scene} scale={0.5} position={[0, 1, 0]} />;
}
