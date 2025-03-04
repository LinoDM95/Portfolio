import BulbImg from "../components/images/bulb_img";
import { motion } from "framer-motion";
import ContactForm from "../components/forms/contact_form";
export default function Contact() {
  return (
    <>
      <BulbImg />

      <div className="">
        <ContactForm titleBtn="Kontaktiere mich"/>
      </div>
    </>
  );
}
