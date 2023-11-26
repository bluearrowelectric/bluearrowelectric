import React from 'react';
import ImageSlider from './carousel';
import { SliderData } from './carouseldata_test';
import background from '../assets/images/IMG_1418.jpg';

function Test() {
    return (
        <div className="h-screen relative">
            {/* Your Main component content goes here */}
            <div className="text-white text-center h-full">
                <div className='pt-12'>
                    <div className='bg-slate-700 bg-opacity-80 pt-8 text-2xl font-serif'>
                        Our customer's are our top priority, see what some of them had to say:
                    </div></div>
                <div className="h-3/5">
                    <div className='bg-slate-700 bg-opacity-80 h-3/5'>
                        <ImageSlider className='border-4' slides={SliderData} />
                    </div><div className='pt-0'>
                        <div className='bg-slate-700 bg-opacity-80 pt-12 text-2xl'>

                        </div></div>
                </div>



            </div>

        </div>
    );
}

export default Test;