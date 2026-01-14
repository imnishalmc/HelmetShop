import React from 'react'
import Title from './Title'
import { assets } from '../assets/assests'
const OurWork = () => {
 const workData = [
    {
        title:'Group Ride To Mustang',
        desc:'There were altogether 20 rider that joined in that group',
        image: assets.tour
    },
    {
        title:'Bike Ralley in Banesowr',
        desc:'This ralley is done by the people to celebrate the BrotherHood',
        image:assets.ralley
    },
    {
        title:'Most Saled Helmet ',
        desc:'It just breaks the numbers and become the No.1 most Liked helmet of Nepal',
        image: assets.helmet4
    },
 ]

  return (
    <div id='ourwork' className=' flex flex-col items-center gap-6 px-4 sm:px-10 lg:px-24 xl:px-40 pt-30 text-gray-900 dark:text-white'>
<Title title='Our Latest Work' descs='This is the fresh things that we have experienced it at present '/>

<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
    {
        workData.map((index,box)=>{
            <div key={index} className='hover:scale-100 duration-500 transition-all cursor-pointer'>
                <img src={box.image} alt="latest work" className='w-full rounded-xl ' />
                <h3 className='mt-3 mb-2 text-lg font-semibold '>{box.title}</h3>
                <p className='text-sm'>{box.desc}</p>
            </div>
        })
    }
    </div>
    </div>  )
}

export default OurWork