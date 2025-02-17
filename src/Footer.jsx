import { FaFacebookF, FaInstagram, FaYoutube, FaTelegram, FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" bg-[#361d32] text-[#f1e8e6]">
           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <ul>
                <h1 className="mb-1  font-semibold">Куди поїхати</h1>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Підбір туру</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Гарячі тури</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Країни</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Автобусні тури</a>
                </li>
            </ul>
            <ul>
                <h1 className="mb-1  font-semibold">Види відпочинку</h1>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Відпочинок на морі</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Пляжні тури</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Відпочинок із дітьми</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Тури в Європу</a>
                </li>
            </ul>
            <ul>
                <h1 className="mb-1  font-semibold">Про компанію</h1>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Про нас</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Написати відгук</a>
                </li>
            </ul>
            <ul>
                <h1 className="mb-1  font-semibold">Туристу</h1>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Акційні тури</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Сезон</a>
                </li>
                <li>
                    <a className="text-[#edd2cb] hover:text-[#f55951] duration-300 text-sm cursor-pointer leading-6" href="#">Тривалість відпочинку</a>
                </li>
            </ul>
           </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-[#f55951]0 text-sm pb-8">
                 <span>© 2025 Всі права захищено.</span>
                 <span>Туристична агенція</span>
                 <div className="text-[#f55951]">
                    <span className="p-2 cursor pointer inline-flex items-center rounded-full bg-[#f1e8e6]  mx-1.5 text-xl hover:text-[#361d32] hover:bg-[#edd2cb] duration-300"><FaFacebookF/></span>
                    <span className="p-2 cursor pointer inline-flex items-center rounded-full bg-[#f1e8e6]  mx-1.5 text-xl hover:text-[#361d32] hover:bg-[#edd2cb] duration-300"><FaInstagram/></span>
                    <span className="p-2 cursor pointer inline-flex items-center rounded-full bg-[#f1e8e6]  mx-1.5 text-xl hover:text-[#361d32] hover:bg-[#edd2cb] duration-300"><FaYoutube/></span>
                    <span className="p-2 cursor pointer inline-flex items-center rounded-full bg-[#f1e8e6]  mx-1.5 text-xl hover:text-[#361d32] hover:bg-[#edd2cb] duration-300"><FaTelegram/></span>
                    <span className="p-2 cursor pointer inline-flex items-center rounded-full bg-[#f1e8e6]  mx-1.5 text-xl hover:text-[#361d32] hover:bg-[#edd2cb] duration-300"><FaTiktok/></span>
                 </div>
           </div>
        </footer>
    )
}

export default Footer;