import React, { useState } from 'react'
import './hero.css'
import arrowIcon from '../../assets/blue-right-arrow.png'
import whiteArrowIcon from '../../assets/white-right-arrow.png'

import Navbar from "../Navbar.jsx"
import Program from "../Programs/Program.jsx"
import About from '../About/About.jsx'
import Campus from '../Campus/Campus.jsx'

import Testimonial from '../Testimonials/Testimonial.jsx'
import Contact from '../Contact/Contact.jsx'
import Footer from '../Footer/Footer.jsx'
import VideoPlayer from '../VideoPlayer/VideoPlayer.jsx'

const Hero = () => {
    const [playVideo, playVideoSet] = useState(false); // State to control video play

    return (
        <>
            <div id="hero" className='heroImg flex flex-col'>
                <Navbar />
                <div id="hero-text" className='flex flex-col mt-[11.5rem] text-center gap-3 xl:mt-48 lg:mt-[12.4rem] md:mt-[12.8rem] mobile:mt-[12.4rem] mx-auto w-[56%] forHero:w-[65%] xl:w-[70%] lg:w-[73%] lg2:w-[77%] md:w-[82%] keypadMbl:w-[90%] items-center justify-center'>
                    <h1 className='text-[55px] forHero:text-5xl xl:text-[42px] lg:text-[40px] lg2:text-[38px] md:text-4xl mobile:text-[34px] keypadMbl:text-[27px] font-bold'>
                        We Ensure better education for a better world
                    </h1>
                    <p className='keypadMbl:text-[14px]'>
                        Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education
                    </p>

                    <button className='mb-4 bg-my-gray group hover:bg-transparent text-my-blue hover:text-white hover:border-[1px] flex gap-3 justify-between items-center py-3 px-[22px] xl:py-2.5 lg:py-2 lg2:py-2 mobile:py-2 xl:px-5 lg:px-[18px] lg2:px-4 md:px-[14px] mobile:px-4 rounded-full'>
                        <p className='keypadMbl:text-[13.5px]'>Explore more</p>
                        <img src={arrowIcon} alt="rightArrowIcon" className='h-3 w-5 keypadMbl:w-3.5 keypadMbl:h-2.5 group-hover:hidden' />
                        <img src={whiteArrowIcon} alt="rightArrowIcon" className='h-3 w-5 keypadMbl:w-3.5 keypadMbl:h-2.5 group-hover:translate-x-1.5 group-hover:block hidden' />
                    </button>
                </div>
            </div>

            <Program />
            <About playVideoSet={playVideoSet} />
            <Campus />
            <Testimonial />
            <Contact />
            <Footer />
            <VideoPlayer playVideo={playVideo} playVideoSet={playVideoSet}/>
        </>
    )
}

export default Hero