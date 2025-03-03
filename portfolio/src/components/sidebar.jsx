import { Link } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { ImUser } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import { RiContactsBookFill } from "react-icons/ri";

const configIcon = {
  colorMain: "text-white",
  colorHover: "hover:text-primary",
  size: 25,
};

export default function Sidebar() {
  return (
    <div className="fixed top-1/2 translate-y-[-50%] right-0 bg-white/10 backdrop-blur-sm rounded-full px-4 py-7 shadow-lg m-5 z-40">
      <ul className="flex flex-col items-center gap-10">
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
            to="/projects"
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
