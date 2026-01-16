import React from 'react'
import Title from './Title'
import { assets } from '../assets/assests'

const OurWork = () => {
  const workData = [
    {
      title: 'Group Ride To Mustang',
      desc: 'There were altogether 20 riders that joined in that group',
      image: assets.tour
    },
    {
      title: 'Bike Rally ',
      desc: 'This rally is done by the people to celebrate the BrotherHood',
      image: assets.ralley
    },
    {
      title: 'Most Sold Helmet',
      desc: 'It just breaks the numbers and become the No.1 most Liked helmet of Nepal',
      image: assets.helmet4
    },
  ]

  return (
    <div id='ourwork' className='flex   flex-col items-center gap-6 px-4 sm:px-10 lg:px-24 xl:px-40 pt-30 text-gray-900 dark:text-white'>
      <Title title='Our Latest Work' descs='This is the fresh things that we have experienced it at present' />

      <div className='grid   sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl'>
        {
          workData.map((box, index) => (
            <div key={index} className='flex flex-col   hover:scale-105 duration-500 transition-all cursor-pointer'>
              {/* Image Container with fixed height */}
              <div className='w-full h-64 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 mb-4'>
                <img 
                  src={box.image} 
                  alt={box.title} 
                  className='w-full h-full object-cover' 
                />
              </div>
              
              {/* Text Container */}
              <div className='flex flex-col  p-3'>
                <h3 className='mb-2 font-extrabold text-2xl sm:text-3xl'>{box.title}</h3>
                <p className='text-base text-gray-600 sm:text-2xl dark:text-gray-300'>{box.desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurWork