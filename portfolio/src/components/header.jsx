import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
  return (
    <div className="hidden lg:flex fixed top-0 w-full  items-center justify-end z-10 ">
      <div className="flex m-7 gap-7">
        <a
          href="https://github.com/LinoDM95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40}  className="text-white hover:text-primary transition-all duration-300" />
        </a>
        <a
          href="https://www.linkedin.com/in/lino-de-marco-74582b30b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} className="text-white hover:text-primary transition-all duration-300" />
        </a>
      </div>
    </div>
  );
}
