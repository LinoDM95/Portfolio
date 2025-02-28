import { Link } from "react-router-dom";  // Importiere Link für Navigation
import { TiHome } from "react-icons/ti";
import { ImUser } from "react-icons/im";
import { BsFillGridFill } from "react-icons/bs";
import { RiLayoutTopFill, RiContactsBookFill } from "react-icons/ri";

const configIcon = {
  colorMain: "text-white",
  colorHover: "hover:text-primary",
  size: 25,
};

export default function Sidebar() {
  return (
    <div className="fixed top-1/2 translate-y-[-50%] right-0 bg-white/10 backdrop-blur-sm rounded-full px-4 py-7 shadow-lg m-5 items-center justify-center z-40">
      <ul className="flex flex-col items-center gap-10 cursor-pointer">
        <li>
          <Link to="/" className={`${configIcon.colorMain} ${configIcon.colorHover}`}>
            <TiHome size={configIcon.size} />
          </Link>
        </li>
        <li>
          <Link to="/about" className={`${configIcon.colorMain} ${configIcon.colorHover}`}>
            <ImUser size={configIcon.size} />
          </Link>
        </li>
        <li>
          <Link to="/skills" className={`${configIcon.colorMain} ${configIcon.colorHover}`}>
            <BsFillGridFill size={configIcon.size} />
          </Link>
        </li>
        <li>
          <Link to="/projects" className={`${configIcon.colorMain} ${configIcon.colorHover}`}>
            <RiLayoutTopFill size={configIcon.size} />
          </Link>
        </li>
        <li>
          <Link to="/contact" className={`${configIcon.colorMain} ${configIcon.colorHover}`}>
            <RiContactsBookFill size={configIcon.size} />
          </Link>
        </li>
      </ul>
    </div>
  );
}
