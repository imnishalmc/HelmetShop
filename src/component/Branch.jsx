import React from 'react'
import Title from './Title'
import { assets, BranchDetail } from '../assets/assests'

const Branch = (theme, setTheme) => {
  return (
    <div className='  flex flex-col   items-center justify-center gap-6 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-800 dark:text-white'>
<Title title=' Our Branches' descs=" We are giving you services in your place"/>

<div className='  max-md:gap-10 grid grid-cols-1  md:grid-cols-2 md:gap-20  hover:scale-105 duration-500 '>
{BranchDetail .map((branch,index)=>(
  <div className=' flex  max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-xl hover:scale-105 duration-500  transition-all  max-md:gap' key={index} >
<img src={theme=='dark' ? assets.Whitelogo : assets.Blacklogo} alt="" className='w-12 h-12 rounded-full' />
<div>
    {console.log("i am checking the ",branch)}
<h3 className='font-bold text-3xl'>{branch.name}</h3>
<p className='text-2xl opacity-55'>{branch.location}</p>
</div>
  </div>
))}
</div>

    </div>
  )
}

export default Branch