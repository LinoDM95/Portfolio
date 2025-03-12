import BulbImg from "../components/images/bulb_img";
import { motion } from "framer-motion";
import ContactForm from "../components/forms/form_contact";
export default function Contact() {
  return (
    <>
      <BulbImg />
      <motion.div className="flex justify-center items-center h-full w-full">
        <ContactForm titleBtn="Nachricht senden" />
      </motion.div>
    </>
  );
}
