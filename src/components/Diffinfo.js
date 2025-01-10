import React from 'react'
import Sentiments from './diffinfo sep/Sentiments';
import NewsInsights from './diffinfo sep/NewsInsights';
import Tokenomics from './diffinfo sep/Tokenomics';
import Performance from './diffinfo sep/Performance';
import Team from './diffinfo sep/Team';


function Diffinfo() {
    return (
        <div>

<div style={{ zIndex: -1 }}  className=' w-full h-auto bg-[#EFF2F5]  sm:mt-[1rem] '>
                <div className='flex justify-between'>
                <div className="w-[60%]  lg:w-[70%] md:w-full sm:w-full sm:overflow-auto md:overflow-auto sm:p-2 sm:m-0   h-cover p-[1rem] border-b-2 lg:p-[4rem] ml-[4rem] mr-[4rem] mb-[1rem] pb-0 ">
                        <div className='flex justify-between sm:gap-4 sm:overflow-auto '>
                        <a href='#' className='active pb-[1rem] sm:w-full'>Overview</a>
                        <a href='#performance' className=' pb-[1rem]'>Fundamentals</a>
                        <a href='#NewsInsights ' className=' pb-[1rem] min-w-[6.7rem]'>News Insights</a>
                        <a href='#Sentiments' className=' pb-[1rem]'>Sentiments</a>
                        <a href='#Team' className=' pb-[1rem]'>Team</a>
                        <a href='#Sentiments' className=' pb-[1rem]'>Technicals</a>
                        <a href='#Tokenomics' className=' pb-[1rem]'>Tokenomics</a>  
                        </div>
                    </div>
                </div>
            </div>
            
        <div style={{ zIndex: -1 }} id='performance'  className=' w-full h-auto bg-[#EFF2F5]  sm:m-0 md:mt-4 md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto sm:mt-4'>
                <div className='flex justify-between'>
                    <Performance />
                </div>
            </div>


            <div style={{ zIndex: -1 }} id='Sentiments'  className=' w-full h-auto bg-[#EFF2F5]  sm:m-0 md:mt-4 md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto  sm:mt-4'>
                <div className='flex justify-between'>
                <Sentiments />
                </div>
            </div>

            <div style={{ zIndex: -1 }} id='NewsInsights'  className=' w-full h-auto bg-[#EFF2F5]   sm:m-0 md:mt-4 md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto  sm:mt-4'>
                <div className='flex justify-between'>
                <NewsInsights />
                </div>
            </div>

            <div style={{ zIndex: -1 }} id='Tokenomics'  className=' w-full h-auto bg-[#EFF2F5]   sm:m-0 md:mt-4 md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto sm:mt-4'>
                <div className='flex justify-between'>
                <Tokenomics />
                </div>
            </div>

            <div style={{ zIndex: -1 }} id='Team' className=' w-full h-auto bg-[#EFF2F5]   mb-[4rem] sm:m-0 md:mt-4 md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto sm:mt-4 sm:mb-[2rem]'>
                <div className='flex justify-between'>
                <Team />
                </div>
            </div>




        </div>
    )
}

export default Diffinfo;
