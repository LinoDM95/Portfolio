import { motion } from "framer-motion";

export default function ChangePage() {
  const transitionVariants = {
    inital: {
      x: "100%",
      width: "100%",
    },
    animate: {
      x: "0%",
      width: "0%",
    },
    exit: {
      x: ["0%", "100%"],
      width: ["0%", "100%"],
    },
  };

  return (
    <>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#2e2257] z-30" 
      variants={transitionVariants}
      initial="inital"
      animate="animate"
      exit="exit"
      transition={{delay: 0.2, duration:0.6, ease: "easeInOut"}}
      
      >
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#3b2d71] z-20" 
      variants={transitionVariants}
      initial="inital"
      animate="animate"
      exit="exit"
      transition={{delay: 0.4, duration:0.6, ease: "easeInOut"}}
      
      >
      </motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen bg-[#4b3792] z-10" 
      variants={transitionVariants}
      initial="inital"
      animate="animate"
      exit="exit"
      transition={{delay: 0.6, duration:0.6, ease: "easeInOut"}}
      
      >
      </motion.div>
    </>
  );
}
