import React, { useState } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const ContactForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
        setTimeout(() => {
            setSubmitted(true);
        }, 100);
    };

    if (submitted) {
        return (
            <>
                <div className="text-2xl">Thank you!</div>
                <div className="text-md">We'll be in touch soon.</div>
            </>
        );
    }

    return (
        <div className="bg-slate-900 flex w-full justify-center">
            <div className="px-8 py-12 w-1/3 bg-slate-900">
                <div className="text-white pb-4 text-xl">
                    <h3>Send us a message</h3>
                </div>
                <form
                    action={FORM_ENDPOINT}
                    onSubmit={handleSubmit}
                    method="POST"
                    target="_blank"
                >
                    <div className="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Your name"
                            name="name"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-1">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="mb-3 pt-1">
                        <textarea
                            placeholder="Your message"
                            name="message"
                            className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                            required
                        />
                    </div>
                    <div className="flex justify-center mb-3 pt-0">
                        <button
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                        >
                            Send your message
                        </button>
                    </div>
                </form>
            </div></div>
    );
};

export default ContactForm;