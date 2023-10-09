import { useEffect, useState } from "react"
import { galleryDatas } from "../../database/GalleryDatas";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css';

const GallerySection = () => {

    const [seeAll, setSeeAll] = useState(6);
    const [photos, setPhotos] = useState(galleryDatas)



    const handleSeeAll = () => {
        setSeeAll(photos.length)
    }

    const handleSeeLess = () => {
        setSeeAll(6)
    }
    useEffect(()=>{
        Aos.init({
            duration:1500,
        })
    },[])


    return (
        <div>
            <h1 className="text-center text-4xl lg:text-5xl py-20 font-bold">Discover Our Works</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    photos.slice(0, seeAll).map(one => {
                        return (
                            <div key={one.id} data-aos="flip-up">
                                <Link to={`/gallery/${one.id}`}>
                                    <div style={{ backgroundImage: `url(${one.img})` }}
                                        className="h-[300px] bgx rounded-lg">
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-center mt-5">
                {seeAll === 6 ? <button onClick={handleSeeAll} className="btn btn-primary">See All</button> : <button onClick={handleSeeLess} className="btn btn-primary">See Less</button>}
            </div>
        </div>
    )
}

export default GallerySection