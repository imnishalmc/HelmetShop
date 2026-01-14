import React from 'react'
import { assets } from '../assets/assests'
 import ServiceProvider from './ServiceProvider'
import Title from './Title'
const Services = () => {
  const servicesData=[
    {
        title:'Repair',
        description:"You don't have to worry about the repairing",
        icon: assets.Repair
    },
    {
        title: "Gears",
        description:"we have everything that increase your saftey and swag",
        icon :assets.Gears
    },
    {
    title: "Bikers Club",
    description :" we have a community to match your energy and passion",
     icon: assets.rider_club
    },
    {
        title: "Arrange  Adventure",
        description :" We are always there for you to plan your adventure ",
         icon:assets.adventure
    }
]
  
  return (
    <div id='services' className='py-8 px-4 sm:px-6 lg:px-12 xl:px-40'>
     <Title title='How can we Help you' desc ='Remember Us '/>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-3 lg:mx-28 '>
        {servicesData.map((service,index)=>{
          return <ServiceProvider key={index} icon={service.icon} title={service.title} description={service.description} />
        })}
      </div>
      


    </div>
  )
}

export default Services