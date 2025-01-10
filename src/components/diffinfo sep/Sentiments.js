import React from 'react'
import { FaCircleInfo } from "react-icons/fa6";
import analyst from "../../assets/analyst.png"
import book from "../../assets/book.png"
import growth from "../../assets/growth.png"
import rating from "../../assets/rating.png"

function Sentiments() {
  return (
    <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-auto md:m-0 sm:m-0 sm:p-4 md:p-[4rem] h-cover bg-white p-[4rem] pl-[4rem] pr-[4rem] lg:p-[4rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]">
    <div>
     <div className='font-bold text-xl'>Sentiment</div>
     <div>
       <div className='flex gap-4 mt-4'>
        <h1 className='font-bold'>Key Events</h1>
        <FaCircleInfo className='mt-auto mb-auto'/>
       </div>

       <div className='flex gap-6 pt-2 mt-4 sm:flex-col'>
          <div className='flex gap-2 bg-[#E8F4FD] p-4 rounded-lg'>
             <img src={book} alt='photo' className='w-[3rem] h-[3rem]'/>
             <div>
                <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
             </div>
          </div>
          <div className='flex gap-2 bg-[#EBF9F4] p-4 rounded-lg'>
             <img src={growth} alt='photo' className='w-[3rem] h-[3rem]'/>
             <div>
                <h1 className='font-bold'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h1>
                <p>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra 
                    in a adipisinc metus quis del</p>
             </div>
          </div>
       </div>
     </div>

     <div className=' pb-6'>
       <div className='flex gap-4 mt-6 mb-6 '>
        <h1 className='font-bold'>Analyst Estimates</h1>
        <FaCircleInfo  className='mt-auto mb-auto '/>
       </div>
       <img src={analyst} alt='photo' />
     </div>  
    </div>
  </div>
  )
}

export default Sentiments
