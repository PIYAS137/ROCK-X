import  { useState } from 'react'
import OneCard from './OneCard'
import { MyServicesDatas } from '../../database/ServicesDatas'

const ServicesSection = () => {

    const [cards,setCards]=useState(MyServicesDatas)

    

  return (
    <div className="p-2 xl:p-0">
        <h1 className="text-center text-4xl lg:text-5xl py-20 font-bold">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            cards.map((one)=><OneCard key={one.id} data={one}/>)
          }
        </div>
    </div>
  )
}

export default ServicesSection