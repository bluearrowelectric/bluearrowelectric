import React from 'react'
import ImageSlider from './carousel';
import { SliderData } from './carouseldata';


function Main() {
    return (
        <div className="bg-slate-900 text-black">
            <div className="text-white py-12 px-12 text-2xl"><h1>Serving Revelstoke, BC since 2019</h1>
                <div className="text-white py-4 text-xl"> <h2>Family Owned and Operated, Blue Arrow Electric</h2></div>
            </div>
            <ImageSlider slides={SliderData} />;

        </div>
    )
}

export default Main
