import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { useState,  } from 'react';
import bali from './assets/bali.jpg';
import { FaWifi, FaDog, FaSnowflake, FaBath, FaTv, FaRestroom, FaKitchenSet } from 'react-icons/fa6';

import { MdCalendarMonth, MdOutlineAccessTime, MdAllInclusive, MdPeopleAlt, MdOutlineFlightTakeoff, MdFlight, MdOutlineFlightLand, MdOutlineEmail } from "react-icons/md";
import { FaHeart,FaFireAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {BiUser} from "react-icons/bi"
const images = [
  '/images/tour1.jpg',
  '/images/tour2.jpg',
  '/images/tour3.jpg',
  '/images/tour4.jpg',
  '/images/tour5.jpg'
];


export default function TourDetails() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [showForm, setShowForm] = useState(false);

  return (
    <>
    <div className="container mx-auto p-2 md:p-4">
      <h1 className="text-2xl md:text-3xl font-bold text-[#361d32] text-center mb-2 md:mb-4">Dreams Vacation Club, 5★</h1>
      <p className="text-center text-[#543c52]">Єгипет, Шарм-ель-Шейх</p>
      <div className="lg:flex lg:justify-between my-auto p-2 md:p-4">
  <div className="lg:w-2/3 w-full flex flex-col items-center">
    <Swiper
      navigation
      modules={[Navigation, Thumbs]}
      thumbs={{ swiper: thumbsSwiper }}
      className="w-full h-auto my-4 sm:my-6 rounded-2xl overflow-hidden"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={bali} alt="Tour image" className="w-full h-48 sm:h-64 md:h-80 object-cover" />
        </SwiperSlide>
      ))}
    </Swiper>

    <Swiper
      onSwiper={setThumbsSwiper}
      spaceBetween={10}
      slidesPerView={4}
      watchSlidesProgress
      className="w-full "
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img src={bali} alt="Thumbnail" className="w-full rounded-2xl h-9/10 md:h-24 object-cover cursor-pointer" />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>

  <div className="lg:w-1/3 w-full bg-white p-6 rounded-lg shadow-lg lg:ml-4">
     
      {showForm ? (
        <form className="flex flex-col gap-4">
          <p className="text-md text-center text-[#361d32] mb-4">
          Залиште свою пошту, і вам буде повідомлено про наявні міся в турі
          </p>
          <div className="relative my-4">
                <input type="email" className="block w-full py-2.3 px-0 text-sm text-[#361d32] z-10 bg-transparent border-0 border-b-2 border-[#543c52]/70 appearance-none dark:focus:border-[#f55951] focus:outline-none focus:ring-0 focus-text-white focus-border-[#f55951] peer" placeholder="" />
                <label htmlFor="" className="absolute text-sm text-[#543c52] duration-300 transform -translate-y-6 scale-75 -top-1 -z-1 origin-[0] peer-focus:left-0 peer-focus:text-[#f55951] peer-focus:dark:text-[#f55951] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{ pointerEvents: 'none' }}>Ваше ім'я</label>
                <BiUser className="absolute -top-1 right-4 text-[#543c52]"/>
            </div>
            <div className="relative my-4">
                <input type="email" className="block w-full py-2.3 px-0 text-sm text-[#361d32] z-10 bg-transparent border-0 border-b-2 border-[#543c52]/70 appearance-none dark:focus:border-[#f55951] focus:outline-none focus:ring-0 focus-text-red focus-border-[#f55951] peer" placeholder="" />
                <label htmlFor="" className="absolute text-sm text-[#543c52] duration-300 transform -translate-y-6 scale-75 -top-1 -z-9 origin-[0] peer-focus:left-0 peer-focus:text-[#f55951] peer-focus:dark:text-[#f55951] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" style={{ pointerEvents: 'none' }}>Ваша пошта</label>
                <MdOutlineEmail className="absolute -top-1 right-4 text-[#543c52]"/>
            </div>
            <p className="text-md text-center text-[#361d32] mb-4">
          При бронюванні запис можна відмінити за тиждень до дати туру
          </p>
          <div className='flex gap-2'>
            <button type="submit" className="flex justify-center items-center text-center w-full  bg-[#f1e8e6] hover:bg-[#edd2cb] text-[#543c52] py-1 rounded-2xl">
              Відправити заявку
            </button>
            <button type="submit" className="flex justify-center items-center text-center w-full bg-[#543c52] hover:bg-[#361d32] text-[#edd2cb] py-2 rounded-2xl">
              Бронювати
            </button>
          </div>
          <button type="button" className="text-[#361d32] underline" onClick={() => setShowForm(false)}>
            Назад до інформації
          </button>
        </form>
      ) : (<>
       <div className='flex justify-between mb-6'>
      <div className="flex justify-start gap-2 my-2 text-md">
          <span className="text-[#f55951] font-bold">4,3</span>
          <span className="text-[#361d32]">(24 відгуків)</span>
    </div>
  <div className='flex justify-end '>
    <div className=" top-3 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 mr-2 rounded-full shadow-md border border-[#543c52]/10">
            <FaHeart className="text-[#543c52]" />
          </button>
        </div>
        <div className=" top-12 right-3 flex flex-col gap-2">
          <button className="bg-white p-2 rounded-full shadow-md border border-[#543c52]/10">
            <FaFireAlt className="text-[#543c52]" />
          </button>
        </div>
    </div>
      </div>
    <h2 className="text-xl sm:text-2xl text-center text-[#361d32] font-semibold mb-4">Інформація про тур</h2>
    
      
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Дати туру:<MdCalendarMonth/></span> 19.02 - 26.02</p>
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Тривалість: <MdOutlineAccessTime/></span> 7 ночей в Dbl (Studio)</p>
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Харчування: <MdAllInclusive/></span> Все включено</p>
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Туристи: <MdPeopleAlt/></span> 2 дорослих</p>
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Переліт: <MdFlight/></span> Включено</p>
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Виліт: <MdOutlineFlightTakeoff/></span> 19 лютого, Кишинів</p>
    <p className='text-sm sm:text-md text-[#543c52] flex gap-2'><span className='text-[#361d32] font-semibold flex items-center gap-2'>Повернення: <MdOutlineFlightLand/></span> 26 лютого, Шарм-ель-Шейх</p>
    
    <h3 className="text-xl sm:text-2xl mb-8 font-bold text-[#f55951] mt-4">45 647 грн</h3>
    <button
      className="flex justify-center items-center text-center w-full mt-8 bg-[#543c52] hover:bg-[#361d32] text-[#edd2cb] py-2 rounded-2xl"
      onClick={() => setShowForm(true)}
    >
      Відправити заявку
    </button>
    </>
      )}
  </div>
</div>

      <div className="mt-4 p-4 sm:mt-6 sm:p-6 rounded-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#543c52] mb-4 sm:mb-8">Що входить в тур</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 mt-2">
          
            <div className="flex items-center space-x-2 border border-[#361d32]/50 p-3 rounded-lg shadow-xl">
              <span className="text-lg sm:text-xl"><FaWifi /></span>
              <span>Безкоштовний Wi-Fi</span>
            </div>

            <div className="flex items-center space-x-2 border border-[#361d32]/50 p-3 rounded-lg shadow-xl">
              <span className="text-xl"><FaWifi /></span>
              <span>Безкоштовний Wi-Fi</span>
            </div>

            <div className="flex items-center space-x-2 border border-[#361d32]/50 p-3 rounded-lg shadow-xl">
              <span className="text-xl"><FaWifi /></span>
              <span>Безкоштовний Wi-Fi</span>
            </div>

            <div className="flex items-center space-x-2 border border-[#361d32]/50 p-3 rounded-lg shadow-xl">
              <span className="text-xl"><FaWifi /></span>
              <span>Безкоштовний Wi-Fi</span>
            </div>
        </div>
      </div>
      <div className="mt-4 p-4 sm:mt-6 sm:p-6 rounded-lg  shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#543c52] mb-2">Програма туру</h3>
        <h2 className='text-sm sm:text-md font-semibold text-[#543c52] mb-4'>Тур на 7 днів без нічних переїздів. 5 оглядових екскурсій по основим містам уже у вартості туру: Зальцбург, Цюрих, Берн, Кольмар, Прага</h2>
        <h2 className='text-md font-semibold text-[#543c52] mb-4 underline'>1 день</h2>
          <div className='text-[#543c52] mb-4 sm:mb-8 ml-3'>
            <p>07:00 - збір групи на ж/д вокзалі м. Львів</p>
            <p>07:30 - виїзд групи.</p>
            <p>Перетин кордону.</p>
            <p>Переїзд по території Польщі.</p>
            <p>При наявності часу, за бажанням пропонуємо оглядову екскурсію по місту Краків ( 882 гривень)</p>
            <p>Переїзд до Чехії.</p>
            <p>Поселення в готель.</p>
            <p>Ніч в готелі.</p>
          </div>
        <h2 className='text-md font-semibold text-[#543c52] mb-4 underline'>2 день</h2>
        <div className='text-[#543c52] mb-8 ml-3'>
            <p>07:00 - збір групи на ж/д вокзалі м. Львів</p>
            <p>07:30 - виїзд групи.</p>
            <p>Перетин кордону.</p>
            <p>Переїзд по території Польщі.</p>
            <p>При наявності часу, за бажанням пропонуємо оглядову екскурсію по місту Краків ( 882 гривень)</p>
            <p>Переїзд до Чехії.</p>
            <p>Поселення в готель.</p>
            <p>Ніч в готелі.</p>
          </div>
      </div>
      <div className="mt-4 p-4 sm:mt-6 sm:p-6 rounded-lg  shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#543c52] mb-4 sm:mb-8">Відгуки</h3>
      
      <div className="p-4 sm:p-5 shadow-md bg-white rounded-lg text-left border border-[#543c52]/50 mb-4">
        <div>
          <div className='flex justify-between mb-1'>
            <p className="text-md sm:text-lg font-semibold text-[#361d32]">Марія</p>
            <div className="flex gap-1 mt-1">
            <FaStar size={16} className="text-[#f55951]" />
            <FaStar size={16} className="text-[#f55951]" />
            <FaStar size={16} className="text-[#f55951]" />
            <FaStar size={16} className="text-[#f55951]" />
            <FaStar size={16} className="text-[#edd2cb]" />      
            </div>
          </div>
          <p className="text-[#543c52] text-xs">12 грудня 2023, 10:45</p>
          <p className="text-[#543c52] mt-2 sm:mt-4">Все пройшло гладко, рекомендую!</p>
        </div>
      </div>
      
      <div className="mt-4 sm:mt-6 text-left bg-white p-3 sm:p-5 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-[#543c52] mb-2">Додати відгук</h3>
        <input
          className="w-full p-2 border-b-2 border-[#543c52]/50 focus:outline-none  rounded-md"
          placeholder="Ваше ім'я"
        />
        <textarea
          className="w-full mt-2 p-2 border-b-2 border-[#543c52]/50 focus:outline-none rounded-md"
          placeholder="Ваш відгук"
        />
        <div className="flex gap-1 mt-2">
            <FaStar
              size={20}
              className="text-[#edd2cb] cursor-pointer"
            />
            <FaStar
              size={20}
              className="text-[#edd2cb] cursor-pointer"
            />
            <FaStar
              size={20}
              className="text-[#edd2cb] cursor-pointer"
            />
            <FaStar
              size={20}
              className="text-[#edd2cb] cursor-pointer"
            />
            <FaStar
              size={20}
              className="text-[#edd2cb] cursor-pointer"
            />
        </div>
        <button className="mt-3 w-full bg-[#543c52] hover:bg-[#361d32] text-[#f1e8e6] p-2 rounded-2xl">
          Надіслати
        </button>
      </div>
    </div>
    </div>
    </>
  );
}
