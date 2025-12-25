import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assests'

// GSAP is loaded via CDN in index.html
// Access it from the global window object

const Companies = ({theme, setTheme}) => {
  const containerRef = useRef(null)
  const leftRowRef = useRef(null)
  const rightRowRef = useRef(null)

  // Company logos array
  const companyLogos = [
    {src: assets.helmet1, alt: 'Helmet 1'},
    {src: assets.helmet2, alt: 'Helmet 2'},
    {src: assets.helmet3, alt: 'Helmet 3'},
    {src: assets.helmet4, alt: 'Helmet 4'},
    {src: assets.kneepad, alt: 'Kneepad'},
    {src: assets.ktm, alt: 'KTM Jacket'}
  ]

  useEffect(() => {
    // Wait for GSAP to load from CDN
    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger

    if (!gsap || !ScrollTrigger) {
      console.warn('GSAP is not loaded yet. Make sure CDN scripts are in index.html')
      return
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger)

    const container = containerRef.current
    const leftRow = leftRowRef.current
    const rightRow = rightRowRef.current

    if (!container || !leftRow || !rightRow) return

    // Store ScrollTrigger instances for cleanup
    let leftTrigger, rightTrigger

    // Small delay to ensure DOM is fully rendered
    const initAnimation = () => {
      // Animation for left row (moving right to left)
      leftTrigger = gsap.to(leftRow, {
        x: -leftRow.scrollWidth / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing based on scroll
        }
      })

      // Animation for right row (moving left to right)
      rightTrigger = gsap.to(rightRow, {
        x: rightRow.scrollWidth / 2,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1, // Smooth scrubbing based on scroll
        }
      })
    }

    // Initialize after a brief delay to ensure images are loaded
    const timeoutId = setTimeout(initAnimation, 100)

    // Cleanup
    return () => {
      clearTimeout(timeoutId)
      if (ScrollTrigger) {
        // Kill specific triggers if they exist
        if (leftTrigger?.scrollTrigger) leftTrigger.scrollTrigger.kill()
        if (rightTrigger?.scrollTrigger) rightTrigger.scrollTrigger.kill()
        // Also kill any remaining triggers
        ScrollTrigger.getAll().forEach(trigger => {
          if (trigger.vars?.trigger === container) {
            trigger.kill()
          }
        })
      }
    }
  }, [])

  return (
    
    <div className='flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 w-full py-10'>
        <h1 className='text-3xl pb-5 dark:text-white sm:text-5xl'>YOUR MUST <span className='bg-linear-to-r from-[#1c22bc] to-[#4D8AEA] bg-clip-text text-transparent'>LOVED</span> ITEMS </h1>
      <div 
        ref={containerRef}
        className='w-full h-30 bg-gray-400 dark:bg-white rounded-4xl overflow-hidden'
      >
        {/* Left row - moves right to left */}
        <div 
          ref={leftRowRef}
          className='flex gap-8 items-center whitespace-nowrap'
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div 
              key={`left-${index}`}
              className='shrink-0 px-8 py-4 flex items-center justify-center'
            >
              <img src={logo.src} alt={logo.alt} className='h-12 w-auto object-contain' />
            </div>
          ))}
        </div>

        {/* Right row - moves left to right */}
        <div 
          ref={rightRowRef}
          className='flex gap-8 items-center whitespace-nowrap mt-4'
        >
          {[...companyLogos, ...companyLogos].map((logo, index) => (
            <div 
              key={`right-${index}`}
              className='shrink-0 px-8 py-4 flex items-center justify-center'
            >
              <img src={logo.src} alt={logo.alt} className='h-12 w-auto object-contain' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies