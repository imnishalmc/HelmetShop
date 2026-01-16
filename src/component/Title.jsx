import React from 'react'

const Title = ({title,desc,descs}) => {
  return (
    <div className='text-5xl flex flex-col justify-center items-center m-0 dark:text-white mb-8'>
    <h1 className='leading-15 '>{title}</h1>
    <p className='m-2 bg-gradient-to-r from-[#1c22bc] to-[#4D8AEA] bg-clip-text text-transparent'>{desc}</p>
    <p id ='ourwork' className='text-2xl '>{descs}</p>
  </div>
  )
}

export default Title