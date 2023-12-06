import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from "../assets/images/logo.png";

export const Navbar = () => {
    let Links = [
        //{ name: "Home", link: "/" },
        //{ name: "Testimonials", link: "/testimonials" },
        { name: "Contact", link: "mailto:bluearrowelectric@gmail.com" },
    ];

    const location = useLocation();
    const [open, setOpen] = useState(false);

    return (
        <nav className="main-nav pb-0 pt-4 bg-transparent">
            <div className="w-full fixed top-0 left-0 pt-8">
                <div className="flex">
                    <div className="flex">
                        <ul className='flex justify-center items-center text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl'>
                            <div className='pl-8'>  <img src={logo} alt="logo" className="m-0 w-60 pl-4 py-4"></img></div>

                            <div className="sm:flex md:flex px-14 absolute right-0 py-8">
                                {/*} {Links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl py-8"
                                    >
                                        <a
                                            target={(link.name === "Twitter") && "_blank"}
                                            href={link.link}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                               
                                <a href="mailto:bluearrowelectric@gmail.com"
                                    className="text-black hover:text-blue-500 transition-colors">
                                    Contact Us
                                </a>*/}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
