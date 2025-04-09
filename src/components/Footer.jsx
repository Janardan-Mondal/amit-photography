import { motion } from "framer-motion";
import React from "react";
import { AiOutlineCopyright, AiOutlineFacebook } from "react-icons/ai";
import { CiAt } from "react-icons/ci";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {

    return (
        <div>
            <hr className="mt-4 border-rose-300" />
            <div className="mb-4 w-full mt-5 flex gap-1 flex-col justify-center items-center md:flex-row md:justify-between">
                <motion.h1 initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0 }} className="font-medium text-xl">Amit Photography</motion.h1>
                <div className="flex gap-4 mb-3">
                    <motion.a initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.15 }} href="https://www.facebook.com/amit.chowdhuri.967" target="_blank"><AiOutlineFacebook size={30} className="cursor-pointer text-[#001F3F] hover:bg-[#4169E1] hover:text-cyan-100 rounded transition-all duration-500" /></motion.a>
                    <motion.a initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.30 }} href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Famit_chowdhuri02%3Ffbclid%3DIwZXh0bgNhZW0CMTAAAR2wE305wI1O6isWL4C44UKGu6i99GfE5JtIfMPwYApYUsQDfGfR6BTqugE_aem_7O_up2QUH7Ge8OnGFcbzDQ&h=AT3pU8pNzA7ysbxKFK8Vnc_D8N0L8ZVL3iz35j-TuPTE1C0BqOFWaXr6FNMWxBuyawjPR8PILs-LjASzqTni2I9fshUCxN48GYYfFE84tUGSiMDD9hR_3aamPOEGSEAxphApkmkCpxr9fJrAN0GF" target="_blank"><FaInstagram size={30} className="cursor-pointer text-[#001F3F] hover:bg-[#4169E1] hover:text-cyan-100 rounded transition-all duration-500" /></motion.a>
                    <motion.a initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.45 }} href="https://wa.me/916296686896" target="_blank"><FaWhatsapp size={30} className="cursor-pointer text-[#001F3F] hover:bg-[#4169E1] hover:text-cyan-100 rounded transition-all duration-500" /></motion.a>
                    {/* href="https://wa.me/6296686896" target="_blank" */}
                </div>
                <motion.div initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0, }} transition={{ duration: 0.4, delay: 0.60 }} className="flex items-center gap-1">
                    <AiOutlineCopyright /> <p className="flex items-center">2025 || All rights reserved. <a href="https://www.facebook.com/bara.chandan" target="_blank"> <CiAt className="fill-[#001F3F] cursor-pointer" /></a></p>
                </motion.div>
            </div>
        </div>);
};

export default Footer;
