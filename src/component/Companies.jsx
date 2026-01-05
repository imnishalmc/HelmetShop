
import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assests'

const Companies = ({theme,setTheme}) => {
  const containerRef = useRef(null)
  const scrollWrapperRef = useRef(null)
  const imagesRef = useRef([])

  useEffect(() => {
    // Check if GSAP and ScrollTrigger are available (loaded from CDN)
    if (typeof window !== 'undefined' && window.gsap && window.ScrollTrigger) {
      const gsap = window.gsap
      const ScrollTrigger = window.ScrollTrigger

      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger)

      if (containerRef.current && scrollWrapperRef.current) {
        // Wait for images to load and calculate scroll width
        const calculateScroll = () => {
          const container = containerRef.current
          const wrapper = scrollWrapperRef.current
          
          if (!container || !wrapper) return

          // Wait for all images to load
          const images = wrapper.querySelectorAll('img')
          let imagesLoaded = 0
          const totalImages = images.length

          const checkImagesLoaded = () => {
            imagesLoaded++
            if (imagesLoaded >= totalImages) {
              performScroll()
            }
          }

          // Check if images are already loaded
          images.forEach(img => {
            if (img.complete) {
              checkImagesLoaded()
            } else {
              img.addEventListener('load', checkImagesLoaded)
              img.addEventListener('error', checkImagesLoaded) // Also proceed if image fails to load
            }
          })

          // If no images, proceed anyway
          if (totalImages === 0) {
            performScroll()
          }

          function performScroll() {
            // Get the visible container width (accounting for padding)
            const containerRect = container.getBoundingClientRect()
            const containerWidth = containerRect.width
            
            // Get the full width of all content including padding
            const wrapperWidth = wrapper.scrollWidth
            
            // Get the width of the last image container
            const lastImageContainer = imagesRef.current[imagesRef.current.length - 1]
            const lastImageWidth = lastImageContainer ? lastImageContainer.offsetWidth : 300 // fallback to 300px
            
            // Calculate scroll distance to fully show the last image
            // Scroll until the last image's right edge aligns with container's right edge
            // Add extra padding (lastImageWidth) to ensure it's fully visible and centered
            const baseScroll = wrapperWidth - containerWidth
            const scrollDistance = Math.max(0, baseScroll + lastImageWidth)

            // Only animate if there's content to scroll
            if (scrollDistance > 0) {
              // Kill any existing ScrollTriggers for this container
              ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.trigger === container || trigger.vars?.trigger === container) {
                  trigger.kill()
                }
              })

              // Create horizontal scroll animation tied to vertical scroll
              gsap.to(wrapper, {
                x: -scrollDistance,
                ease: 'none',
                scrollTrigger: {
                  trigger: container,
                  start: 'top top',
                  end: () => `+=${scrollDistance}`,
                  pin: true,
                  scrub: 1,
                  anticipatePin: 1,
                  invalidateOnRefresh: true, // Recalculate on refresh
                }
              })

              // Also animate each image with fade-in effect
              const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: container,
                  start: 'top top',
                  end: () => `+=${scrollDistance}`,
                  scrub: 1,
                  invalidateOnRefresh: true,
                }
              })

              imagesRef.current.forEach((image, index) => {
                if (image) {
                  tl.fromTo(
                    image,
                    {
                      opacity: 0,
                      scale: 0.8,
                    },
                    {
                      opacity: 1,
                      scale: 1,
                      duration: 10,
                      ease: 'power2.out'
                    },
                    index * 0.1
                  )
                }
              })
            }
          }
        }

        // Calculate after a delay to ensure DOM is ready
        setTimeout(calculateScroll, 200)
        
        // Recalculate on window resize
        const handleResize = () => {
          setTimeout(calculateScroll, 200)
        }
        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
        }
      }

      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      }
    }
  }, [])

  // Array of gear images - using available helmet assets and kneepad
  const gearImages = [
    { src: assets.helmet1, alt: 'Helmet 1' },
    { src: assets.agv, alt: 'agv' },
    { src: assets.helmet3, alt: 'Helmet 3' },
    { src: assets.helmet4, alt: 'Helmet 4' },
    {src:assets.ktm,alt:'ktmjacket '},
    { src: assets.kneepad, alt: 'Knee Pad' },
    { src: assets.gloves, alt: 'gloves' }
  ]

  return (
    <div 
      ref={containerRef}
      className='w-full  py-10 px-10 sm:px-12 lg:px-24 xl:px-40  overflow-hidden dark:text-white '
    >
      <h1 className='text-3xl font-medium max-w-6xl sm:text-[43px] xl:text-[70px]  px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 mt-8 sm:mt-12 md:mt-16 lg:mt-20 ml-4 sm:ml-6 md:ml-8 lg:ml-[120px] xl:ml-[150px] mb-8 sm:mb-12' >
        YOUR MOST <span className='bg-gradient-to-r from-[#1c22bc] to-[#4D8AEA] bg-clip-text text-transparent'>LOVED</span> ITEMS
      </h1>
      <div className='max-w-full mx-auto overflow-hidden'>
        <div 
          ref={scrollWrapperRef}
          className='flex flex-nowrap gap-2 sm:gap-3 md:gap-4 lg:gap-4 items-center min-h-[220px] sm:min-h-[280px] md:min-h-[340px] lg:min-h-[400px]'
        >
          {gearImages.map((gear, index) => (
            <div
              key={index}
              ref={el => imagesRef.current[index] = el}
              className='shrink-0 bg-gray-300 flex items-center justify-center rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 '
            >
              <img 
                src={gear.src} 
                alt={gear.alt}
                className='w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-contain drop-shadow-lg'
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Companies
