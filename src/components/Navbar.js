import React from 'react'
import logo from '../assets/logo.png'
import { IoMdMenu } from 'react-icons/io';

function Navbar() {
  return (
    <div style={{ zIndex: 5 }} className='w-full sm:pl-[2rem] sm:pr-[2rem] h-[4rem] bg-white border-b border-[#DEDFE2] shadow-wd flex items-center justify-between pl-[4rem] pr-[4rem] fixed top-0'>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='flex justify-around items-center'>
        <div className=' text-black font-medium flex justify-between items-center gap-[1.5rem] sm:hidden md:hidden'>
          <button className=''>Crypto Taxes</button>
          <button>Free Tools</button>
          <button>Resource Center</button>

        </div>
        <button type="button" class=" font-medium text-[#FFFFFF] bg-[#0052FE] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-m px-8 py-1.5 text-center m-auto ml-[4rem] sm:hidden md:hidden">
          Get Started
        </button>
        <IoMdMenu className='hidden text-4xl md:inline-flex sm:inline-flex' />
      </div>
    </div>
  )
}

export default Navbar

