import  { useEffect, useState } from 'react'
import OneCard from './OneCard'

const ServicesSection = () => {

    const [cards,setCards]=useState([])

    useEffect(()=>{
      fetch('/src/database/ServicesDatas.json')
        .then(res=>res.json())
        .then(res=>setCards(res))
        .catch(err=>console.log(err))
    },[])

  return (
    <div className="">
        <h1 className="text-center text-4xl py-20 font-bold">Our Services</h1>
        <div className="grid grid-cols-3 gap-10">
          {
            cards.map((one)=><OneCard key={one.id} data={one}/>)
          }
        </div>
    </div>
  )
}

export default ServicesSection