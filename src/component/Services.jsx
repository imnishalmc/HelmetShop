import React from 'react'
import { assets } from '../assets/assests'
import Title from './Title'
const Services = () => {

    const servicesData=[
        {
            title:'Repair',
            description:"You domt have to worry about the repairing , we are here ",
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
            title: "Arrange Your Adventure",
            description :" We are always there for you to help and plan your adventure ",
             icon:assets.adventure
        }
    ]
  return (
    <div>
<div id ='services' className='  bg-amber-500 relative flex flex-col items-center gap-7  sm:px-1 lg:px-4 xl:px-40 pt-4 text-gray-700 dark:text-white'>

<Title title=' How can we help you?' desc ='We are always there to help you'/>
{servicesData.map((x) => (
    <div key={x.title}>
      <img src={x.icon} alt={x.title} />
      <h3>{x.title}</h3>
      <p>{x.description}</p>
    </div>
  ))}

</div>


    </div>
  )
}

export default Services