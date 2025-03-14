import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { ImUser } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";

const configIcon = {
  colorMain: "text-white",
  colorHover: "hover:text-primary",
  size: 30,
};

export default function Sidebar() {
  return (
    <div
      className="
        fixed 
        bottom-0 left-0 right-0 w-full 
        flex justify-center 
        bg-white/10 backdrop-blur-sm 
        px-4 py-3 
        shadow-lg m-0 
        z-40
        lg:top-1/2 lg:translate-y-[-50%] lg:right-0 lg:left-auto lg:w-auto
        lg:rounded-full lg:py-7 lg:m-5
      "
    >
      <ul className="flex flex-row lg:flex-col items-center justify-center gap-15">
        <li className="transition-all duration-300 hover:scale-110">
          <Link
            to="/"
            className={`${configIcon.colorMain} ${configIcon.colorHover} transition-all duration-300`}
          >
            <TiHome size={configIcon.size} />
          </Link>
        </li>
        <li className="transition-all duration-300 hover:scale-110">
          <Link
            to="/about"
            className={`${configIcon.colorMain} ${configIcon.colorHover} transition-all duration-300`}
          >
            <ImUser size={configIcon.size} />
          </Link>
        </li>
        <li className="transition-all duration-300 hover:scale-110">
          <Link
            to="/work"
            className={`${configIcon.colorMain} ${configIcon.colorHover} transition-all duration-300`}
          >
            <BsFillGridFill size={configIcon.size} />
          </Link>
        </li>
        <li className="transition-all duration-300 hover:scale-110">
          <Link
            to="/contact"
            className={`${configIcon.colorMain} ${configIcon.colorHover} transition-all duration-300`}
          >
            <RiContactsBookFill size={configIcon.size} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
