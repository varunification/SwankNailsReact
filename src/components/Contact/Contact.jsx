import React, { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch("https://emailme20240203194946.azurewebsites.net/api/Function1?code=z4LlBnWlejb81x7TPrXSgqtnQfWQjjO2I0e0Dovg0UoCAzFuLLPYiQ==", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log("Success:", data);
            alert('Form submitted successfully!');
            setFormData({name: "", email: "", tel: ""});
        })
        .catch((error) => {
            console.error("Error:", error);
            alert('An error occurred while submitting the form.');
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto">
                <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                        {/* Contact Info Section */}
                        <div className="bg-gray-100 p-8 md:p-12 flex flex-col justify-center">
    <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
        Get in touch
    </h1>
    <p className="text-lg text-gray-600 mb-8 text-center">
        Fill in the form to start a conversation
    </p>

    <div className="space-y-6 max-w-md mx-auto">
        <div className="flex items-start">
            <svg className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <div className="ml-4 text-center md:text-left">
                <h3 className="text-sm font-semibold text-gray-500">ADDRESS</h3>
                <p className="text-gray-700">Phursungi, Pune, Maharashtra, 412308</p>
            </div>
        </div>

        <div className="flex items-start">
            <svg className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <div className="ml-4 text-center md:text-left">
                <h3 className="text-sm font-semibold text-gray-500">PHONE</h3>
                <p className="text-gray-700">+91 8484866248</p>
            </div>
        </div>

        <div className="flex items-start">
            <svg className="w-6 h-6 text-gray-500 mt-1 flex-shrink-0">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <div className="ml-4 text-center md:text-left">
                <h3 className="text-sm font-semibold text-gray-500">EMAIL</h3>
                <p className="text-gray-700 break-all">salonnailsswanky@gmail.com</p>
            </div>
        </div>
    </div>
</div>

                        {/* Contact Form Section */}
                        <div className="p-8 md:p-12">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="sr-only">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Full Name"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="tel" className="sr-only">Telephone Number</label>
                                    <input
                                        type="tel"
                                        name="tel"
                                        id="tel"
                                        value={formData.tel}
                                        onChange={handleChange}
                                        placeholder="Telephone Number"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}