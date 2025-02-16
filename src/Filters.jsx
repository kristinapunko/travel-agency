import { useState } from "react";
import { FaGlobe, FaPlaneDeparture, FaCalendarAlt, FaUser } from "react-icons/fa";
import arrowIcon from "./assets/2.png";

const Filters = () => {
  const [selectedCountry, setSelectedCountry] = useState("Єгипет");
  const [selectedCity, setSelectedCity] = useState("Київ");
  const [nights, setNights] = useState("7 - 8 ночей");
  const [adults, setAdults] = useState(2);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const countries = ["Єгипет", "Туреччина", "Греція", "Іспанія"];
  const cities = ["Київ", "Львів", "Одеса", "Харків"];
  const nightsOptions = ["5 - 6 ночей", "7 - 8 ночей", "10 - 12 ночей"];
  const adultsOptions = [1, 2, 3, 4, 5];

  return (
    <div className="w-[90vw] xl:w-[80vw] mx-auto mt-6 bg-[#361d32]/25 p-6 rounded-xl shadow-lg">
      <div className="w-full md:w-[50vw] mx-auto relative flex items-center mb-6">
        <input
          type="text"
          placeholder="Пошук..."
          className="w-full text-[#543c52] px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#543c52]"
        />
        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#361d32] text-white p-2 rounded-full hover:bg-[#543c52] transition">
          <img src={arrowIcon} alt="Search" className="w-6 h-4" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-4">
        {[ 
          { icon: <FaGlobe />, label: "Країна, курорт", options: countries, state: selectedCountry, setState: setSelectedCountry, key: "country" },
          { icon: <FaPlaneDeparture />, label: "Виїзд з міста", options: cities, state: selectedCity, setState: setSelectedCity, key: "city" },
          { icon: <FaCalendarAlt />, label: "Дата, тривалість", options: nightsOptions, state: nights, setState: setNights, key: "nights" },
          { icon: <FaUser />, label: "Хто їде", options: adultsOptions.map(n => `${n} дорослих`), state: adults, setState: setAdults, key: "adults" }
        ].map(({ icon, label, options, state, setState, key }) => (
          <div key={key} className="relative w-full">
            <div 
              className="flex items-center gap-3 p-4 bg-white shadow-md rounded-lg cursor-pointer" 
              onClick={() => toggleDropdown(key)}
            >
              <span className="text-[#361d32] text-2xl">{icon}</span>
              <div>
                <p className="text-[#f55951] text-md">{label}</p>
                <p className="text-[#543c52] font-bold">{state}</p>
              </div>
            </div>
            {openDropdown === key && (
              <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                {options.map(option => (
                  <p 
                    key={option} 
                    className="px-4 py-2 hover:bg-[#f55951] hover:text-white cursor-pointer"
                    onClick={() => { setState(option); setOpenDropdown(null); }}
                  >
                    {option}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filters;
