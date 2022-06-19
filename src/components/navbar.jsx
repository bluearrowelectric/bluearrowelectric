import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {


    let Links = [
        { name: "Home", link: "/" },
        { name: "Contact", link: "mailto:bluearrowelectric@gmail.com" },
        //{ name: "Testimonials", link: "/testimonials" },

    ];

    const [open, setOpen] = useState(false);


    return (
        <nav className="main-nav pb-20">
            <div className="shadow-md w-full fixed top-0 left-0">
                <div className="md:flex lg:flex xl:flex xxl:flex items-center justify-between bg-white py-0 px-7">
                    <div className="desktop-nav">
                        <ul
                            className={`xs:flex sm:flex md:flex lg:flex xl:flex xxl:flex md:items-center lg:items-center xl:items-center xxl:items-center font-mono md:pb-0 lg:pb-0 xl:pb-0 xxl:pb-0 pb-12 absolute md:static lg:static xl:static xxl:static bg-spot-yellow md:z-auto lg:z-auto xl:z-auto xxl:z-auto z-[-1] 
      left-0 w-full md:w-auto lg:w-auto xl:w-auto xxl:w-auto md:pl-0 lg:pl-0 xl:pl-0 xxl:pl-0 pl-9 transition-all duration-300 ease-in ${open ? "top-20 opacity-90 bg-white" : "top-[-490px]"
                                }`}
                        >
                            <img src={logo} alt="logo" className="m-0 w-60 px-4 py-4"></img>
                            <div className="flex px-14 absolute right-0">

                                {Links.map((link) => (
                                    <li
                                        key={link.name}
                                        className="md:ml-8 lg:ml-8 xl:ml-8 xxl:ml-8 text-2xl hover:text-gray-400 duration-300 md:my-0 lg:my-0 xl:my-0 xxl:my-0 my-10 pl-2 px-8"
                                    >
                                        <a
                                            target={
                                                (link.name === "Twitter") &&
                                                "_blank"
                                            }
                                            href={link.link}
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}</div>
                        </ul>
                    </div>
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl absolute left-8 top-6 cursor-pointer md:hidden lg:hidden xl:hidden xxl:hidden"
                    >
                        <GiHamburgerMenu name={open ? "close" : "menu"} />
                    </div>

                </div>
            </div>
        </nav>
    )
}

