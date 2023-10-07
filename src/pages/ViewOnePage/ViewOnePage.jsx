import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { MyServicesDatas } from "../../database/ServicesDatas";

const ViewOnePage = () => {

  const sid = useParams()
  const navigate = useNavigate()
  const [datas, setDatas] = useState(MyServicesDatas)
  const [data, setData] = useState([]);


  useEffect(() => {
    const temp = datas.filter(one => one.id === parseInt(sid.sid))
    setData(temp[0]);
  }, [])
  console.log(data);


  const handleClickBack=()=>{
    navigate(-1)
  }




  return (
    <div className=" h-screen ">
      <h1 className="py-3 my-10 text-center text-5xl font-bold italic">{data.title}</h1>
      <div className="flex">
        <div className="w-[40%]  text-lg flex justify-center flex-col items-start space-y-3">
          <ul className="">
            <li className="font-bold text-2xl">Our Services for this Heading</li>
            {data.our_services?.map((one, i) => {
              return (
                <li className="text-sm pl-4 my-2" key={i}>{i + 1}. {one}.</li>
              )
            })}
          </ul>
          <p className="font-semibold text-xl">Service Duration : <span className="font-bold">{data.service_duration}</span></p>
          <p className="font-semibold text-xl">Price : <span className="font-bold">${data.price}</span></p>
          <button className="btn bg-orange-500 text-white">Book Now</button>

        </div>
        <div className="w-[60%] ">
          <img className="w-full rounded-lg" src={data.image} alt="" />
        </div>
      </div>
      <p className=" text-xl text-justify py-10">{data.description}</p>

      <div className=" flex justify-center">
      <button onClick={handleClickBack} className="btn block px-5 bg-primary text-white">Go Back</button>
      </div>
    </div>
  )
}

export default ViewOnePage