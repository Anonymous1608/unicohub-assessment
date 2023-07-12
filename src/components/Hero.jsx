import React from 'react'



const Hero = () => {
  return (

    <div className='w-[75%] mx-auto my-12 md:my-24'> 
      <div className='flex flex-col-reverse md:flex-row justify-evenly items-center'>
        <div className='flex flex-col h-full max-w-[715px] my-5 md:my-0'>
        <h1 className='md:text-7xl text-5xl mb-0 font-medium  text-center py-3 md:text-left bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent'>
          AI Marketing.
          </h1>
          <h1 className='md:text-[60px] text-[42px] text-white text-center md:text-left mb-10 font-medium'>
          Optimized Reach.
          </h1>
    
        <p className='md:text-2xl text-gray-400 text-xl text-center md:text-left'>
          Our vision is to revolutionize the way brands and <br /> advertisers target, reach
        </p>
        <img className='mt-10 mb-8' src='Line2.png' alt="image" />

          <button className='inline-flex get-started lg:w-[42%] md:w-2/3 items-center justify-center hover:justify-evenly h-16 px-10 py-0 text-xl font-semibold text-center text-gray-200 no-underline align-middle bg-transparent rounded-full cursor-pointer select-none hover:text-white hover:border-white focus:shadow-xs focus:no-underline mt-8'>
            <p className=''>Get Started</p>
            <span><img src='Vector.svg' alt="Vector.svg" className="w-8 h-7 ml-5" ></img></span>
          </button>

          </div>

          <div className='self-center'>
              <img src='image3.png' alt="hero" className='h-[300px] md:h-auto md:w-auto' />
          </div>
      
        
    </div>
  </div>
    
  
  )
}

export default Hero

