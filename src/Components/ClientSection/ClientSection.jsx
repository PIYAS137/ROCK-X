import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import Aos from 'aos'
import 'aos/dist/aos.css';


const ClientSection = () => {

  useEffect(()=>{
    Aos.init({
        duration:1500,
    })
},[])


  const clients = [
    {
      id: 1,
      name: 'Rafee Rawshony Rizvee',
      text: "You people are doing very great job! The concert was outstanding!",
      image: 'https://i.ibb.co/K5Krx1K/IMG-6035.jpg'
    },
    {
      id: 2,
      name: 'Piyas Mahamude Alif',
      text: "You people are doing very great job! The concert was outstanding!",
      image: 'https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg'
    },
    {
      id: 3,
      name: 'Osman Faruk Mobin',
      text: "You people are doing very great job! The concert was outstanding!",
      image: 'https://i.ibb.co/MCs5Sg8/Whats-App-Image-2023-05-25-at-21-30-48.jpg'
    },
    {
      id: 4,
      name: 'Rafee Rawshony Rizvee',
      text: "You people are doing very great job! The concert was outstanding!",
      image: 'https://i.ibb.co/K5Krx1K/IMG-6035.jpg'
    },
    {
      id: 5,
      name: 'Piyas Mahamude Alif',
      text: "You people are doing very great job! The concert was outstanding!",
      image: 'https://i.ibb.co/0txbDWL/IMG-20210918-234954.jpg'
    }
  ]
  return (
    <div className="" data-aos="zoom-out-down">
      <h1 className="text-center text-4xl lg:text-5xl font-bold pt-40">We Love Our Clients</h1>
      <div className="my-10">
        <Marquee>
        {
          clients.map((one) => {
            return (
              <div className="shadow-lg mx-5 bg-gray-200 p-5 text-center rounded-b-xl flex flex-col justify-center items-center  my-20" key={one.id}>
                <div className="-mt-12">
                  <div className=" bg-white w-20 h-20 p-1 rounded-full mx-auto" >
                    <img className="w-full h-full rounded-full mx-auto object-cover" src={one.image} alt="" />
                  </div>
                  <p className=" text-md mt-2 font-semibold">{one.name}</p>
                  <p className="text-gray-400 text-sm">{one.text}</p>
                </div>
              </div>
            )
          })
        }
        </Marquee>
      </div>
    </div>
  )
}

export default ClientSection