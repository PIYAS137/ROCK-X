import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MyServicesDatas } from "../../database/ServicesDatas";

const ViewOnePage = () => {

  const sid = useParams()
  console.log(sid.sid);

  const [datas, setDatas] = useState(MyServicesDatas)
  const [data, setData] = useState([]);


  useEffect(() => {
    const temp = datas.filter(one => one.id === parseInt(sid.sid))
    setData(temp[0]);
  }, [])
  console.log(data);






  return (
    <div className=" h-screen ">
      <h1 className="py-3 my-5 text-center text-5xl font-bold italic">{data.title}</h1>
      <div className="flex">
        <div className="w-[40%]  text-lg flex justify-center flex-col items-start space-y-3">
          <ul className="">
            <li className="font-bold text-xl">Our Services for this Heading</li>
            {data.our_services?.map((one, i) => {
              return (
                <li className="text-sm pl-4 my-2" key={i}>{i + 1}. {one}.</li>
              )
            })}
          </ul>
          <p className="font-semibold">Service Duration : <span className="font-bold">{data.service_duration}</span></p>
          <p className="font-semibold">Price : <span className="font-bold">${data.price}</span></p>
          <button className="btn">Book Now</button>

        </div>
        <div className="w-[60%] ">
          <img className="w-full rounded-lg" src={data.image} alt="" />
        </div>
      </div>
      <p className=" text-xl py-6">{data.description}</p>
    </div>
  )
}

export default ViewOnePage