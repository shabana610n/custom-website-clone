import React from 'react'

const Titles = ({ heading, title }) => {
    return (
        <div id="programs-text" className='flex flex-col justify-center items-center'>
            <p className='text-[#434DA3] font-bold'>{heading}</p>
            <h1 className='text-[#000F38] font-bold text-[32px]'>{title}</h1>
        </div>
    )
}

export default Titles