import React, { useState } from 'react'
import Navbar from './component/Navbar'
import ThemeToggleBtn from './component/ThemeToggleBtn'
import HeroSection from './component/HeroSection'
import Companies from './component/Companies'
import Footer from './component/Footer'
import Services from './component/Services'
import OurWork from './component/OurWork'
import Branch from './component/Branch'
import ContactUs from './component/ContactUs'


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative ' >
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection  theme={theme} setTheme={setTheme}/>
<Companies/>
 <Services/>
<OurWork/>
<Branch theme= {theme} setTheme={setTheme}/>
<ContactUs/>
    </div>
  )
}

export default App

