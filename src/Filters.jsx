import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaGlobe, FaPlaneDeparture, FaCalendarAlt, FaUser } from "react-icons/fa";
import arrowIcon from "./assets/2.png";
import { registerLocale } from "react-datepicker";
import uk from "date-fns/locale/uk"; // Правильний імпорт

registerLocale("uk", uk); 
import './App.css'
const Filters = () => {
  const [selectedCountry, setSelectedCountry] = useState("Оберіть країну");
  const [selectedCity, setSelectedCity] = useState("Оберіть місто");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [adults, setAdults] = useState(2);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const toggleDropdownn = () => {
    setCalendarOpen(!calendarOpen);
  };

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const formattedDate = startDate
    ? startDate.toLocaleDateString("uk-UA", {
        year: "2-digit",
        month: "short",
        day: "numeric",
      }) +
      (endDate
        ? " - " +
          endDate.toLocaleDateString("uk-UA", {
            year: "2-digit",
            month: "short",
            day: "numeric",
          })
        : "")
    : "Оберіть дату";

  const countries = ["Укaраїна", "Туреччина", "Франція", "Мексика", "Японія", "Іспанія", "Таїланд", "Швейцарія", "Італія", "Єгипет", "Німеччина", "Греція", "США", "Чехія", "Австралія"];
  const cities = ["Київ", "Львів", "Одеса", "Харків"];

  return (
    <div className="w-[90vw] xl:w-[80vw] mx-auto mt-6 bg-[#361d32]/25 p-4 lg:p-6 rounded-xl shadow-lg">
      <div className="w-full md:w-[50vw] mx-auto relative flex items-center mb-3 lg:mb-6">
        <input
          type="text"
          placeholder="Пошук..."
          className="w-full text-[#543c52] px-2 py-1 lg:px-4 lg:py-2 rounded-full ring-2 ring-white focus:outline-none focus:ring-2 focus:ring-[#543c52]"
        />
        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#361d32] text-white p-1 lg:p-2 rounded-full hover:bg-[#543c52] transition">
          <img src={arrowIcon} alt="Search" className="w-6 h-4" />
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-4">
        <div className="relative w-full">
          <div 
            className="flex items-center gap-3 p-2 lg:p-4 bg-white shadow-md rounded-lg cursor-pointer" 
            onClick={() => toggleDropdown("country")}
          >
            <span className="text-[#361d32] text-2xl"><FaGlobe /></span>
            <div>
              <p className="text-[#f55951] text-md">Країна, курорт</p>
              <p className="text-[#543c52] font-bold">{selectedCountry}</p>
            </div>
          </div>
          {openDropdown === "country" && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto">
              {countries.map(option => (
                <p 
                  key={option} 
                  className="px-4 py-2 hover:bg-[#f55951] hover:text-white cursor-pointer"
                  onClick={() => { setSelectedCountry(option); setOpenDropdown(null); }}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
          </div>


        <div className="relative w-full">
          <div 
            className="flex items-center gap-3 p-2 lg:p-4 bg-white shadow-md rounded-lg cursor-pointer" 
            onClick={() => toggleDropdown("city")}
          >
            <span className="text-[#361d32] text-2xl"><FaPlaneDeparture /></span>
            <div>
              <p className="text-[#f55951] text-md">Виїзд з міста</p>
              <p className="text-[#543c52] font-bold">{selectedCity}</p>
            </div>
          </div>
          {openDropdown === "city" && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10 max-h-60 overflow-y-auto">
              {cities.map(option => (
                <p 
                  key={option} 
                  className="px-4 py-2 hover:bg-[#f55951] hover:text-white cursor-pointer"
                  onClick={() => { setSelectedCity(option); setOpenDropdown(null); }}
                >
                  {option}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="relative w-full">
  <div className="flex items-center gap-3 p-2 lg:p-4 bg-white shadow-md rounded-lg cursor-pointer" onClick={toggleDropdownn}>
    <span className="text-[#361d32] text-2xl"><FaCalendarAlt /></span>
    <div className=" relative w-auto">
      <p className="text-[#f55951] text-md">Дата, тривалість</p>
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates;
                setStartDate(start);
                setEndDate(end);
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              monthsShown={2}
              locale="uk" 
              placeholderText="Оберіть дату "
              value={formattedDate }
              //customInput={formattedDate}
              className="bg-white text-[#543c52] w-full cursor-pointer"
              calendarClassName="custom-datepicker"
              //open={calendarOpen}
              //onClickOutside={() => setCalendarOpen(false)}
            />
            
    </div>
  </div>
</div>

         
  {/* <div className="bg-white absolute left-0 mt-2 w-full  bg-white shadow-lg rounded-lg z-10 p-4">
<DatePicker
  selected={startDate}
  onChange={(dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  }}
  startDate={startDate}
  endDate={endDate}
  selectsRange
  monthsShown={2}
  placeholderText="Виберіть діапазон дат"
  className="border p-4 w-full mx-auto rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#543c52] focus:border-transparent bg-white text-[#543c52]"
  calendarClassName="custom-datepicker"
/>


  </div> */}

        <div className="relative w-full">
          <div 
            className="flex items-center gap-3 p-2 lg:p-4 bg-white shadow-md rounded-lg cursor-pointer" 
            onClick={() => toggleDropdown("adults")}
          >
            <span className="text-[#361d32] text-2xl"><FaUser /></span>
            <div>
              <p className="text-[#f55951] text-md">Хто їде</p>
              <p className="text-[#543c52] font-bold">Дорослих: {adultCount} Дітей: {childCount}</p>
            </div>
          </div>
          {openDropdown === "adults" && (
            <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
              <div className="mt-4 flex items-center justify-between">
              <span className="mx-4">Дорослі:</span>
              <div className="mx-4">
                <button onClick={()=>setAdultCount(adultCount-1)} className="text-2xl px-2 disabled:text-gray-200" disabled={adultCount <= 1}>-</button>
                <span className="mx-2">{adultCount}</span>
                <button onClick={()=>setAdultCount(adultCount+1)} className="text-2xl px-2">+</button>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="mx-4">Діти:</span>
              <div  className="mx-4 ">
                <button onClick={()=>setChildCount(childCount-1)} className="text-2xl px-2 disabled:text-gray-200" disabled={childCount <= 0}>-</button>
                <span className="mx-2">{childCount}</span>
                <button onClick={()=>setChildCount(childCount+1)} className="text-2xl px-2">+</button>
              </div>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Filters;
