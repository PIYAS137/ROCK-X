import PropTypes from 'prop-types'
import { Link } from "react-router-dom"
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const OneCard = ({data}) => {

  useEffect(()=>{
    Aos.init({
        duration:1500,
    })
},[])

  return (
    <div className="card text-black card-compact  bg-base-100 shadow-xl" data-aos="fade-right">
            <figure><img src={data.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-600">{data.title}</h2>
                <p>{data.description.split(" ").slice(0,15).join(" ")}...</p>
                <div className="card-actions flex justify-between items-center">
                    <span className="font-bold text-lg">Price : <span className=' text-red-600'>${data.price}</span></span>
                    <Link to={`/services/${data.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
  )
}

OneCard.propTypes={
  data:PropTypes.object
}


export default OneCard