import Particle from "../components/animations/particles";
import Avatar from "../assets/avatar.png";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <div className="flex items-center justify-center h-screen w-screen overflow-hidden">
      <Particle />
      <div className="flex flex-col xl:flex-row items-center justify-center z-5 gap-20 h-full w-full">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
        
          className="flex flex-col text-white font-semibold text-4xl xl:text-4xl gap-5 w-1/3 h-full justify-center"
        >
          <div>
            <h1 className="font-code text-sm">Hi, mein Name ist</h1>
            <h2>Lino De Marco</h2>
            <h3>
              Ich bin angehender
              <span className="text-primary"> Software Entwickler.</span>
            </h3>
          </div>
          <p className="font-primary text-sm text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, earum
            quo error quia reiciendis quisquam suscipit nostrum facilis ipsa
            architecto, deleniti vero. Autem quod perspiciatis odio et officia
            dolorem enim?
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
          className="flex h-full justify-end items-end"
        >
          <motion.div
          >
            <img
              src={Avatar}
              alt="avatar"
              className="hidden w-38 sm:block sm:w-85 md:w-99 lg:w-110 xl:w-auto h-auto object-contain self-end "
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
