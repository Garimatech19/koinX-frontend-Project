import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import cryptologo from '../assets/cryptologo.png'
import { FaSquareXTwitter,FaYoutube,FaLinkedin,FaSquareInstagram,FaTelegram,FaSquareFacebook,FaAngellist } from 'react-icons/fa6';

function Footer() {
  return (
    <div className='w-full h-cover bg-black realtive pt-[2rem] pb-[2rem] sm:mt-[1rem] md:mt-[1rem]'>
        
        <div className='w-[80%] h-full flex flex-col justify-center items-center m-auto bg-black '>
             <div className=' w-full flex sm:flex-col justify-between items-center'>
                    <img src={footerlogo} alt='photo' />
                    <div className='flex justify-between items-center text-blue-600 gap-6'>
                         <FaSquareXTwitter className='cursor-pointer' />
                         <FaYoutube className='cursor-pointer' />
                         <FaLinkedin className='cursor-pointer' />
                         <FaSquareInstagram className='cursor-pointer' />
                         <FaTelegram className='cursor-pointer' />
                         <FaSquareFacebook className='cursor-pointer' />
                         <FaAngellist className='cursor-pointer' />
                    </div>
             </div>
        </div>

        <div className='w-[80%] sm:mt-3 h-[2px] border border-[#FFFFFF33] shadow-md m-auto'></div>

        <div className=' w-[80%] bg-black text-white flex flex-wrap justify-between items-top m-auto pt-[2rem] pb-[2rem] sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 sm:gap-10'>

            <div className='flex flex-col gap-2 text-xs'>
                <h5 className='font-black'>Crypto Taxes for </h5>
                <a href="#">Individuals and investors</a>
                <a href="#">Tax Professionals and Accountants</a>
                <a href="#">Exchanges and Web3 projects</a>
                 <img src={cryptologo} className='w-[45%] sm:hidden md:hidden h-cover pt-4' alt="" />
            </div>
            <div className='flex flex-col gap-2 text-xs'>
               <h5 className='font-black'>Free Tools</h5>
                <a href="#">Crypto Prices Live</a>
                <a href="#">Crypto Tax Calculator</a>
                <a href="#">Crypto Tax Saving Speculator</a>
                <a href="#">Crypto Profit Calculator</a>
                <a href="#">Crypto Converter</a>
                <a href="#">Crypto Staking ROI Calculator</a>
            </div>
            <div className='flex flex-col gap-2 text-xs'>
              <h5 className='font-black'>Resource Center</h5>
                <a href="#">Crypto Tax Guides</a>
                <a href="#">Dumb Ways To Lose Money</a>
                <a href="#">Crypto Tax Savings Guide </a>
                <a href="#">Blogs</a>
                <a href="#">Crypto Buying Guides</a>
                <a href="#">Crypto Staking Guides</a>
                <a href="#">Crypto Mining Guides</a>
                <a href="#">Crypto Price Predictions</a>
            </div>
            <div className='flex flex-col gap-2 text-xs'>
            <h5 className='font-black'>Help And Support</h5>
                <a href="#">Product Guides</a>
                <a href="#">How To Guides</a>
                <a href="#">Templates </a>
                <a href="#">Contact us</a>
            </div>
            <div className='flex flex-col gap-2 text-xs'>
                <h5 className='font-black'>HCompany</h5>
                <a href="#">About Us</a>
                <a href="#">Backed by</a>
                <a href="#">Media and Press </a>
                <a href="#">Careers</a>
                <a href="#">Security</a>
                <a href="#">Refund Policy</a>
                <a href="#">Brand Assets</a>
                <a href="#">Terms of use</a>
                <a href="#">CPrivacy Policy</a>
            </div>

            <div className='gap-2 hidden sm:block md:block'>
              <img src={cryptologo} className='w-[7rem] h-cover pt-6' alt="" />
            </div>

        </div>

        <div className='w-[80%] h-[2px] border border-[#FFFFFF33] shadow-md m-auto'></div>
      
    </div>
  )
}

export default Footer
