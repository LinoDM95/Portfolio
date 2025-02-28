import Particle from "../components/animations/particles";
import Avatar from "../assets/avatar.png";
import ChangePage from "../components/animations/change_page";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <Particle />
      <div className="flex flex-col xl:flex-row items-center justify-center z-10 gap-20 h-full w-full">
        <div className="flex flex-col text-white font-semibold text-4xl xl:text-4xl gap-5 w-1/3 h-full justify-center">
          <div>
            <h1 className="font-code text-sm">Hi, mein Name ist</h1>
            <h2>Lino De Marco</h2>
            <h3>
              Ich bin ein angehender
              <span className="text-primary"> Software Entwickler.</span>
            </h3>
          </div>
          <p className="font-primary text-sm text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, earum
            quo error quia reiciendis quisquam suscipit nostrum facilis ipsa
            architecto, deleniti vero. Autem quod perspiciatis odio et officia
            dolorem enim?
          </p>
        </div>

        <div className="flex h-full justify-end items-end">
          <img 
            src={Avatar} 
            alt="avatar" 
            className="w-38 sm:w-85 md:w-99 lg:w-110 xl:w-auto h-auto object-contain self-end"
          />
        </div>

      </div>
    </div>
  );
}
