import React from 'react'

const ServiceProvider = ({service,index}) => {
  return (
    <div className=' relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border dark:border-gray-300 shadow-gray-100'>
        
        <div >

<div className='flex items-center gap-9 p-8 hover:p-7 hover:m-0.7 transition-all rounded-[10px] bg-white darl:bg-gray-800 z-10 relative'>

<div>
    <img src= {service.icon} alt="" />
</div>
</div>
        </div>
    </div>
  )
}

export default ServiceProvider