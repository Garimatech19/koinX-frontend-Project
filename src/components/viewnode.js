import React, { useEffect, useState } from "react";
import div from "../assets/div.png"
import TradingViewWidget from "./TradingViewWidget";
import axios from 'axios'
import { MdArrowDropUp } from "react-icons/md";
import { Ms } from "react-flags-select";

function Viewnode() {


    const [coinId,serCoinID]=useState("bitcoin");
    const [currency,serCurrency]=useState("usd%2Cinr");
    const [hours_24,serHours_24]=useState(true);
    const [imageurl,setImageurl] = useState("")
    const [rank,setrank] = useState("0")
    const [name,setName] = useState("Bitcoin")
    const [symbol,setsymbol] = useState("BTC")
    const [usd,setUsd] = useState("100000")
    const [inr,setInr] = useState("100000")
    const [change,setChange]  = useState('1.222')
    const [count,setCount]  = useState(true)

    useEffect(() => {

      axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=${currency}&include_24hr_change=${hours_24}`,{})
         .then((response) => {
          const data = response.data.bitcoin;
           setUsd(data.usd);
           setInr(data.inr);
           setChange(`${data.inr_24h_change}`.substring(0, 4));
            console.log(response.data.bitcoin);
         })
         .catch((err)=>{
            console.log(err);
         })

         axios.get(`https://api.coingecko.com/api/v3/search?query=${coinId}`,{})
         .then((response) => {
          const data = response.data.coins[0];
            setImageurl(data.thumb);
            setrank(data.market_cap_rank);
            console.log(data);
         })
         .catch((err)=>{
            console.log(err);
         })
        
         setTimeout(() => {
            setCount(count?false:true)
         }, 1000000000);

      },[count]);


  return (
    <div className="w-[60%]  lg:w-[70%] md:ml-[2rem] md:mr-[2rem] md:w-auto sm:ml-[1rem] sm:mr-[1rem] sm:w-auto md:m-0 sm:m-0 sm:p-4 md:p-[4rem]  h-cover bg-white p-[2rem] pl-[2rem] pr-[2rem] lg:p-[4rem] ml-[4rem] mr-[4rem] mt-[1rem] rounded-2xl mb-[1rem]">
      <div className="border-b-2 mb-2">
         <div className="flex gap-2 mb-[2rem] ">
          <div>
            <img src={imageurl} alt='' />
          </div>
          <div className=" flex gap-2 text-lg font-medium">
            <div className="font-bold text-md ">{name}</div> 
            <div className="text-[#5D667B] font-bold text-sm mt-auto mb-auto">{symbol}</div>
          </div>
          <div className="bg-[#808A9D] rounded-lg text-xs text-white ml-4">
            <div className="pt-auto pd-auto p-2">#Rank {rank}</div> 
          </div>
         </div>

         <div className="flex gap-4 mb-4 ">
          <div className="flex flex-col">
            <div className="font-bold text-xl">
              ${usd}
            </div>
            <div className="font-medium text-sm">
              ₹{inr}
            </div>
          </div>
          <div className="flex gap-5 sm:justify-between">
            <div className="flex bg-[#EBF9F4] h-[50%] p-1 pl-1 pr-2  rounded text-[#14B079]">
            <MdArrowDropUp className="text-lg" /><div className="text-sm">{change}%</div>
            </div>
            <div className="text-[#768396] text-sm">
              (24H)
            </div>
          </div>
         </div>
      </div>
      <div className="font-bold mt-[2rem]">Bitcoin Price Chart (USD)</div>
      <div className="flex justify-center align-middle overflow-y-hidden mt-4">
         <TradingViewWidget/>  
      </div>
    </div>
  );
}

export default Viewnode;
