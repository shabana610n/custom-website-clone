import React, { useState } from 'react'
import playIcon from '../../assets/video-play-icon.png'
import './about.css'


const About = ({ playVideoSet }) => {

    return (
        <div id='about' className='bg-my-gray py-16 h-full w-full flex justify-center items-center'>

            <div className='innerAbout'>
                <div id="about-left" className='leftImg flex justify-center items-center mt-3 rounded-xl'>

                    <button onClick={() => { playVideoSet(true) }}>
                        <img src={playIcon} alt="video_play_icon" className='playIcon h-16 cursor-pointer' />
                    </button>
                </div>

                <div id="about-right" className='flex flex-col gap-2'>

                    <p className='text-[#434DA3] font-bold text-lg'>ABOUT UNIVERSITY</p>
                    <h1 className='text-[#000F38] font-bold text-[35px] xl:text-3xl lg:text-[27px] leading-[2.7rem] pr-16'>Nurturing Tomorrow's Leaders Today</h1>

                    <div id="para-text" className='flex flex-col gap-4 text-my-textGray'>

                        <p className='leading-5'>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>

                        <p className='leading-5'>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>

                        <p className='leading-5'>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.</p>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About