import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios'
import Carouselele from './diffinfo sep/crousalele'



function MayLike() {
  const [database,setDatabase] = useState([]);
  const [count,setCount] = useState(true);

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/search/trending',{})
     .then((res)=>{
      const data = res.data.coins.splice(1);
      console.log(data);
      setDatabase(data);
     })
     .catch((err)=>{
       console.log(err);
     })
   
     setTimeout(() => {
        setCount(count?false:true);
     }, 100000000);

  },[])
      
  return (
     <div className='pl-[6rem] pr-[6rem] bg-white sm:pl-[3rem] sm:pr-[3rem]'>
         <div className='font-bold text-xl pl-[2rem] pt-[4rem]'>You May Also Like</div>
         <Carouselele database = {database}/>
         <div className='font-bold text-xl pl-[2rem]'>Trending Coins</div>
         <Carouselele  database = {database}/>
     </div>

   )
}

export default MayLike
