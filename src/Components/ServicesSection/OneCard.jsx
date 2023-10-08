import PropTypes from 'prop-types'
import { Link } from "react-router-dom"



const OneCard = ({data}) => {



  return (
    <div className="card text-black card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={data.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-red-600">{data.title}</h2>
                <p>{data.description}</p>
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