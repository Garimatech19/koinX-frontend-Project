import React from 'react'
import calpic from '../../assets/calpic.png'

function NewsInsights() {
  return (
    <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-screen md:m-0 sm:m-0 sm:p-4 md:p-[4rem] h-cover bg-white p-[2rem] pl-[4rem] pr-[4rem] lg:p-[4rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]">
    <div>
      <div className='font-bold text-xl pb-6'>About Bitcoin</div>
      <div className='border-b-2 pb-5'>
       <div className='font-bold pb-2'>What is Bitcoin?</div>
       <div>Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and a max supply of 21 M BTC.</div>
      </div>

       <div className='border-b-2'>
         <div className='font-bold pt-4'>Lorem ipsum dolor sit amet</div>
         <div className='pt-2'>Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus.  </div>
         <div  className='pt-3'> Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis ultricies at.</div>
         <div className='pt-3 pb-5'>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui</div>
       </div>

       <div className='border-b-2'>
         <div className='font-bold pt-4 pb-5'>Already Holding Bitcoin?</div>
         <img src={calpic} alt='photo' className='pb-5' />
       </div>

       <div className='pt-4'>
         <div>Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui.</div>
       </div>

        
      
    </div>
  </div>
  )
}

export default NewsInsights
