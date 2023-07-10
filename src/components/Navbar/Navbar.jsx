import React, { useEffect, useState } from 'react'
import Navlinks from './Navlinks'
import Searchbar from './Searchbar';
import Button from './Button';
import Hero from '../Hero';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
         window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    {/* <div className='flex flex-row justify-center w-[100%]'>
      <div className='flex items-center flex-col h-[6075px] w-[1900px] relative'> */}

    <header className={` bg-black w-full pt-8 pb-8 h-[12px] lg:h-[15px] duration-500 ease-in-out transition text-white py-5 flex items-center justify-evenly ${scrolled ? "bg-gray-900" : ""}`}>

      <Navlinks />
      <div className='flex gap-10'>
        <Searchbar />
        <Button />
      </div>
    </header>
      
    </>
  )
}

export default Navbar
