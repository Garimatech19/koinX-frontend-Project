import React from 'react'
import sandeep from '../../assets/sandeep.png'
import sandeep1 from '../../assets/sandeep1.png'
import sandeep2 from '../../assets/sandeep2.png'

function Team() {
  return (
    <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-screen md:m-0 sm:m-0 sm:p-4 md:p-[4rem] h-cover bg-white p-[3rem] pl-[4rem] pr-[4rem] lg:p-[4rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]">
    <div>
      <div className='font-bold text-xl mb-4'> Team </div>
      <div className='mb-6'>Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.</div>
      <div className='flex flex-col gap-4'>
      <div className='flex  bg-[#E8F4FD] p-4 rounded gap-[2rem] items-center sm:flex-col'>
        <div className='w-[40%] flex flex-col'>
          <img src={sandeep} alt='photo'/>
          <div className='text-center mt-3' >John Smith</div>
          <div className='text-xs text-center'>Designation here</div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</div> 
      </div>

      <div className='flex  bg-[#E8F4FD] p-4 rounded gap-[2rem] items-center sm:flex-col'>
        <div className='w-[40%] flex flex-col'>
          <img src={sandeep1} alt='photo' / >
          <div className='text-center mt-3'>Elina Williams</div>
          <div className='text-xs text-center'>Designation here</div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</div> 
      </div>

      <div className='flex  bg-[#E8F4FD] p-4 rounded gap-[2rem] items-center sm:flex-col'>
        <div className='w-[40%] flex flex-col'>
          <img src={sandeep2} alt='photo'/>
          <div className='text-center mt-3'>John Smith</div>
          <div className='text-xs text-center'>Designation here</div>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu</div> 
      </div>
        
      
    </div>
    </div>
  </div>
  )
}

export default Team
