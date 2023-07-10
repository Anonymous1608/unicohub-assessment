import React from 'react'
import heroImage from '../assets/image3.png'
import line from '../assets/Line2.png'
import logos from '../assets/Group28.png'
import { BsArrowRightShort }  from 'react-icons/bs'


const Hero = () => {
  return (
    <>
    <div className='text-white flex items-end gap-7 ml-[220px] mt-[93px] min-w-[1288px]'> 
      <div className='flex items-start flex-col gap-[50px] mb-2 relative w-fit'>
        <div className='flex items-start flex-col gap-3 relative w-fit'>
        <h1 className='text-[60px] font-medium mt-[-1px] relative w-[480px] bg-gradient-to-r from-[#FF2DF7] via-[#5200FF] to-[#00F0FF] bg-clip-text text-transparent'>
          AI Marketing.
          </h1>
          <div className='text-[50px] w-[645px] mb-14'>
          Optimized Reach.
          </div>
      </div>
        
        <p className='min-h-[60px] relative w-[715px] tracking-normal text-[30px] mb-16'>
          Our vision is to revolutionize the way brands and <br /> advertisers target, reach
        </p>
        <img className='h-[1px] min-w-[615px] object-cover relative' src={line} alt="image" />

        <div className='flex items-center rounded-full bg-transparent border py-2 px-4 w-[200px] justify-between'>
          <button className='flex items-center ml-6'>
            Get Started
          </button>
          <BsArrowRightShort className='cursor-pointer mr-1' size={30} />
            
        </div>

        </div>
        <img className='ml-[200px]' src={heroImage} alt="" />
        
    </div>

    <div className='flex items-center justify-center mt-16'>
    <img className='mt-16' src={logos} alt="" />
    </div>
    
    </>
  )
}

export default Hero

