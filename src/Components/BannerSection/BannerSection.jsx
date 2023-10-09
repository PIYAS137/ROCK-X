import { Link } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";




const BannerSection = () => {

    useEffect(()=>{
        Aos.init({
            duration:1500,
        })
    },[])


    return (
        <div data-aos="fade-left" className="hero relative rounded-xl overflow-hidden my-10" style={{ backgroundImage: 'url(https://i.ibb.co/SndgNYm/texture-treble-clef-dark-background-isolated-generative-ai.jpg)' }}>
            <img className="z-60 absolute -right-10 bottom-10 w-72" src="https://i.ibb.co/9wxcnQY/Pngtree-pretty-brown-guitar-illustration-4505412.png" alt="" />
            <div className="hero-overlay bg-opacity-80"></div>
            <div className="hero-content text-center text-neutral-content py-40">
                <div className="max-w-md">
                    <h1 className="mb-5 text-4xl lg:text-5xl font-bold">Want to Arrange A Concert ?!</h1>
                    <p className="mb-5">Get ready for an unforgettable night of music and entertainment! We are thrilled to announce our upcoming concert featuring top artists from around the world.</p>
                    <Link to='/services'><button className="btn btn-primary">Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BannerSection