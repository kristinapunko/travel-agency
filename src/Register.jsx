import {Link} from "react-router-dom";
import {BiUser} from "react-icons/bi"
import { AiOutlineUnlock, AiOutlineLock } from "react-icons/ai";
import React, { useState } from 'react';
import './App.css'

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
      };
      
      const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
      };
      

    return (
        <div>
        <div className="bg-[#543c52]/50 border-[#edd2cb] rounded-2xl p-4 md:p-8 shadow-lg backdrop-blur-sm relative">
            <h1 className="text-3xl md:text-4xl text-white font-bold text-center mb-4 md:mb-8">Register</h1>
            <form action="">
            <div className="relative  my-3 md:my-4">
                <input type="email" className="block  w-64 md:w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#f55951] focus:outline-none focus:ring-0 focus-text-white focus-border-[#f55951] peer" placeholder="" />
                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 -top-1  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f55951] peer-focus:dark:text-[#f55951] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
                <BiUser className="absolute -top-1 right-4"/>
            </div>
            <div className="relative my-7">
                <input type={passwordShown ? "text" : "password"} className="block  w-64 md:w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#f55951] focus:outline-none focus:ring-0 focus-text-white focus-border-blue-600 peer" placeholder=""/>
                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 -top-1  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f55951] peer-focus:dark:text-[#f55951] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute -top-1 right-4"
                >
                    {passwordShown ? <AiOutlineLock /> : <AiOutlineUnlock />}
                </button>
            </div>
            <div className="relative my-4 md:my-7">
                <input type={confirmPasswordShown ? "text" : "password"} className="block  w-64 md:w-80 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-[#f55951] focus:outline-none focus:ring-0 focus-text-white focus-border-[#f55951] peer" placeholder=""/>
                <label htmlFor="" className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 -top-1  -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#f55951] peer-focus:dark:text-[#f55951] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                <button
                    type="button"
                    onClick={toggleConfirmPasswordVisibility}
                    className="absolute -top-1 right-4"
                >
                    {confirmPasswordShown ? <AiOutlineLock /> : <AiOutlineUnlock />}
                </button>
            </div>
            
            <button className="w-full mb-4 text-[18px] mt-4 md:mt-6 rounded-full bg-white text-[#543c52] hover:text-[#f55951] py-1 md:py-2 transition-colors duration-300" type="submit">Register</button>
            <div>
                <span className="m-4">Already Create an Account?<Link className="text-[#f55951]" to='/login'> Login</Link></span>
            </div>
            </form>
        </div>
    </div>
    )
};

export default Register;