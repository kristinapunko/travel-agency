import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import {
  FiArrowRight,
  FiBarChart2,
  FiChevronDown,
  FiHome,
  FiPieChart,
} from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useScroll } from "motion/react"
import logo from './assets/Logo .png'
import {Link} from "react-router-dom";


function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
  <header className="sticky top-0 left-0 w-full bg-white shadow-md z-50">
    <nav className="flex justify-between items-center w-[92%] mx-auto">
      {/* Логотип */}
      <div>
        <a href="#" className=""><img className="w-[120px] md:w-[160px]" src={logo} alt="" /></a>
      </div>

      {/* Меню */}
      <div 
        className={`nav-links absolute bg-white w-full left-0 transition-all duration-300 ease-in-out ${
          isOpen ? "top-[100%] opacity-100" : "top-[-100%] opacity-0"
        } lg:static lg:w-auto lg:flex lg:items-center lg:opacity-100 lg:top-0 lg:min-h-fit min-h-[60vh] px-5`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[4vw] gap-8">
          <li>
            <Link to="/" className=" text-sm xl:text-base relative inline-block text-[#543c52] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#543c52] after:transition-all after:duration-300 hover:after:w-full">
              Головна
            </Link>
          </li>
          <li>
            <Link to='/alltours' className=" text-sm xl:text-base relative inline-block text-[#543c52] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#543c52] after:transition-all after:duration-300 hover:after:w-full">
              Пошук
            </Link>
          </li>
          <li>
            <Tabs isOpen={isOpen} className="relative text-sm xl:text-base inline-block text-[#543c52]" />
          </li>
        </ul>
      </div>

      {/* Кнопки та бургер-меню */}
      <div className="flex items-center gap-6">
        <Link className="bg-[#f1e8e6] text-sm text-[#543c52] px-4 py-2 rounded-full hover:bg-[#edd2cb]" to="/login">
          Log in
        </Link>
        <Link className="bg-[#543c52] text-sm text-[#f1e8e6] px-4 py-2 rounded-full hover:bg-[#361d32]" to="/register">
          Sign up
        </Link>
        {/* Бургер-іконка */}
        <ion-icon 
          name={isOpen ? "close" : "menu"} 
          onClick={() => setIsOpen(!isOpen)}  
          className="lg:hidden text-3xl cursor-pointer"
        ></ion-icon>
      </div>
    </nav>
  </header>
</>

    )
}


const Tabs = ({ isOpen }) => {
    const [selected, setSelected] = useState(null);
    const [dir, setDir] = useState(null);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const handleSetSelected = (val) => {
      if (typeof selected === "number" && typeof val === "number") {
        setDir(selected > val ? "r" : "l");
      } else if (val === null) {
        setDir(null);
      }
      setSelected(val);
    };

    const toggleTab = (id) => {
      setSelected((prev) => (prev === id ? null : id));
    };

    return (
      <div
        onMouseLeave={() => handleSetSelected(null)}
        className={isOpen ? "block" : "relative flex h-fit gap-8 text-sm xl:text-base"}
      >
        {TABS.map((t) => {
          return (
            <div key={t.id} className="relative">
              {(isOpen && isMobile) ? (
                <div className="pb-6">
                  <button
                    onClick={() => toggleTab(t.id)}
                    className="relative inline-block text-[#543c52] 
                              after:content-[''] after:absolute after:left-0 after:bottom-0 
                              after:w-0 after:h-[2px] after:bg-[#543c52] 
                              after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {t.title}
                  </button>
                  <AnimatePresence>
                    {selected === t.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-2  pt-2 bg-white s p-2"
                      >
                        <t.Component />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Tab
                  selected={selected}
                  handleSetSelected={handleSetSelected}
                  tab={t.id}
                >
                  {t.title}
                </Tab>
              )}
            </div>
          );
        })}

        {!isOpen && (
          <AnimatePresence>{selected && <Content dir={dir} selected={selected} />}</AnimatePresence>
        )}
      </div>
    );
  };

  
  const Tab = ({ children, tab, handleSetSelected, selected }) => {
    return (
      <button
        id={`shift-tab-${tab}`}
        onMouseEnter={() => handleSetSelected(tab)}
        onClick={() => handleSetSelected(tab)}
        className={`flex items-center gap-1 rounded-full  text-md  ${
          selected === tab
            ? "relative inline-block text-[#543c52] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#543c52] after:transition-all after:duration-300 hover:after:w-full"
            : "text-[#543c52]"
        }`}
      >
        <span>{children}</span>
        <FiChevronDown
          className={`transition-transform ${
            selected === tab ? "rotate-180" : ""
          }`}
        />
      </button>
    );
  };
  
  const Content = ({ selected, dir }) => {
    return (
      <motion.div
        id="overlay-content"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          y: 8,
        }}
        className="absolute left-0 tabs-container z-20 top-[calc(100%_+_24px)] w-96 rounded-lg border bg-white border-[#361d32] p-4"
      >
        <Bridge />
        <Nub selected={selected} />
  
        {TABS.map((t) => {
          return (
            <div className="overflow-hidden " key={t.id}>
              {selected === t.id && (
                <motion.div
                  initial={{
                    opacity: 0,
                    x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <t.Component />
                </motion.div>
              )}
            </div>
          );
        })}
      </motion.div>
    );
  };
  
  const Bridge = () => (
    <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
  );
  
  const Nub = ({ selected }) => {
    const [left, setLeft] = useState(0);
  
    useEffect(() => {
      moveNub();
    }, [selected]);
  
    const moveNub = () => {
      if (selected) {
        const hoveredTab = document.getElementById(`shift-tab-${selected}`);
        const overlayContent = document.getElementById("overlay-content");
  
        if (!hoveredTab || !overlayContent) return;
  
        const tabRect = hoveredTab.getBoundingClientRect();
        const { left: contentLeft } = overlayContent.getBoundingClientRect();
  
        const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;
  
        setLeft(tabCenter);
      }
    };
  
    return (
      <motion.span
        style={{
          clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
        }}
        animate={{ left }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="absolute z-40 left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-[#361d32] bg-[#543c52]"
      />
    );
  };
  
  const Products = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    return (
<div>
      <div className={isMobile ? "flex flex-col gap-4" : "flex gap-4"}>
        <div>
          <h3 className="mb-2 text-sm text-[#361d32] font-medium">По Україні</h3>
          <a href="#" className="block text-sm text-[#543c52]">Київ</a>
          <a href="#" className="block text-sm text-[#543c52]">Одеса</a>
          <a href="#" className="block text-sm text-[#543c52]">Львів</a>
          <a href="#" className="block text-sm text-[#543c52]">Харків</a>
          <a href="#" className="block text-sm text-[#543c52]">Дніпро</a>
          <a href="#" className="block text-sm text-[#543c52]">Чернівці</a>
          <a href="#" className="block text-sm text-[#543c52]">Івано-Франківськ</a>
          <a href="#" className="block text-sm text-[#543c52]">Ужгород</a>
        </div>
        <div>
          <h3 className="mb-2 text-sm text-[#361d32] font-medium">Європа</h3>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Варшава</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Кишинів</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Прага</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Берлін</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Рим</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Барселона</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Париж</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Амстердам</a>
        </div>
        <div>
          <h3 className="mb-2 text-sm text-[#361d32] font-medium">Світ</h3>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Нью-Йорк</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Токіо</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Бангкок</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Сідней</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Ріо-де-Жанейро</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Дубай</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Кейптаун</a>
        </div>
      </div>
  
        <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-[#f55951]">
          <span>Усі гарячі тури</span>
          <FiArrowRight />
        </button>
      </div>
    );
  };

  const Filters = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
    return (
   
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    
    {/* Фільтр за ціною (повзунок) */}
    <div>
      <label className="block text-sm text-[#543c52] font-medium">
        Ціна:
      </label>
      <input
        type="range"
        min="100"
        max="5000"
        step="100"
        className="w-full cursor-pointer"
      />
    </div>

    {/* Фільтр за типом транспорту */}
    <div>
      <label className="block text-sm text-[#543c52] font-medium">
        Тип проїзду:
      </label>
      <div className="flex flex-col gap-1">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">Літак</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">Автобус</span>
        </label>
      </div>
    </div>

    {/* Фільтр за класом готелю */}
    <div>
      <label className="block text-sm text-[#543c52] font-medium">
        Клас готелю:
      </label>
      <div className="flex flex-col gap-1">
      <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">1-2 зірки</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">3 зірки</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">4 зірки</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">5 зірок</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">Не важливо</span>
        </label>
      </div>
    </div>

    {/* Фільтр за типом харчування */}
    <div>
      <label className="block text-sm text-[#543c52] font-medium">
        Тип харчування:
      </label>
      <div className="flex flex-col gap-1">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">ОВ (без харчування)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">ВВ (сніданок)</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">НВ (сніданок + вечеря) </span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">FB (3-раз. харчування) </span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="accent-[#543c52]" />
          <span className="text-sm text-[#543c52]">Al (все включено)</span>
        </label>
      </div>
    </div>
    <div>
      <button>
        Скасувати
      </button>
    </div>
      </div>
    );
  };
  

  const Countries = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return (
    <div>
      <div className={isMobile ? "flex flex-col gap-4" : "flex gap-4"}>
        <div>
          <h3 className="mb-2 text-sm text-[#361d32] font-medium">По Україні</h3>
          <a href="#" className="block text-sm text-[#543c52]">Київ</a>
          <a href="#" className="block text-sm text-[#543c52]">Одеса</a>
          <a href="#" className="block text-sm text-[#543c52]">Львів</a>
          <a href="#" className="block text-sm text-[#543c52]">Харків</a>
          <a href="#" className="block text-sm text-[#543c52]">Дніпро</a>
          <a href="#" className="block text-sm text-[#543c52]">Чернівці</a>
          <a href="#" className="block text-sm text-[#543c52]">Івано-Франківськ</a>
          <a href="#" className="block text-sm text-[#543c52]">Ужгород</a>
        </div>
        <div>
          <h3 className="mb-2 text-sm text-[#361d32] font-medium">Європа</h3>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Варшава</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Кишинів</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Прага</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Берлін</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Рим</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Барселона</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Париж</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Амстердам</a>
        </div>
        <div>
          <h3 className="mb-2 text-sm text-[#361d32] font-medium">Світ</h3>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Нью-Йорк</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Токіо</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Бангкок</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Сідней</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Ріо-де-Жанейро</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Дубай</a>
          <a href="#" className="mb-1 block text-sm text-[#543c52]">Кейптаун</a>
        </div>
      </div>
  
  
        <button className="ml-auto mt-4 flex items-center gap-1 text-sm text-[#f55951]">
          <span>Усі гарячі тури</span>
          <FiArrowRight />
        </button>
      </div>
    );
  };
  
  const TABS = [
    {
      title: "Гарячі тури",
      Component: Products,
    },
    {
      title: "Країни",
      Component: Countries,
    },
    {
        title: "Фільтрувати",
        Component: Filters,
      },

  ].map((n, idx) => ({ ...n, id: idx + 1 }));



export default Header;
