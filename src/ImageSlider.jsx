import './App.css';
import { useState } from 'react';
import img0 from './assets/0.jpg';
import img1 from './assets/1.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img9 from './assets/9.jpg';
import img11 from './assets/11.jpg';
import img13 from './assets/13.jpg';
import img14 from './assets/14.jpg';
import img15 from './assets/15.jpg';
import img16 from './assets/16.jpg';
import img17 from './assets/17.jpg';
import img18 from './assets/18.jpg';
import img19 from './assets/19.jpg';
import img20 from './assets/20.jpg';

const ImageGrid = () => {
  const [more, setMore] = useState(false)

  const images = [ 
    { image: img0, text: "Україна" },
    { image: img1, text: "Туреччина" }, 
    { image: img3, text: "Франція" }, 
    { image: img4, text: "Мексика" }, 
    { image: img5, text: "Японія" }, 
    { image: img6, text: "Іспанія" }, 
    { image: img7, text: "Таїланд" }, 
    { image: img15, text: "Швейцарія" }, 
    { image: img9, text: "Італія" }, 
    { image: img16, text: "Єгипет" }, 
    { image: img11, text: "Німеччина" },
    { image: img17, text: "Греція" }, 
    { image: img13, text: "США" },
    { image: img14, text: "Чехія" }, 
    { image: img18, text: "Австралія" },
    { image: img19, text: "Аргентина" },
    { image: img20, text: "Португалія" },
  ];
  
  const rotationClasses = [
    "rotate-6", "-rotate-3", "rotate-3", "-rotate-6"
  ];

  return (
    <> 
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-7 max-w-6xl px-4 mx-auto mt-6 cursor-pointer">
    {(more ? images : images.slice(0, 10)).map((image, index) => (
  <div key={index} className={`relative rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 ${rotationClasses[index % rotationClasses.length]}`}>
    <div className="absolute inset-0 bg-black opacity-30"></div>
    <img src={image.image} alt={`Країна ${index + 1}`} className="w-full h-[20vh] md:h-40 object-cover" />
    <div className="absolute bottom-4 left-4 text-white font-bold text-lg  px-3 py-1 rounded-lg">
      {image.text}
    </div>
  </div>
))}

    </div>
    <div className="flex justify-center mt-6">
  <button 
    type="button" 
    className="text-sm text-[#361d32] underline" 
    onClick={() => setMore(!more)}
  >
   {more ? "Менше" : "Більше"}
  </button>
</div>
    </>   
  );
};

export default ImageGrid;
