import React from 'react';
import Titles from '../Programs/Titles.jsx';

import contact_email from '../../assets/contact-gmail.png';
import contact_call from '../../assets/contact-call.png';
import contact_location from '../../assets/contact-location.png';
import contact_sendUs_msg from '../../assets/sendUs-msg.png';
import arrowIcon from '../../assets/white-right-arrow.png';
import blueArrowIcon from '../../assets/blue-right-arrow.png';
import '../About/about.css';

const Contact = () => {
    // State to hold the form submission result
    const [result, setResult] = React.useState("");

    // Function to handle form submission
    const onSubmit = async (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        setResult("Sending...."); // Sets the result state to show the form is being sent

        const formData = new FormData(event.target); // Collects all the form data
        formData.append("access_key", "68e92d68-36f2-4dde-a2df-8a77a6e61677"); // Adds an access key to the form data

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST", // Sends a POST request
            body: formData // Attaches the form data to the request body
        });

        const data = await response.json(); // Parses the response as JSON

        if (data.success) {
            console.log('Success: ', data);
            setResult("Form Submitted Successfully!"); // Sets the result state to show success
            event.target.reset(); // Resets the form fields
        } else {
            console.log("Error", data);
            setResult(data.message); // Sets the result state to show the error message
        }
    };

    return (
        <div id='contact' className='bg-my-gray flex flex-col h-full w-full justify-center items-center py-16 gap-16'>
            {/* Titles Component for section headings */}
            <Titles heading='CONTACT US' title='Get in Touch' />

            <div className='innerContact'>
                {/* Left Section with Contact Information */}
                <div id="grid-left" className='flex flex-col gap-4'>
                    {/* Section heading with an image */}
                    <div className='flex gap-3 items-center'>
                        <h1 className='text-[#000F38] font-semibold text-2xl mb-1'>Send us a message</h1>
                        <img src={contact_sendUs_msg} alt='contact_sendUs_msg' className='w-9 mb-2.5' />
                    </div>
                    {/* Description */}
                    <p className='text-my-textGray leading-5'>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

                    {/* Email Contact */}
                    <div id="email" className='flex gap-3 items-center'>
                        <img src={contact_email} alt='contact_email' className='w-6' />
                        <p className='text-my-textGray'>Shabanacoder@gmail.com</p>
                    </div>

                    {/* Phone Contact */}
                    <div id="call" className='flex gap-3 items-center'>
                        <img src={contact_call} alt='contact_call' className='w-6' />
                        <p className='text-my-textGray'>+92 323-6500516</p>
                    </div>

                    {/* Location Contact */}
                    <div id="location" className='flex gap-3 items-center'>
                        <img src={contact_location} alt='contact_location' className='w-6' />
                        <p className='text-my-textGray mr-40 forHero:mr-24 xl:mr-14 lg:mr-10 keypadMbl:mr-1'>77 Massachusetts Ave, Cambridge MA 02139, United States</p>
                    </div>
                </div>

                {/* Right Section with Contact Form */}
                <div id="grid-right" className='flex flex-col gap-3'>
                    {/* Contact Form */}
                    <form onSubmit={onSubmit} className='flex flex-col gap-3'>
                        <label htmlFor="username" className='text-my-textGray'>Your name</label>
                        <input required type="text" name='username' id='username' placeholder='Enter your name' className='bg-my-formBlue focus:bg-gradient-to-tr from-my-formHoverBlue via-blue-100 focus:bg-opacity-40 outline-none p-3 pr-8 text-[13px] placeholder-my-formGray' autoComplete="name" />

                        <label htmlFor="phone_number" className='text-my-textGray'>Phone Number</label>
                        <input required type="text" name='phone_number' id='phone_number' placeholder='Enter your mobile number' className='bg-my-formBlue focus:bg-gradient-to-tr from-my-formHoverBlue via-blue-100 focus:bg-opacity-40 outline-none p-3 pr-8 text-[13px] placeholder-my-formGray' autoComplete="tel" />

                        <label htmlFor="userEmail" className='text-my-textGray'>Your Email</label>
                        <input required type="email" name='userEmail' id='userEmail' placeholder='Enter your email id' className='bg-my-formBlue focus:bg-gradient-to-tr from-my-formHoverBlue via-blue-100 focus:bg-opacity-40 outline-none p-3 pr-8 text-[13px] placeholder-my-formGray' autoComplete="email" />

                        <label htmlFor="userMsg" className='text-my-textGray'>Write your messages here</label>
                        <textarea name='userMsg' id='userMsg' placeholder='Enter your message' className='bg-my-formBlue focus:bg-gradient-to-tr from-my-formHoverBlue via-blue-100 focus:bg-opacity-40 outline-none p-3 pr-8 text-[13px] placeholder-my-formGray h-32 resize-none'></textarea>

                        <button type='submit' className='mr-auto group border-[1px] border-my-blue bg-my-blue hover:bg-gradient-to-tr from-my-formHoverBlue via-blue-50 to-my-gray flex gap-3 justify-center items-center py-2.5 px-5 mobile:px-4 rounded-full'>
                            <p className='text-white group-hover:text-my-blue'>Submit now</p>
                            <img src={arrowIcon} alt="whiteArrowIcon" className='h-3 w-5 group-hover:hidden' />
                            <img src={blueArrowIcon} alt="blueArrowIcon" className='h-3 w-5 group-hover:translate-x-1 hidden group-hover:block' />
                        </button>

                        {/* Displays the result of the form submission */}
                        <p className='text-my-textGray'>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;