import React from "react";
import { assets } from "../assets/assets";
import { useTypewriter } from "react-simple-typewriter";

const About = () => {
    const [txt] = useTypewriter({
        words: ['Photographer', 'Videographer', 'Broadcast Recorder'],
        loop: true,
        typeSpeed: 100,
        deleteSpeed: 80,
    });

    return (
        <div className="my-10 flex flex-col md:flex-row items-center md:items-start gap-8 h-auto px-5">
            <img
                src={assets.amit1}
                className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] rounded-lg border-4 border-white shadow-lg hover:opacity-80 transition duration-300 object-cover"
                alt="Amit Choudhury - Photographer"
            />
            <div className="max-w-2xl text-center md:text-left">
                <h1 className="font-bold text-3xl md:text-4xl">Amit Choudhury</h1>
                <h2 className="mb-5 text-xl md:text-2xl">
                    Your <span className="text-red-500 font-semibold">{txt}</span>
                </h2>
                <p className="text-lg leading-relaxed">
                    Hi, I’m Amit, a passionate photographer specializing in portrait, landscape, wedding, and fashion photography.
                    With a keen eye for detail and a love for storytelling, I capture moments that last a lifetime.
                    Whether it's a candid shot or a meticulously composed frame, my goal is to create images that evoke emotions and tell a story.
                </p>
            </div>
        </div>
    );
};

export default About;
