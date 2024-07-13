import React from 'react'
import Titles from '../Programs/Titles.jsx';
import Campus_Slides from './Campus_Slides.jsx';
import arrowIcon from '../../assets/white-right-arrow.png';
import blueArrowIcon from '../../assets/blue-right-arrow.png'

const Campus = () => {
    return (
        <div id="campus" className='bg-my-gray flex flex-col justify-center items-center pt-16 pb-11 gap-10'>
            <Titles heading='GALLERY' title='Campus Photos' />

            <div id='campus-imgs' className='flex h-full campus-lg:w-[85%] mobile:w-[88%] w-[81%] justify-center gap-8 mt-10 text-white'>

                <div id='campus_1' className="w-[30%] campus-lg:w-[93%] mobile:w-[96%]">
                    <Campus_Slides bgImg='campus_img_1' />
                </div>

                <div id='campus_2' className="w-[30%] campus-lg:w-[93%] mobile:w-[96%]">
                    <Campus_Slides bgImg='campus_img_2' />
                </div>

                <div id='campus_3' className="w-[30%] campus-lg:w-[93%] mobile:w-[96%]">
                    <Campus_Slides bgImg='campus_img_3' />
                </div>

                <div id='campus_4' className="w-[30%] campus-lg:w-[93%] mobile:w-[96%]">
                    <Campus_Slides bgImg='campus_img_4' />
                </div>
            </div>

            <button type='button' className='mx-auto group border-[1px] border-my-blue bg-my-blue hover:bg-gradient-to-tr from-my-formHoverBlue via-blue-50 to-my-gray flex gap-3 justify-center items-center py-2.5 px-5 mobile:px-4 rounded-full'>
                <p className='text-white group-hover:text-my-blue'>See more here</p>
                <img src={arrowIcon} alt="whiteArrowIcon" className='h-3 w-5 group-hover:hidden' />
                <img src={blueArrowIcon} alt="blueArrowIcon" className='h-3 w-5 group-hover:translate-x-1 hidden group-hover:block' />
            </button>
        </div>
    )
}
export default Campus