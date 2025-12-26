import React, { useState } from 'react'
import Navbar from './component/Navbar'
import ThemeToggleBtn from './component/ThemeToggleBtn'
import HeroSection from './component/HeroSection'
import Companies from './component/Companies'
import Footer from './component/Footer'


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light')
  return (
    <div className='dark:bg-black relative ' >
      <Navbar theme={theme} setTheme={setTheme} />
      <HeroSection  theme={theme} setTheme={setTheme}/>
<Companies/>
      <Footer/>
    </div>
  )
}

export default App

