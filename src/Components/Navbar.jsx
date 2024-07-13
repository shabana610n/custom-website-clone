import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import barIcon from '../assets/bar.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false); // Initializing state to track if the navbar should be sticky.
    const [menuOpen, setMenuOpen] = useState(false); // State to track menu visibility

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            // If the window is scrolled down, setSticky to true, otherwise set to false
            window.scrollY > 5 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once when the component mounts.

    const handleMenu = () => {
        // Toggle the menuOpen state
        setMenuOpen(!menuOpen);
    }

    // Function to close the menu and scroll to the desired section
    const handleLinkClick = () => {
        setMenuOpen(false);
    }

    return (
        <nav className={`text-white ${sticky ? 'bg-my-blue' : 'bg-transparent'} mobile:py-[1.35rem] mobile:px-[7.5%] z-10 fixed w-full flex justify-between px-[7.5%] lg:px-[4%] lg2:px-[3.6%] md:px-[3.2%] pb-2 pt-2.5`}>

            {/* Logo Image */}
            <img src={logo} alt="logo" className='w-44 h-9 xl:w-40 xl:h-[30px] lg:w-36 lg:h-7 lg2:w-32 lg2:h-6 mobile:w-36 mobile:h-7 cursor-pointer mobile:-mt-0.5' />

            {/* Navigation Links */}
            <ul className='flex items-center mobile:hidden gap-9 xl:gap-8 lg:gap-7 lg2:gap-6 md:gap-5 text-[16.5px] xl:text-[15px] lg:text-[14px] lg2:text-[12.5px]'>

                <li className='cursor-pointer forHero:hover:text-[17px] laptop:hover:text-[17px] xl:text-[16.5px] lg:text-[15px] lg2:text-[13.5px] md:text-[12.5px]'>
                    <Link to='hero' smooth={true} offset={-25} duration={500} >Home</Link>
                </li>

                <li className='cursor-pointer forHero:hover:text-[17px] laptop:hover:text-[17px] xl:text-[16.5px] lg:text-[15px] lg2:text-[13.5px] md:text-[12.5px]'>
                    <Link to='programs' smooth={true} offset={-25} duration={500} >Program</Link>
                </li>

                <li className='cursor-pointer forHero:hover:text-[17px] laptop:hover:text-[17px] xl:text-[16.5px] lg:text-[15px] lg2:text-[13.5px] md:text-[12.5px]'>
                    <Link to='about' smooth={true} offset={-25} duration={500} >About us</Link>
                </li>

                <li className='cursor-pointer forHero:hover:text-[17px] laptop:hover:text-[17px] xl:text-[16.5px] lg:text-[15px] lg2:text-[13.5px] md:text-[12.5px]'>
                    <Link to='campus' smooth={true} offset={-25} duration={500} >Campus</Link>
                </li>

                <li className='cursor-pointer forHero:hover:text-[17px] laptop:hover:text-[17px] xl:text-[16.5px] lg:text-[15px] lg2:text-[13.5px] md:text-[12.5px]'>
                    <Link to='testimonials' smooth={true} offset={-25} duration={500} >Testimonials</Link>
                </li>

                {/* Contact Us Button */}
                <li type='button' className='bg-white text-my-blue cursor-pointer  hover:bg-transparent hover:bg-opacity-25 hover:text-white border-[1px] py-2 xl:py-1.5 lg:py-1 lg2:py-[3px] px-[22px] xl:px-5 lg2:px-3 lg:px-4 rounded-full'>
                    <Link to='contact' smooth={true} offset={-25} duration={500} className='lg:text-[12px]'>Contact Us</Link>
                </li>

            </ul>

            {/* Bar Icon for Mobile Menu */}
            <img
                src={barIcon}
                alt="bar-icon"
                className='cursor-pointer w-8 h-6 mobile:block hidden'
                onClick={handleMenu}
            />

            {/* Mobile Menu */}
            <div id="mobile_nav" className={`text-white bg-my-blue z-10 fixed inset-0 w-full flex flex-col gap-6 py-5 transition-transform duration-700 ${menuOpen ? '-translate-y-0' : '-translate-y-full'}`}>

                {/* Logo Image */}
                <div className='flex justify-between items-center mx-[7.5%]'>
                    <img src={logo} alt="logo" className='w-36 h-7 cursor-pointer' />
                    <img
                        src={barIcon}
                        alt="bar-icon"
                        className='cursor-pointer w-8 h-6'
                        onClick={handleMenu}
                    />
                </div>

                {/* Navigation Links */}
                <ul className='flex flex-col gap-2 justify-center ml-0.5 text-[16.5px]'>

                    <Link to='hero' smooth={true} offset={-25} duration={500} onClick={() => handleLinkClick()}>
                        <li className='cursor-pointer py-2 hover:bg-my-gray hover:text-my-hoverBlue hover:bg-opacity-5 px-[7.5%]'>Home
                        </li>
                    </Link>

                    <Link to='programs' smooth={true} offset={-25} duration={500} onClick={() => handleLinkClick()}>
                        <li className='cursor-pointer py-2 hover:bg-my-gray hover:text-my-hoverBlue hover:bg-opacity-5 px-[7.5%]'>Program
                        </li>
                    </Link>

                    <Link to='about' smooth={true} offset={-25} duration={500} onClick={() => handleLinkClick()}>
                        <li className='cursor-pointer py-2 hover:bg-my-gray hover:text-my-hoverBlue hover:bg-opacity-5 px-[7.5%]'>About us
                        </li>
                    </Link>

                    <Link to='campus' smooth={true} offset={-25} duration={500} onClick={() => handleLinkClick()}>
                        <li className='cursor-pointer py-2 hover:bg-my-gray hover:text-my-hoverBlue hover:bg-opacity-5 px-[7.5%]'>Campus
                        </li>
                    </Link>

                    <Link to='testimonials' smooth={true} offset={-25} duration={500} onClick={() => handleLinkClick()}>
                        <li className='cursor-pointer py-2 hover:bg-my-gray hover:text-my-hoverBlue hover:bg-opacity-5 px-[7.5%]'>Testimonials
                        </li>
                    </Link>

                    {/* Contact Us Button */}
                    <Link to='contact' className='mt-2 mr-auto ml-[7.5%]' smooth={true} offset={-25} duration={500} onClick={() => handleLinkClick()}>
                        <li type='button' className='bg-white text-my-blue cursor-pointer hover:bg-my-blue hover:text-white border-[1px] py-2 px-4 rounded-full'>Contact Us
                        </li>
                    </Link>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;