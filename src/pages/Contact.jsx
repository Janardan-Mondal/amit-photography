import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";

const WhatsAppForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "916289204816"; // Replace with your WhatsApp number
        const text = `Name: ${formData.name}\nSubject: ${formData.subject}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
        const encodedText = encodeURIComponent(text);
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedText}`;

        window.open(whatsappURL, "_blank");
    };

    return (
        <div className="h-[75vh]">
            <form onSubmit={handleSubmit} className="p-4 border-none rounded-lg shadow-md md:w-1/2 m-auto mt-3.5">
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0 }}>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name... "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border-none p-2 w-full outline-amber-100"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.15 }}>
                    <label>Subject:</label>
                    <input
                        placeholder="What is booking reason!"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border-none outline-amber-100 p-2 w-full"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.30 }}>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Mail Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border-none outline-amber-100 p-2 w-full"
                    />
                </motion.div>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.45 }}>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        placeholder="Describe shortly with dates you want... !!!"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border-none outline-amber-100 p-2 w-full"
                    />
                </motion.div>
                <motion.button initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.60 }} type="submit" className="mt-3 bg-green-500 text-white p-2 rounded">
                    Send to WhatsApp
                </motion.button>
            </form>
        </div>
    );
};

export default WhatsAppForm;
