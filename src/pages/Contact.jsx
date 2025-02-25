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
            <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md md:w-1/2 m-auto mt-3.5">
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name... "
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Subject:</label>
                    <input
                        placeholder="What is booking reason!"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Mail Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        name="message"
                        placeholder="Describe shortly with dates you want... !!!"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="border p-2 w-full"
                    />
                </div>
                <button type="submit" className="mt-3 bg-green-500 text-white p-2 rounded">
                    Send to WhatsApp
                </button>
            </form>
        </div>
    );
};

export default WhatsAppForm;
