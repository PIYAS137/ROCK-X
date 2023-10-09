import { HiRocketLaunch, HiGlobeAlt } from "react-icons/hi2";
import { FaHandsHelping } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Context/Context";
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";

const About = () => {

    const {notiSts,logRegSucc}=useContext(AuthContext)
    useEffect(()=>{
        Aos.init({
            duration:1500,
        })
    },[])

    return (
        <div className="my-10 p-2 lg:p-0">
            {notiSts &&
                <div className="max-w-xl z-50 top-20 text-white font-bold text-xl absolute bg-green-600 w-full p-5 rounded-xl">
                    <p>{logRegSucc}</p>
                </div>}
            <div data-aos="fade-left" className="flex flex-col lg:flex-row text-center lg:text-left space-x-10 max-w-3xl mx-auto">
                <div className="flex-1  flex flex-col justify-end">
                    <h1 className="mb-10 lg:mb-0 text-4xl lg:text-5xl font-bold">About Us,</h1>
                </div>
                <div className="flex-1 flex justify-end">
                    <div className="w-[300px] h-[300px] relative bg-gray-400 rounded-lg shadow-xl">
                        <img className=" absolute max-w-xs rounded-lg -bottom-14 w-full -left-5" src='https://i.ibb.co/qBbzPLj/568bf5ef29d0d610020dfe3043488839.jpg' alt="" />
                    </div>
                </div>
            </div>
            <div data-aos="fade-right" className=" text-center lg:text-left mt-20 max-w-3xl mx-auto">
                <p className=" italic text-lg">At ROCKX, we are passionate about music and dedicated to creating unforgettable concert experiences. Our journey began with a shared love for music and a vision to bring the joy of live performances to audiences far and wide. Over the years, we have evolved into a trusted partner for both artists and event organizers, delivering exceptional concerts that leave a lasting impact.</p>
            </div>
            <div data-aos="zoom-in" className="my-20 max-w-3xl mx-auto">
                <h1 className="text-4xl lg:text-5xl text-center font-bold ">Our Starting</h1>
                <p className="text-center text-lg mt-5 italic">Concert management is an exciting and dynamic industry that brings music enthusiasts together to experience the magic of live performances. Our journey in the world of concert management began in the year 2020, a year that posed unprecedented challenges and opportunities for the entertainment sector.</p>
            </div>
            <div data-aos="zoom-out" className="my-20 max-w-3xl mx-auto">
                <h1 className="text-4xl lg:text-5xl text-center font-bold ">We Believe in,</h1>
                <div className="grid grid-cols-3 my-10">
                    <div className="text-xl space-y-3 text-center flex justify-center flex-col items-center my-5">
                        <HiRocketLaunch className="text-5xl" />
                        <h1 className=" font-semibold">Powerful Management</h1>
                    </div>
                    <div className="text-xl space-y-3 text-center flex justify-center flex-col items-center my-5">
                        <HiGlobeAlt className="text-5xl" />
                        <h1 className=" font-semibold">World Wide Support</h1>
                    </div>
                    <div className="text-xl space-y-3 text-center flex justify-center flex-col items-center my-5">
                        <FaHandsHelping className="text-5xl" />
                        <h1 className=" font-semibold">Perfect Work</h1>
                    </div>
                </div>
                <p className="text-center text-lg mt-5 italic">In our pursuit of excellence, we prioritize innovation. We remain at the forefront of technological advancements and event production techniques, continually pushing the boundaries of what is possible in live entertainment. Our commitment to innovation ensures that each concert is a unique and unforgettable experience, tailored to the preferences and expectations of todays discerning audiences.</p>
            </div>
        </div>
    )
}

export default About