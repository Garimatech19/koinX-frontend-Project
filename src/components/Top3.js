import React from 'react'
import {useEffect,useState,useContext} from 'react'
import axios from 'axios'
import { MdArrowDropUp } from "react-icons/md";

function Top3() {
    const [database,setDatabase] = useState([]);
    const [count,setCount] = useState(true);

    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/search/trending',{})
         .then((res)=>{
          const data = res.data.coins.splice(1);
          console.log(data);
          setDatabase(data.slice(0,3));
         })
         .catch((err)=>{
           console.log(err);
         })

         setTimeout(() => {
            setCount(count?false:true);
         }, 100000000);
    
      },[])


  return (
    <div className='bg-white  mr-[4rem] sm:mr-0 md:mr-0 mt-[1rem]  rounded-2xl p-6 sm:p-4'>
        <div className="font-bold text-black text-2xl " >Trending Coins (24h)</div>
        {database.map((items,index) => (
          <div className="flex flex-col  m-1 rounded-lg" key={index}>
          
              <div className=" flex gap-2 justify-between mt-4 font-semibold">
                <div className="flex gap-2">
                <div><img className="h-6 w-6" src={items.item.thumb} alt=""/></div>
                <div>{items.item.name}</div>
                <div>{`(${items.item.symbol})`}</div>
                </div>
                <div className="flex bg-[#EBF9F4] h-[50%] p-1 pl-1 pr-2  rounded text-[#14B079]">
                  <MdArrowDropUp className="text-lg" /><div className="text-xs">{`${items.item.data.price_change_percentage_24h.usd}`.substring(0,4)}%</div>
                </div>
              </div>
          
          </div>
        ))}
    </div>
  )
}

export default Top3
