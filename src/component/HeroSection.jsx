import React from 'react'
import { assets } from '../assets/assests'

const HeroSection = () => {
    return (



        <div className='flex flex-col items-center gap-5 py-17 px-4 sm:px-12 lg:px-24 xl:px-40 text-center overflow-hidden w-full  text-grey-700 dark:text-white' >

            <div className='   inline-flex items-center gap-3 border border-gray-400 p-3  rounded-full'>

                <img className=" w-20 " src={assets.groupphoto} alt="" />
                <p>Trusted By 5000+ people</p>
            </div>
            <h1 className='  text-4xl  font-medium  max-w-5xl sm:text-[43px] xl:text-[70px] '> <span className= 'bg-gradient-to-r from-[#1c22bc] to-[#4D8AEA] bg-clip-text text-transparent '>Uncompromised</span> Protection For The Fearless Rider</h1>
            <p className='text-[17px] p-1 sm:text-[22px] font-medium dark:text-white/75 max-w-4/5 lg:text-[26px] '>From the city streets to the mountain , we want to be the most trusted entry in your adventure diary.</p>

            <div className='   flex flex-col  p-2 gap-4 relative sm:flex-row '>

                <img className='w-full h-100 max-w-6xl rounded-4xl' src={assets.herophoto} alt="" />
                <img  className='h-100 w-90 max-w-6xl rounded-4xlz' src={assets.helmet} alt="" />
            </div>
        </div>
    )
}

export default HeroSection