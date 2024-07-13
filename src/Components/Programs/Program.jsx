import React from 'react';
import program_1_icon from '../../assets/program_1_icon.png';
import program_2_icon from '../../assets/program_2_icon.png';
import program_3_icon from '../../assets/program_3_icon.png';
import Titles from './Titles.jsx';
import Program_Slides from './Program_Slides.jsx';

const Program = () => {
    return (
        <div id="programs" className='bg-my-gray flex flex-col justify-center items-center py-16 gap-20'>
            <Titles heading='OUR PROGRAM' title='What We Offer' />

            <div id='programs-imgs' className='flex h-full w-[85%] mx-auto justify-center gap-8 text-white'>

                <div id='program_1' className="w-[27%]">
                    <Program_Slides bgImg='program_img_1' iconSrc={program_1_icon} captionText='Graduation Degree' />
                </div>

                <div id='program_2' className="w-[27%]">
                    <div id="program_img_2" className="program_wrapper px-3 rounded-xl flex flex-col justify-center items-center gap-1.5 cursor-pointer">
                        <img src={program_2_icon} alt="program_2_icon" className='programIcon h-[67px] mobile:h-16 w-[50px] mobile:w-12' />
                        <p className='caption-text text-center mobile:text-sm '>Masters Degree</p>
                    </div>
                </div>

                <div id='program_3' className="w-[27%]">
                    <Program_Slides bgImg='program_img_3' iconSrc={program_3_icon} captionText='Post Graduation' />
                </div>

            </div>

        </div>
    );
};

export default Program;