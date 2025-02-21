import React from "react";
import { useState } from "react";
import Rome from './assets/Rome.jpg';
import Lviv from './assets/Lviv.jpg';
import PortLouis from './assets/PortLouis.jpg';
import Bangkok from './assets/Bangkok.jpg';
import Zurich from './assets/Zurich.jpg';
import Barcelona from './assets/Barcelona.jpg';
import Athens from './assets/Athens.jpg';
import Sharmel from './assets/Sharmel-Sheikh.png';
import Pariss from './assets/Pariss.jpg';
import { FiArrowRight} from "react-icons/fi";

const des = [
  { name: "Цюріх", image: Zurich },
  { name: "Бангкок", image: Bangkok },
  { name: "Порт-Луї", image: PortLouis },
  { name: "Львів", image: Lviv },
  { name: "Рим", image: Rome },
  { name: "Барселона", image: Barcelona },
  { name: "Афіни", image: Athens },
  { name: "Шарм-ель-Шейх", image: Sharmel },
  { name: "Париж", image: Pariss },
];

const DestinationGrid = () => {
  return (
    <>
    <div className="w-4/5 mx-auto rounded-xl overflow-hidden mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 ">
      {des.map((dest, index) => (
        <Destination key={index} name={dest.name} image={dest.image} />
      ))}
    </div>
    </div>
    </>
  );
};

const Destination = ({ name, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
    className={`relative w-full h-full aspect-[4/3] overflow-hidden cursor-pointer md:opacity-100`}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      <img
        src={image}
        alt={name}
        className={`absolute inset-0 w-full h-full  object-cover transition-all duration-300 brightness-50 lg:${
          isHovered ? "brightness-50 scale-105" : "brightness-100 scale-100"
        }`}
      />
       <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-all duration-300"
        }`}
      ></div>

      <div
  className={`absolute inset-0  flex flex-col items-center justify-center text-white text-lg font-semibold transition-opacity duration-300 opacity-100 md:${
    isHovered ? "opacity-100" : "opacity-0"
  }`}
>
  <div className="text-md md:text-xl uppercase mb-4">{name}</div>
  <p className="text-gray-300 text-sm md:text-lg">з Києва, з Кишинева, з Львова</p>
  <button className="mt-4 flex items-center right-6 gap-1 text-sm text-[#edd2cb]">
          <span>Переглянути тури</span>
          <FiArrowRight/>
        </button>
</div>

    </div>
  );
};
export default DestinationGrid;
