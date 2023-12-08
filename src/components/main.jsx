import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bg1 from '../assets/images/BAE_BG/1.jpg';
import bg2 from '../assets/images/BAE_BG/2.jpg';
import bg3 from '../assets/images/BAE_BG/19.jpg';
import bg4 from '../assets/images/BAE_BG/4.jpg';
import bg5 from '../assets/images/BAE_BG/5.jpg';
import bg6 from '../assets/images/BAE_BG/21.jpg';
import bg7 from '../assets/images/BAE_BG/20.jpg'
import bg8 from '../assets/images/BAE_BG/22.jpg';
import bg9 from '../assets/images/BAE_BG/13.jpg';
import bg10 from '../assets/images/BAE_BG/10.jpg';
import bg11 from '../assets/images/BAE_BG/3.jpg';
import bg12 from '../assets/images/BAE_BG/14.jpg';

import logo1 from '../assets/images/logo.png';
import logo3 from '../assets/images/ParallelVision.png';
import logo4 from '../assets/images/Mackenzie.png';
import logo5 from '../assets/images/Appenzell.png';
import logo2 from '../assets/images/RavenLong.png';

function Main() {
    return (

        <div>
            <div className='block md:hidden'>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-200"
                    style={{
                        backgroundImage: `url(${logo1})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div>
                <div className="min-h-screen flex items-start pt-96 bg-blue bg-no-repeat snap-start bg-blue-200">
                    <div className="xl:w-1/2 lg:w-2/3 md:w-4/5 sm:w-full p-8">
                        <div className="bg-white bg-opacity-80 w-full px-16 pt-16 pb-60">
                            <div className="text-2xl">
                                Blue Arrow Electric Ltd has proudly served the Revelstoke, BC community for over 5 years, establishing enduring partnerships with local general contractors. As trusted subcontractors, we seamlessly integrate into the operations of various general contractors, becoming integral members of their project teams.
                            </div>
                            <div className="text-2xl mt-8">
                                Our commitment to excellence is reflected in the longstanding relationships we've cultivated, grounded in shared values with our general contractor partners. At Blue Arrow Electric Ltd, we align ourselves with our contractors' core principles, emphasizing Quality, Scheduling, and Budget in every project we undertake.
                            </div>
                            <div className="text-2xl mt-8">
                                We invite you to connect with one of our esteemed contracting partners today. Let's embark on the journey of planning and executing your next project together, ensuring its success through collaborative efforts and unwavering dedication.
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${bg5})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="http://appenzellconstruction.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${logo5})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${bg3})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="http://parallelvisioncontracting.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${logo3})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-500"
                    style={{
                        backgroundImage: `url(${bg5})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="http://mackenziedynamic.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-500"
                    style={{
                        backgroundImage: `url(${logo4})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="raven"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${logo2})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${bg5})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="mailto:bluearrowelectric@gmail.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${logo1})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div></a>

            </div>


            <div className="snap-y-manditory snap-proximity hidden md:block">
                <div
                    className="min-h-screen flex flex-col justify-center items-center bg-no-repeat bg-fixed snap-center bg-cover"
                    style={{
                        backgroundImage: `url(${bg2})`,
                        backgroundPosition: 'center',
                    }}
                ><div className="justify-center items-center mt-auto"></div>
                    <div className='bg-white bg-opacity-60 h-full py-8 w-full md:px-24'><img className='mx-auto px-24' src={logo1} alt="Logo 1" /></div>
                    <div className="justify-center items-center mt-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5" // Corrected
                            stroke="currentColor"
                            className="w-40 h-40 text-blue-700 opacity-60" // You can adjust the size and color using Tailwind CSS classes
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>


                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg8})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-start bg-blue bg-no-repeat bg-fixed snap-start"
                    style={{
                        backgroundImage: `url(${bg1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="min-h-screen flex items-start pt-96 bg-blue bg-no-repeat bg-fixed snap-start">
                        <div className="xl:w-1/2 lg:w-2/3 md:w-4/5 sm:w-full p-8">
                            <div className="bg-white bg-opacity-80 w-full px-16 pt-16 pb-60">
                                <div className="text-2xl">
                                    Blue Arrow Electric Ltd has proudly served the Revelstoke, BC community for over 5 years, establishing enduring partnerships with local general contractors. As trusted subcontractors, we seamlessly integrate into the operations of various general contractors, becoming integral members of their project teams.
                                </div>
                                <div className="text-2xl mt-8">
                                    Our commitment to excellence is reflected in the longstanding relationships we've cultivated, grounded in shared values with our general contractor partners. At Blue Arrow Electric Ltd, we align ourselves with our contractors' core principles, emphasizing Quality, Scheduling, and Budget in every project we undertake.
                                </div>
                                <div className="text-2xl mt-8">
                                    We invite you to connect with one of our esteemed contracting partners today. Let's embark on the journey of planning and executing your next project together, ensuring its success through collaborative efforts and unwavering dedication.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg9})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg7})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a href="http://appenzellconstruction.com"><img className='w-2/3 mx-auto' src={logo5} alt="Appenzell" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg6})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a href="http://parallelvisioncontracting.com"><img src={logo3} alt="Parallel Vision" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a href="http://mackenziedynamic.com"><img className='lg:w-2/3 md:w-2/3 mx-auto' src={logo4} alt="MacKenzie Dynamic" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg12})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center px-40"
                    style={{
                        backgroundImage: `url(${bg10})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <a href="https://www.facebook.com/ravencontractingrevelstoke/"><img src={logo2} alt="Raven" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg11})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bg7})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='bg-white bg-opacity-60 w-full py-8'><a href='mailto:bluearrowelectric@gmail.com'><img className='mx-auto px-12' src={logo1} alt="Logo 1" /></a></div>
                </div>

            </div></div>
    );
}

export default Main;
