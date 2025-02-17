import React from "react";
import img13 from './assets/13.jpg';





import { useState } from "react";
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';

const des = [
  { name: "ШВЕЙЦАРІЯ", image: img9 },
  { name: "ТАЙЛАНД", image: img13 },
  { name: "МАВРИКІЙ", image: img6 },
  { name: "СЕЙШЕЛЬСЬКІ ОСТРОВИ", image: img5 },
  { name: "ТАЙЛАНД", image: img8 },
  { name: "МАВРИКІЙ", image: img7 },
  { name: "СЕЙШЕЛЬСЬКІ ОСТРОВИ", image: img5 },
  { name: "МАВРИКІЙ", image: img7 },
  { name: "СЕЙШЕЛЬСЬКІ ОСТРОВИ", image: img5 },
];


const DestinationGrid = () => {
  return (
    <>
    <div className="w-4/5 mx-auto rounded-xl overflow-hidden mb-12">
      <div className="grid grid-cols-2 md:grid-cols-3 ">
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
      className="relative w-full h-full aspect-[4/3] overflow-hidden  cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Фонове зображення */}
      <img
        src={image}
        alt={name}
        className={`absolute inset-0 w-full h-full  object-cover transition-all duration-300 ${
          isHovered ? "brightness-50 scale-105" : "brightness-100 scale-100"
        }`}
      />
       <div
        className={`absolute inset-0 bg-black bg-opacity-40 transition-all duration-300"
        }`}
      ></div>
      {/* Текст при наведенні */}
      <div
  className={`absolute inset-0  flex flex-col items-center justify-center text-white text-lg font-semibold transition-opacity duration-300 ${
    isHovered ? "opacity-100" : "opacity-0"
  }`}
>
  <div>{name}</div>
  <p className="text-gray-300 text-sm">з Києва, з Кишинева, з Львова</p>
  <p className="text-sm text-gray-200 mt-2">о. Крит • Іракліон • о. Родос</p>
</div>

    </div>
  );
};
export default DestinationGrid;
