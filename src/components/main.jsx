import React from 'react';
import ImageSlider from './carousel';
import { SliderData } from './carouseldata';
import background from '../assets/images/IMG_1418.jpg';

function Main() {
    return (
        <div className="h-screen relative pt-24">
            {/* Your Main component content goes here */}
            <div className="text-white text-center h-full">
                <div className='pt-12'>
                    <div className='bg-slate-700 bg-opacity-60 pt-8 text-2xl font-serif'>
                        Our Contracting Partners in Revelstoke BC and surrounding areas
                    </div></div>
                <div className="h-3/5">
                    <div className='bg-slate-700 bg-opacity-60 h-3/5'>
                        <ImageSlider className='border-4' slides={SliderData} />
                    </div><div className='pt-0'>
                        <div className='bg-slate-700 bg-opacity-60 pt-12 text-2xl'>

                        </div></div>
                </div>



            </div>

        </div>
    );
}

export default Main;