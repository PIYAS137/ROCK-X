import { Link } from "react-router-dom"

const OneCard = ({data}) => {
  return (
    <div className="card text-black card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={data.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <div className="card-actions justify-end flex justify-between items-center">
                    <span className="font-bold text-xl">Price : $<span>{data.price}</span></span>
                    <Link to={`/services/${data.id}`}><button className="btn btn-primary">View Details</button></Link>
                </div>
            </div>
        </div>
  )
}

export default OneCard