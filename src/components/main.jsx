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
import logo1 from '../assets/images/logo.png';
import logo3 from '../assets/images/ParallelVision.png';
import logo4 from '../assets/images/Mackenzie.png';
import logo5 from '../assets/images/Appenzell.png';

function Main() {
    return (
        <div className="snap-y-manditory snap-proximity">
            <div
                className="min-h-screen flex justify-center items-center bg-black bg-no-repeat bg-fixed snap-center bg-cover bg-center"
                style={{
                    backgroundImage: `url(${bg2})`,

                }}
            >
                <div className='bg-white bg-opacity-60 w-full py-8'><img className='mx-auto' src={logo1} alt="Logo 1" /></div>
            </div>
            <div
                className="min-h-screen flex justify-center items-start bg-blue bg-no-repeat bg-fixed snap-start"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
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
                }}
            >

            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg8})`,
                    backgroundSize: 'cover',
                }}
            >

            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg7})`,
                    backgroundSize: 'cover',
                }}
            >
                <a href="http://appenzellconstruction.com"><img className='w-2/3 mx-auto' src={logo5} alt="Appenzell" /></a>
            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg6})`,
                    backgroundSize: 'cover',
                }}
            >

            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg4})`,
                    backgroundSize: 'cover',
                }}
            >
                <a href="http://parallelvisioncontracting.com"><img src={logo3} alt="Parallel Vision" /></a>
            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg5})`,
                    backgroundSize: 'cover',
                }}
            >

            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg3})`,
                    backgroundSize: 'cover',
                }}
            >
                <a href="http://mackenziedynamic.com"><img className='w-1/3 mx-auto' src={logo4} alt="MacKenzie Dynamic" /></a>
            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                }}
            >

            </div>
            <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center bg-center"
                style={{
                    backgroundImage: `url(${bg7})`,
                    backgroundSize: 'cover',
                }}
            >
                <div className='bg-white bg-opacity-60 w-full py-8'><img className='mx-auto' src={logo1} alt="Logo 1" /></div>
            </div>
            {/*} <div
                className="min-h-screen flex justify-center items-center bg-blue bg-no-repeat bg-fixed snap-center"
                style={{
                    backgroundImage: `url(${bg1})`,
                    backgroundSize: 'cover',
                }}
            >
                <img src={logo5} alt="Raven" />
            </div>
            */}
        </div>
    );
}

export default Main;
