import React from 'react'
import Title from './Title'
import { assets } from '../assets/assests'
import toast from 'react-hot-toast';

const ContactUs = () => {
const onSubmit =async (event)=>{
  event.preventDefault();

  const formData = new FormData(event.target);
  formData.append("access_key", "db6f4ca0-2ea3-4a90-90bc-159dd67904da");

try{

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  const data = await response.json();
  if (data.success) {
    toast.success('Thank you for your submission')
    event.target.reset();
  } else {
    toast.error(data.message);
    
  }
}

catch(err){
  toast.error(err.message);
}


};


  
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-900 dark:text-white'>
    <Title title='Reach out to us' descs='We are waiting for your queries '/>

{/* //now the form part start */}
<form  onSubmit ={ onSubmit} className=' grid sm:grid-cols-2 gap-8 sm:gap-11 max-w-2xl w-full '>
<div className='px-3'>
    <p className='mb-2 text-2xl sm:text-3xl font-medium '>
      Your Name  
    </p>
    <div className='flex pl-3 border border-gray-400 dark:border-gray-700'>
        <img src= {assets.person_icon} alt=""  className='w-10 h-10 mt-2' />
        <input   name="name" type="text" placeholder='Enter your name '  className='w-full p-3  outline-none text-2xl' required />
    </div>
</div>

<div className='px-3'>
    <p className='mb-2 text-2xl sm:text-3xl font-medium'>
      Email Id  
    </p>
    <div className='flex pl-3 border border-gray-400 dark:border-gray-700'>
        <img src= {assets.email_icon} alt=""   className='w-10 h-10 mt-2' />
        <input  name="email" type="email" placeholder='Enter your email '  className='w-full p-3  outline-none text-2xl' required />
    </div>
</div>
<div className='sm:col-span-2 px-3'>
    <p className='mb-2  text-2xl sm:text-3xl font-medium'>
      Message  
    </p>
   <textarea  name="message"  rows={9} placeholder='Enter Your Message' className='w-full p-3 text-xl outline-none rounded-lg border border-gray-300 dark:border-gray-700' required/>
</div>

<button  type='submit' className='w-max  flex gap-2 bg-primary text-white text-xl px-6 py-3 rounded-xl cursor-pointer hover:scale-103 duration-500 '>
    Submit <img src={assets.arrow_icon}  className='w-4 ' alt="" />
</button>
</form>
    </div>
  )
}


export default ContactUs