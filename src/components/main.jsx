import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import bluearrowbg1 from '../assets/images/BAE_BG/2.jpg';
import bluearrowbg2 from '../assets/images/BAE_BG/3.jpg';
import bluearrowbg3 from '../assets/images/BAE_BG/14.jpg';
import bluearrowbg4 from '../assets/images/BAE_BG/27.jpg';
import bluearrowbg5 from '../assets/images/BAE_BG/22.jpg';
import appenzellbg1 from '../assets/images/BAE_BG/17.jpg';
import appenzellbg2 from '../assets/images/BAE_BG/20.jpg';
import appenzellbg3 from '../assets/images/BAE_BG/11.jpg';
import parallelvisionbg1 from '../assets/images/BAE_BG/25.png';
import parallelvisionbg2 from '../assets/images/BAE_BG/24.jpg'
import mackenziedynamicbg1 from '../assets/images/BAE_BG/5.jpg';
import mackenziedynamicbg2 from '../assets/images/BAE_BG/13.jpg';
import ravenbg1 from '../assets/images/BAE_BG/26.jpg';
import appenzellmobilebg1 from '../assets/images/BAE_BG/28.jpg';
import parallelmobilebg1 from '../assets/images/BAE_BG/23.png';
import ravenmobilebg1 from '../assets/images/BAE_BG/29.jpg';
import baemobilebg1 from '../assets/images/BAE_BG/30.jpg';

import bae from '../assets/images/logo.png';
import parallelvision from '../assets/images/ParallelVision.png';
import mackenziedynamic from '../assets/images/Mackenzie.png';
import appenzell from '../assets/images/Appenzell.png';
import raven from '../assets/images/Raven2.png';

function Main() {
    return (
        //Mobile first 
        <div>
            <div className='block md:hidden'>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-200"
                    style={{
                        backgroundImage: `url(${bae})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                > <div className="justify-center items-center mt-auto">


                        <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24 text-blue-700 opacity-60">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div></div>
                <div className="min-h-screen max-h-screen flex items-start pt- bg-blue bg-no-repeat snap-start bg-blue-200">
                    <div className="w-full h-full p-8">
                        <div className="bg-white bg-opacity-80 w-full px-16 pt-8 pb-8">
                            <div className="text-sm">
                                Blue Arrow Electric Ltd has proudly served the Revelstoke, BC community for over 5 years, establishing enduring partnerships with local general contractors. As trusted subcontractors, we seamlessly integrate into the operations of various general contractors, becoming integral members of their project teams.
                            </div>
                            <div className="text-sm mt-8">
                                Our commitment to excellence is reflected in the longstanding relationships we've cultivated, grounded in shared values with our general contractor partners. At Blue Arrow Electric Ltd, we align ourselves with our contractors' core principles, emphasizing Quality, Scheduling, and Budget in every project we undertake.
                            </div>
                            <div className="text-sm mt-8">
                                We invite you to connect with one of our esteemed contracting partners today by clicking their link below. Let's embark on the journey of planning and executing your next project together, ensuring its success through collaborative efforts and unwavering dedication.
                            </div>
                        </div>

                    </div>
                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${appenzellmobilebg1})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="http://appenzellconstruction.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${appenzell})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${parallelmobilebg1})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="http://parallelvisioncontracting.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${parallelvision})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-500"
                    style={{
                        backgroundImage: `url(${mackenziedynamicbg1})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="http://mackenziedynamic.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-500"
                    style={{
                        backgroundImage: `url(${mackenziedynamic})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${ravenmobilebg1})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="raven"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-400"
                    style={{
                        backgroundImage: `url(${raven})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div></a>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${baemobilebg1})`,
                        backgroundSize: '100%',
                        backgroundPosition: '',
                    }}
                ></div>
                <a href="mailto:bluearrowelectric@gmail.com"><div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat snap-center bg-center bg-blue-300"
                    style={{
                        backgroundImage: `url(${bae})`,
                        backgroundSize: '80%',
                        backgroundPosition: '',
                    }}
                ></div></a>

            </div>


            <div className="snap-y-manditory snap-proximity hidden md:block">
                <div
                    className="min-h-screen flex flex-col justify-center items-center bg-no-repeat bg-fixed snap-center bg-cover"
                    style={{
                        backgroundImage: `url(${bluearrowbg1})`,
                        backgroundPosition: 'center',
                    }}
                ><div className="justify-center items-center mt-auto"></div>
                    <div className='bg-white bg-opacity-60 h-full py-8 w-full md:px-24'><img className='mx-auto px-24' src={bae} alt="Blue Arrow Logo" /></div>
                    <div className="justify-center items-center mt-auto">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-24 h-24 text-blue-700 opacity-60">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                        </svg>
                    </div>
                </div>


                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bluearrowbg5})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-start bg-blue bg-no-repeat bg-fixed snap-start"
                    style={{
                        backgroundImage: `url(${appenzellbg3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="min-h-screen flex items-end bg-blue bg-no-repeat bg-fixed snap-start">
                        <div className="xl:w-full lg:w-full md:w-full sm:w-full p-8">
                            <div className="bg-white bg-opacity-80 w-full px-16 pt-16 pb-24">
                                <div className="text-xl">
                                    Blue Arrow Electric Ltd has proudly served the Revelstoke, BC community for over 5 years, establishing enduring partnerships with local general contractors. As trusted subcontractors, we seamlessly integrate into the operations of various general contractors, becoming integral members of their project teams.
                                </div>
                                <div className="text-xl mt-8">
                                    Our commitment to excellence is reflected in the longstanding relationships we've cultivated, grounded in shared values with our general contractor partners. At Blue Arrow Electric Ltd, we align ourselves with our contractors' core principles, emphasizing Quality, Scheduling, and Budget in every project we undertake.
                                </div>
                                <div className="text-xl mt-8">
                                    We invite you to connect with one of our esteemed contracting partners today by clicking their link below. Let's embark on the journey of planning and executing your next project together, ensuring its success through collaborative efforts and unwavering dedication.
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${appenzellbg1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${appenzellbg2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a href="http://appenzellconstruction.com"><img className='w-2/3 mx-auto' src={appenzell} alt="Appenzell" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${parallelvisionbg1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${parallelvisionbg2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a href="http://parallelvisioncontracting.com"><img src={parallelvision} alt="Parallel Vision" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${mackenziedynamicbg1})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${mackenziedynamicbg2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <a href="http://mackenziedynamic.com"><img className='lg:w-1/2 md:w-2/3 mx-auto' src={mackenziedynamic} alt="MacKenzie Dynamic" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bluearrowbg3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >

                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center px-40"
                    style={{
                        backgroundImage: `url(${ravenbg1})`,
                        backgroundSize: 'cover',
                    }}
                >
                    <a href="https://www.facebook.com/ravencontractingrevelstoke/"><img src={raven} alt="Raven" /></a>
                </div>
                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bluearrowbg2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>

                <div
                    className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                    style={{
                        backgroundImage: `url(${bluearrowbg4})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className='bg-white bg-opacity-60 w-full py-8'><a href='mailto:bluearrowelectric@gmail.com'><img className='mx-auto px-12' src={bae} alt="Logo 1" /></a></div>
                </div>

            </div></div>
    );
}

export default Main;
