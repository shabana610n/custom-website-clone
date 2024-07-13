import React from 'react'
import './slides.css';

const Program_Slides = ({ bgImg, iconSrc, captionText }) => {
    return (
        <div id={bgImg} className="program_wrapper px-3 rounded-xl flex flex-col justify-center items-center gap-1.5 cursor-pointer">
            <img src={iconSrc} alt={iconSrc} className='programIcon h-16 mobile:h-14 w-16 mobile:w-14' />
            <p className='caption-text text-center mobile:text-sm'>{captionText}</p>
        </div>
    )
}

export default Program_Slides
