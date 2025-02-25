import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { NavLink, Navigate } from "react-router-dom";

const Navbar = () => {
    // const navigate = Navigate();
    const [menuShow, setMenuShow] = useState(true);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setMenuShow(true);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (<div className="w-full">
        <div className="flex justify-end bg-transparent items-center">
            <ul className=" gap-5 px-4 py-2 font-medium hidden md:flex">
                <li className="cursor-pointer hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded"><NavLink to="/">HOME</NavLink></li>
                <li className="cursor-pointer hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded"><NavLink to='/about'>ABOUT</NavLink></li>
                <li className="cursor-pointer hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded"><NavLink to='/galary'>GALARY</NavLink></li>
                <li className="cursor-pointer hover:bg-[rgb(152,197,252)] hover:text-white transition-all duration-300 px-4 py-2 rounded"><NavLink to='/contact'>CONTACT</NavLink></li>
            </ul>
            {menuShow ?
                <GiHamburgerMenu onClick={() => setMenuShow(!menuShow)} className=" text-3xl cursor-pointer md:hidden block mr-3 mt-2 " /> :
                <div className={`w-full fixed z-50 bg-blue-300 top-0 right-0 h-[100vh] transition-all duration-300`}>
                    <div>
                        <IoClose onClick={() => setMenuShow(!menuShow)} className=" text-3xl cursor-pointer md:hidden block mr-12 mt-2 float-end " />
                    </div>
                    <div className="mt-20 ">
                        <ul>
                            <li className="cursor-pointer mt-1 text-center hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded" onClick={() => setMenuShow(true)}><NavLink to="/">HOME</NavLink></li>
                            <li className="cursor-pointer mt-1 text-center hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded" onClick={() => setMenuShow(true)}><NavLink to='/about'>ABOUT</NavLink></li>
                            <li className="cursor-pointer mt-1 text-center hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded" onClick={() => setMenuShow(true)}><NavLink to='/galary'>GALARY</NavLink></li>
                            <li className="cursor-pointer mt-1 text-center hover:bg-[#98c5fc] hover:text-white transition-all duration-300 px-4 py-2 rounded" onClick={() => setMenuShow(true)}><NavLink to='/contact'>CONTACT</NavLink></li>
                        </ul>
                    </div>
                </div>}
        </div>
    </div>);
};

export default Navbar;
