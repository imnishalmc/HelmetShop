// import React from 'react'

// const ServiceProvider = ({service,index}) => {
//   return (
//     <div className=' relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border dark:border-gray-300 shadow-gray-100'>

//         <div >

// <div className='flex items-center gap-9 p-8 hover:p-7 hover:m-0.7 transition-all rounded-[10px] bg-white darl:bg-gray-800 z-10 relative'>

// <div>
//     <img src= {service.icon} alt="" />
// </div>
// </div>
//         </div>
//     </div>
//   )
// }

// export default ServiceProvider


import React from 'react'

const ServiceProvider = ({title,description,icon}) => {
    return (
        <div className='relative overflow-hidden max-w-lg  sm:m-10 border border-gray-200 rounded-3xl  transform-none h-50 '>
            <div className='flex items-center gap-8 p-6  transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>
                <div className='  p-1 h-30 w-30 flex items-center justify-center '>
                    <img src={icon} alt={title} className='w-20 h-20 object-contain' />
                </div>
                <div className='flex-1 '>
                    <h3 className='font-bold text-gray-700  dark:text-white text-2xl'>{title}</h3>
                    <p className='  text-[18px] text-gray-600 dark:text-gray-300'>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceProvider