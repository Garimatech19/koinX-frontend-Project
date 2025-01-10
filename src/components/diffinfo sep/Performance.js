import React from 'react'
import data from '../../assets/data.png'
import Fundamentals from './Fundamentals'

function Performance() {
  return (
    <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-screen md:m-0 sm:m-0 sm:p-4 md:p-[4rem] h-cover bg-white p-[2rem] pl-[4rem] pr-[4rem] lg:p-[4rem] ml-[4rem] mr-[4rem] rounded-2xl mb-[1rem]">
      <div>
        <h1 className='text-xl font-bold mb-6'>Performance</h1>
        <img src={data} alt='photo' />

        <Fundamentals />

      </div>
    </div>
  )
}

export default Performance