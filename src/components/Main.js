import React from 'react'
import TaxCalculator from './viewnode'
import Getstarted from './Getstarted'

function Main() {
  return (
    <div style={{ zIndex: -1 }}  className=' w-full h-auto bg-[#EFF2F5]  mt-[5rem] sm:mt-[4.2rem] '>
      <div className='flex justify-between sm:flex-col md:flex-col'>
       <TaxCalculator />
       <div  className='w-auto sm:hidden md:hidden'> 
       <Getstarted />
       </div>
      </div>

      

    </div>
  )
}

export default Main
