import React, { useState } from 'react'
import { assets } from '../assets/assests'
import ThemeToggleBtn from './ThemeToggleBtn'
const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className='  h-22 flex justify-between items-center px-4 sm:px-10 lg:px-24 xl:px-40 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-gray-900/80 '>

      {/* this means the below ternary ma , theme by default light raixxa  */}
      <img src={theme === 'dark' ? assets.darktheme_logo : assets.lighttheme_logo} className='  w-23 sm:w-40  bg-red-60 ' alt='' />
{/* //max-sm means mobile format */}

      <div className={`flex text-grey-700 dark:text-white sm:text-sm ${!sidebarOpen ? " max-sm:w-0 overflow-hidden" : "max-sm:w-50 max-sm:pl-8"} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-15  sm:items-center gap-6 transition-all`}>

        <img src={assets.close_icon} alt="" className='w-5 absolute right-9 top-7 sm:hidden' onClick={() => setSidebarOpen(false)} />
        {/* close_icon is white one */}

        <a onClick={() => setSidebarOpen(false)} href="#" className='sm:hover:border-b sm:text-2xl'>Home</a>
        <a onClick={() => setSidebarOpen(false)} href="#services" className='sm:hover:border-b  sm:text-2xl '>Services</a>
        <a onClick={() => setSidebarOpen(false)} href="#branches" className='sm:hover:border-b  sm:text-2xl'>Our Branches </a>
        <a onClick={() => setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b  sm:text-2xl'>Contact Us </a>
      </div>

      <div className='flex items-center gap-3 sm:gap-4' >

        <ThemeToggleBtn theme={theme} setTheme={setTheme} />
        <img src={theme == 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt="" onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden ' />


        <a className='text-sm max-sm:hidden flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full cursor-pointer hover:scale-100 transition-all sm:text-[16px]' href="#contact-us">
          Connect
        </a>
      </div>
    </div>
  )
}

export default Navbar

