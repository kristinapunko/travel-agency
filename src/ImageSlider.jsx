import './App.css';

import img1 from './assets/1.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import img9 from './assets/9.jpg';
import img10 from './assets/10.jpg';
import img11 from './assets/11.jpg';
import img12 from './assets/12.jpg';
import img13 from './assets/13.jpg';

const ImageGrid = () => {
  const images = [img1, img3, img4, img5, img6, img7, img8, img9, img10, img11];

  // Масив класів для нахилу
  const rotationClasses = [
    "rotate-6", "-rotate-3", "rotate-3", "-rotate-6"
  ];

  return (
    <> 
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-7 max-w-6xl px-4 mx-auto mt-6 ">
      {images.map((image, index) => (
        <div key={index} className={`relative rounded-3xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 ${rotationClasses[index % rotationClasses.length]}`}>
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <img src={image} alt={`Країна ${index + 1}`} className="w-full h-[20vh] md:h-40 object-cover" />
          <div className="absolute bottom-4 left-4 text-white font-bold text-lg  px-3 py-1 rounded-lg">
            Країна {index + 1}
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center mt-6">
  <button 
    type="button" 
    className="text-sm text-[#361d32] underline" 
  >
    Більше
  </button>
</div>
    </>   
  );
};

export default ImageGrid;
