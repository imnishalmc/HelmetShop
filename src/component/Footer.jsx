import React from 'react'
import { assets } from '../assets/assests'

const Footer = ({ theme, setTheme }) => {
  return (
    <div className=' bg-slate-50  w-full dark:text-gray-300 dark:bg-gray-900 '>
      <div className='flex  justify-between lg:items-center max-lg:flex-col gap-10 pt-10 sm:pt-10 mt-20 sm:mt-40 px-4 sm:px-10 lg:px-24 xl:px-40'>
        <div >
          <img src={theme == 'dark' ? assets.darktheme_logo : assets.lighttheme_logo} className='w-32 sm:w-44' alt="" />
          <p className='max-w-md  text-xl mt-[-30px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi doloribus eos numquam, asperiores ad debitis amet! Saepe laboriosam ad necessitatibus!</p>
          <ul className=' flex gap-6 mt-5 font-extrabold text-[19px]'>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#branches">Our Branches </a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div >

        <div className=' '>
          <h3 className='font-bold text-xl'>Subscribe to our News Letter</h3>
          <p className=' mt-2 mb-6 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos voluptatem reiciendis modi labore?</p>
          <div className='flex gap-2 text-sm'>
            <input type="email" name="email" placeholder='Enter Your Email' className='w-full p-3 text-[19px] outline-none rounded dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500' />
            <button className='bg-primary text-white rounded-xl p-3'>
              subscribe
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer