import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-my-gray py-6 flex flex-col gap-3 px-28 lg:px-16 lg2:px-14 md:px-11 mobile:px-6'>
            <hr className='border-opacity-50 border-black' />
            <div className='flex justify-between items-center mobile:flex-col gap-2.5'>
                <p>&copy; 2024 Edusity. All rights reserved.</p>
                <div className='flex items-center gap-5'>
                    <p className='hover:text-my-blue'><a href="#">Terms of Services</a></p>
                    <p className='hover:text-my-blue'><a href="#">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer