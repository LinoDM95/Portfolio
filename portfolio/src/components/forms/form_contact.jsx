import React from "react";
import emailjs from "emailjs-com";
import InputContact from "../input/input_contact";
import TextareaContact from "../textfields/textfield";


export default function ContactForm({ titleBtn = "Kontaktiere mich" }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mdcq5ka", //Service-ID
        "template_01x1e7s", //Template-ID
        e.target,
        "oSgO_VI3U62LtRqGA" //(Public Key)
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("E-Mail wurde erfolgreich gesendet!");
        },
        (error) => {
          console.log(error.text);
          alert("Fehler beim Senden der E-Mail. Bitte versuche es erneut.");
        }
      );
  };

  return (
    <form
      onSubmit={sendEmail}
      className="flex flex-col h-screen items-center justify-center text-white gap-5"
    >
      <h2 className="text-6xl">
        Kontaktiere <span className="text-primary">mich!</span>
      </h2>
      <div className="flex gap-5 w-full">
        <InputContact name="name" placeholder="Name" />
        <InputContact name="email" placeholder="Email" />
      </div>
      <InputContact name="subject" placeholder="Betreff" />
      <TextareaContact  rows={6} name="message" placeholder="Nachricht" />
      <button
        type="submit"
        className={`relative px-6 py-2 font-bold text-white rounded-full bg-transparent border border-white 
          hover:cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
          after:absolute after:inset-0 after:border after:border-white after:w-0 after:h-0 after:m-auto
          after:transition-all after:duration-300 after:rounded-full
          hover:after:w-full hover:after:h-full hover:after:border-primary hover:border-transparent`}
      >
        {titleBtn}
      </button>
      <div className="flex flex-col items-center justify-center gap-1">
        <h2 className="">Meine Kontaktdaten lauten</h2>
        <h1 className="">linodemarco95@gmail.com</h1>
        <h1 className=""></h1>
        <h1 className=""></h1>
        <h1 className=""></h1>
      </div>
    </form>
  );
}
