import React, { useState } from "react";
import { assets } from '../assets/assets'

const Header = () => {

    // console.log(menuShow);
    return (
        <div>
            <div className="w-full flex md:flex-row flex-col gap-5">
                {/* ---Left side ---- */}
                <div className="md:w-1/2 w-full mt-5 flex flex-col gap-2">
                    <div className="relative">
                        <div className="absolute top-0 right-0 w-5 h-5 border-t-4 border-r-4 float-right border-black"></div>
                        <div></div>
                        <h1 className="font-bold px-5 py-4 "><span className="font-extrabold text-5xl md:text-5xl text-[#4169E1] ">CATCH <br />MEMORY</span> <br /><span className="text-3xl text-[#001F3F]">WITH OUR LENS</span></h1>
                        <div className="absolute left-0 buttom-0 w-5 h-5 border-l-4 border-b-4 border-black"></div>
                    </div>
                    <p className="mt-10 text-[#001F3F]">Every photograph tells a story, and I am here to capture yours. Whether it’s a fleeting glance, a moment of joy, or the beauty of everyday life, my lens seeks to freeze time and preserve the essence of each subject.</p>
                    <button className="md:w-1/2 m-auto bg-[#a7d0ec] text-[#001F3F] font-bold px-4 py-2 rounded-lg cursor-pointer shadow-lg shadow-blue-500/50 hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:transition-all hover:duration-500">DISCOVER IT</button>
                </div>
                {/* ---Left side ---- */}
                <div className="md:w-1/2 h-[80vh] w-full mt-5 flex flex-col gap-2 relative">
                    <img className="w-30 absolute top-0 right-0 md:right-10 rotate-60 " src={assets.film} alt="" />
                    <img className="w-50 absolute bottom-0 -right-5 -rotate-12 z-20 md:-rotate-40" src={assets.digitalCam} alt="" />
                    <img className="w-40 absolute rounded-lg border-2 border-white grayscale-25" src={assets.boy} alt="" />
                    <img className="w-40 absolute left-0 bottom-0 mix-blend-multiply " src={assets.lens} alt="" />
                    <img className="rounded-lg w-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-45 border-3 border-white" src={assets.pre_wid} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
