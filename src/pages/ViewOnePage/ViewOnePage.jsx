import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { MyServicesDatas } from "../../database/ServicesDatas";
import { AuthContext } from "../../Context/Context";

const ViewOnePage = () => {

  const sid = useParams()
  const navigate = useNavigate()
  const [datas, setDatas] = useState(MyServicesDatas)
  const [data, setData] = useState([]);
  const [toastText, setToastText] = useState('')
  const { notiSts, logRegSucc } = useContext(AuthContext)


  useEffect(() => {
    const temp = datas.filter(one => one.id === parseInt(sid.sid))
    setData(temp[0]);
  }, [])


  const handleClickBack = () => {
    navigate(-1)
  }

  const handleClick = (val) => {
    setToastText("Your apply is submited ! We will contact you as soon as possible !")
    setTimeout(() => {
      setToastText('')
    }, 2000)
  }




  return (
    <div className=" p-2 xl:p-0">
      {notiSts &&
        <div className="max-w-xl z-50 top-20 text-white font-bold text-xl absolute bg-green-600 w-full p-5 rounded-xl">
          <p>{logRegSucc}</p>
        </div>}
      <h1 className="py-3 my-10 text-center text-4xl lg:text-5xl font-bold italic">{data.title}</h1>
      {toastText && <div className="max-w-xl z-50 top-20 text-white text-xl absolute bg-green-600 w-full p-5 rounded-xl">{toastText}</div>}
      <div className="flex flex-col-reverse lg:flex-row">
        <div className=" lg:w-[40%]  text-lg flex justify-center flex-col items-start space-y-3">
          <ul className="block mt-5 lg:mt-0">
            <li className="font-bold text-2xl">Our Services for this Heading</li>
            {data.our_services?.map((one, i) => {
              return (
                <li className="text-sm lg:text-lg pl-4 my-2" key={i}>{i + 1}. {one}.</li>
              )
            })}
          </ul>
            <p className="font-semibold text-xl">Service Duration : <span className="font-bold">{data.service_duration}</span></p>
            <p className="text-center font-semibold text-xl">Price : <span className="font-bold">${data.price}</span></p>
            <button onClick={() => { handleClick(data.title) }} className="btn hover:bg-orange-600 bg-orange-500 text-white">Book Now</button>

        </div>
        <div className="lg:w-[60%] ">
          <img className="w-full rounded-lg" src={data.image} alt="" />
        </div>
      </div>
      <p className=" text-xl text-justify py-10">{data.description}</p>

      <div className=" flex justify-center">
        <button onClick={handleClickBack} className="mb-5 btn block px-5 bg-primary text-white">Go Back</button>
      </div>
    </div>
  )
}

export default ViewOnePage