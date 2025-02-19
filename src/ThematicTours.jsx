import extreme from './assets/extreme.jpg';
import beach from './assets/beach.jpg';
import festival from './assets/festival.jpg';
import gastronomic from './assets/gastronomic.jpg';
import nature from './assets/nature.jpg';
import winter from './assets/winter.jpg';
import React from "react";

const TourList = () => {
  return (
    <div className="w-[90%] lg:w-5/6 mx-auto mb-1 ">
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 p-6">

        <div className="flex bg-[#361d32]/25 shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-xl transition-transform transform hover:scale-105 cursor-pointer">
          <img src={extreme} alt="" className="w-1/3 h-auto md:h-32 object-cover" />
          <div className="w-2/3 p-4">
            <h3 className="lg:text-xl text-sm font-semibold text-[#361d32]">Екстремальні та спортивні тури</h3>
            <ul className="text-[#543c52] text-[10px] lg:text-sm mt-2">
              <li>Гірськолижні тури</li>
              <li>Дайвінг та снорклінг</li>
              <li>Стрибки з парашутом</li>
            </ul>
          </div>
        </div>

        <div className="flex bg-[#361d32]/25 shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-xl transition-transform transform hover:scale-105 cursor-pointer">
          <img src={beach} alt="" className="w-1/3 h-auto md:h-32 object-cover" />
          <div className="w-2/3 p-4">
            <h3 className="lg:text-xl text-sm font-semibold text-[#361d32]">Пляжні тури</h3>
            <ul className="text-[#543c52] text-[10px] lg:text-sm mt-2">
              <li>Екзотичні пляжні тури</li>
              <li>Європейські пляжні тури</li>
            </ul>
          </div>
        </div>

        <div className="flex bg-[#361d32]/25 shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-xl transition-transform transform hover:scale-105 cursor-pointer">
          <img src={festival} alt="" className="w-1/3 h-auto md:h-32 object-cover" />
          <div className="w-2/3 p-4">
            <h3 className="lg:text-xl text-sm font-semibold text-[#361d32]">Фестивальні тури</h3>
            <ul className="text-[#543c52] text-[10px] lg:text-sm mt-2">
              <li>Октаберфест у Німеччині</li>
              <li>Карнавал у Ріо-де-Жанейро</li>
              <li>Фестиваль ліхтарів у Таїланді</li>
            </ul>
          </div>
        </div>

        <div className="flex bg-[#361d32]/25 shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-xl transition-transform transform hover:scale-105 cursor-pointer">
          <img src={gastronomic} alt="" className="w-1/3 h-auto md:h-32 object-cover" />
          <div className="w-2/3 p-4">
            <h3 className="lg:text-xl text-sm font-semibold text-[#361d32]">Гастрономічні тури</h3>
            <ul className="text-[#543c52] text-[10px] lg:text-sm mt-2">
              <li>Дегустації вин та сирів</li>
              <li>Фермерські еко-тури</li>
            </ul>
          </div>
        </div>

        <div className="flex bg-[#361d32]/25 shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-xl transition-transform transform hover:scale-105 cursor-pointer">
          <img src={nature} alt="" className="w-1/3 h-auto md:h-32 object-cover" />
          <div className="w-2/3 p-4">
            <h3 className="lg:text-xl text-sm font-semibold text-[#361d32]">Природні та еко-тури</h3>
            <ul className="text-[#543c52] text-[10px] lg:text-sm mt-2">
              <li>Походи в гори (Карпати, Альпи)</li>
              <li>Сафарі в національних парках</li>
            </ul>
          </div>
        </div>

        <div className="flex bg-[#361d32]/25 shadow-lg rounded-2xl overflow-hidden border border-gray-200 max-w-xl transition-transform transform hover:scale-105 cursor-pointer">
          <img src={winter} alt="" className="w-1/3 h-auto md:h-32 object-cover" />
          <div className="w-2/3 p-4">
            <h3 className="lg:text-xl text-sm font-semibold text-[#361d32]">Зимові тури</h3>
            <ul className="text-[#543c52] text-[10px] lg:text-sm mt-2">
              <li>Різдвяна Європа</li>
              <li>Класика альпійських лиж</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList; 