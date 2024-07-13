import React, { useState } from 'react';
import Titles from '../Programs/Titles.jsx';

import first_person from '../../assets/emily_williams.png';
import second_person from '../../assets/william_jackson.png';
import third_person from '../../assets/yledanieli_william.png';
import forth_person from '../../assets/matt_williams.png';

import leftArrow from '../../assets/left-arrow.png';
import rightArrow from '../../assets/right-arrow.png';

import './testimonial.css'

// List of testimonials
const testimonials = [
    { img: first_person, name: 'Emily Williams' },
    { img: second_person, name: 'William Jackson' },
    { img: third_person, name: 'Yledanieli William' },
    { img: forth_person, name: 'Matt Williams' }
];


const Testimonial = () => {
    // State to keep track of the current testimonial index
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Function to go to the next testimonial
    const slideForward = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => {
                // Calculate the next index
                const nextIndex = prevIndex + 1;
                // If the next index is out of bounds, reset to 0
                if (nextIndex >= testimonials.length) {
                    return 0;
                }
                return nextIndex;
            });
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    // Function to go to the previous testimonial
    const slideBackward = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentIndex((prevIndex) => {
                // Calculate the previous index
                const prevIndexCalc = prevIndex - 1;
                // If the previous index is out of bounds, reset to the last testimonial
                if (prevIndexCalc < 0) {
                    return testimonials.length - 1;
                }
                return prevIndexCalc;
            });
            setTimeout(() => setIsTransitioning(false), 500);
        }
    };

    // Function to get the next testimonial index, wrapping around if necessary
    const getNextIndex = (index) => {
        return (index + 1) % testimonials.length;
    };

    return (
        <div>
            <div id="testimonials" className='bg-my-gray flex flex-col justify-center items-center pt-16 pb-11 gap-10'>
                {/* Title of the testimonials section */}
                <Titles heading='TESTIMONIALS' title='What Student Says' />

                <div id='testimonials-carousel' className='flex h-full w-[79%] justify-center items-center gap-9 mt-8 text-black'>
                    {/* Back button to go to the previous testimonial */}
                    <div id="back_left_icon" className='rounded-full cursor-pointer group bg-my-blue hover:bg-my-hoverBlue p-4' onClick={slideBackward}>
                        <img src={leftArrow} alt='leftArrow' id='leftArrow' className='w-[4.7rem] xl:w-[4.4rem] lg:w-16 lg2:w-[3.8rem] md:w-14 campus-lg:w-14 group-hover:-translate-x-1.5 transition-transform duration-300' />
                    </div>

                    {/* Current testimonials (two at a time) */}
                    <div id='carousel' className={`flex gap-6 transition-transform duration-500 ${isTransitioning ? 'transform translate-x-0' : 'transform translate-x-1'}`}>

                        {/* First testimonial */}
                        <div className='p-10 rounded-lg shadow-xl hover:shadow-gradient transition-shadow duration-300'>
                            <div className='flex items-center gap-4'>
                                <div className='relative w-16 h-16'>
                                    <img src={testimonials[currentIndex].img} alt="profile" className='w-full h-full border-4 border-my-blue rounded-full object-cover' />
                                    <div className='absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-my-hoverBlue opacity-0 hover:opacity-35 transition-opacity duration-300 rounded-full'></div>
                                </div>
                                <div>
                                    <h3 className='text-lg font-bold text-my-blue'>{testimonials[currentIndex].name}</h3>
                                    <p className='text-[15px] text-my-textGray'>Edusity, USA</p>
                                </div>
                            </div>
                            <p className='mt-4 text-my-textGray'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>

                        {/* Second testimonial */}
                        <div className='p-10 rounded-lg shadow-xl hover:shadow-gradient transition-shadow duration-300 hidden laptop:block forHero:block xl:block'>
                            <div className='flex items-center gap-4'>
                                <div className='relative w-16 h-16'>
                                    <img src={testimonials[getNextIndex(currentIndex)].img} alt="profile" className='w-full h-full border-4 border-my-blue rounded-full object-cover' />
                                    <div className='absolute inset-0 bg-gradient-to-r from-red-600 via-pink-600 to-my-hoverBlue opacity-0 hover:opacity-35 transition-opacity duration-300 rounded-full'></div>
                                </div>
                                <div>
                                    <h3 className='text-lg font-bold text-my-blue'>{testimonials[getNextIndex(currentIndex)].name}</h3>
                                    <p className='text-[15px] text-my-textGray'>Edusity, USA</p>
                                </div>
                            </div>
                            <p className='mt-4 text-my-textGray'>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                        </div>

                    </div>

                    {/* Next button to go to the next testimonial */}
                    <div id="next_right_icon" className='rounded-full cursor-pointer group bg-my-blue hover:bg-my-hoverBlue p-4' onClick={slideForward}>
                        <img src={rightArrow} alt='rightArrow' id='rightArrow' className='w-[4.7rem] xl:w-[4.4rem] lg:w-16 lg2:w-[3.8rem] md:w-14 campus-lg:w-14 group-hover:translate-x-1.5 transition-transform duration-300' />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;